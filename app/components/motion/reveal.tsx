"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MotionConfig } from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  className,
  delay = 0,
  animateOnLoad = false,
  interactive = false,
  staggerChildren = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateOnLoad?: boolean;
  interactive?: boolean;
  staggerChildren?: boolean;
}) {
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = revealRef.current;
      if (
        !element ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const targets = staggerChildren ? Array.from(element.children) : [];

      gsap.from(targets.length > 0 ? targets : element, {
        autoAlpha: 0,
        y: 28,
        duration: 0.8,
        delay,
        stagger: staggerChildren ? 0.075 : 0,
        ease: "power3.out",
        ...(animateOnLoad
          ? {}
          : {
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }),
      });
    },
    {
      dependencies: [animateOnLoad, delay, staggerChildren],
      revertOnUpdate: true,
      scope: revealRef,
    },
  );

  return (
    <div
      ref={revealRef}
      className={className}
      onPointerEnter={
        interactive
          ? () => {
              if (
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                gsap.to(revealRef.current, {
                  y: -7,
                  scale: 1.015,
                  duration: 0.25,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              }
            }
          : undefined
      }
      onPointerLeave={
        interactive
          ? () => {
              if (
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                gsap.to(revealRef.current, {
                  y: 0,
                  scale: 1,
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
