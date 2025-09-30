'use client';

import { useState, useEffect } from 'react';
import DaftPunkHelmet from './DaftPunkHelmet';

interface DaftPunkEasterEggProps {
  onTrigger?: () => void;
}

export default function DaftPunkEasterEgg({ onTrigger }: DaftPunkEasterEggProps) {
  const [showHelmet, setShowHelmet] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const daftPunkQuotes = [
    "Harder, better, faster, stronger",
    "Work it harder, make it better",
    "Do it faster, makes us stronger",
    "More than ever, hour after hour",
    "Work is never over",
    "Around the world",
    "One more time",
    "We're gonna celebrate",
    "Music sounds better with you",
    "Digital love",
    "Something about us",
    "Human after all",
    "Robot rock",
    "Technologic",
    "Touch",
    "Get lucky",
    "Instant crush",
    "Lose yourself to dance",
    "Doin' it right",
    "Contact",
    "Beyond",
    "Motherboard",
    "Fragments of time",
    "The game of love"
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, event.code];
        
        // Keep only the last 10 keys
        if (newSequence.length > konamiCode.length) {
          newSequence.shift();
        }
        
        // Check if the sequence matches Konami code
        if (newSequence.length === konamiCode.length) {
          const isKonamiCode = newSequence.every((key, index) => key === konamiCode[index]);
          if (isKonamiCode) {
            setShowHelmet(true);
            onTrigger?.();
            return []; // Reset sequence
          }
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onTrigger]);

  useEffect(() => {
    // Show random quote every 30 seconds
    const interval = setInterval(() => {
      const randomQuote = daftPunkQuotes[Math.floor(Math.random() * daftPunkQuotes.length)];
      setCurrentQuote(randomQuote);
      setShowQuote(true);
      
      // Hide quote after 3 seconds
      setTimeout(() => {
        setShowQuote(false);
      }, 3000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleHelmetComplete = () => {
    setShowHelmet(false);
  };

  return (
    <>
      <DaftPunkHelmet 
        isVisible={showHelmet} 
        onComplete={handleHelmetComplete}
      />
      
      {/* Floating Quote */}
      {showQuote && (
        <div className="fixed top-20 right-4 z-40 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 max-w-xs">
            <p 
              className="text-cyan-400 text-sm font-mono animate-pulse"
              style={{
                fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
              }}
            >
              "{currentQuote}"
            </p>
            <p className="text-white/60 text-xs mt-1">— Daft Punk</p>
          </div>
        </div>
      )}
    </>
  );
}
