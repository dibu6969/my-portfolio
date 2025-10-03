'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContactSectionProps {
  email: string;
  linkedin: string;
}

export default function ContactSection({ email, linkedin }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      name: "Email",
      value: email,
      icon: "📧",
      href: `mailto:${email}`,
      gradient: "from-blue-500 to-cyan-500",
      description: "Let's start a conversation"
    },
    {
      name: "Phone",
      value: "305-699-9713",
      icon: "📱",
      href: "tel:305-699-9713",
      gradient: "from-green-500 to-emerald-500",
      description: "Call or text anytime"
    },
    {
      name: "LinkedIn",
      value: "Connect with me",
      icon: "💼",
      href: linkedin,
      gradient: "from-indigo-500 to-purple-500",
      description: "Professional networking"
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
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborations, or just have a great conversation about finance and technology
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.name === "LinkedIn" ? "_blank" : undefined}
                rel={method.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="modern-card p-8 text-center hover-lift group block"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-3xl`}>
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {method.name}
                </h3>
                <p className="text-gray-300 font-medium mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-sm text-gray-400">
                  {method.description}
                </p>

                {/* Hover effect */}
                <motion.div
                  className={`mt-4 h-1 bg-gradient-to-r ${method.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="modern-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Ready to Make Something Great Together?
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for a finance intern, a tech collaborator, or just want to discuss 
                the latest trends in Brazilian Jiu-Jitsu, I'm always excited to connect with passionate people.
              </p>
              
              <motion.a
                href={`mailto:${email}`}
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Me an Email
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Quote */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
              "There's always something to be grateful for."
            </blockquote>
            <div className="mt-6 text-gray-400">— My Daily Reminder</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
