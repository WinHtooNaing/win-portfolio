import type { Metadata } from "next";
import { SiteShell } from "./components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Full Stack JavaScript Developer",
  description:
    "A modern portfolio for a full stack JavaScript developer working with MERN stack, Next.js, and React Native.",
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
