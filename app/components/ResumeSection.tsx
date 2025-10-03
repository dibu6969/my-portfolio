'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ResumeSection() {
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
    <section id="resume" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              Download my detailed resume to learn more about my experience and achievements
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div 
            className="modern-card p-8 md:p-12 text-center hover-lift group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Document Icon */}
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl text-white">
                📄
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
              Emilio Dibildox - Resume
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my academic journey, professional experience, 
              skills, and achievements in finance, technology, and business.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🎓", title: "Education", desc: "Northeastern University" },
                { icon: "💼", title: "Experience", desc: "Finance & Business" },
                { icon: "⚡", title: "Skills", desc: "Tech & Leadership" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                  <div className="text-xs text-gray-400">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Emilio_Dibildox_Resume.pdf"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </motion.a>

            {/* File Info */}
            <div className="mt-6 text-sm text-gray-400">
              PDF • Updated January 2024 • 2 pages
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="modern-card p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                <span className="gradient-text-secondary font-semibold">Pro tip:</span> This resume is optimized for ATS systems 
                and includes quantifiable achievements. Feel free to reach out if you'd like to discuss any specific 
                experience or project in more detail.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
