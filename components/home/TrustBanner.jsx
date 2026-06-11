const clients = [
  "NexaCorp",
  "VeloStart",
  "Artha Group",
  "Kreasi Digital",
  "Solusi Nusantara",
  "Inovasi Prima",
  "TechForge",
  "Bumi Kreatif",
];

function LogoItem({ name }) {
  return (
    <span className="mx-8 flex shrink-0 items-center text-xl font-bold tracking-tight text-[#1A1A1A]/25 sm:text-2xl">
      {name}
    </span>
  );
}

export default function TrustBanner() {
  const doubled = [...clients, ...clients];

  return (
    <section className="border-y border-[#1A1A1A]/5 bg-[#F4F7FB] py-10">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-[#1A1A1A]/40">
      Trusted by innovators across various industries:
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F4F7FB] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F4F7FB] to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee">
          {doubled.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
