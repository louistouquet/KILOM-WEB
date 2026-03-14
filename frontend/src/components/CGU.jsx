import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const CGU = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0E] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6">
            <FileText className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-gold">Légal</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Conditions Générales
            <br />
            <span className="gradient-text">d'Utilisation</span>
          </h1>
          <p className="font-body text-white/60">Dernière mise à jour : 14 mars 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
        >
          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">1. Objet et Nature du Service</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de l'application mobile KILOM.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM est un outil d'assistance administrative automatisant le calcul des indemnités kilométriques via l'analyse de votre calendrier professionnel. <strong>L'Application ne se substitue en aucun cas à un expert-comptable ou à un conseiller fiscal.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Utilisation acceptable</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              En utilisant KILOM, vous vous engagez à :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Fournir des informations exactes concernant votre véhicule (CV fiscaux, motorisation).</li>
              <li>Ne pas utiliser l'application pour générer de fausses déclarations fiscales.</li>
              <li>Vérifier systématiquement l'exactitude des trajets avant de les exporter.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Limitation de responsabilité (CLAUSE ESSENTIELLE)</h2>
            <ul className="font-body text-white/80 leading-relaxed space-y-4 list-disc list-inside ml-4">
              <li><strong>Technologies tierces :</strong> KILOM utilise l'Intelligence Artificielle (Google Gemini) pour analyser le contexte des événements, et des services de cartographie (Mapbox) pour le calcul des distances. Ces technologies peuvent comporter des marges d'erreur (ex: mauvaise interprétation d'une adresse).</li>
              <li><strong>Obligation de vérification :</strong> Il incombe à l'utilisateur de vérifier l'exactitude des adresses, des distances calculées et des montants générés avant toute validation.</li>
              <li><strong>Responsabilité fiscale :</strong> L'utilisateur est le seul et unique responsable des déclarations transmises à l'administration fiscale, à l'URSSAF ou à son employeur. L'éditeur de KILOM ne saurait être tenu responsable en cas de redressement fiscal, de rejet de notes de frais, de pénalités ou d'erreurs déclaratives.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Propriété intellectuelle</h2>
            <p className="font-body text-white/80 leading-relaxed">
              L'ensemble des éléments de l'application KILOM (code source, algorithmes d'analyse, design, logo) est la propriété exclusive de son éditeur. L'abonnement vous confère un droit d'usage personnel et non cessible. Toute reproduction ou tentative de rétro-ingénierie (reverse-engineering) est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Droit applicable et Litiges</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Les présentes CGU sont régies par le droit français. En cas de litige relatif à leur interprétation ou leur exécution, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :{' '}
              <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">
                contact@kilom.fr
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CGU;
