'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
            {/* Main body - more realistic torpedo shape, extending from tail to head */}
            <motion.path 
              d="M15 25 Q20 35 35 32 Q50 30 65 32 Q80 35 85 25 Q80 15 65 18 Q50 20 35 18 Q20 15 15 25 Z" 
              fill="url(#bodyGradient1)" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.5, delay: delay }} 
            />
            
            {/* Caudal fin (tail) - positioned at the front, more realistic forked shape */}
            <motion.path 
              d="M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25" 
              fill="url(#bodyGradient1)" 
              opacity="0.9"
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                d: ["M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25", 
                    "M15 25 Q5 12 0 18 Q5 25 0 32 Q5 38 15 25",
                    "M15 25 Q5 18 0 22 Q5 25 0 28 Q5 32 15 25"]
              }} 
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
            />
            
            {/* Dorsal fin - flowing and realistic */}
            <motion.path 
              d="M35 32 Q40 38 45 32 Q50 35 55 32 Q60 38 65 32" 
              fill="url(#bodyGradient1)" 
              opacity="0.8"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.4, delay: delay + 0.2 }} 
            />
            
            {/* Pectoral fins - more natural shape */}
            <motion.path 
              d="M35 18 Q30 22 25 18 Q30 14 35 18" 
              fill="url(#bodyGradient1)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            <motion.path 
              d="M35 32 Q30 28 25 32 Q30 36 35 32" 
              fill="url(#bodyGradient1)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            
            {/* Anal fin */}
            <motion.path 
              d="M65 18 Q70 15 75 18" 
              fill="url(#bodyGradient1)" 
              opacity="0.6"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.4 }} 
            />
            
            {/* Eye - more realistic, positioned correctly on head (right side) */}
            <motion.circle cx="80" cy="22" r="3" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.circle cx="81" cy="21" r="1.5" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            <motion.circle cx="80.5" cy="20.5" r="0.5" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.7 }} />
            
            {/* Red spots - more natural placement */}
            <motion.ellipse cx="45" cy="25" rx="6" ry="4" fill="rgba(255,100,100,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.8 }} />
            <motion.ellipse cx="60" cy="27" rx="4" ry="3" fill="rgba(255,100,100,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.9 }} />
            <motion.ellipse cx="55" cy="20" rx="3" ry="2" fill="rgba(255,100,100,0.6)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 1.0 }} />
          </>
        );
      case 2: // Sanke (white with red and black spots)
        return (
          <>
            {/* Main body */}
            <motion.path 
              d="M15 25 Q20 35 35 32 Q50 30 65 32 Q80 35 85 25 Q80 15 65 18 Q50 20 35 18 Q20 15 15 25 Z" 
              fill="url(#bodyGradient2)" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.5, delay: delay }} 
            />
            
            {/* Caudal fin - positioned at the back, more realistic forked shape */}
            <motion.path 
              d="M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25" 
              fill="url(#bodyGradient2)" 
              opacity="0.9"
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                d: ["M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25", 
                    "M15 25 Q5 12 0 18 Q5 25 0 32 Q5 38 15 25",
                    "M15 25 Q5 18 0 22 Q5 25 0 28 Q5 32 15 25"]
              }} 
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
            />
            
            {/* Dorsal fin */}
            <motion.path 
              d="M35 32 Q40 38 45 32 Q50 35 55 32 Q60 38 65 32" 
              fill="url(#bodyGradient2)" 
              opacity="0.8"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.4, delay: delay + 0.2 }} 
            />
            
            {/* Pectoral fins */}
            <motion.path 
              d="M35 32 Q30 28 25 32 Q30 36 35 32" 
              fill="url(#bodyGradient2)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            <motion.path 
              d="M35 18 Q30 22 25 18 Q30 14 35 18" 
              fill="url(#bodyGradient2)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            
            {/* Eye - positioned correctly on head */}
            <motion.circle cx="80" cy="22" r="3" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.circle cx="81" cy="21" r="1.5" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            
            {/* Red spots */}
            <motion.ellipse cx="45" cy="25" rx="6" ry="4" fill="rgba(255,100,100,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.8 }} />
            {/* Black spots */}
            <motion.ellipse cx="60" cy="27" rx="4" ry="3" fill="rgba(50,50,50,0.9)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.9 }} />
            <motion.ellipse cx="55" cy="20" rx="3" ry="2" fill="rgba(50,50,50,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 1.0 }} />
          </>
        );
      case 3: // Showa (black with red and white)
        return (
          <>
            {/* Main body */}
            <motion.path 
              d="M15 25 Q20 35 35 32 Q50 30 65 32 Q80 35 85 25 Q80 15 65 18 Q50 20 35 18 Q20 15 15 25 Z" 
              fill="url(#bodyGradient3)" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.5, delay: delay }} 
            />
            
            {/* Caudal fin - positioned at the back, more realistic forked shape */}
            <motion.path 
              d="M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25" 
              fill="url(#bodyGradient3)" 
              opacity="0.9"
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                d: ["M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25", 
                    "M15 25 Q5 12 0 18 Q5 25 0 32 Q5 38 15 25",
                    "M15 25 Q5 18 0 22 Q5 25 0 28 Q5 32 15 25"]
              }} 
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
            />
            
            {/* Dorsal fin */}
            <motion.path 
              d="M35 32 Q40 38 45 32 Q50 35 55 32 Q60 38 65 32" 
              fill="url(#bodyGradient3)" 
              opacity="0.8"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.4, delay: delay + 0.2 }} 
            />
            
            {/* Pectoral fins */}
            <motion.path 
              d="M35 32 Q30 28 25 32 Q30 36 35 32" 
              fill="url(#bodyGradient3)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            <motion.path 
              d="M35 18 Q30 22 25 18 Q30 14 35 18" 
              fill="url(#bodyGradient3)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            
            {/* Eye - positioned correctly on head */}
            <motion.circle cx="80" cy="22" r="3" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.circle cx="81" cy="21" r="1.5" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            
            {/* Black patches */}
            <motion.ellipse cx="45" cy="25" rx="8" ry="5" fill="rgba(30,30,30,0.9)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.8 }} />
            {/* Red spots */}
            <motion.ellipse cx="60" cy="27" rx="4" ry="3" fill="rgba(255,100,100,0.8)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.9 }} />
            {/* White spots */}
            <motion.ellipse cx="55" cy="20" rx="3" ry="2" fill="rgba(255,255,255,0.9)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 1.0 }} />
          </>
        );
      case 4: // Asagi (blue-gray with red belly)
        return (
          <>
            {/* Main body */}
            <motion.path 
              d="M15 25 Q20 35 35 32 Q50 30 65 32 Q80 35 85 25 Q80 15 65 18 Q50 20 35 18 Q20 15 15 25 Z" 
              fill="url(#bodyGradient4)" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.5, delay: delay }} 
            />
            
            {/* Caudal fin - positioned at the back, more realistic forked shape */}
            <motion.path 
              d="M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25" 
              fill="url(#bodyGradient4)" 
              opacity="0.9"
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                d: ["M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25", 
                    "M15 25 Q5 12 0 18 Q5 25 0 32 Q5 38 15 25",
                    "M15 25 Q5 18 0 22 Q5 25 0 28 Q5 32 15 25"]
              }} 
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
            />
            
            {/* Dorsal fin */}
            <motion.path 
              d="M35 32 Q40 38 45 32 Q50 35 55 32 Q60 38 65 32" 
              fill="url(#bodyGradient4)" 
              opacity="0.8"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.4, delay: delay + 0.2 }} 
            />
            
            {/* Pectoral fins */}
            <motion.path 
              d="M35 32 Q30 28 25 32 Q30 36 35 32" 
              fill="url(#bodyGradient4)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            <motion.path 
              d="M35 18 Q30 22 25 18 Q30 14 35 18" 
              fill="url(#bodyGradient4)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            
            {/* Eye - positioned correctly on head */}
            <motion.circle cx="80" cy="22" r="3" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.circle cx="81" cy="21" r="1.5" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            
            {/* Blue-gray scales */}
            <motion.ellipse cx="45" cy="25" rx="6" ry="4" fill="rgba(100,150,200,0.7)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.8 }} />
            <motion.ellipse cx="60" cy="27" rx="4" ry="3" fill="rgba(100,150,200,0.6)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.9 }} />
            {/* Red belly */}
            <motion.ellipse cx="50" cy="30" rx="15" ry="4" fill="rgba(255,150,150,0.6)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 1.0 }} />
          </>
        );
      case 5: // Tancho (white with single red spot on head)
        return (
          <>
            {/* Main body */}
            <motion.path 
              d="M15 25 Q20 35 35 32 Q50 30 65 32 Q80 35 85 25 Q80 15 65 18 Q50 20 35 18 Q20 15 15 25 Z" 
              fill="url(#bodyGradient5)" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.5, delay: delay }} 
            />
            
            {/* Caudal fin - positioned at the back, more realistic forked shape */}
            <motion.path 
              d="M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25" 
              fill="url(#bodyGradient5)" 
              opacity="0.9"
              initial={{ pathLength: 0 }} 
              animate={{ 
                pathLength: 1,
                d: ["M15 25 Q5 15 0 20 Q5 25 0 30 Q5 35 15 25", 
                    "M15 25 Q5 12 0 18 Q5 25 0 32 Q5 38 15 25",
                    "M15 25 Q5 18 0 22 Q5 25 0 28 Q5 32 15 25"]
              }} 
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
            />
            
            {/* Dorsal fin */}
            <motion.path 
              d="M35 32 Q40 38 45 32 Q50 35 55 32 Q60 38 65 32" 
              fill="url(#bodyGradient5)" 
              opacity="0.8"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.4, delay: delay + 0.2 }} 
            />
            
            {/* Pectoral fins */}
            <motion.path 
              d="M35 32 Q30 28 25 32 Q30 36 35 32" 
              fill="url(#bodyGradient5)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            <motion.path 
              d="M35 18 Q30 22 25 18 Q30 14 35 18" 
              fill="url(#bodyGradient5)" 
              opacity="0.7"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }} 
              transition={{ duration: 0.3, delay: delay + 0.3 }} 
            />
            
            {/* Eye - positioned correctly on head */}
            <motion.circle cx="80" cy="22" r="3" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.5 }} />
            <motion.circle cx="81" cy="21" r="1.5" fill="black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.6 }} />
            
            {/* Single red spot on head (Tancho) */}
            <motion.circle cx="80" cy="18" r="4" fill="rgba(255,100,100,0.9)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: delay + 0.8 }} />
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
        rotateY: 0
      }}
      animate={{ 
        x: endX, 
        y: endY,
        opacity: [0, 0.8, 0.9, 0.8, 0],
        // Natural swimming motion - realistic undulation and body movement
        rotateY: [0, 3, -2, 1, 0],
        rotateZ: [0, 1, -1, 0.5, 0],
        scale: [1, 1.03, 0.97, 1.02, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
        times: [0, 0.15, 0.65, 0.85, 1] // Longer visibility period
      }}
      style={{
        width: size,
        height: size,
        transformOrigin: "center center",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}
    >
      <svg viewBox="0 0 120 50" className="w-full h-full">
        <defs>
          {/* Gradient definitions for realistic fish colors */}
          <linearGradient id="bodyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f8ff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <linearGradient id="bodyGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f8ff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <linearGradient id="bodyGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#404040" />
            <stop offset="50%" stopColor="#606060" />
            <stop offset="100%" stopColor="#303030" />
          </linearGradient>
          <linearGradient id="bodyGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87ceeb" />
            <stop offset="50%" stopColor="#a0d8ef" />
            <stop offset="100%" stopColor="#6bb6ff" />
          </linearGradient>
          <linearGradient id="bodyGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f8ff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
        </defs>
        {renderKoiDesign()}
      </svg>
    </motion.div>
  );
}

