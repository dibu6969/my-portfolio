'use client';

import { motion } from 'framer-motion';

export type TimelineItem = {
  title: string;
  subtitle?: string;
  dates?: string;
  bullets?: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l">
      {items.map((item, i) => (
        <li key={i} className="ml-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="space-y-1"
          >
            <div className="absolute -left-[9px] mt-2 h-3 w-3 rounded-full bg-foreground" />
            <h3 className="font-semibold">{item.title}</h3>
            {item.subtitle && <p className="text-sm text-muted-foreground">{item.subtitle}</p>}
            {item.dates && <p className="text-xs text-muted-foreground">{item.dates}</p>}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="list-disc pl-5 text-sm space-y-1">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </li>
      ))}
    </ol>
  );
}


