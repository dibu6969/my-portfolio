'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface RobotVoiceEffectProps {
  children: React.ReactNode;
  className?: string;
  enableEffect?: boolean;
}

export default function RobotVoiceEffect({ 
  children, 
  className = '', 
  enableEffect = true 
}: RobotVoiceEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    if (enableEffect) {
      setIsHovered(true);
      setIsActive(true);
      
      // Create robot voice sound effect using Web Audio API
      createRobotSound();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => setIsActive(false), 2000);
  };

  const createRobotSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create oscillator for robot sound
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Robot-like frequency modulation
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(250, audioContext.currentTime + 0.2);
      oscillator.frequency.exponentialRampToValueAtTime(180, audioContext.currentTime + 0.3);
      
      // Volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      // Silently fail if Web Audio API is not supported
      console.debug('Robot voice effect not available');
    }
  };

  return (
    <motion.span
      className={`inline-block transition-all duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? {
        textShadow: [
          "0 0 5px #00ffff",
          "0 0 10px #00ffff, 0 0 15px #ff00ff",
          "0 0 5px #00ffff"
        ],
        scale: [1, 1.02, 1],
        filter: [
          "hue-rotate(0deg)",
          "hue-rotate(180deg)",
          "hue-rotate(0deg)"
        ]
      } : {}}
      transition={{
        duration: 0.6,
        repeat: isHovered ? Infinity : 0,
        repeatType: "reverse"
      }}
      style={{
        fontFamily: isActive ? 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' : 'inherit'
      }}
    >
      {children}
    </motion.span>
  );
}
