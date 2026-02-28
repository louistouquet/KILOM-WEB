import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation basique
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    // Construction du mailto
    const subject = encodeURIComponent(`[KILOM] ${formData.subject}`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );
    window.location.href = `mailto:contact@kilom.fr?subject=${subject}&body=${body}`;

    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 6000);
  };

  const contactInfos = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@kilom.fr',
      subtext: 'Réponse sous 24h',
      href: 'mailto:contact@kilom.fr',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      content: 'Paris, France 🇫🇷',
      subtext: 'Entreprise 100% française',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0E] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/30 mb-6">
            <Mail className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="font-body text-sm text-gold">Contactez-nous</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Une question ?<br />
            <span className="gradient-text">Nous sommes là pour vous</span>
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfos.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="bg-gold/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl text-white mb-2">{item.title}</h2>
                {item.href ? (
                  <a href={item.href} className="font-body text-white/80 hover:text-gold transition-colors duration-200 block mb-1">
                    {item.content}
                  </a>
                ) : (
                  <p className="font-body text-white/80 mb-1">{item.content}</p>
                )}
                <p className="font-body text-sm text-white/50">{item.subtext}</p>
              </motion.div>
            ))}

            {/* Trust note */}
            <div className="glass-effect rounded-2xl p-6 border border-gold/20">
              <p className="font-body text-sm text-white/70 leading-relaxed">
                🔒 Vos données sont traitées conformément au{' '}
                <a href="/privacy" className="text-gold hover:underline">RGPD</a>.
                Nous ne partageons jamais vos informations personnelles.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass-effect rounded-3xl p-8 border border-white/10">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="font-heading text-2xl text-white mb-2">
                    Votre client mail s'est ouvert !
                  </h3>
                  <p className="font-body text-white/70">
                    Si rien ne s'est ouvert, écrivez directement à{' '}
                    <a href="mailto:contact@kilom.fr" className="text-gold hover:underline">
                      contact@kilom.fr
                    </a>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                      <p className="font-body text-sm text-red-400">{error}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="font-body text-sm text-white/80 mb-2 block">
                        Nom complet <span aria-label="obligatoire">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-body focus:outline-none focus:border-gold/50 transition-colors duration-200"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-body text-sm text-white/80 mb-2 block">
                        Email <span aria-label="obligatoire">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-body focus:outline-none focus:border-gold/50 transition-colors duration-200"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="font-body text-sm text-white/80 mb-2 block">
                      Sujet <span aria-label="obligatoire">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-body focus:outline-none focus:border-gold/50 transition-colors duration-200"
                      placeholder="Demande d'information sur le plan Solo"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="font-body text-sm text-white/80 mb-2 block">
                      Message <span aria-label="obligatoire">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-body focus:outline-none focus:border-gold/50 transition-colors duration-200 resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full py-4 rounded-xl font-body font-semibold text-base inline-flex items-center justify-center gap-2"
                  >
                    Envoyer le message
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </motion.button>

                  <p className="font-body text-xs text-white/40 text-center">
                    En cliquant sur Envoyer, votre client mail par défaut s'ouvrira. Réponse garantie sous 24h.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
