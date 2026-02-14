import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const LegalNotice = () => {
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
            <span className="font-body text-sm text-gold">Informations légales</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            Mentions
            <br />
            <span className="gradient-text">Légales</span>
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
            <h2 className="font-heading text-2xl text-gold mb-4">1. Éditeur du site</h2>
            <div className="font-body text-white/80 leading-relaxed space-y-2">
              <p><strong>Raison sociale :</strong> KILOM SAS</p>
              <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
              <p><strong>Capital social :</strong> 10 000 €</p>
              <p><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
              <p><strong>RCS :</strong> Paris B 123 456 789</p>
              <p><strong>SIRET :</strong> 123 456 789 00010</p>
              <p><strong>N° TVA intracommunautaire :</strong> FR 12 123456789</p>
              <p><strong>Email :</strong> <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Directeur de la publication</h2>
            <div className="font-body text-white/80 leading-relaxed">
              <p><strong>Nom :</strong> [À compléter]</p>
              <p><strong>Qualité :</strong> Président de KILOM SAS</p>
              <p><strong>Email :</strong> <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Hébergement</h2>
            <div className="font-body text-white/80 leading-relaxed space-y-2">
              <p><strong>Hébergeur :</strong> [À compléter - ex: OVH, AWS, Google Cloud]</p>
              <p><strong>Adresse :</strong> [À compléter]</p>
              <p><strong>Téléphone :</strong> [À compléter]</p>
            </div>
            <p className="font-body text-white/80 leading-relaxed mt-4">
              Le site kilom.fr est hébergé sur des serveurs situés dans l'Union Européenne, 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Propriété intellectuelle</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'ensemble des éléments composant le site kilom.fr (structure, textes, logos, images, vidéos, 
              graphismes, code source, etc.) est la propriété exclusive de KILOM SAS, à l'exception des marques, 
              logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
              écrite préalable de KILOM SAS.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              La marque KILOM® ainsi que les logos sont des marques déposées. Toute utilisation non autorisée 
              de ces marques ou de ces logos constitue une contrefaçon susceptible d'engager la responsabilité 
              civile et pénale de son auteur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">5. Protection des données personnelles</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM SAS accorde une grande importance à la protection de vos données personnelles et s'engage 
              à les protéger conformément au Règlement Général sur la Protection des Données (RGPD) et à la 
              loi Informatique et Libertés.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre{' '}
              <a href="/privacy" className="text-gold hover:underline">Politique de Confidentialité</a>.
            </p>
            <div className="font-body text-white/80 leading-relaxed mt-4">
              <p><strong>Délégué à la Protection des Données (DPO) :</strong></p>
              <p>Email : <a href="mailto:dpo@kilom.fr" className="text-gold hover:underline">dpo@kilom.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">6. Cookies</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Le site kilom.fr utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Les cookies strictement nécessaires au fonctionnement du site sont déposés automatiquement. 
              Les autres cookies (analytiques, marketing) nécessitent votre consentement préalable.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres 
              de votre navigateur ou notre gestionnaire de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">7. Limitation de responsabilité</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, 
              mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              KILOM SAS ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation 
              du site ou de l'impossibilité d'y accéder, notamment en cas de force majeure, de dysfonctionnement 
              technique, ou d'interruption de service.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              Les informations fournies par KILOM concernant les indemnités kilométriques sont données à titre 
              indicatif. Il appartient à chaque utilisateur de vérifier l'exactitude des données avant toute 
              déclaration fiscale.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">8. Liens hypertextes</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Le site kilom.fr peut contenir des liens hypertextes vers d'autres sites. KILOM SAS n'exerce 
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              La création de liens hypertextes vers le site kilom.fr nécessite l'autorisation préalable et 
              écrite de KILOM SAS. Cette autorisation peut être demandée à l'adresse :{' '}
              <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">9. Droit applicable et juridiction</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut 
              d'accord amiable, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">10. Médiation</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, 
              KILOM SAS adhère au Service du Médiateur [Nom du médiateur].
            </p>
            <p className="font-body text-white/80 leading-relaxed">
              En cas de litige, vous pouvez déposer votre réclamation sur le site du médiateur :{' '}
              <a href="https://www.mediateur-consommation.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                www.mediateur-consommation.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">11. Contact</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
            </p>
            <div className="font-body text-white/80 leading-relaxed mt-4 space-y-2">
              <p>Par email : <a href="mailto:legal@kilom.fr" className="text-gold hover:underline">legal@kilom.fr</a></p>
              <p>Par courrier : KILOM SAS - 123 Avenue des Champs-Élysées - 75008 Paris</p>
              <p>Par téléphone : +33 1 23 45 67 89</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;
