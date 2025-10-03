'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InterestsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    {
      title: "Brazilian Jiu-Jitsu",
      description: "Training in the art of ground fighting, learning discipline, patience, and the importance of technique over strength.",
      icon: "🥋",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring the latest developments in AI, machine learning, and how these technologies can solve real-world problems.",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Product Design",
      description: "Creating user-centered solutions that bridge the gap between technology and human needs.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Entrepreneurship",
      description: "Building and scaling businesses, learning from failures, and turning ideas into reality.",
      icon: "🚀",
      gradient: "from-green-500 to-emerald-500"
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
    <section id="interests" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Interests & Passions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              Beyond finance and technology, here's what drives my curiosity and shapes my perspective
            </p>
          </motion.div>

          {/* Interests Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="modern-card p-8 hover-lift group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${interest.gradient} flex items-center justify-center text-3xl mr-4`}>
                    {interest.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {interest.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {interest.description}
                </p>

                {/* Hover effect line */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${interest.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Quote */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
              "The intersection of discipline, creativity, and technology is where the most meaningful innovations are born."
            </blockquote>
            <div className="mt-6 text-gray-400">— My Philosophy</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
