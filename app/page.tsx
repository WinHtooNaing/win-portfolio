import Image from "next/image";
import {
  contactLinks,
  experience,
  highlights,
  profile,
  projects,
  services,
} from "./site-data";
import { Badge } from "./components/ui/badge";
import { ButtonLink } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { SkillShowcase } from "./components/skill-showcase";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-4.5rem)] w-full max-w-7xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-16">
        <div>
          <Badge>{profile.title}</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black/65 sm:text-lg">
            {profile.heroDescription}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-blue-500">
            {profile.location} | {profile.availability}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/cv.pdf" size="lg" target="_blank">
              View CV
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Hire Me
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.label}>
                <CardContent className="space-y-2">
                  <p className="text-3xl font-semibold text-black">
                    {item.value}
                  </p>
                  <p className="text-sm leading-6 text-black/60">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/15 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-blue-500/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio.jpg"
                  alt={`${profile.name} portrait`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-300">
                    Portfolio
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{profile.name}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-6">
          <Card>
            <CardContent className="p-8">
              <Badge>About</Badge>
              <h2 className="mt-5 text-3xl font-semibold text-black">
                About Me
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-black/65">
                {profile.about.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <Badge>Services</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-black">
              What I can help build.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-500">
                  Service
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-black/65">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        <div className="mb-6">
          <Badge>Tech Stack</Badge>
          <h2 className="mt-5 text-3xl font-semibold text-black">Skills</h2>
        </div>
        <SkillShowcase />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        <div className="mb-6">
          <Badge>Experience</Badge>
          <h2 className="mt-5 text-3xl font-semibold text-black">
            Learning by building and shipping.
          </h2>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.role}>
              <CardContent>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-black">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {item.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <Badge>Projects</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-black">
              Selected work.
            </h2>
          </div>
          <ButtonLink href="/projects" variant="outline">
            All Projects
          </ButtonLink>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
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
              <CardContent>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-black">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-black/65">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto w-full max-w-7xl px-4 py-8 pb-14 sm:px-8 lg:px-10">
        <Card className="border-blue-500/20 bg-blue-500 ">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <Badge className="border-white/20 bg-white/10 ">Contact</Badge>
              <h2 className="mt-5 text-3xl font-semibold">
                Ready to collaborate?
              </h2>
              <p className="mt-4 text-base leading-8 ">
                Reach out for internships and Junior Web Developer.
              </p>
            </div>
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-xl border border-white/20 bg-black/10 p-5 transition hover:bg-black/15"
                >
                  <p className="text-xs uppercase tracking-[0.22em] ">
                    {link.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{link.value}</p>
                  <p className="mt-2 text-sm leading-7 ">{link.note}</p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section> */}
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
