import Link from "next/link";
import { PageHero } from "./components/page-hero";

export default function Home() {
  return (
    <main className="pb-8">
      <PageHero
        eyebrow="Full Stack JavaScript Developer"
        title="Building modern web and mobile apps."
        description="I create responsive, user-focused digital products using modern JavaScript technologies. My work combines clean frontend design, efficient backend logic, and practical full stack development."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 sm:px-10 lg:grid-cols-4 lg:px-12">
        {[
          {
            title: "MERN",
            text: "MongoDB, Express, React, and Node.js for complete full stack applications.",
          },
          {
            title: "Next.js",
            text: "Fast, modern web apps with strong performance and clean UI structure.",
          },
          {
            title: "React Native",
            text: "Cross-platform mobile experiences with practical JavaScript workflows.",
          },
          {
            title: "APIs",
            text: "Backend integration, data flow, and scalable application features.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_50px_rgba(28,25,23,0.06)] backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-stone-950">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="rounded-[2rem] bg-stone-950 p-8 text-stone-50">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-400">
            What I Build
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight">
            Full stack applications that are fast, reliable, and easy to use.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            From business dashboards to portfolio websites and mobile apps, I
            focus on practical solutions with modern UI and clean code.
          </p>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
            Explore
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/about"
              className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-950 hover:text-stone-50"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-950 hover:text-stone-50"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-950 hover:text-stone-50"
            >
              Skills + Experience
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-950 hover:text-stone-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
