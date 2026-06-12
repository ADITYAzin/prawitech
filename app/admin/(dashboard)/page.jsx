export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import {
  Briefcase,
  ClipboardList,
  MessageSquare,
  Landmark,
  CalendarClock,
  ArrowUpRight,
  Plus,
  Check,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- SERVER ACTIONS ---

async function addReminder(formData) {
  "use server"; // FIX: Posisinya harus di dalam fungsi buat Server Action
  
  const supabase = await createClient();
  const title = formData.get('title');
  const priority = formData.get('priority');
  const { data: { user } } = await supabase.auth.getUser();

  if (!title || !user) return;

  const { error } = await supabase.from('reminders').insert({
    title,
    priority,
    created_by: user.id,
    remind_at: new Date() 
  });

  if (error) {
    console.error('Error adding reminder:', error);
    return;
  }
  revalidatePath('/admin');
}

async function completeReminder(formData) {
  "use server"; // FIX: Posisinya harus di dalam fungsi buat Server Action
  
  const supabase = await createClient();
  const id = formData.get('id');
  if (!id) return;
  
  const { error } = await supabase.from('reminders').update({ is_done: true }).match({ id });

  if (error) {
    console.error('Error completing reminder:', error);
    return;
  }
  revalidatePath('/admin');
}


// --- COMPONENTS ---

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

const ReminderWidget = ({ reminders }) => {
  const priorityStyles = {
    urgent: "border-red-500 bg-red-50 text-red-700",
    high: "border-amber-500 bg-amber-50 text-amber-700",
    medium: "border-blue-500 bg-blue-50 text-blue-700",
    low: "border-slate-400 bg-slate-50 text-slate-600",
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm">
      <h2 className="font-heading text-lg font-bold text-slate-800 mb-4">
        Daily Reminders
      </h2>
      
      {/* Add Reminder Form */}
      <form action={addReminder} className="flex gap-2 mb-4">
        <input
          name="title"
          type="text"
          placeholder="Add a new reminder..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <select name="priority" defaultValue="medium" className="rounded-lg border border-slate-300 bg-slate-50 text-sm font-medium pr-8 pl-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
        <button
          type="submit"
          className="rounded-lg bg-slate-800 text-white px-4 py-2 font-semibold text-sm hover:bg-slate-700 transition-colors flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
        </button>
      </form>
      
      {/* Reminder List */}
      <div className="space-y-2">
        {reminders && reminders.length > 0 ? (
          reminders.map((reminder) => (
            <div key={reminder.id} className={cn(
              "flex items-center justify-between p-3 rounded-lg border-l-4",
              priorityStyles[reminder.priority] || priorityStyles.low
            )}>
              <p className="font-medium text-sm">{reminder.title}</p>
              <form action={completeReminder}>
                <input type="hidden" name="id" value={reminder.id} />
                <button type="submit" title="Mark as done" className="p-1 rounded-full hover:bg-emerald-200 text-emerald-600 transition-colors">
                  <Check className="w-4 h-4" />
                </button>
              </form>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-sm text-slate-400 font-medium">
            No active reminders.
          </div>
        )}
      </div>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch all data in parallel
  const [countsData, remindersData] = await Promise.all([
    Promise.all([
      supabase.from('orders').select('id', { count: 'exact', head: true }),
      supabase.from('projects').select('id', { count: 'exact', head: true }),
      supabase.from('finance').select('id', { count: 'exact', head: true }),
      supabase.from('plans').select('id', { count: 'exact', head: true }),
    ]),
    supabase.from('reminders').select('*').eq('is_done', false).order('priority', { ascending: false }).order('created_at', { ascending: true })
  ]);

  const processCount = (result) => result.error ? 'N/A' : result.count;
  const counts = {
    orders: processCount(countsData[0]),
    projects: processCount(countsData[1]),
    finance: processCount(countsData[2]),
    plans: processCount(countsData[3]),
  };

  const reminders = remindersData.data || [];
  
  if (remindersData.error) {
    console.error("Error fetching reminders:", remindersData.error.message);
  }
  
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

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {sections.map((s) => (
          <DashboardCard key={s.title} {...s} />
        ))}
      </div>
      
      <ReminderWidget reminders={reminders} />

    </div>
  );
}