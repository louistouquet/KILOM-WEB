import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Fonctionnement', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Smooth link hover animation config
  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 + 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }),
    hover: {
      y: -2,
      color: '#F1C086',
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'header-scrolled'
          : 'header-transparent'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(13, 13, 14, 0.6)' 
          : 'rgba(13, 13, 14, 0.15)',
        backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(12px)',
        WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-logo text-3xl text-gold font-bold tracking-tight"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            data-testid="header-logo"
          >
            KILOM
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-white/70 relative"
                custom={index}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                style={{ 
                  willChange: 'transform, color',
                  transition: 'color 0.15s ease-out'
                }}
              >
                {item.label}
                {/* Underline effect */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                />
              </motion.a>
            ))}
            <motion.a
              href="#pricing"
              className="relative overflow-hidden px-6 py-2.5 rounded-full font-body font-semibold text-sm bg-gold text-[#0D0D0E]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 8px 24px rgba(241, 192, 134, 0.35)'
              }}
              whileTap={{ scale: 0.97 }}
              data-testid="header-cta-btn"
              style={{ 
                willChange: 'transform, box-shadow',
                transition: 'box-shadow 0.2s ease-out'
              }}
            >
              <span className="relative z-10">Essayer gratuitement</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gold p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ backgroundColor: 'rgba(241, 192, 134, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            data-testid="mobile-menu-btn"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-2 py-4 border-t border-white/10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="font-body text-white/70 hover:text-gold py-3 px-4 rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ transition: 'color 0.15s ease-out, background-color 0.15s ease-out' }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#pricing"
                  className="bg-gold text-[#0D0D0E] px-6 py-3 rounded-full font-body font-semibold text-sm text-center mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Essayer gratuitement
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
