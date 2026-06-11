import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceBottomCTA({ headline, subheadline, ctaLabel, ctaHref }) {
  return (
    <section className="py-[clamp(64px,8vw,128px)]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="rounded-3xl bg-[#0768FB] px-8 py-16 text-center sm:px-16 sm:py-20 lg:px-24">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subheadline}
          </p>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-[12px] bg-white px-8 py-3.5 text-[15px] font-bold text-[#0768FB] transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
