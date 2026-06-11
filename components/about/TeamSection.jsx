import Image from "next/image";

const team = [
  {
    name: "Aditya Pratama Putra",
    role: "Founder & Product Designer",
    img: "/img/about/aditya-pratama-putra.png",
    gradient: "from-[#0768FB]/20",
  },
  {
    name: "Agung Dwi Saputra",
    role: "Co-Founder & AI Specialist",
    img: "/img/about/agung-dwi-saputra.png",
    gradient: "from-[#0768FB]/20",
  },
  {
    name: "Mahafreen Chesna Nugroho",
    role: "Marketing & Social Media Lead",
    img: "/img/about/mahafreen-chesna-nugroho.png",
    gradient: "from-[#0768FB]/20",
  },
  {
    name: "Arya Chaka Braja Wisesa",
    role: "Finance Lead & Full-Stack Developer",
    img: "/img/about/arya-chaka-braja-wisesa.png",
    gradient: "from-[#0768FB]/20",
  },
];

export default function TeamSection() {
  return (
    <section className="border-t border-[#1A1A1A]/5 py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Meet the Thinkers, Designers, and Developers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
            Our collective dedication and expertise serve as the primary engine
            driving Prawitech&apos;s innovations
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mx-auto aspect-[3/4] max-w-[240px] overflow-hidden rounded-2xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`}
                />
                <div className="absolute inset-0 rounded-2xl ring-0 ring-[#0768FB]/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-[#0768FB]/40" />
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-[#1A1A1A]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#1A1A1A]/55">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
