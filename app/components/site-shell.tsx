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
  { href: "/experience", label: "Skills + Expericence" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-sm font-semibold tracking-[0.18em] text-white">
              {profile.shortName}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-black">{profile.name}</p>
              <p className="text-xs text-black/60">{profile.title}</p>
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
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-500  text-white"
                      : "text-black/70 hover:bg-blue-50 hover:text-black",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="md:hidden"
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
          <div className="hidden  md:flex">
            <ButtonLink href="/cv.pdf" size="lg" target="_blank">
              View CV
            </ButtonLink>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "mx-auto max-w-7xl overflow-hidden px-4 transition-all duration-300 sm:px-8 md:hidden",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0 pb-0",
          )}
        >
          <div className="rounded-2xl border border-black/10 bg-white p-2">
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
                      ? "bg-blue-500 text-white"
                      : "text-black/70 hover:bg-blue-50 hover:text-black",
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

      <footer className="border-t border-black/10 bg-white/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-black/60 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>
            {profile.name} | {profile.title}
          </p>
          {/* <p>{profile.availability}</p> */}
        </div>
      </footer>
    </>
  );
}
