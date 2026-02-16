import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Consultante indépendante',
      company: 'Paris',
      rating: 5,
      text: 'KILOM m\'a fait gagner 3h par mois. L\'IA détecte automatiquement mes trajets clients, c\'est magique ! Plus de stress pour les déclarations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Thomas Lefebvre',
      role: 'Commercial',
      company: 'Lyon',
      rating: 5,
      text: 'Je fais 50+ trajets par mois. Avant KILOM, c\'était l\'enfer. Maintenant, tout est automatique et mon expert-comptable adore les exports.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    {
      name: 'Sophie Martin',
      role: 'Architecte',
      company: 'Bordeaux',
      rating: 5,
      text: 'Interface intuitive, design magnifique, et surtout : ça fonctionne ! J\'ai récupéré 1200€ d\'IK que j\'aurais oubliés sans KILOM.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="relative py-40 md:py-48 bg-[#0D0D0E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
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
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="font-body text-sm text-gold">Témoignages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            Ils ont adopté
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
            Découvrez comment KILOM transforme le quotidien de centaines de professionnels
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-effect rounded-3xl p-8 border border-white/10 hover:border-gold/30 transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-white/80 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  loading="lazy"
                />
                <div>
                  <div className="font-heading text-lg text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-white/60">
                    {testimonial.role}
                  </div>
                  <div className="font-body text-xs text-gold">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full border border-gold/20">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-[#0D0D0E] object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="font-body text-sm text-white/70">
              Rejoignez <span className="text-gold font-semibold">500+</span> professionnels satisfaits
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
