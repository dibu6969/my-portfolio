'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="experience" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              Building bridges between traditional finance and innovative technology through hands-on experience
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full opacity-20" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10" />

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className="modern-card p-8 hover-lift group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Date badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm font-medium text-white mb-4 ${
                        index % 2 === 0 ? 'float-right' : 'float-left'
                      }`}>
                        {exp.start} - {exp.end}
                      </div>
                      
                      <div className="clear-both">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg gradient-text-secondary font-semibold mb-4">
                          {exp.company}
                        </h4>
                        
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, bulletIndex) => (
                            <motion.li
                              key={bulletIndex}
                              className="text-gray-300 leading-relaxed flex items-start"
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              transition={{ delay: 0.5 + bulletIndex * 0.1 }}
                            >
                              <span className="text-purple-400 mr-3 mt-1 font-bold">•</span>
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
