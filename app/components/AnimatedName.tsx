'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FishAnimation from './FishAnimation';

export default function AnimatedName({ name }: { name: string }) {
  const letters = Array.from(name);
  const quote = "'Just keep swimming'";
  const quoteLetters = Array.from(quote);
  const totalDuration = 5; // seconds
  const perChar = totalDuration / Math.max(letters.length, 1);
  const [index, setIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        if (i >= letters.length) return i;
        return i + 1;
      });
    }, perChar * 1000);
    return () => clearInterval(id);
  }, [letters.length, perChar]);

  useEffect(() => {
    // Start typing quote only after name is complete
    const delay = letters.length * perChar * 1000 + 500; // Wait for name + 500ms
    const id = setTimeout(() => {
      const intervalId = setInterval(() => {
        setQuoteIndex((i) => {
          if (i >= quoteLetters.length) return i;
          return i + 1;
        });
      }, perChar * 1000);
      return () => clearInterval(intervalId);
    }, delay);
    return () => clearTimeout(id);
  }, [letters.length, quoteLetters.length, perChar]);

  const typed = letters.slice(0, index);
  const typedQuote = quoteLetters.slice(0, quoteIndex);

  return (
    <div className="flex items-start justify-center pt-8 relative">
      <div className="text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center glitch-loop typewriter name-glow" style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui' }}>
          {typed.map((ch, i) => (
            <motion.span
              key={i + ch}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.06 }}
              className="inline-block"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
          <span className="caret" />
        </h1>
        <div className="mt-4 text-lg italic flex flex-wrap justify-center typewriter items-center relative" style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui' }}>
          <FishAnimation />
          {typedQuote.map((ch, i) => (
            <motion.span
              key={i + ch}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.06 }}
              className="inline-block"
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
          {quoteIndex > 0 && <span className="caret italic inline-block align-middle" />}
        </div>
      </div>
    </div>
  );
}


