import Link from "next/link";
import { Palette, Globe, Bot, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design & Identity",
    description:
      "We create visual identities and graphic communications that are not only aesthetically pleasing but also strategically designed to strengthen your brand’s position in the eyes of your B2B target market.",
    href: "/services/graphic-design",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Using modern AI-powered web development methods (vibe-coding), we build adaptive, secure, and high-performance websites and web applications with significantly more efficient development times without compromising quality.",
    href: "/services/web-development",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "We design and integrate artificial intelligence (AI)-based automation systems into your business workflows. From data management automation to customer response systems, we eliminate time-consuming manual processes so your team can focus on growth strategies.",
    href: "/services/ai-automation",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Solusi Digital yang Dirancang Spesifik Untukmu.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Eksplorasi layanan kami yang berfokus pada hasil nyata dan
            pertumbuhan bisnis jangka panjang.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-2xl border border-[#1A1A1A]/8 bg-white p-8 transition-all duration-300 hover:border-[#0768FB]/30 hover:shadow-[0_8px_30px_rgba(7,104,251,0.08)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0768FB]/10 transition-colors duration-300 group-hover:bg-[#0768FB]/15">
                  <Icon className="h-5 w-5 text-[#0768FB]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#0768FB]">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#1A1A1A]/70">
                  {service.description}
                </p>
                <ArrowUpRight className="absolute top-8 right-8 h-4 w-4 text-[#1A1A1A]/20 transition-all duration-300 group-hover:text-[#0768FB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
