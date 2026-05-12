import { PageHero } from "../components/page-hero";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { highlights, profile, services } from "../site-data";

export default function AboutPage() {
  return (
    <main className="pb-14">
      <PageHero
        eyebrow="About"
        title=""
        description="A passionate developer dedicated to crafting high-quality software solutions"
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <Card>
          <CardContent className="p-8">
            <Badge>Who I Am</Badge>
            <div className="mt-5 space-y-4 text-base leading-8 text-black/65">
              {profile.about.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-blue-500">
          <CardContent className="space-y-4 p-8">
            <Badge>Highlights</Badge>
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/20 p-5"
              >
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm ">{item.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-500">
                  Strength
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-black">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-black/65">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
