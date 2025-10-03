'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Categorize skills
  const categories = {
    'Finance & Business': skills.filter(skill => 
      ['Financial Analysis', 'Investment Management', 'Risk Assessment', 'Excel', 'Financial Modeling', 'Portfolio Management'].includes(skill)
    ),
    'Technology': skills.filter(skill => 
      ['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'SQL', 'Git'].includes(skill)
    ),
    'Languages': skills.filter(skill => 
      ['English', 'Spanish', 'Portuguese'].includes(skill)
    ),
    'Other': skills.filter(skill => 
      !['Financial Analysis', 'Investment Management', 'Risk Assessment', 'Excel', 'Financial Modeling', 'Portfolio Management', 
        'Python', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'SQL', 'Git',
        'English', 'Spanish', 'Portuguese'].includes(skill)
    )
  };

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
              A diverse skill set spanning finance, technology, and communication
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-2xl font-bold gradient-text-secondary mb-8 text-center">
                  {category}
                </h3>
                
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  variants={containerVariants}
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="modern-card p-6 text-center hover-lift group cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                        {skill}
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div 
                        className="mt-3 w-full h-1 bg-gray-700 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + skillIndex * 0.05 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${Math.random() * 40 + 60}%` } : { width: 0 }}
                          transition={{ delay: 0.7 + skillIndex * 0.05, duration: 1 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Skills Visualization */}
          <motion.div 
            className="mt-20 grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: "Financial Acumen",
                description: "Deep understanding of financial markets, analysis, and investment strategies",
                percentage: 85,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Technical Skills",
                description: "Proficient in modern web technologies and programming languages",
                percentage: 75,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Communication",
                description: "Multilingual with strong presentation and interpersonal skills",
                percentage: 90,
                color: "from-purple-500 to-pink-500"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="modern-card p-8 text-center hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{skill.percentage}%</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 gradient-text">
                  {skill.title}
                </h4>
                
                <p className="text-gray-400 mb-4">
                  {skill.description}
                </p>
                
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
