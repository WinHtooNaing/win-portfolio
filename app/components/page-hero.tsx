export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-14 sm:px-10 lg:px-12 lg:pt-18">
      <p className="text-sm uppercase tracking-[0.24em] text-stone-600">
        {eyebrow}
      </p>
      <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
        {description}
      </p>
    </section>
  );
}
