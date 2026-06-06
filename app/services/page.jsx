import Link from "next/link";

const services = [
  {
    title: "Graphic Design",
    description: "Branding, visual identity, and creative design assets.",
    href: "/services/graphic-design",
  },
  {
    title: "Web Development",
    description: "Modern, performant websites and web applications.",
    href: "/services/web-development",
  },
  {
    title: "AI Automation",
    description: "Intelligent automation to streamline your workflow.",
    href: "/services/ai-automation",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
        Our Services
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        We offer a range of digital services to help your business thrive in the
        modern landscape.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-2xl border border-foreground/10 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/70">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
