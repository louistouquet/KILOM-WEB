import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0E]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0E]/60 via-[#0D0D0E]/80 to-[#0D0D0E] z-10" />
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb"
          alt="Luxury automotive"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#F1C086 1px, transparent 1px), linear-gradient(90deg, #F1C086 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-8"
        >
          <Zap className="w-4 h-4 text-gold" />
          <span className="font-body text-sm text-white/90">
            Gestion automatisée des indemnités kilométriques
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          Transformez vos
          <br />
          <span className="gradient-text">déplacements</span>
          <br />
          en économies
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          KILOM révolutionne la gestion de vos indemnités kilométriques. 
          Notre IA analyse automatiquement votre calendrier, calcule vos trajets 
          et génère vos déclarations fiscales en un clic.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#pricing"
            className="btn-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-flex items-center gap-2 min-w-[220px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="btn-outline-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-flex items-center gap-2 min-w-[220px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir comment ça marche
          </motion.a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Zap,
              title: 'Automatisation IA',
              description: 'Détection intelligente des trajets professionnels',
            },
            {
              icon: Shield,
              title: 'Conformité fiscale',
              description: 'Exports certifiés pour votre comptable',
            },
            {
              icon: TrendingUp,
              title: 'Économies garanties',
              description: 'Optimisez vos déductions fiscales',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-6 hover:border-gold/50 transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-gold/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
