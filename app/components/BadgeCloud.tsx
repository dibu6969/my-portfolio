'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BadgeCloud({
  items,
}: {
  items: string[];
}) {
  const shuffled = useMemo(() => {
    return [...new Set(items.map((s) => s.trim()).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));
  }, [items]);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-3">
        {shuffled.map((label, idx) => (
          <motion.span
            key={label + idx}
            className="px-3 py-1 rounded-full border text-sm bg-white/60 dark:bg-white/10 backdrop-blur"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.6) }}
            whileHover={{ scale: 1.06 }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}


