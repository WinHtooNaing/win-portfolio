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
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnLoad?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      {...(animateOnLoad
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
          })}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.2, 0.75, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
