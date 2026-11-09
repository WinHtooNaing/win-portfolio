import { Badge } from "./ui/badge";

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
    <section className="motion-enter mx-auto w-full max-w-7xl px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <Badge>
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        {eyebrow}
      </Badge>
      <h1 className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-stone-100 sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400 sm:text-lg">
        {description}
      </p>
    </section>
  );
}
