'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface VisualizerBarProps {
  height: number;
  delay: number;
  color: string;
  width?: number;
}

function VisualizerBar({ height, delay, color, width = 3 }: VisualizerBarProps) {
  const [currentHeight, setCurrentHeight] = useState(height);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate music beat with random height changes
      const newHeight = Math.random() * 100 + 20;
      setCurrentHeight(newHeight);
    }, Math.random() * 500 + 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="rounded-full"
      style={{
        width: width,
        backgroundColor: color,
        height: `${currentHeight}px`,
        minHeight: '20px',
        maxHeight: '120px',
        opacity: 0.6,
      }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ 
        scaleY: 1,
        opacity: [0.3, 0.8, 0.3],
        height: `${currentHeight}px`
      }}
      transition={{
        duration: 0.3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
}

export default function MusicVisualizer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show visualizer after 10 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Left side visualizer */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {Array.from({ length: 8 }, (_, i) => (
          <VisualizerBar
            key={`left-${i}`}
            height={Math.random() * 80 + 20}
            delay={i * 0.1}
            color={`hsl(${200 + i * 10}, 70%, 60%)`}
            width={4}
          />
        ))}
      </div>

      {/* Right side visualizer */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {Array.from({ length: 8 }, (_, i) => (
          <VisualizerBar
            key={`right-${i}`}
            height={Math.random() * 80 + 20}
            delay={i * 0.1 + 0.5}
            color={`hsl(${280 + i * 10}, 70%, 60%)`}
            width={4}
          />
        ))}
      </div>

      {/* Top visualizer */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 12 }, (_, i) => (
          <VisualizerBar
            key={`top-${i}`}
            height={Math.random() * 60 + 15}
            delay={i * 0.05}
            color={`hsl(${300 + i * 5}, 70%, 60%)`}
            width={2}
          />
        ))}
      </div>

      {/* Bottom visualizer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 12 }, (_, i) => (
          <VisualizerBar
            key={`bottom-${i}`}
            height={Math.random() * 60 + 15}
            delay={i * 0.05 + 0.3}
            color={`hsl(${180 + i * 5}, 70%, 60%)`}
            width={2}
          />
        ))}
      </div>
    </div>
  );
}
