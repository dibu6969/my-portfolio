'use client';

import { motion } from 'framer-motion';

export default function InfoPanel() {
  const sections = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Interests", href: "#interests" },
    { name: "Languages", href: "#languages" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex items-center space-x-6">
        {sections.map((section, index) => (
          <motion.button
            key={section.name}
            onClick={() => scrollToSection(section.href)}
            className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui' }}
          >
            {section.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
