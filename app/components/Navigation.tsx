'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Interests", href: "#interests" },
    { name: "Languages", href: "#languages" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Find active section
      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition + 100 >= offsetTop && scrollPosition + 100 < offsetTop + offsetHeight) {
            setActiveSection(section.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#hero" onClick={() => scrollToSection('#hero')}>
              ED
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section, index) => (
              <motion.button
                key={section.name}
                onClick={() => scrollToSection(section.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === section.href
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
                {activeSection === section.href && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4 pt-4 border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <motion.button
                key={section.name}
                onClick={() => scrollToSection(section.href)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === section.href
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
