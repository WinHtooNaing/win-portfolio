import { PageHero } from "../components/page-hero";
import { SkillShowcase } from "../components/skill-showcase";
import { Reveal } from "../components/motion/reveal";
import { experience } from "../site-data";

export default function ExperiencePage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Skills & experience"
        title="Frontend is my focus. Full-stack is my toolkit."
        description="I work primarily on frontend experiences and bring full-stack skills to the products I build—from interface components to backend services and data."
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Technical skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-100 sm:text-4xl">
            Tools I use across the stack.
          </h2>
        </div>
        <SkillShowcase />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Professional background
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-100 sm:text-4xl">
            Work, education, and projects.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.1}>
            <article
              className="grid gap-3 py-7 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-9"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-700">
                0{index + 1} <span className="mx-1.5 text-stone-600">/</span>{" "}
                {item.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-stone-100 sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-400 sm:text-base">
                  {item.details}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
