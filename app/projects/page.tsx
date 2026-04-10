import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { projects } from "../site-data";

export default function ProjectsPage() {
  return (
    <main className="pb-8">
      <PageHero
        eyebrow="Projects"
        title="A few projects that reflect my full stack and frontend development work."
        description="Each card can show a preview image, project stack, GitHub repository, and live website or demo link."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:px-12">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(28,25,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-500">0{index + 1}</span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-600">
                  Project
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-stone-950">
                {project.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-stone-600">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-[0.18em] text-stone-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full text-white bg-stone-950 px-5 py-3 text-sm font-medium  transition hover:bg-stone-800 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900 hover:bg-stone-50"
                >
                  Website
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
