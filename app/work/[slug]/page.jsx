import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/work"
        className="text-sm font-medium text-accent hover:underline"
      >
        &larr; Back to Work
      </Link>
      <h1 className="mt-6 font-heading text-4xl font-extrabold text-foreground sm:text-5xl capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-4 text-foreground/70 leading-relaxed">
        Project details for this work will be available soon.
      </p>
    </div>
  );
}
