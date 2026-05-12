import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { SkillShowcase } from "../components/skill-showcase";
import { experience } from "../site-data";

export default function ExperiencePage() {
  return (
    <main className="pb-14 mt-10">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <Badge>Skill Showcase</Badge>
          <h2 className="mt-5 text-3xl font-semibold text-black">
            Tools and strengths, presented the way you wanted.
          </h2>
        </div>
        <SkillShowcase />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 lg:px-10">
        <div className="mb-6">
          <Badge>Journey</Badge>
          <h2 className="mt-5 text-3xl font-semibold text-black">
            Experience and learning path.
          </h2>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.role}>
              <CardContent>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-500">
                  {item.period}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-black">
                  {item.role}
                </h2>
                <p className="mt-4 text-base leading-8 text-black/65">
                  {item.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
