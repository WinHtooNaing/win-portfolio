"use client";

import { useMemo, useState } from "react";
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
                "shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition duration-200",
                active
                  ? "border-cyan-100 bg-cyan-100 text-slate-950"
                  : "border-white/10 bg-white/[0.025] text-stone-400 hover:border-white/25 hover:text-stone-100",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => (
          <Card key={skill.name} className="p-5">
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
        ))}
      </div>
    </div>
  );
}
