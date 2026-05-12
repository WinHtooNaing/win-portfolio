import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { ButtonLink } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { projects } from "../site-data";

export default function ProjectsPage() {
  return (
    <main className="pb-14">
      <PageHero
        eyebrow="Projects"
        title=""
        description="A few projects that show how I approach user interface, data flow, and practical product delivery."
      />

      {/* <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-8 lg:grid-cols-3 lg:px-10">
        {projects.map((project, index) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-blue-500/10">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <CardContent className="flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-black">
                {project.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-8 text-black/65">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-blue-500/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <ButtonLink
                  href={project.githubUrl}
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </ButtonLink>
                <ButtonLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        ))}
      </section> */}
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-8 lg:grid-cols-3 lg:px-10">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="flex h-full flex-col overflow-hidden border border-black/10"
          >
            <div className="relative aspect-[4/3] bg-blue-500/10">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <CardContent className="flex flex-1 flex-col p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                0{index + 1}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-black">
                {project.title}
              </h2>

              <p className="mt-4 text-base leading-8 text-black/65">
                {project.description}
              </p>

              {/* Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <ButtonLink
                  href={project.githubUrl}
                  variant="outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </ButtonLink>

                <ButtonLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
