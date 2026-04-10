import { PageHero } from "../components/page-hero";
import { experience, skills } from "../site-data";

export default function ExperiencePage() {
  return (
    <main className="pb-8">
      <PageHero
        eyebrow="Skills + Experience"
        title="The technologies I use and the learning journey behind my work."
        description="A combination of technical skills, project-based learning, and continuous practice as I prepare for internship opportunities."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
          <h2 className="font-serif text-3xl text-stone-950">Core Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-stone-200 bg-stone-50 px-5 py-3 text-sm font-medium text-stone-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-5 px-6 py-8 sm:px-10 lg:px-12">
        <h2 className="font-serif text-3xl text-stone-950">
          Education + Learning Journey
        </h2>
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.06)]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              {item.period}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-950">
              {item.role}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-stone-700">
              {item.details}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
