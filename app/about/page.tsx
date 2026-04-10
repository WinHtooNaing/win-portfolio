import { PageHero } from "../components/page-hero";

export default function AboutPage() {
  return (
    <main className="pb-8">
      <PageHero
        eyebrow="About"
        title="Full stack JavaScript developer."
        description="I build web and mobile applications using JavaScript and the MERN stack, with strong experience in React, Next.js, and React Native."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]">
          <h2 className="font-serif text-3xl text-stone-950">Who I Am</h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            I am a student from University of Computer Studies (Taungoo) who
            enjoys building applications that combine clean user experience with
            practical functionality. My focus is on improving my skills by
            building real projects and learning modern development tools.
          </p>
        </div>
        <div className="rounded-[2rem] bg-stone-950 p-8 text-stone-50">
          <h2 className="font-serif text-3xl">What I Care About</h2>
          <p className="mt-4 text-base leading-8 text-stone-300">
            I care about performance, usability, and structure. Whether I am
            working on frontend interfaces, backend APIs, or mobile features, I
            aim to keep the product simple, scalable, and easy to grow.
          </p>
        </div>
      </section>
    </main>
  );
}
