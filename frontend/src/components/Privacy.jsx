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
          <p className="font-body text-white/60">Dernière mise à jour : 14 février 2025</p>
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
              KILOM SAS accorde une importance primordiale à la protection de vos données personnelles. 
              Cette politique de confidentialité explique quelles données nous collectons, comment nous 
              les utilisons, et vos droits en tant qu'utilisateur conformément au Règlement Général sur 
              la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Responsable du traitement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Le responsable du traitement des données est :
            </p>
            <div className="font-body text-white/80 leading-relaxed ml-4">
              <p><strong>KILOM SAS</strong></p>
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
              <p>Email : <a href="mailto:dpo@kilom.fr" className="text-gold hover:underline">dpo@kilom.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Données collectées</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous collectons les catégories de données suivantes :
            </p>
            
            <h3 className="font-heading text-xl text-white mb-3 mt-6">3.1 Données d'identification</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">3.2 Données de calendrier</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Événements de votre calendrier professionnel (titre, lieu, date, heure)</li>
              <li>Connexion OAuth avec votre fournisseur de calendrier (Google, Outlook, etc.)</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">3.3 Données de déplacement</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Adresses de départ et d'arrivée</li>
              <li>Distances calculées</li>
              <li>Dates et heures des trajets</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">3.4 Données de paiement</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Informations de facturation (traitées par notre prestataire de paiement sécurisé)</li>
              <li>Historique des transactions</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">3.5 Données techniques</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Adresse IP</li>
              <li>Type de navigateur et système d'exploitation</li>
              <li>Données de connexion et d'utilisation du service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Finalités du traitement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Fournir et améliorer le service KILOM</li>
              <li>Identifier automatiquement vos déplacements professionnels</li>
              <li>Calculer les distances de vos trajets</li>
              <li>Générer vos exports comptables</li>
              <li>Gérer votre compte et votre abonnement</li>
              <li>Vous envoyer des communications importantes relatives au service</li>
              <li>Assurer la sécurité et prévenir la fraude</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Base légale du traitement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous traitons vos données sur les bases légales suivantes :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Exécution du contrat :</strong> Pour fournir le service KILOM</li>
              <li><strong>Consentement :</strong> Pour l'accès à votre calendrier</li>
              <li><strong>Intérêt légitime :</strong> Pour améliorer le service et assurer la sécurité</li>
              <li><strong>Obligation légale :</strong> Pour la facturation et la comptabilité</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Partage des données</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Prestataires de services :</strong> Mapbox (calcul d'itinéraires), hébergement cloud (AWS/Google Cloud)</li>
              <li><strong>Processeurs de paiement :</strong> Pour gérer les transactions (Stripe)</li>
              <li><strong>Autorités légales :</strong> Si requis par la loi</li>
            </ul>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              Tous nos prestataires sont contractuellement tenus de respecter le RGPD et de protéger vos données.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Durée de conservation</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous conservons vos données :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Données de compte :</strong> Pendant la durée de votre abonnement + 3 ans après résiliation</li>
              <li><strong>Données de trajets :</strong> Pendant la durée de votre abonnement + 3 ans (obligations fiscales)</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligations légales)</li>
              <li><strong>Données techniques :</strong> Maximum 13 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">8. Sécurité des données</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité strictes :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Chiffrement des données au repos</li>
              <li>Authentification sécurisée et gestion des accès</li>
              <li>Sauvegardes régulières et plans de reprise d'activité</li>
              <li>Audits de sécurité réguliers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">9. Vos droits</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Supprimer vos données (« droit à l'oubli »)</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
            </ul>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              Pour exercer vos droits, contactez-nous à :{' '}
              <a href="mailto:dpo@kilom.fr" className="text-gold hover:underline">dpo@kilom.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">10. Cookies</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Nous utilisons des cookies essentiels au fonctionnement du service et des cookies analytiques 
              (avec votre consentement) pour améliorer l'expérience utilisateur. Vous pouvez gérer vos 
              préférences cookies à tout moment depuis les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">11. Transferts internationaux</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Vos données sont hébergées dans l'Union Européenne. En cas de transfert hors UE, 
              nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types de la Commission européenne).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">12. Modifications</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Cette politique de confidentialité peut être modifiée. Nous vous notifierons de tout 
              changement substantiel par email 30 jours avant son entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">13. Réclamation</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
              auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">14. Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question relative à cette politique :{' '}
              <a href="mailto:dpo@kilom.fr" className="text-gold hover:underline">dpo@kilom.fr</a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
