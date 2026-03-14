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
          <p className="font-body text-white/60">En vigueur au 14 mars 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
        >
          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">1. Éditeur de l'application et du site</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'application mobile <strong>KILOM</strong> et le site internet associé sont édités par :
            </p>
            <div className="font-body text-white/80 leading-relaxed space-y-2 ml-4 bg-white/5 p-6 rounded-xl border border-white/10">
              <p><strong>Statut juridique :</strong> Entrepreneur Individuel (Auto-entreprise)</p>
              <p><strong>Siège social :</strong> 49 chemin Beckensteiner, Charbonnières les bains, 69260</p>
              <p><strong>Numéro SIREN :</strong> 989 010 004</p>
              <p><strong>Email de contact :</strong> <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">2. Hébergement</h2>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              L'architecture technique de KILOM repose sur plusieurs prestataires pour garantir la sécurité et la performance du service :
            </p>
            <ul className="font-body text-white/80 leading-relaxed space-y-4 list-disc list-inside ml-4">
              <li>
                <strong>Site Web (Landing Page) :</strong> Hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.
              </li>
              <li>
                <strong>Serveur API (Backend) :</strong> Hébergé par Google Cloud Platform (via le service Cloud Run). Les serveurs sont localisés en Europe. Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
              </li>
              <li>
                <strong>Base de données :</strong> Hébergée par Supabase, Inc., fonctionnant sur l'infrastructure cloud sécurisée localisée en Europe.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">3. Propriété Intellectuelle</h2>
            <p className="font-body text-white/80 leading-relaxed">
              L'ensemble du contenu présent sur l'application KILOM et son site web (textes, images, code source, logos, interfaces, algorithmes) est la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de l'éditeur, et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-gold mb-4">4. Signalement de contenus illicites</h2>
            <p className="font-body text-white/80 leading-relaxed">
              Conformément à l'article 6-I-7 de la Loi pour la Confiance dans l'Économie Numérique (LCEN), vous pouvez signaler tout contenu ou comportement illicite en nous contactant directement à l'adresse email suivante :{' '}
              <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">contact@kilom.fr</a>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;
