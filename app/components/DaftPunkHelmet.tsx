'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LEDProps {
  x: number;
  y: number;
  color: string;
  delay: number;
  size?: number;
}

function LED({ x, y, color, delay, size = 4 }: LEDProps) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1, 0.6, 1],
        scale: [0, 1.2, 0.8, 1.1, 0.9, 1]
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    />
  );
}

interface DaftPunkHelmetProps {
  isVisible: boolean;
  onComplete?: () => void;
}

export default function DaftPunkHelmet({ isVisible, onComplete }: DaftPunkHelmetProps) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Thomas Bangalter Helmet (Silver) */}
            <motion.svg
              viewBox="0 0 300 200"
              className="w-64 h-48"
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Helmet Base */}
              <motion.ellipse
                cx="150"
                cy="100"
                rx="80"
                ry="60"
                fill="url(#silverGradient)"
                stroke="#ffffff"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Visor */}
              <motion.rect
                x="100"
                y="80"
                width="100"
                height="40"
                rx="20"
                fill="url(#visorGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* LED Strip - Horizontal */}
              <LED x={120} y={90} color="#00ffff" delay={0} />
              <LED x={140} y={90} color="#00ffff" delay={0.1} />
              <LED x={160} y={90} color="#00ffff" delay={0.2} />
              <LED x={180} y={90} color="#00ffff" delay={0.3} />
              
              {/* LED Strip - Vertical */}
              <LED x={150} y={70} color="#ff00ff" delay={0.4} />
              <LED x={150} y={110} color="#ff00ff" delay={0.5} />
              <LED x={150} y={130} color="#ff00ff" delay={0.6} />
              
              {/* Corner LEDs */}
              <LED x={110} y={70} color="#ffff00" delay={0.7} />
              <LED x={190} y={70} color="#ffff00" delay={0.8} />
              <LED x={110} y={130} color="#ffff00" delay={0.9} />
              <LED x={190} y={130} color="#ffff00" delay={1.0} />
              
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c0c0c0" />
                  <stop offset="50%" stopColor="#e8e8e8" />
                  <stop offset="100%" stopColor="#a0a0a0" />
                </linearGradient>
                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#333333" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Guy-Manuel Helmet (Gold) */}
            <motion.svg
              viewBox="0 0 300 200"
              className="w-64 h-48 absolute top-20 left-20"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              {/* Helmet Base */}
              <motion.ellipse
                cx="150"
                cy="100"
                rx="80"
                ry="60"
                fill="url(#goldGradient)"
                stroke="#ffffff"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              {/* Visor */}
              <motion.rect
                x="100"
                y="80"
                width="100"
                height="40"
                rx="20"
                fill="url(#visorGradient2)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              {/* LED Pattern - Diamond */}
              <LED x={150} y={85} color="#ff0080" delay={1.2} />
              <LED x={130} y={100} color="#ff0080" delay={1.3} />
              <LED x={170} y={100} color="#ff0080" delay={1.4} />
              <LED x={150} y={115} color="#ff0080" delay={1.5} />
              
              {/* LED Pattern - Corners */}
              <LED x={120} y={85} color="#80ff00" delay={1.6} />
              <LED x={180} y={85} color="#80ff00" delay={1.7} />
              <LED x={120} y={115} color="#80ff00" delay={1.8} />
              <LED x={180} y={115} color="#80ff00" delay={1.9} />
              
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#ffed4e" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
                <linearGradient id="visorGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#444444" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Daft Punk Text */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-4xl font-bold text-white mb-4"
                    style={{
                      fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    DAFT PUNK
                  </motion.h2>
                  <motion.p
                    className="text-lg text-cyan-400 text-center"
                    style={{
                      fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    "Harder, Better, Faster, Stronger"
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
