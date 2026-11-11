"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const headlineVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.12, staggerChildren: 0.14 },
  },
};

const headlineLineVariants = {
  hidden: { opacity: 0, y: 58, rotateX: -16 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroHeadline({ className }: { className: string }) {
  return (
    <motion.h1
      className={className}
      variants={headlineVariants}
      initial="hidden"
      animate="visible"
      aria-label="Full-stack developer, frontend focused."
    >
      <motion.span className="hero-headline-line" variants={headlineLineVariants} aria-hidden="true">
        Full-stack
      </motion.span>
      <motion.span className="hero-headline-line" variants={headlineLineVariants} aria-hidden="true">
        developer,
      </motion.span>
      <motion.span
        className="hero-headline-line accent-text"
        variants={headlineLineVariants}
        aria-hidden="true"
      >
        frontend focused.
      </motion.span>
    </motion.h1>
  );
}

export function HeroArtwork() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.6 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="hero-art-scene"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="hero-art"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        initial={{ opacity: 0, scale: 0.84, rotate: 5, y: 28 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
          delay: 0.2,
        }}
        aria-hidden="true"
      >
        <div className="hero-art__grid" aria-hidden="true" />
        <motion.div
          className="hero-art__glow"
          animate={{ scale: [0.85, 1.16, 0.95], x: [0, 20, -8], y: [0, -12, 8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="hero-art__orbit hero-art__orbit--outer"
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.div
          className="hero-art__orbit hero-art__orbit--inner"
          animate={{ rotate: -360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 24, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-hidden="true"
        />
        <motion.div
          className="hero-art__monogram"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          WHN<span>.</span>
        </motion.div>
        <motion.div
          className="hero-art__code"
          animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="hero-art__code-label">How I approach a product</span>
          <span><i>const</i> focus = [</span>
          <span className="hero-art__code-indent">user interface,</span>
          <span className="hero-art__code-indent">product experience,</span>
          <span className="hero-art__code-indent">the full stack</span>
          <span>];</span>
        </motion.div>
        <motion.div
          className="hero-art__tag hero-art__tag--top"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="hero-art__tag-dot" />
          Frontend craft
        </motion.div>
        <motion.div
          className="hero-art__tag hero-art__tag--bottom"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          Full-stack developer <span>↗</span>
        </motion.div>
        <motion.span
          className="hero-art__spark"
          animate={{ rotate: [0, 90, 180], scale: [0.8, 1.15, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          ✳
        </motion.span>
      </motion.div>
    </div>
  );
}
