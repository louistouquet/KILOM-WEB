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
          <p className="font-body text-white/60">Dernière mise à jour : 14 mars 2026</p>
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
              Les présentes Conditions Générales de Vente (CGV) régissent la vente d'abonnements à l'application mobile KILOM.
              L'utilisation de KILOM implique l'acceptation sans réserve de ces conditions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Éditeur (Vendeur)</h2>
            <div className="font-body text-white/80 leading-relaxed space-y-2">
              <p>L'application KILOM est éditée par :</p>
              <p><strong>Statut :</strong> Entrepreneur Individuel (Auto-entreprise)</p>
              <p><strong>N° SIREN :</strong> [TON SIREN]</p>
              <p><strong>Siège social :</strong> [TON ADRESSE]</p>
              <p><strong>Email :</strong> <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Offre et Abonnement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'utilisation complète de l'application KILOM est conditionnée par la souscription à un <strong>abonnement annuel unique</strong>.
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li>Synchronisation illimitée du calendrier</li>
              <li>Analyse des trajets par Intelligence Artificielle</li>
              <li>Calcul de la distance et application du barème fiscal</li>
              <li>Génération et exportation des rapports au format PDF</li>
            </ul>
            <p className="font-body text-white/80 leading-relaxed mt-6">
              Les prix sont affichés TTC dans l'application au moment de l'achat. KILOM se réserve le droit de modifier ses tarifs, mais s'engage à appliquer le tarif en vigueur au moment de votre souscription ou renouvellement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Modalités de paiement et Renouvellement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les paiements et la gestion des abonnements sont assurés exclusivement par les plateformes de téléchargement officielles : <strong>Apple (App Store)</strong> et <strong>Google (Play Store)</strong>.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'abonnement est <strong>renouvelé automatiquement</strong> à chaque échéance annuelle. Pour annuler ce renouvellement automatique, vous devez effectuer la résiliation dans les paramètres de votre compte Apple ou Google au moins 24 heures avant la fin de la période en cours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Droit de rétractation et Remboursement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique dont l'exécution a commencé. En souscrivant à l'abonnement KILOM, vous renoncez expressément à ce droit.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Toute demande de remboursement, quel qu'en soit le motif, est soumise aux conditions générales d'Apple ou de Google et doit être formulée directement auprès de leur service client. <strong>L'éditeur de KILOM n'a pas la capacité technique d'émettre des remboursements directs.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Résiliation et Accès aux fonctionnalités (Export PDF)</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              En cas de résiliation ou d'expiration de votre abonnement, votre compte bascule en accès restreint :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
              <li><strong>Conservation de l'historique :</strong> Vos trajets et données enregistrés ne sont pas supprimés. Ils sont conservés sur nos serveurs de manière sécurisée pour être accessibles en cas de réabonnement.</li>
              <li><strong>Verrouillage de l'export :</strong> La génération et le téléchargement de vos justificatifs d'indemnités kilométriques au format PDF sont <strong>désactivés</strong>. Il est indispensable d'avoir un abonnement actif pour exporter un rapport PDF.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Service client et Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question, réclamation ou assistance technique, vous pouvez nous contacter à :{' '}
              <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CGV;
