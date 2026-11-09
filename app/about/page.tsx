import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { ButtonLink } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { highlights, profile, services } from "../site-data";

export default function AboutPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="About me"
        title="Full-stack skills. A frontend point of view."
        description="I’m Win Htoo Naing, a full-stack developer who cares most about the frontend: how a product looks, feels, and works for the people using it."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div className="hero-art about-art">
          <div className="hero-art__grid" aria-hidden="true" />
          <div className="hero-art__glow" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--outer" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--inner" aria-hidden="true" />
          <div className="about-art__content">
            <p className="about-art__eyebrow">01 <span>/</span> Developer profile</p>
            <p className="about-art__name">{profile.name}<span>.</span></p>
            <p className="about-art__role">Full-stack developer <span>·</span> frontend focused</p>
            <div className="about-art__chips">
              <span>React</span>
              <span>Next.js</span>
              <span>Product-minded</span>
            </div>
          </div>
        </div>

        <Card className="flex flex-col justify-center p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            How I work
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] text-stone-100 sm:text-4xl">
            I start with the experience, then build what supports it.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-stone-400 sm:text-base">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact">
              Get in touch <span aria-hidden="true" className="ml-2">↗</span>
            </ButtonLink>
          </div>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Where I can contribute
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-stone-100 sm:text-5xl">
            From interface detail to application logic.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-[0.18em] text-indigo-700">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-stone-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-12">
        <div className="editorial-card overflow-hidden rounded-[2rem]">
          <div className="grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  0{index + 1} <span className="mx-1.5 text-cyan-100">/</span>{" "}
                  {item.label}
                </p>
                <p className="mt-4 text-xl font-semibold text-stone-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-indigo-700"
        >
          Next up: see what I’ve built <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
