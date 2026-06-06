export default function Work() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
        Our Work
      </h1>
      <p className="mt-4 max-w-xl text-foreground/70">
        A selection of projects we have delivered for our clients.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-foreground/10 bg-white p-8 text-center">
          <p className="text-sm text-foreground/50">Projects coming soon.</p>
        </div>
      </div>
    </div>
  );
}
