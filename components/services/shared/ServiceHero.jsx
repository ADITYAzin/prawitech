import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceHero({ headline, subheadline, ctaLabel, ctaHref }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-hero-glow absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0768FB]/[0.05] blur-3xl" />
        <div className="animate-hero-glow-delayed absolute top-[15%] right-[8%] h-48 w-48 rounded-full bg-[#0768FB]/[0.04] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pt-16 pb-20 text-center lg:pt-24 lg:pb-32">
        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg lg:text-xl">
          {subheadline}
        </p>
        <div className="mt-10">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#0768FB] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(7,104,251,0.35)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(7,104,251,0.45)]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
