"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Skills + Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,231,255,0.9),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(255,214,179,0.8),_transparent_32%),linear-gradient(180deg,_rgba(250,247,242,0.95),_rgba(250,247,242,0))]" />
      <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:px-10 lg:px-12">
        <div className="border-b border-black/10 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.22em] text-stone-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-900 transition hover:bg-stone-100 md:hidden"
            >
              <span className="sr-only">
                {mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"}
              </span>
              <span className="text-lg leading-none">
                {mobileMenuOpen ? "×" : "☰"}
              </span>
            </button>
            <nav className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-stone-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <nav
            id="mobile-nav"
            className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 md:hidden ${
              mobileMenuOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="rounded-2xl border border-stone-200 bg-white/90 p-2 shadow-[0_18px_50px_rgba(28,25,23,0.08)] backdrop-blur">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${
                      pathname === item.href
                        ? "bg-background"
                        : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mx-auto mt-auto w-full max-w-7xl px-6 pb-10 pt-4 sm:px-10 lg:px-12">
        <div className="border-t border-black/10 pt-6 text-sm text-stone-500">
          Full Stack JavaScript Developer | MERN, Next.js, React Native
        </div>
      </footer>
    </>
  );
}
