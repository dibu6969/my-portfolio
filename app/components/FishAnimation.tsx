'use client';

import { motion } from 'framer-motion';

interface KoiFishProps {
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  design: number;
}

function KoiFish({ delay, duration, startX, startY, endX, endY, size, design }: KoiFishProps) {
  const renderKoiDesign = () => {
    switch (design) {
      case 1: // Kohaku (white with red spots)
        return (
          <>
            {/* Main body */}
            <motion.ellipse cx="50" cy="20" rx="40" ry="14" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: delay }} />
            {/* Tail */}
            <motion.path d="M10 20 Q-15 5 0 20 Q-15 35 10 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }} />
            {/* Dorsal fin */}
            <motion.path d="M25 8 Q30 4 35 8 Q30 12 25 8" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Pectoral fins */}
            <motion.path d="M30 20 Q25 15 30 18 Q35 15 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            <motion.path d="M30 20 Q25 25 30 22 Q35 25 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Eye */}
            <motion.circle cx="70" cy="18" r="4" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.3 }} />
            <motion.circle cx="71" cy="17" r="2" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.4 }} />
            {/* Red spots */}
            <motion.ellipse cx="35" cy="16" rx="8" ry="5" fill="rgba(255,100,100,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.ellipse cx="55" cy="24" rx="6" ry="4" fill="rgba(255,100,100,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
          </>
        );
      case 2: // Sanke (white with red and black spots)
        return (
          <>
            {/* Main body */}
            <motion.ellipse cx="50" cy="20" rx="40" ry="14" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: delay }} />
            {/* Tail */}
            <motion.path d="M10 20 Q-15 5 0 20 Q-15 35 10 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }} />
            {/* Dorsal fin */}
            <motion.path d="M25 8 Q30 4 35 8 Q30 12 25 8" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Pectoral fins */}
            <motion.path d="M30 20 Q25 15 30 18 Q35 15 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            <motion.path d="M30 20 Q25 25 30 22 Q35 25 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Eye */}
            <motion.circle cx="70" cy="18" r="4" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.3 }} />
            <motion.circle cx="71" cy="17" r="2" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.4 }} />
            {/* Red spots */}
            <motion.ellipse cx="35" cy="16" rx="8" ry="5" fill="rgba(255,100,100,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            {/* Black spots */}
            <motion.ellipse cx="55" cy="24" rx="6" ry="4" fill="rgba(50,50,50,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            <motion.ellipse cx="45" cy="12" rx="4" ry="3" fill="rgba(50,50,50,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.7 }} />
          </>
        );
      case 3: // Showa (black with red and white)
        return (
          <>
            {/* Main body */}
            <motion.ellipse cx="50" cy="20" rx="40" ry="14" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: delay }} />
            {/* Tail */}
            <motion.path d="M10 20 Q-15 5 0 20 Q-15 35 10 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }} />
            {/* Dorsal fin */}
            <motion.path d="M25 8 Q30 4 35 8 Q30 12 25 8" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Pectoral fins */}
            <motion.path d="M30 20 Q25 15 30 18 Q35 15 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            <motion.path d="M30 20 Q25 25 30 22 Q35 25 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Eye */}
            <motion.circle cx="70" cy="18" r="4" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.3 }} />
            <motion.circle cx="71" cy="17" r="2" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.4 }} />
            {/* Black patches */}
            <motion.ellipse cx="35" cy="16" rx="10" ry="6" fill="rgba(30,30,30,0.9)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            {/* Red spots */}
            <motion.ellipse cx="55" cy="24" rx="6" ry="4" fill="rgba(255,100,100,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            {/* White spots */}
            <motion.ellipse cx="45" cy="12" rx="5" ry="3" fill="rgba(255,255,255,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.7 }} />
          </>
        );
      case 4: // Asagi (blue-gray with red belly)
        return (
          <>
            {/* Main body */}
            <motion.ellipse cx="50" cy="20" rx="40" ry="14" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: delay }} />
            {/* Tail */}
            <motion.path d="M10 20 Q-15 5 0 20 Q-15 35 10 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }} />
            {/* Dorsal fin */}
            <motion.path d="M25 8 Q30 4 35 8 Q30 12 25 8" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Pectoral fins */}
            <motion.path d="M30 20 Q25 15 30 18 Q35 15 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            <motion.path d="M30 20 Q25 25 30 22 Q35 25 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Eye */}
            <motion.circle cx="70" cy="18" r="4" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.3 }} />
            <motion.circle cx="71" cy="17" r="2" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.4 }} />
            {/* Blue-gray scales */}
            <motion.ellipse cx="35" cy="16" rx="8" ry="5" fill="rgba(100,150,200,0.6)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.ellipse cx="55" cy="24" rx="6" ry="4" fill="rgba(100,150,200,0.6)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            {/* Red belly */}
            <motion.ellipse cx="50" cy="25" rx="25" ry="6" fill="rgba(255,150,150,0.5)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.7 }} />
          </>
        );
      case 5: // Tancho (white with single red spot on head)
        return (
          <>
            {/* Main body */}
            <motion.ellipse cx="50" cy="20" rx="40" ry="14" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: delay }} />
            {/* Tail */}
            <motion.path d="M10 20 Q-15 5 0 20 Q-15 35 10 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.1 }} />
            {/* Dorsal fin */}
            <motion.path d="M25 8 Q30 4 35 8 Q30 12 25 8" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Pectoral fins */}
            <motion.path d="M30 20 Q25 15 30 18 Q35 15 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            <motion.path d="M30 20 Q25 25 30 22 Q35 25 30 20" fill="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.2 }} />
            {/* Eye */}
            <motion.circle cx="70" cy="18" r="4" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.3 }} />
            <motion.circle cx="71" cy="17" r="2" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.4 }} />
            {/* Single red spot on head (Tancho) */}
            <motion.circle cx="65" cy="15" r="6" fill="rgba(255,100,100,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ 
        x: startX, 
        y: startY,
        opacity: 0,
        rotate: 0
      }}
      animate={{ 
        x: endX, 
        y: endY,
        opacity: [0, 0.9, 0.9, 0.9, 0],
        rotate: 0 // All fish face right since they all swim left to right
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
        times: [0, 0.1, 0.7, 0.9, 1] // Fade in early, stay visible, fade out at the end
      }}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg viewBox="0 0 100 40" className="w-full h-full text-white">
        {renderKoiDesign()}
      </svg>
    </motion.div>
  );
}

export default function FishAnimation() {
  const koiData = [
    // All fish swimming from left to right, swimming much further to the right
    { delay: 0, duration: 25, startX: -200, startY: 200, endX: 2000, endY: 300, size: 60, design: 1 },
    { delay: 8, duration: 30, startX: -180, startY: 250, endX: 2100, endY: 350, size: 55, design: 2 },
    { delay: 16, duration: 28, startX: -150, startY: 300, endX: 1950, endY: 200, size: 65, design: 3 },
    { delay: 24, duration: 32, startX: -160, startY: 180, endX: 2000, endY: 280, size: 58, design: 4 },
    { delay: 32, duration: 26, startX: -190, startY: 220, endX: 2100, endY: 320, size: 62, design: 5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {koiData.map((koi, index) => (
        <KoiFish
          key={index}
          delay={koi.delay}
          duration={koi.duration}
          startX={koi.startX}
          startY={koi.startY}
          endX={koi.endX}
          endY={koi.endY}
          size={koi.size}
          design={koi.design}
        />
      ))}
    </div>
  );
}
