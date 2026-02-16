import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Shield, Check } from 'lucide-react';

const TrustBar = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Professionnels',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: '120 avis',
    },
    {
      icon: Shield,
      value: 'RGPD',
      label: 'Certifié conforme',
    },
    {
      icon: Check,
      value: '3h/mois',
      label: 'Économisées',
    },
  ];

  return (
    <section className="relative py-12 bg-[#0D0D0E] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-gold/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="font-heading text-2xl md:text-3xl text-gold mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
