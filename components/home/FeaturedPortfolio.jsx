"use client";

import Link from "next/link";

const projects = [
  {
    slug: "nexacorp-platform",
    client: "NexaCorp",
    category: "Web Development",
    metric: "Konversi naik 45%",
    gradient: "from-[#0768FB]/80 to-[#1A1A1A]/90",
  },
  {
    slug: "velostart-branding",
    client: "VeloStart",
    category: "Branding & Identity",
    metric: "Brand recall +60%",
    gradient: "from-[#1A1A1A]/80 to-[#0768FB]/70",
  },
  {
    slug: "artha-automation",
    client: "Artha Group",
    category: "AI Automation",
    metric: "Efisiensi operasional 3x",
    gradient: "from-[#0768FB]/60 to-[#0768FB]/90",
  },
  {
    slug: "kreasi-digital",
    client: "Kreasi Digital",
    category: "UI/UX Design",
    metric: "Engagement naik 80%",
    gradient: "from-[#1A1A1A]/70 to-[#0768FB]/50",
  },
];

export default function FeaturedPortfolio() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Jejak Transformasi Digital Klien Kami.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Lihat bagaimana kami membantu berbagai skala bisnis mencapai target
            mereka melalui pendekatan teknologi dan desain yang humanis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 transition-colors duration-300 group-hover:bg-[#1A1A1A]/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
                    {project.client}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/90">
                    {project.metric}
                  </p>
                </div>
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="h-2 w-16 rounded-full bg-white/30" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-semibold text-[#0768FB] hover:underline underline-offset-4"
          >
            Lihat semua karya
          </Link>
        </div>
      </div>
    </section>
  );
}
