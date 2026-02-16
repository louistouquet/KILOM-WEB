import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Users, Rocket } from 'lucide-react';

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Demo',
      price: 'Gratuit',
      period: '',
      description: 'Parfait pour tester KILOM',
      icon: Sparkles,
      features: [
        'Synchronisation calendrier',
        'Détection IA limitée (10 trajets/mois)',
        'Calcul de distance basique',
        'Export PDF simple',
        'Support par email',
      ],
      cta: 'Essayer gratuitement',
      highlighted: false,
      badge: null,
    },
    {
      name: 'Solo',
      price: '89€',
      period: '/an',
      description: 'Pour les professionnels indépendants',
      icon: Rocket,
      features: [
        'Synchronisation calendrier illimitée',
        'Détection IA avancée (trajets illimités)',
        'Calcul de distance précis (Mapbox)',
        'Export comptable certifié',
        'Calendrier dédié KILOM',
        'Édition et ajout manuel de trajets',
        'Support prioritaire',
        'Mises à jour automatiques',
      ],
      cta: 'Choisir Solo',
      highlighted: true,
      badge: 'Populaire',
    },
    {
      name: 'Duo',
      price: '139€',
      period: '/an',
      description: 'Pour les couples ou associés',
      icon: Users,
      features: [
        'Tout le plan Solo × 2 utilisateurs',
        'Gestion multi-comptes',
        'Tableau de bord partagé',
        'Exports séparés ou groupés',
        'Économie de 39€/an vs 2×Solo',
        'Support prioritaire premium',
        'Onboarding personnalisé',
      ],
      cta: 'Choisir Duo',
      highlighted: false,
      badge: 'Meilleure offre',
    },
  ];

  return (
    <section id="pricing" className="relative py-40 md:py-48 bg-[#0D0D0E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]" />
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
            <span className="font-body text-sm text-gold">Tarifs transparents</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            Un investissement qui
            <br />
            <span className="gradient-text">se rentabilise immédiatement</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-white/70 max-w-2xl mx-auto"
          >
            Économisez des heures de travail administratif et maximisez vos déductions fiscales
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gold text-[#0D0D0E] px-4 py-1.5 rounded-full font-body font-semibold text-xs">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative h-full glass-effect rounded-3xl p-8 border transition-all duration-500 ${
                  plan.highlighted
                    ? 'border-gold/50 glow-gold'
                    : 'border-white/10 hover:border-gold/30'
                } ${hoveredPlan === index ? 'bg-white/5' : ''}`}
              >
                {/* Icon */}
                <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <plan.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Plan Name */}
                <h3 className="font-heading text-2xl text-white mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-white/60 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-5xl text-gold">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-body text-lg text-white/60">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.period && (
                    <p className="font-body text-xs text-white/40 mt-1">
                      Facturé annuellement
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-gold/20 rounded-full p-1 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="font-body text-sm text-white/80">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-body font-semibold text-base transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-gold'
                      : 'btn-outline-gold'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-body text-white/60 text-sm">
            💳 Paiement sécurisé • 🔒 Données cryptées • ✅ Satisfait ou remboursé sous 30 jours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
