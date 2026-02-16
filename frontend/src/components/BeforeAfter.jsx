import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const BeforeAfter = () => {
  const beforeItems = [
    '3h/mois de saisie manuelle',
    'Erreurs de calcul fréquentes',
    'Stress des déclarations',
    'Trajets oubliés',
    'Justificatifs perdus',
  ];

  const afterItems = [
    '5 min/mois de vérification',
    'Calcul précis automatique',
    'Tranquillité d\'esprit totale',
    'Détection automatique IA',
    'Tout centralisé et archivé',
  ];

  return (
    <section className="relative py-40 md:py-48 bg-[#0D0D0E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6"
          >
            <span className="font-body text-sm text-gold">Avant / Après</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            La différence
            <br />
            <span className="text-gold">KILOM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-white/70 max-w-2xl mx-auto"
          >
            Découvrez comment KILOM transforme radicalement votre gestion des indemnités kilométriques
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AVANT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-10 border border-red-500/30"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-heading text-3xl text-white">
                Avant KILOM
              </h3>
            </div>

            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-red-500/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-body text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Avant */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-heading text-3xl text-red-400 mb-1">3h</div>
                  <div className="font-body text-xs text-white/50">Par mois</div>
                </div>
                <div>
                  <div className="font-heading text-3xl text-red-400 mb-1">15%</div>
                  <div className="font-body text-xs text-white/50">Erreurs</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* APRÈS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-10 border border-gold/50 glow-gold"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-3xl text-white">
                Avec KILOM
              </h3>
            </div>

            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-gold/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-body text-white/90 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Après */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-heading text-3xl text-gold mb-1">5min</div>
                  <div className="font-body text-xs text-white/50">Par mois</div>
                </div>
                <div>
                  <div className="font-heading text-3xl text-gold mb-1">0%</div>
                  <div className="font-body text-xs text-white/50">Erreurs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pricing"
            className="btn-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Passer à KILOM maintenant
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
