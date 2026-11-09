import type { Metadata } from "next";
import { SiteShell } from "./components/site-shell";
import { profile } from "./site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — Full-Stack Developer, Frontend Focus`,
  description:
    "Win Htoo Naing is a full-stack developer focused on frontend engineering, building responsive web experiences with React and Next.js and working across the stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