export default function FishAnimation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce number of fish on mobile for better performance
  const koiData = isMobile ? [
    { delay: 0, duration: 35, startX: -150, startY: 180, endX: 2200, endY: 260, size: 45, design: 1 },
    { delay: 10, duration: 38, startX: -120, startY: 160, endX: 2100, endY: 200, size: 50, design: 3 },
    { delay: 20, duration: 36, startX: -160, startY: 220, endX: 2250, endY: 280, size: 48, design: 5 },
  ] : [
    // More natural swimming patterns with varied speeds and paths
    { delay: 0, duration: 35, startX: -150, startY: 180, endX: 2200, endY: 260, size: 65, design: 1 },
    { delay: 5, duration: 40, startX: -180, startY: 320, endX: 2400, endY: 380, size: 58, design: 2 },
    { delay: 10, duration: 38, startX: -120, startY: 160, endX: 2100, endY: 200, size: 70, design: 3 },
    { delay: 15, duration: 42, startX: -200, startY: 280, endX: 2300, endY: 340, size: 62, design: 4 },
    { delay: 20, duration: 36, startX: -160, startY: 220, endX: 2250, endY: 280, size: 68, design: 5 },
    { delay: 25, duration: 39, startX: -140, startY: 140, endX: 2150, endY: 180, size: 55, design: 1 },
    { delay: 30, duration: 44, startX: -190, startY: 360, endX: 2350, endY: 420, size: 72, design: 2 },
    { delay: 35, duration: 37, startX: -130, startY: 200, endX: 2180, endY: 240, size: 64, design: 3 },
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
