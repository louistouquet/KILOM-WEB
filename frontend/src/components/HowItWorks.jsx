import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Brain, Map, FileText, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const steps = [
    {
      icon: Calendar,
      title: 'Synchronisation calendrier',
      description: 'KILOM se connecte automatiquement à votre agenda professionnel et analyse vos événements.',
      color: '#F1C086',
    },
    {
      icon: Brain,
      title: 'Intelligence artificielle',
      description: 'Notre IA identifie intelligemment vos déplacements professionnels et filtre les trajets personnels.',
      color: '#F1C086',
    },
    {
      icon: Map,
      title: 'Calcul de distance',
      description: 'Intégration avec Mapbox pour calculer automatiquement les distances exactes de vos trajets.',
      color: '#F1C086',
    },
    {
      icon: FileText,
      title: 'Export comptable',
      description: 'Générez instantanément vos déclarations fiscales au format requis par votre expert-comptable.',
      color: '#F1C086',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-40 md:py-48 bg-[#0D0D0E] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6"
          >
            <span className="font-body text-sm text-gold">Comment ça marche</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            Quatre étapes vers
            <br />
            <span className="gradient-text">l'automatisation totale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-white/70 max-w-2xl mx-auto"
          >
            Un processus fluide et transparent qui vous fait gagner des heures chaque mois
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-effect rounded-3xl p-8 h-full border border-white/5 hover:border-gold/30 transition-all duration-500 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center font-heading text-lg text-[#0D0D0E] glow-gold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow (between steps on desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    className="hidden lg:flex absolute top-24 -right-3 z-20"
                  >
                    <ArrowRight className="w-6 h-6 text-gold" />
                  </motion.div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pricing"
            className="btn-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
