import type { Metadata } from "next";
import { SiteShell } from "./components/site-shell";
import { profile } from "./site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description:
    "Portfolio for Win Htoo Naing featuring full-stack projects, frontend work, and practical experience with Next.js, React, Node.js, and React Native.",
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
