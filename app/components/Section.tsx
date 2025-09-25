import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  className,
  children,
  delay = 0,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      id={id}
      className={cn("mx-auto max-w-3xl px-6 py-12", className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  );
}