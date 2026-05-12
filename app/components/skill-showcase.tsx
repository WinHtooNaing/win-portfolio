"use client";

import { useMemo, useState } from "react";
import {
  skillCategories,
  skillItems,
  type SkillCategory,
  type SkillItem,
} from "../site-data";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const levelToneClasses = {
  expert: "bg-emerald-100 text-emerald-700",
  advanced: "bg-blue-100 text-blue-600",
  strong: "bg-orange-500 text-white",
};

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
      <path d="M9 10h12" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01" />
      <path d="M8 17h.01" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 18a4 4 0 1 1 .8-7.9A5 5 0 0 1 18 11a3.5 3.5 0 1 1 0 7Z" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-3.2-3.2Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="11" r="3" />
      <path d="M20 19a4 4 0 0 0-3-3.9" />
      <path d="M4 19a4 4 0 0 1 3-3.9" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-sky-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="1.2" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8v8" />
      <path d="m10 8 6 8" />
      <path d="M16 8v8" />
    </svg>
  );
}

function getTabIcon(category: SkillCategory) {
  switch (category) {
    case "All":
      return <SparkIcon />;
    case "Frontend":
      return <LayoutIcon />;
    case "Backend":
      return <ServerIcon />;
    case "Database":
      return <DatabaseIcon />;
    case "DevOps":
      return <CloudIcon />;
    case "Tools":
      return <ToolIcon />;
    case "Soft Skills":
      return <PeopleIcon />;
  }
}

function getSkillIcon(icon: SkillItem["icon"]) {
  switch (icon) {
    case "react":
      return <ReactIcon />;
    case "next":
      return <NextIcon />;
    case "server":
      return <ServerIcon />;
    case "database":
      return <DatabaseIcon />;
    case "cloud":
      return <CloudIcon />;
    case "tool":
      return <ToolIcon />;
    case "soft":
      return <PeopleIcon />;
  }
}

export function SkillShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skillItems;
    }

    return skillItems.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {skillCategories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "inline-flex items-center gap-2.5 rounded-full border px-4 py-3 text-sm font-medium shadow-[0_6px_16px_rgba(15,23,42,0.08)] transition-all",
                active
                  ? "border-blue-500 bg-blue-500 text-white shadow-[0_10px_22px_rgba(37,99,235,0.24)]"
                  : "border-black/10 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50",
              )}
            >
              {getTabIcon(category)}
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {filteredSkills.map((skill) => (
          <Card
            key={skill.name}
            className="rounded-[1.6rem] border-black/8 shadow-[0_8px_24px_rgba(15,23,42,0.07)]"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-slate-50 text-slate-600">
                  {getSkillIcon(skill.icon)}
                </div>
                <span
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold",
                    levelToneClasses[skill.levelTone],
                  )}
                >
                  {skill.level}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {skill.name}
                </h3>
                <p className="mt-2 text-base text-slate-500">
                  {skill.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between text-[1.65rem] font-semibold leading-none text-slate-900">
                  <span className="text-sm font-medium text-slate-700">
                    Proficiency
                  </span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="mt-3 h-2.5 rounded-full bg-slate-100">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      skill.levelTone === "expert"
                        ? "bg-emerald-500"
                        : skill.levelTone === "advanced"
                          ? "bg-blue-500"
                          : skill.levelTone === "strong"
                            ? "bg-orange-500"
                            : "bg-gray-500",
                    )}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
