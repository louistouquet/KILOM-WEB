from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'contact@kilom.fr')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactFormRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactFormResponse(BaseModel):
    status: str
    message: str
    email_id: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def send_contact_email(request: ContactFormRequest):
    """
    Send contact form email via Resend.
    The email is sent FROM Resend's default sender TO contact@kilom.fr
    with reply-to set to the user's email.
    """
    
    # Build HTML email content
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #0D0D0E; padding: 30px; border-radius: 12px;">
            <h1 style="color: #F1C086; margin: 0 0 20px 0; font-size: 24px;">
                Nouveau message de contact - KILOM
            </h1>
            
            <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="color: #ffffff; margin: 0 0 10px 0;">
                    <strong style="color: #F1C086;">Nom:</strong> {request.name}
                </p>
                <p style="color: #ffffff; margin: 0 0 10px 0;">
                    <strong style="color: #F1C086;">Email:</strong> {request.email}
                </p>
                <p style="color: #ffffff; margin: 0;">
                    <strong style="color: #F1C086;">Sujet:</strong> {request.subject}
                </p>
            </div>
            
            <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px;">
                <p style="color: #F1C086; margin: 0 0 10px 0; font-weight: bold;">Message:</p>
                <p style="color: #ffffff; margin: 0; line-height: 1.6; white-space: pre-wrap;">{request.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                    Ce message a été envoyé depuis le formulaire de contact de kilom.fr
                </p>
            </div>
        </div>
    </div>
    """
    
    params = {
        "from": "KILOM Contact <onboarding@resend.dev>",
        "to": [CONTACT_EMAIL],
        "reply_to": request.email,
        "subject": f"[KILOM] {request.subject}",
        "html": html_content
    }
    
    try:
        # Run sync SDK in thread to keep FastAPI non-blocking
        email_response = await asyncio.to_thread(resend.Emails.send, params)
        
        logger.info(f"Email sent successfully to {CONTACT_EMAIL} from {request.email}")
        
        # Store contact in database for records
        contact_record = {
            "id": str(uuid.uuid4()),
            "name": request.name,
            "email": request.email,
            "subject": request.subject,
            "message": request.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email_response.get("id") if isinstance(email_response, dict) else str(email_response)
        }
        await db.contact_messages.insert_one(contact_record)
        
        return ContactFormResponse(
            status="success",
            message="Votre message a été envoyé avec succès. Nous vous répondrons sous 24h.",
            email_id=email_response.get("id") if isinstance(email_response, dict) else str(email_response)
        )
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail=f"Erreur lors de l'envoi du message. Veuillez réessayer ou nous contacter directement à {CONTACT_EMAIL}"
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()