import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkBottomCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Inspired to Build Your Next Project?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Bring your vision to us. Let&apos;s engineer a relevant, efficient
            solution designed to compete and succeed in today&apos;s market.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-[#0768FB] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(7,104,251,0.35)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(7,104,251,0.45)]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
