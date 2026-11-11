"use client";

import { MotionConfig, motion } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  className,
  delay = 0,
  animateOnLoad = false,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnLoad?: boolean;
  interactive?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileHover={interactive ? { y: -7, scale: 1.015 } : undefined}
      whileTap={interactive ? { scale: 0.99 } : undefined}
      {...(animateOnLoad
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
          })}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
