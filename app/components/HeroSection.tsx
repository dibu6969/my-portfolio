'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Hello, I'm
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-responsive-xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">{name}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Finance & International Business Student at{' '}
            <span className="gradient-text-secondary font-medium">Northeastern University</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Entrepreneur, Brazilian Jiu-Jitsu practitioner, and builder passionate about bridging 
            traditional finance with innovative technology. Exploring the intersection of business, 
            technology, and personal growth.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#about"
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Story
          </motion.a>
          
          <motion.a
            href="#contact"
            className="modern-card px-8 py-4 text-lg font-semibold text-white hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
