import { Mail, MessageCircle } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@prawitech.com",
    value: "hello@prawitech.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/62888777117",
    value: "+62 888 7771 117",
    external: true,
  },
];

export default function DirectContact() {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <h2 className="font-heading text-xl font-bold text-[#1A1A1A] sm:text-2xl">
          Reach Out to Us Directly:
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:max-w-2xl">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.label}>
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#1A1A1A]/40" />
                  <span className="text-sm font-medium text-[#1A1A1A]/50">
                    {channel.label}
                  </span>
                </div>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-sans text-lg font-semibold text-[#0768FB] transition-colors duration-200 hover:text-[#0768FB]/80 sm:text-xl"
                >
                  {channel.value}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
