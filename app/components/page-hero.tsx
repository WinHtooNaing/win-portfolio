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
    <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-14 sm:px-8 lg:px-10">
      <Badge>{eyebrow}</Badge>
      <h1 className="mt-6 max-w-4xl text-2xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-black/65 sm:text-lg">
        {description}
      </p>
    </section>
  );
}
