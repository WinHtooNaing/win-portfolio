import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Card } from "../components/ui/card";
import { Reveal } from "../components/motion/reveal";
import { projects } from "../site-data";

export default function ProjectsPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Selected work"
        title="Web and mobile projects, built end to end."
        description="A selection of projects across frontend, backend, and mobile development. I focus on the user experience while building the supporting features that make each product work."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={index === 0 ? "md:col-span-2" : undefined}
            delay={Math.min(index * 0.08, 0.32)}
            interactive
          >
            <Card
              className={
                index === 0
                  ? "overflow-hidden md:grid md:grid-cols-[1.05fr_0.95fr]"
                  : "overflow-hidden"
              }
            >
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`image-zoom relative block overflow-hidden bg-slate-100 ${
                index === 0
                  ? "aspect-[1.5] md:aspect-auto md:min-h-[27rem]"
                  : "aspect-[1.55]"
              }`}
              aria-label={`View ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
                0{index + 1} <span className="mx-1.5 text-indigo-600">/</span>{" "}
                Selected project
              </span>
            </Link>

            <div
              className={`p-6 sm:p-8 ${
                index === 0
                  ? "flex flex-col justify-center sm:p-10 lg:p-12"
                  : ""
              }`}
            >
              {index === 0 && (
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  Featured work <span className="ml-1">✳</span>
                </p>
              )}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-stone-100 sm:text-3xl">
                  {project.title}
                </h2>
                <span className="text-xs text-stone-500">
                  {project.stack[0]}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-stone-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-5 border-t border-white/10 pt-5 text-sm font-medium">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-300 transition hover:text-indigo-700"
                >
                  Source code <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-300 transition hover:text-indigo-700"
                >
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            </Card>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
