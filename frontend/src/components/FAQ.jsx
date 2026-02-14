import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Comment KILOM calcule-t-il mes trajets ?',
      answer: 'KILOM synchronise votre calendrier professionnel, utilise l\'intelligence artificielle pour identifier vos déplacements professionnels, puis interroge l\'API Mapbox pour calculer la distance exacte entre deux points. Tout est automatique et précis.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer: 'Absolument. Toutes vos données sont cryptées de bout en bout. Nous utilisons les mêmes standards de sécurité que les banques en ligne. Vos données ne sont jamais partagées avec des tiers et vous pouvez les supprimer à tout moment.',
    },
    {
      question: 'Puis-je éditer ou ajouter des trajets manuellement ?',
      answer: 'Oui, bien sûr. Bien que KILOM détecte automatiquement la majorité de vos trajets, vous pouvez toujours modifier, ajouter ou supprimer des trajets manuellement depuis votre calendrier dédié KILOM.',
    },
    {
      question: 'Comment fonctionne l\'export comptable ?',
      answer: 'En un clic, KILOM génère un fichier au format standardisé (PDF ou Excel) contenant tous vos trajets du mois ou de l\'année, avec le détail des distances et le montant total des indemnités. Ce fichier est prêt à être transmis à votre expert-comptable.',
    },
    {
      question: 'Quelle est la différence entre Solo et Duo ?',
      answer: 'Le plan Solo est conçu pour un utilisateur individuel. Le plan Duo permet à deux utilisateurs (couple, associés) de bénéficier de toutes les fonctionnalités avec des comptes séparés, tout en réalisant une économie de 39€/an par rapport à deux abonnements Solo.',
    },
    {
      question: 'Puis-je annuler mon abonnement à tout moment ?',
      answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. Si vous n\'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement, sans poser de questions.',
    },
    {
      question: 'KILOM fonctionne-t-il avec tous les calendriers ?',
      answer: 'KILOM est compatible avec les principaux services de calendrier : Google Calendar, Outlook, Apple Calendar, et tout calendrier supportant le protocole CalDAV. La synchronisation est bidirectionnelle et en temps réel.',
    },
    {
      question: 'Combien de temps prend la configuration initiale ?',
      answer: 'Moins de 5 minutes. Connectez votre calendrier, autorisez KILOM à accéder à vos événements, et c\'est terminé. L\'IA commence immédiatement à analyser vos déplacements passés et futurs.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 bg-[#0D0D0E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6"
          >
            <span className="font-body text-sm text-gold">Questions fréquentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-white mb-6"
          >
            Tout ce que vous devez
            <br />
            <span className="gradient-text">savoir sur KILOM</span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`glass-effect rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-gold/50 glow-gold'
                    : 'border-white/10 hover:border-gold/30'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading text-lg md:text-xl text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-gold" />
                    ) : (
                      <Plus className="w-6 h-6 text-gold" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="font-body text-white/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="font-body text-white/60 mb-6">
            Vous avez d'autres questions ?
          </p>
          <motion.a
            href="mailto:contact@kilom.fr"
            className="btn-outline-gold px-8 py-4 rounded-full font-body font-semibold text-base inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
