import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Skills + Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,231,255,0.9),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(255,214,179,0.8),_transparent_32%),linear-gradient(180deg,_rgba(250,247,242,0.95),_rgba(250,247,242,0))]" />
      <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between border-b border-black/10 py-5">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em] text-stone-900"
          >
            PORTFOLIO
          </Link>
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
