import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="rounded-3xl bg-[#0768FB] px-8 py-16 text-center sm:px-16 sm:py-20 lg:px-24">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a Vision You Want to Realize?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Share your business challenges with us. Let&apos;s build a digital
            ecosystem that not only looks exceptional but performs flawlessly.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-white px-8 py-3.5 text-[15px] font-bold text-[#0768FB] transition-all duration-200 hover:bg-white/90"
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
