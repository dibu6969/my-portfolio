'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LanguagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const languages = [
    {
      name: "English",
      level: "Native",
      proficiency: 100,
      flag: "🇺🇸",
      description: "Fluent in business and academic contexts"
    },
    {
      name: "Spanish", 
      level: "Native",
      proficiency: 100,
      flag: "🇲🇽",
      description: "Native speaker with cultural understanding"
    },
    {
      name: "Portuguese",
      level: "Elementary",
      proficiency: 40,
      flag: "🇧🇷",
      description: "Learning through Brazilian connections"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="languages" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-green-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Languages</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              Communicating across cultures and markets with multilingual proficiency
            </p>
          </motion.div>

          {/* Languages Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                className="modern-card p-8 text-center hover-lift group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Flag and Name */}
                <div className="mb-6">
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {language.name}
                  </h3>
                  <div className="text-sm text-gray-400 mt-1">{language.description}</div>
                </div>

                {/* Proficiency Level */}
                <div className="mb-6">
                  <div className="text-3xl font-bold gradient-text-secondary mb-2">
                    {language.proficiency}%
                  </div>
                  <div className="text-lg text-gray-300 font-medium">
                    {language.level}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(language.proficiency / 20) 
                          ? 'text-yellow-400' 
                          : 'text-gray-600'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cultural Context */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="modern-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Cultural Bridge Builder
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Growing up between Miami and Mexico, I've developed a deep appreciation for cultural nuances 
                in business and communication. This multilingual foundation allows me to connect with diverse 
                teams and markets, bringing unique perspectives to international business challenges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
