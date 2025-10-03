'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function InfoPanel() {
  const sections = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Interests", href: "#interests" },
    { name: "Languages", href: "#languages" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
      <div className="flex items-center space-x-2 md:space-x-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.name}
            onClick={() => scrollToSection(section.href)}
            className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              activeSection === section.href
                ? 'text-black bg-white shadow-lg'
                : 'text-white hover:text-gray-300 hover:bg-white/10'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui' }}
            aria-label={`Navigate to ${section.name} section`}
          >
            {section.name}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
