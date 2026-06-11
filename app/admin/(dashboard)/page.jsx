export const dynamic = "force-dynamic";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import {
  Briefcase,
  ClipboardList,
  MessageSquare,
  Landmark,
  CalendarClock,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const DashboardCard = ({ title, count, href, icon: Icon, color, bg }) => (
  <Link
    href={href}
    className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
  >
    <div className="flex items-center justify-between mb-4">
      <div
        className={cn("w-12 h-12 rounded-xl flex items-center justify-center", bg)}
      >
        <Icon className={cn("w-6 h-6", color)} />
      </div>
      <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors duration-200" />
    </div>
    <h2 className="font-heading text-lg font-bold text-slate-800">
      {title}
    </h2>
    <p className="text-3xl font-extrabold text-slate-900 mt-1">
      {count}
    </p>
  </Link>
);

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const fetchCount = async (tableName) => {
    const { count, error } = await supabase
      .from(tableName)
      .select('id', { count: 'exact', head: true });
    if (error) {
      console.error(`Error fetching count for ${tableName}:`, error.message);
      return 'N/A';
    }
    return count;
  };
  
  const counts = {
    orders: await fetchCount('orders'),
    projects: await fetchCount('projects'),
    finance: await fetchCount('finance'),
    plans: await fetchCount('plans'),
  };

  const sections = [
    { title: "Active Orders", count: counts.orders, href: "/admin/orders", icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Ongoing Works", count: counts.projects, href: "/admin/work", icon: Briefcase, color: "text-sky-600", bg: "bg-sky-100" },
    { title: "Finance Entries", count: counts.finance, href: "/admin/finance", icon: Landmark, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Scheduled Plans", count: counts.plans, href: "/admin/plans", icon: CalendarClock, color: "text-indigo-600", bg: "bg-indigo-100" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">
          Dashboard
        </h1>
        <p className="text-slate-500 mt-1 font-medium">
          Welcome back, {user?.email ? user.email.split("@")[0] : 'Admin'}. Here is your workspace overview.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((s) => (
          <DashboardCard key={s.title} {...s} />
        ))}
      </div>

    </div>
  );
}
