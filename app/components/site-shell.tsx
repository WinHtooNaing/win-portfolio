"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "../site-data";
import { Button, ButtonLink } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Skills & Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-3 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-7xl">
        <div className="glass-header flex items-center justify-between rounded-2xl border px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-900 bg-[#b7e451] text-xs font-bold tracking-[0.08em] text-stone-900 shadow-[2px_2px_0_#191b17]">
              WHN
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-stone-100">{profile.name}</p>
              <p className="text-[11px] text-stone-500">{profile.title}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300",
                    isActive
                      ? "bg-indigo-50 text-stone-100"
                      : "text-stone-400 hover:text-stone-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="border-slate-200 bg-white/70 text-stone-100 md:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </Button>
          </div>
          <div className="hidden md:flex">
            <ButtonLink href="/contact" size="lg">
              Let’s connect <span aria-hidden="true" className="ml-2">↗</span>
            </ButtonLink>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "mx-auto max-w-7xl overflow-hidden px-3 transition-all duration-300 md:hidden",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0 pb-0",
          )}
        >
          <div className="editorial-card mt-2 rounded-3xl p-2 shadow-xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-stone-900 text-white"
                      : "text-stone-400 hover:bg-indigo-50 hover:text-indigo-700",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-10 border-t border-slate-200/80 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-stone-500 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with care.
          </p>
          <p>{profile.location} <span className="mx-2 text-cyan-100">/</span> {profile.title}</p>
        </div>
      </footer>
    </>
  );
}
