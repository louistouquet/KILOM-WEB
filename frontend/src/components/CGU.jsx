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
          <p className="font-body text-white/60">Dernière mise à jour : 14 février 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
        >
          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">1. Objet</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du service KILOM, 
              une plateforme SaaS de gestion automatisée des indemnités kilométriques.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              En utilisant KILOM, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, 
              veuillez ne pas utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Description du service</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM est un service de gestion automatisée des indemnités kilométriques qui permet :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>La synchronisation avec votre calendrier professionnel</li>
              <li>L'identification automatique des déplacements professionnels par intelligence artificielle</li>
              <li>Le calcul précis des distances via l'API Mapbox</li>
              <li>La génération d'exports comptables conformes à la législation fiscale française</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Inscription et compte utilisateur</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Pour utiliser KILOM, vous devez créer un compte en fournissant des informations exactes et à jour. 
              Vous êtes responsable de la confidentialité de vos identifiants de connexion.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Vous vous engagez à nous notifier immédiatement toute utilisation non autorisée de votre compte.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Plans et tarification</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM propose trois plans :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Demo (Gratuit)</strong> : Accès limité à 10 trajets par mois</li>
              <li><strong>Solo (89€/an)</strong> : Accès complet pour un utilisateur</li>
              <li><strong>Duo (139€/an)</strong> : Accès complet pour deux utilisateurs</li>
            </ul>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              Les tarifs sont indiqués en euros TTC et sont susceptibles d'être modifiés. 
              Toute modification sera notifiée aux utilisateurs avec un préavis de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Paiement et renouvellement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les abonnements sont facturés annuellement. Le renouvellement est automatique sauf résiliation 
              de votre part avant la date d'échéance.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Nous offrons une garantie « satisfait ou remboursé » de 30 jours pour tout nouvel abonnement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Utilisation acceptable</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Vous vous engagez à utiliser KILOM conformément aux lois en vigueur et à ne pas :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Utiliser le service à des fins frauduleuses ou illégales</li>
              <li>Tenter d'accéder aux systèmes ou données de manière non autorisée</li>
              <li>Partager votre compte avec des tiers non autorisés</li>
              <li>Utiliser le service pour générer de fausses déclarations fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Propriété intellectuelle</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Tous les droits de propriété intellectuelle relatifs à KILOM (marque, logo, code source, design) 
              sont la propriété exclusive de KILOM SAS. Toute reproduction ou utilisation non autorisée 
              est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">8. Limitation de responsabilité</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM est fourni « en l'état ». Nous mettons tout en œuvre pour assurer la fiabilité du service, 
              mais ne garantissons pas son fonctionnement sans interruption ni erreur.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM ne peut être tenu responsable des décisions fiscales ou comptables prises sur la base 
              des données générées. Il est de votre responsabilité de vérifier l'exactitude des informations 
              avant toute déclaration fiscale.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">9. Résiliation</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Vous pouvez résilier votre abonnement à tout moment depuis votre espace personnel. 
              La résiliation prendra effet à la fin de la période d'abonnement en cours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">10. Modifications des CGU</h2>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront 
              notifiés par email de toute modification substantielle 30 jours avant son entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">11. Droit applicable</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation 
              ou leur exécution relève de la compétence exclusive des tribunaux de Paris.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">12. Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :{' '}
              <a href="mailto:legal@kilom.fr" className="text-gold hover:underline">
                legal@kilom.fr
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CGU;
