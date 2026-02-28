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
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  // Particules fixes pour éviter les re-renders et la relocalisation aléatoire
  const particles = [
    { left: '8%', top: '15%', delay: 0 }, { left: '23%', top: '42%', delay: 0.6 },
    { left: '51%', top: '8%', delay: 1.2 }, { left: '77%', top: '31%', delay: 0.3 },
    { left: '91%', top: '62%', delay: 0.9 }, { left: '35%', top: '74%', delay: 1.5 },
    { left: '64%', top: '88%', delay: 0.4 }, { left: '14%', top: '58%', delay: 1.1 },
    { left: '44%', top: '25%', delay: 0.7 }, { left: '82%', top: '14%', delay: 1.8 },
    { left: '6%', top: '82%', delay: 0.2 }, { left: '58%', top: '51%', delay: 1.4 },
    { left: '29%', top: '93%', delay: 0.8 }, { left: '71%', top: '72%', delay: 0.1 },
    { left: '96%', top: '38%', delay: 1.6 }, { left: '17%', top: '28%', delay: 1.0 },
    { left: '48%', top: '65%', delay: 0.5 }, { left: '85%', top: '89%', delay: 1.3 },
    { left: '38%', top: '46%', delay: 1.7 }, { left: '62%', top: '19%', delay: 0.4 },
  ];

  const features = [
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
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0E] py-32 md:py-48">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0E]/40 via-[#0D0D0E]/60 to-[#0D0D0E] z-10" />
        
        {/* Animated road lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-pulse" />
          <div className="absolute top-1/2 translate-y-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 translate-y-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Floating gold particles — positions fixes pour éviter le layout shift */}
        <div className="absolute inset-0" aria-hidden="true">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3 + (i % 3) * 0.7, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
        
        {/* Glowing orb */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(241,192,134,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
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
          <Zap className="w-4 h-4 text-gold" aria-hidden="true" />
          <span className="font-body text-sm text-white/90">
            Gestion automatisée des indemnités kilométriques
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="leading-tight mb-8"
        >
          <span className="block font-heading text-5xl md:text-7xl lg:text-8xl text-white font-semibold mb-2">
            Transformez vos
          </span>
          <span className="block font-heading text-5xl md:text-7xl lg:text-8xl text-gold font-bold">
            déplacements
          </span>
          <span className="block font-heading text-5xl md:text-7xl lg:text-8xl text-white font-semibold">
            en économies
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          KILOM révolutionne la gestion de vos indemnités kilométriques.{' '}
          Notre IA analyse automatiquement votre calendrier, calcule vos trajets{' '}
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
            aria-label="Commencer gratuitement - voir les tarifs"
          >
            Commencer gratuitement
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="btn-outline-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-flex items-center gap-2 min-w-[220px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Découvrir comment fonctionne KILOM"
          >
            Découvrir comment ça marche
          </motion.a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.8 }}
              className="glass-effect rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-2xl text-white mb-3">
                {feature.title}
              </h2>
              <p className="font-body text-sm text-white/60 leading-relaxed">
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
        aria-hidden="true"
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
