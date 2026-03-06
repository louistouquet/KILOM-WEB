import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
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
            <Shield className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-gold">Confidentialité</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Politique de
            <br />
            <span className="gradient-text">Confidentialité</span>
          </h1>
          <p className="font-body text-white/60">Dernière mise à jour : 6 mars 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
        >
          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">1. Introduction</h2>
            <p className="font-body text-white/80 leading-relaxed">
              La présente politique détaille comment l'application <strong>[NOM DE L'APP]</strong> collecte et traite vos données personnelles. 
              En utilisant l'Application, vous acceptez ces conditions. Notre priorité est de minimiser la collecte de données 
              au strict nécessaire pour automatiser vos déclarations d'indemnités kilométriques, dans le respect du Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Données collectées et Permissions</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Pour fournir le service de calcul d'indemnités kilométriques, l'Application requiert les accès suivants :
            </p>
            
            <h3 className="font-heading text-xl text-white mb-3 mt-6">A. Accès au Calendrier (Sensible)</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Nature des données :</strong> Titres, descriptions, lieux, dates et horaires des événements de votre calendrier.</li>
              <li><strong>Finalité stricte :</strong> Ces données sont analysées pour identifier vos déplacements professionnels et calculer automatiquement les distances parcourues.</li>
              <li><strong>Traitement :</strong> Les données du calendrier sont transmises à notre serveur sécurisé uniquement lorsque vous lancez une synchronisation ou une analyse.</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">B. Données de Véhicule</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Nature :</strong> Puissance fiscale (CV), type de motorisation, et type de véhicule.</li>
              <li><strong>Finalité :</strong> Application du barème fiscal officiel de l'administration pour le calcul du montant exact des indemnités.</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">C. Identité et Contact</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Adresse email (pour l'authentification et l'envoi des exports comptables).</li>
              <li>Adresses favorites (Domicile, Bureau) pour le calcul des trajets récurrents.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Utilisation de l'Intelligence Artificielle (IA)</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'Application utilise l'API <strong>Google Gemini</strong> (fournie par Google Cloud) pour l'analyse sémantique de vos événements (par exemple, distinguer un rendez-vous client d'un rendez-vous personnel).
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Confidentialité IA :</strong> Les données soumises à l'IA sont traitées de manière éphémère pour l'analyse.</li>
              <li><strong>Pas d'entraînement :</strong> Conformément aux conditions "Enterprise" de Google Cloud, vos données ne sont pas utilisées pour entraîner les modèles publics d'intelligence artificielle de Google.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Partage des données (Sous-traitants)</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Vos données ne sont jamais vendues. Elles sont partagées uniquement avec nos prestataires techniques agissant en tant que sous-traitants, strictement nécessaires au fonctionnement du service :
            </p>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4 space-y-3">
              <p className="font-body text-white/80"><strong>Supabase :</strong> Hébergement de la base de données ([LIEU SERVEUR SUPABASE, ex: UE]).</p>
              <p className="font-body text-white/80"><strong>Google Cloud (Cloud Run) :</strong> Serveur de calcul et backend ([LIEU SERVEUR CLOUD RUN]).</p>
              <p className="font-body text-white/80"><strong>Mapbox :</strong> Calcul des distances et géocodage (États-Unis).</p>
              <p className="font-body text-white/80"><strong>Google Gemini (Vertex AI) :</strong> Analyse sémantique des événements.</p>
              <p className="font-body text-white/80"><strong>Adapty :</strong> Gestion des abonnements et des achats in-app (États-Unis).</p>
              <p className="font-body text-white/80"><strong>Resend :</strong> Envoi des emails transactionnels et exports (États-Unis).</p>
            </div>
            <p className="font-body text-white/60 text-sm mt-4">
              *Certains de nos prestataires étant situés hors de l'Union Européenne, les transferts de données sont sécurisés par des Clauses Contractuelles Types (CCT) ou des mécanismes d'adéquation reconnus.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Conservation, Contrôle et Suppression des données</h2>
            
            <h3 className="font-heading text-xl text-white mb-3">Durée de conservation</h3>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous conservons vos données (trajets, historique, véhicule) tant que votre abonnement est actif.
            </p>

            <h3 className="font-heading text-xl text-white mb-3">Suppression en fin d'abonnement (Politique stricte)</h3>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Si vous résiliez votre abonnement :
            </p>
            <ol className="font-body text-white/80 leading-relaxed space-y-2 list-decimal list-inside ml-4 mb-4">
              <li>Vos données sont conservées pendant une <strong>période de grâce de 30 jours</strong> pour vous permettre de changer d'avis et de vous réabonner.</li>
              <li>Passé ce délai de 30 jours sans réactivation, <strong>l'intégralité de vos données (trajets, adresses, véhicule) est définitivement et irréversiblement supprimée</strong> de nos serveurs.</li>
            </ol>

            <h3 className="font-heading text-xl text-white mb-3">Contrôle de vos données et Droit à l'oubli</h3>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Conformément au RGPD et aux exigences d'Apple et de Google, vous disposez d'un contrôle total sur vos données. Vous pouvez effectuer les actions suivantes à tout moment depuis l'Application, en vous rendant dans <strong>Profil &gt; Paramètres &gt; Données</strong> :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Supprimer les données de trajet :</strong> Cette action efface uniquement l'historique de vos trajets enregistrés et calculés, tout en conservant votre compte et votre abonnement actifs.</li>
              <li><strong>Supprimer mon compte :</strong> Cette action entraîne la suppression immédiate, définitive et irréversible de votre compte, de votre profil et de l'intégralité de vos données (trajets, paramètres, véhicule), sans aucun délai de carence.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Sécurité des données</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Toutes les communications entre l'Application et nos serveurs sont chiffrées (HTTPS/SSL). 
              L'accès à vos données est protégé par notre système d'authentification interne sécurisé. 
              Vos mots de passe et clés d'accès sont chiffrés et ne sont jamais stockés en clair.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Contact et Droits RGPD</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données. 
              Pour toute question ou pour exercer vos droits, contactez le responsable du traitement à l'adresse suivante :
            </p>
            <div className="mt-4 font-body text-white/80">
              <p>Email : <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
