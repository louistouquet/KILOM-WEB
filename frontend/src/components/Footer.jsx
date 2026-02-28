import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Fonctionnalités', href: '/#how-it-works' },
      { label: 'Tarifs', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
    ],
    legal: [
      { label: 'Conditions générales', href: '/cgu' },
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Mentions légales', href: '/legal' },
      { label: 'CGV', href: '/cgv' },
    ],
    company: [
      { label: 'À propos', href: '/#hero' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/kilom', label: 'LinkedIn KILOM' },
    { icon: Mail, href: 'mailto:contact@kilom.fr', label: 'Envoyer un email à KILOM' },
  ];

  return (
    <footer className="relative bg-[#0D0D0E] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-logo text-4xl text-gold mb-4">KILOM</h3>
              <p className="font-body text-white/70 leading-relaxed mb-6 max-w-sm">
                La solution premium pour automatiser la gestion de vos indemnités kilométriques.
                Simple, intelligent, fiscalement conforme.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/5 hover:bg-gold/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-gold/50"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4 text-white/80 hover:text-gold" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-white text-lg mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-white text-lg mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading text-white text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-white/50 text-sm">
            © {currentYear} KILOM. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-white/50 hover:text-gold transition-colors duration-300 text-sm"
            >
              Cookies
            </a>
            <a
              href="#"
              className="font-body text-white/50 hover:text-gold transition-colors duration-300 text-sm"
            >
              Préférences
            </a>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-gold/20">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="font-body text-xs text-white/60">
              Conçu avec passion à Paris 🇫🇷
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
