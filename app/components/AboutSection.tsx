'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
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
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a driven finance and international business student at{' '}
                  <span className="gradient-text-secondary font-semibold">Northeastern University</span>, 
                  passionate about bridging the gap between traditional finance and innovative technology.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Born in Miami with strong connections to Mexico, I've gained valuable experience contributing 
                  to a six-figure sneaker business and supporting wealth management operations for Brazil-focused 
                  investment mandates.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond the numbers and market analysis, I'm a dedicated{' '}
                  <span className="gradient-text-accent font-semibold">Brazilian Jiu-Jitsu</span> and{' '}
                  <span className="gradient-text-accent font-semibold">MMA practitioner</span> who applies 
                  the discipline, patience, and strategic thinking from martial arts to my approach in finance.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe that combining technical skills with personal growth creates the foundation for 
                  meaningful impact in both business and community development.
                </p>
              </div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                variants={itemVariants}
              >
                {[
                  { label: "Years in BJJ", value: "5+" },
                  { label: "Languages", value: "3" },
                  { label: "Projects", value: "10+" },
                  { label: "Coffee Cups", value: "∞" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center modern-card p-6 hover-lift"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="modern-card p-8 hover-lift">
                {/* Skills visualization */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold gradient-text mb-6">Core Values</h3>
                  
                  {[
                    { skill: "Discipline", level: 90, color: "from-purple-500 to-purple-600" },
                    { skill: "Innovation", level: 85, color: "from-blue-500 to-blue-600" },
                    { skill: "Leadership", level: 80, color: "from-pink-500 to-pink-600" },
                    { skill: "Growth Mindset", level: 95, color: "from-cyan-500 to-cyan-600" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-gray-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
