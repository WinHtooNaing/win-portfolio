import { PageHero } from "../components/page-hero";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { contactLinks, profile } from "../site-data";

export default function ContactPage() {
  return (
    <main className="pb-14">
      <PageHero
        eyebrow="Contact"
        title="Let's talk about internships or junior roles."
        description="If you have an opportunity or an idea that needs a developer who enjoys building practical products, feel free to reach out."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 pb-16 sm:px-8 lg:px-10">
        <Card className="overflow-hidden border border-neutral-200 bg-white shadow-xl">
          <CardContent className="grid gap-10 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
            {/* Left Content */}
            <div>
              <Badge className="border border-blue-200 bg-blue-50 px-4 py-1 text-blue-600">
                Contact Me
              </Badge>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
                Let’s Build Something Amazing Together
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600">
                I’m currently open to internships, freelance projects, and
                junior web developer opportunities. Feel free to reach out if
                you’d like to collaborate or discuss a project.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:winhtoonaing2003@gmail.com"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
                >
                  Send Email
                </a>

                <a
                  href="https://github.com/winhtoonaing"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                >
                  View GitHub
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {link.label}
                  </p>

                  <p className="mt-2 text-lg font-semibold text-neutral-900 transition group-hover:translate-x-1">
                    {link.value}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    {link.note}
                  </p>
                </a>
              ))}

              {/* Phone Number */}
              <a
                href="tel:+959759518791"
                className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Phone Number
                </p>

                <p className="mt-2 text-lg font-semibold text-neutral-900 transition group-hover:translate-x-1">
                  +959 759518791
                </p>

                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  Available for project discussions and opportunities.
                </p>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
