import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { ButtonLink } from "../components/ui/button";
import { contactLinks, profile } from "../site-data";

export default function ContactPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about what you’re building."
        description="Have a role, project, or collaboration in mind? I’m a full-stack developer focused on frontend engineering and would be glad to hear from you."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-12">
        <div className="editorial-card relative overflow-hidden rounded-[2rem] p-8 text-stone-100 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-indigo-200/30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
              Say hello
            </p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
              Tell me a little about your project.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
              Share what you’re working on, the role you have in mind, or how
              you’d like to collaborate. Reach out by email and I’ll be in touch.
            </p>
            <div className="mt-8">
              <ButtonLink
                href={contactLinks[0].href}
                size="lg"
                className="bg-stone-900 text-white hover:bg-stone-800"
              >
                Email me <span aria-hidden="true" className="ml-2">↗</span>
              </ButtonLink>
            </div>
            <p className="mt-8 break-all border-t border-white/10 pt-5 text-sm font-medium text-stone-300">
              {contactLinks[0].value}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Elsewhere
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-100">
            Find me online.
          </h2>
          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            {contactLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                    {link.label}
                  </p>
                  <p className="mt-2 text-base font-medium text-stone-200 transition group-hover:text-indigo-700">
                    {link.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-stone-500">
                    {link.note}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-lg text-stone-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-700"
                >
                  ↗
                </span>
              </Link>
            ))}
            <div className="py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                Location
              </p>
              <p className="mt-2 text-base font-medium text-stone-200">
                {profile.location}
              </p>
              <p className="mt-1 text-sm text-stone-500">
                {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
