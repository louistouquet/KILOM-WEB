import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const CGV = () => {
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
            <ShoppingCart className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-gold">Conditions de vente</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Conditions Générales
            <br />
            <span className="gradient-text">de Vente</span>
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
            <h2 className="font-heading text-2xl text-gold mb-4">1. Objet et champ d'application</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              KILOM SAS et ses clients concernant la vente d'abonnements au service KILOM.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Toute commande implique l'acceptation sans réserve des présentes CGV. Ces conditions prévalent 
              sur tout autre document.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Vendeur</h2>
            <div className="font-body text-white/80 leading-relaxed space-y-2">
              <p><strong>KILOM SAS</strong></p>
              <p>Société par Actions Simplifiée au capital de 10 000 €</p>
              <p>Siège social : 123 Avenue des Champs-Élysées, 75008 Paris</p>
              <p>RCS Paris B 123 456 789</p>
              <p>N° TVA intracommunautaire : FR 12 123456789</p>
              <p>Email : <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
              <p>Téléphone : +33 1 23 45 67 89</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Offres et tarifs</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM propose trois formules d'abonnement :
            </p>
            
            <h3 className="font-heading text-xl text-white mb-3">3.1 Plan Demo (Gratuit)</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li>Accès limité à 10 trajets par mois</li>
              <li>Fonctionnalités de base</li>
              <li>Support par email</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3">3.2 Plan Solo - 89€ TTC/an</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li>Synchronisation calendrier illimitée</li>
              <li>Détection IA avancée (trajets illimités)</li>
              <li>Calcul de distance précis (Mapbox)</li>
              <li>Export comptable certifié</li>
              <li>Calendrier dédié KILOM</li>
              <li>Édition et ajout manuel de trajets</li>
              <li>Support prioritaire</li>
            </ul>

            <h3 className="font-heading text-xl text-white mb-3">3.3 Plan Duo - 139€ TTC/an</h3>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li>Toutes les fonctionnalités du plan Solo pour 2 utilisateurs</li>
              <li>Gestion multi-comptes</li>
              <li>Tableau de bord partagé</li>
              <li>Exports séparés ou groupés</li>
              <li>Support prioritaire premium</li>
            </ul>

            <p className="font-body text-white/80 leading-relaxed mt-6">
              Les prix sont indiqués en euros toutes taxes comprises (TTC). KILOM SAS se réserve le droit de 
              modifier ses tarifs à tout moment, mais s'engage à appliquer les tarifs en vigueur au moment de 
              la commande.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Commande et souscription</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              La souscription à un abonnement KILOM s'effectue en ligne sur le site kilom.fr selon le 
              processus suivant :
            </p>
            <ol className="font-body text-white/80 leading-relaxed space-y-2 list-decimal list-inside ml-4">
              <li>Création d'un compte utilisateur</li>
              <li>Choix de la formule d'abonnement</li>
              <li>Vérification du récapitulatif de commande</li>
              <li>Acceptation des présentes CGV</li>
              <li>Paiement sécurisé</li>
              <li>Confirmation de commande par email</li>
            </ol>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              La validation de la commande vaut acceptation des présentes CGV et engagement de paiement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Modalités de paiement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Le paiement s'effectue en ligne par carte bancaire (Visa, Mastercard, American Express) via 
              notre prestataire de paiement sécurisé Stripe.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les abonnements sont facturés annuellement. Le paiement est exigible immédiatement à la souscription. 
              L'accès au service est activé dès réception du paiement.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Les données bancaires ne sont pas conservées par KILOM SAS mais uniquement par notre prestataire 
              de paiement certifié PCI-DSS.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Renouvellement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les abonnements sont tacitement reconductibles pour une période égale à la période d'engagement 
              initiale (12 mois), sauf résiliation par le client avant la date d'échéance.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Un email de rappel est envoyé 30 jours avant la date de renouvellement automatique.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Le client peut désactiver le renouvellement automatique à tout moment depuis son espace personnel.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Droit de rétractation</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut 
              être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support 
              matériel dont l'exécution a commencé avec l'accord préalable exprès du consommateur.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              En acceptant les présentes CGV et en activant votre compte KILOM, vous reconnaissez que 
              l'exécution du service commence immédiatement et renoncez expressément à votre droit de rétractation.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Toutefois, KILOM SAS offre une <strong>garantie « Satisfait ou Remboursé »</strong> de 30 jours 
              pour tout nouvel abonnement. Si vous n'êtes pas satisfait, contactez-nous à{' '}
              <a href="mailto:refund@kilom.fr" className="text-gold hover:underline">refund@kilom.fr</a> pour 
              obtenir un remboursement intégral.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">8. Résiliation</h2>
            <h3 className="font-heading text-xl text-white mb-3 mt-6">8.1 Résiliation par le client</h3>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Le client peut résilier son abonnement à tout moment depuis son espace personnel. La résiliation 
              prendra effet à la fin de la période d'abonnement en cours. Aucun remboursement prorata temporis 
              ne sera effectué (sauf pendant la période « Satisfait ou Remboursé » de 30 jours).
            </p>

            <h3 className="font-heading text-xl text-white mb-3 mt-6">8.2 Résiliation par KILOM</h3>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM SAS se réserve le droit de résilier un abonnement en cas de manquement aux CGU, notamment 
              en cas d'utilisation frauduleuse ou contraire à la loi, après mise en demeure restée sans effet 
              pendant 8 jours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">9. Disponibilité du service</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM SAS s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la disponibilité 
              du service 24h/24 et 7j/7.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Toutefois, KILOM SAS se réserve le droit d'interrompre temporairement l'accès au service pour 
              des raisons de maintenance, de mise à jour, ou en cas de force majeure.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              En cas d'interruption de service supérieure à 48 heures consécutives (hors maintenance programmée), 
              le client pourra demander une prolongation de son abonnement d'une durée équivalente à l'interruption.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">10. Garanties et responsabilité</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM SAS garantit que le service est conforme aux fonctionnalités décrites sur le site kilom.fr.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              La responsabilité de KILOM SAS ne saurait être engagée en cas de :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li>Mauvaise utilisation du service par le client</li>
              <li>Inexactitude des données saisies par le client</li>
              <li>Décisions fiscales prises sur la base des exports générés</li>
              <li>Force majeure ou fait d'un tiers</li>
              <li>Interruption de services tiers (Mapbox, fournisseurs de calendrier)</li>
            </ul>
            <p className="font-body text-white/80 leading-relaxed">
              En tout état de cause, la responsabilité de KILOM SAS est limitée au montant de l'abonnement 
              payé par le client pour l'année en cours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">11. Propriété intellectuelle</h2>
            <p className="font-body text-white/80 leading-relaxed">
              L'ensemble des éléments du service KILOM (code source, design, algorithmes, documentation) 
              est la propriété exclusive de KILOM SAS. Toute reproduction, représentation, modification ou 
              utilisation non autorisée est strictement interdite et constitue une contrefaçon.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">12. Données personnelles</h2>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM SAS s'engage à protéger les données personnelles de ses clients conformément au RGPD. 
              Pour plus d'informations, consultez notre{' '}
              <a href="/privacy" className="text-gold hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">13. Facturation</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Une facture est émise automatiquement pour chaque paiement et envoyée par email. 
              Les factures sont également accessibles depuis l'espace personnel du client.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Les factures sont conservées pendant 10 ans conformément aux obligations légales.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">14. Service client</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question ou réclamation, le service client KILOM est disponible :
            </p>
            <div className="font-body text-white/80 leading-relaxed mt-4 space-y-2 ml-4">
              <p>Par email : <a href="mailto:support@kilom.fr" className="text-gold hover:underline">support@kilom.fr</a></p>
              <p>Par téléphone : +33 1 23 45 67 89 (Lun-Ven 9h-18h)</p>
              <p>Via le formulaire de contact : <a href="/contact" className="text-gold hover:underline">kilom.fr/contact</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">15. Médiation</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              En cas de litige, le client peut recourir gratuitement à un médiateur de la consommation 
              en vue de la résolution amiable du litige.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Plateforme de résolution des litiges en ligne :{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">16. Droit applicable et juridiction</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Les présentes CGV sont régies par le droit français. En cas de litige, et à défaut d'accord 
              amiable, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">17. Modifications des CGV</h2>
            <p className="font-body text-white/80 leading-relaxed">
              KILOM SAS se réserve le droit de modifier les présentes CGV à tout moment. Les clients 
              seront informés par email de toute modification substantielle 30 jours avant son entrée 
              en vigueur. Les CGV applicables sont celles en vigueur au moment de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">18. Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question relative aux présentes CGV :{' '}
              <a href="mailto:legal@kilom.fr" className="text-gold hover:underline">legal@kilom.fr</a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CGV;
