import Link from "next/link";

const META_FIELDS = [
  { key: "client", label: "Client" },
  { key: "services", label: "Services" },
  { key: "industry", label: "Industry" },
  { key: "year", label: "Year" },
];

export default function ProjectMetadata({ project }) {
  const { detail } = project;

  return (
    <section className="bg-[#F4F7FB] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <Link
          href="/work"
          className="text-sm font-medium text-[#0768FB] transition-colors duration-200 hover:text-[#0768FB]/80"
        >
          &larr; Back to Work
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <dl className="space-y-8">
            {META_FIELDS.map(({ key, label }) => (
              <div key={key}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/45">
                  {label}
                </dt>
                <dd className="mt-2 font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                  {key === "client" ? project.client : detail[key]}
                </dd>
              </div>
            ))}
          </dl>

          <div className="space-y-6">
            {detail.summary.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-[#1A1A1A]/65 sm:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
