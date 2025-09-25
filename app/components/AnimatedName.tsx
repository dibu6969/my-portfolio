'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedName({ name }: { name: string }) {
  const letters = Array.from(name);
  const totalDuration = 5; // seconds
  const perChar = totalDuration / Math.max(letters.length, 1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        if (i >= letters.length) return i;
        return i + 1;
      });
    }, perChar * 1000);
    return () => clearInterval(id);
  }, [letters.length, perChar]);

  const typed = letters.slice(0, index);

  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center font-display glitch-loop typewriter">
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
  );
}


