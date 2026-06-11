export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { projects } from "@/lib/projects";
import {
  Briefcase,
  ClipboardList,
  Palette,
  Code,
  Cpu,
  Mail,
  Users,
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  "graphic-design": Palette,
  "web-development": Code,
  "ai-automation": Cpu,
};

const sections = [
  {
    title: "Orders",
    count: "—",
    href: "/admin/orders",
    icon: ClipboardList,
    color: "text-[#0768FB]",
    bg: "bg-[#0768FB]/5",
  },
  {
    title: "Works",
    count: "—",
    href: "/admin/work",
    icon: Briefcase,
    color: "text-[#0768FB]",
    bg: "bg-[#0768FB]/5",
  },
  {
    title: "Messages",
    count: "—",
    href: "/admin/messages",
    icon: Mail,
    color: "text-[#0768FB]",
    bg: "bg-[#0768FB]/5",
  },
];

const serviceList = [
  { label: "Graphic Design", slug: "graphic-design" },
  { label: "Web Development", slug: "web-development" },
  { label: "AI Automation", slug: "ai-automation" },
];

export default async function AdminDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
          Dashboard
        </h1>
        <p className="text-[#1A1A1A]/60 font-sans mt-1">
          Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.title}
              href={s.href}
              className="rounded-[12px] bg-white border border-[#1A1A1A]/10 p-5 lg:p-6 shadow-sm hover:shadow-md hover:border-[#0768FB]/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] ${s.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${s.color}`} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#1A1A1A]/20 group-hover:text-[#0768FB] transition-colors duration-200" />
              </div>
              <h2 className="font-heading text-base lg:text-lg font-bold text-[#1A1A1A]">
                {s.title}
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-[#0768FB] mt-1">
                {s.count}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="rounded-[12px] bg-white border border-[#1A1A1A]/10 p-5 lg:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading text-lg font-bold text-[#1A1A1A]">
            Services Overview
          </h2>
          <span className="text-xs font-medium text-[#1A1A1A]/40 font-sans uppercase tracking-wider">
            {serviceList.length} active
          </span>
        </div>
        <div className="space-y-3">
          {serviceList.map((svc) => {
            const Icon = serviceIcons[svc.slug] || FolderOpen;
            return (
              <div
                key={svc.slug}
                className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-[#F4F7FB]"
              >
                <div className="w-8 h-8 rounded-[8px] bg-[#0768FB]/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#0768FB]" />
                </div>
                <span className="text-[15px] font-medium text-[#1A1A1A] font-sans">
                  {svc.label}
                </span>
                <span className="ml-auto text-xs font-medium text-[#1A1A1A]/40 font-sans">
                  {projects.filter((p) => p.category === svc.slug).length}{" "}
                  projects
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
