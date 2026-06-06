import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
        <h1 className="max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          We Build Digital Solutions
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Prawitech delivers modern web development, graphic design, and AI
          automation to help your business grow.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/work"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-foreground/20 px-8 py-3 font-semibold text-foreground hover:bg-foreground/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
