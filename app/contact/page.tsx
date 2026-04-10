const contactLinks = [
  {
    label: "Email",
    value: "winhtoonaing2003@gmail.com",
    href: "mailto:winhtoonaing2003@gmail.com",
    note: "Best for project inquiries and direct collaboration.",
  },
  {
    label: "GitHub",
    value: "github.com/winhtoonaing",
    href: "https://github.com/winhtoonaing",
    note: "See my code, experiments, and project repositories.",
  },
  {
    label: "LinkedIn",
    value: "win-htoo-naing",
    href: "https://www.linkedin.com/in/win-htoo-naing-51bb79275/",
    note: "Connect with me professionally and follow my journey.",
  },
];

export default function ContactPage() {
  return (
    <main className="pb-8">
      <h1 className="text-4xl  text-stone-950 font-serif px-6 pt-8">
        Contact Me
      </h1>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#f4efe7,_#ffffff_45%,_#e8f1f7)] p-8 shadow-[0_20px_60px_rgba(28,25,23,0.08)]">
          <h2 className="font-serif text-3xl text-stone-950">Get In Touch</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            Reach out for collaboration, development opportunities, or
            professional connections. I am happy to connect through email or
            trusted platforms.
          </p>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.06)] sm:p-8">
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(135deg,_#ffffff,_#f7f1ea)] p-5 transition duration-300 hover:-translate-y-1 hover:border-stone-900 hover:shadow-[0_18px_40px_rgba(28,25,23,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      {link.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-stone-950">
                      {link.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {link.note}
                    </p>
                  </div>
                  <div className="rounded-full border border-stone-300 px-3 py-2 text-sm text-stone-500 transition group-hover:border-stone-950 group-hover:text-stone-950">
                    -&gt;
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
