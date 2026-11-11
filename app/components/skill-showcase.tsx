"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  skillCategories,
  skillItems,
  type SkillCategory,
} from "../site-data";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export function SkillShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillItems;
    return skillItems.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        aria-label="Filter skills by category"
      >
        {skillCategories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={active}
              className={cn(
                "relative isolate shrink-0 overflow-hidden rounded-full border px-4 py-2.5 text-xs font-medium transition duration-200",
                active
                  ? "border-cyan-100 text-slate-950"
                  : "border-white/10 bg-white/[0.025] text-stone-400 hover:border-white/25 hover:text-stone-100",
              )}
            >
              {active && (
                <motion.span
                  layoutId="active-skill-filter"
                  className="absolute inset-0 z-0 rounded-full bg-cyan-100"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              whileHover={{ y: -5, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.24, delay: index * 0.025 }}
            >
              <Card className="h-full p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-stone-100">{skill.name}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-stone-500">
                    {skill.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
