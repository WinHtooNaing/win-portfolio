import Image from "next/image";
import Link from "next/link";
import {
  contactLinks,
  experience,
  highlights,
  profile,
  projects,
  services,
  skills,
} from "./site-data";
import { Badge } from "./components/ui/badge";
import { ButtonLink } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Reveal } from "./components/motion/reveal";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="site-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto grid min-h-[min(740px,calc(100svh-5rem))] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
          <Reveal animateOnLoad>
            <Badge>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
              {profile.availability}
            </Badge>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Full-stack developer <span className="mx-1 text-indigo-500">/</span>
              frontend focus
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.4rem,7.4vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-stone-100">
              Full-stack
              <br />
              developer,
              <br />
              <span className="accent-text">frontend focused.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-stone-400 sm:text-lg">
              {profile.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects" size="lg">
                View selected work <span aria-hidden="true" className="ml-2">↗</span>
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline">
                Contact me
              </ButtonLink>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-stone-500">
              <span>{profile.location}</span>
              <span className="h-1 w-1 rounded-full bg-indigo-500" />
              <span>Frontend focus · Full-stack capability</span>
            </div>
          </Reveal>

          <Reveal
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
            delay={0.18}
            animateOnLoad
          >
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art__grid" aria-hidden="true" />
              <div className="hero-art__glow" aria-hidden="true" />
              <div className="hero-art__orbit hero-art__orbit--outer" aria-hidden="true" />
              <div className="hero-art__orbit hero-art__orbit--inner" aria-hidden="true" />
              <div className="hero-art__monogram" aria-hidden="true">
                WHN<span>.</span>
              </div>
              <div className="hero-art__code" aria-hidden="true">
                <span className="hero-art__code-label">How I approach a product</span>
                <span><i>const</i> focus = [</span>
                <span className="hero-art__code-indent">user interface,</span>
                <span className="hero-art__code-indent">product experience,</span>
                <span className="hero-art__code-indent">the full stack</span>
                <span>];</span>
              </div>
              <div className="hero-art__tag hero-art__tag--top">
                <span className="hero-art__tag-dot" />
                Frontend craft
              </div>
              <div className="hero-art__tag hero-art__tag--bottom">
                Full-stack developer <span aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 px-1 text-xs text-stone-500">
              <span>{profile.name} <span className="mx-1.5 text-indigo-500">/</span> {profile.location}</span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="hero-art__status-dot" />
                Frontend focused
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="editorial-card grid gap-px overflow-hidden rounded-3xl sm:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.1}>
              <div className="bg-white/[0.015] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  0{index + 1} <span className="mx-1.5 text-indigo-500">/</span>{" "}
                  {item.label}
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-stone-100 sm:text-3xl">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge>Selected work</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-stone-100 sm:text-5xl">
              Selected projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-stone-400 transition hover:text-indigo-700"
          >
            View all projects <span className="transition group-hover:translate-x-1">↗</span>
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.12}>
              <Card className="h-full overflow-hidden">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="image-zoom relative block aspect-[1.38] overflow-hidden bg-slate-100"
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="glass-chip absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-700">
                  Project 0{index + 1}
                </span>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-stone-100">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-stone-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="glass-chip rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-stone-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-5 border-t border-white/10 pt-4 text-xs font-medium">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 transition hover:text-indigo-700"
                  >
                    Source code ↗
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 transition hover:text-indigo-700"
                  >
                    Live project ↗
                  </Link>
                </div>
              </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/40 backdrop-blur-xl">
        <Reveal className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24">
          <div>
            <Badge>How I work</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.055em] text-stone-100 sm:text-5xl">
              Strong interfaces, backed by full-stack thinking.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-400">
              I focus on frontend development: shaping interfaces that are
              clear, responsive, and easy to use. My full-stack experience helps
              me connect the details on screen to the systems behind them.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
            >
              More about my approach <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
              <div className="border-t border-white/15 py-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <p className="text-xs tracking-[0.16em] text-indigo-600">
                  0{index + 1}
                </p>
                <h3 className="mt-7 text-lg font-semibold text-stone-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {service.description}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Badge>Toolbox</Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-stone-100 sm:text-5xl">
              Tools I build with.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              Frontend is my focus; this toolkit lets me carry an idea through
              the backend and into a complete product.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5">
            {skills.map((skill, index) => (
              <Reveal key={skill} delay={Math.min(index * 0.035, 0.4)}>
              <span
                className="glass-chip rounded-full px-4 py-2.5 text-sm text-stone-300 transition hover:border-indigo-200 hover:text-indigo-700"
              >
                {skill}
              </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mb-10">
          <Badge>Experience</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-stone-100 sm:text-5xl">
            Experience across the stack.
          </h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {experience.slice(0, 3).map((item, index) => (
            <Reveal key={item.role} delay={index * 0.1}>
            <div className="grid gap-3 py-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-8">
              <p className="text-xs uppercase tracking-[0.16em] text-indigo-600">
                0{index + 1} / {item.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-stone-100">
                  {item.role}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-400">
                  {item.details}
                </p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <Reveal>
        <div className="editorial-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-10 -top-32 h-80 w-80 rounded-full border border-indigo-200/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-2 -top-24 h-64 w-64 rounded-full border border-indigo-200/30"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Get in touch
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
              Have a project in mind?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={contactLinks[0].href}
                size="lg"
                className="bg-stone-900 text-white hover:bg-stone-800"
              >
                Get in touch <span aria-hidden="true" className="ml-2">↗</span>
              </ButtonLink>
              <ButtonLink
                href="/experience"
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:border-indigo-300 hover:text-indigo-700"
              >
                See my experience
              </ButtonLink>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </main>
  );
}
