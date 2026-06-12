"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  ClipboardList,
  Landmark,
  CalendarClock,
  Plus,
  Trash2,
  Edit,
  Check,
  X,
  AlertTriangle,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Info,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount || 0);
};

export default function DashboardClient({
  user,
  activeOrdersCount,
  revenue,
  expense,
  netProfit,
  approachingDeadlines,
  initialReminders,
  remindersTableExists,
  dropdownOrders,
  dropdownPlans
}) {
  const router = useRouter();
  const supabase = createClient();

  // Mouse Glow tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reminders state & DB fallback logic
  const [reminders, setReminders] = useState([]);
  const [usingFallback, setUsingFallback] = useState(!remindersTableExists);
  const [toast, setToast] = useState(null);

  // Form states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    priority: "medium",
    linked_order_id: "",
    linked_plan_id: ""
  });

  // Load reminders
  useEffect(() => {
    if (!remindersTableExists) {
      // Load from localStorage
      const local = localStorage.getItem("prawitech_reminders");
      if (local) {
        try {
          setReminders(JSON.parse(local));
        } catch (e) {
          console.error("Error parsing reminders from local storage", e);
        }
      } else {
        // Initialize default mock reminders
        const mock = [
          {
            id: "mock-1",
            title: "Review Proposal AI Design System",
            note: "Perlu konfirmasi budget tambahan dengan tech lead",
            priority: "urgent",
            is_done: false,
            created_at: new Date().toISOString()
          },
          {
            id: "mock-2",
            title: "Follow up client brief 'Spacecraft Branding'",
            note: "Hubungi pak Budi via WhatsApp sebelum jam 3 sore",
            priority: "high",
            is_done: false,
            created_at: new Date().toISOString()
          },
          {
            id: "mock-3",
            title: "Weekly Internal Team Sync",
            note: "Bahas progress design system dan CMS migration",
            priority: "medium",
            is_done: false,
            created_at: new Date().toISOString()
          },
          {
            id: "mock-4",
            title: "Reconcile Tool Subscriptions Invoice",
            note: "Submit ke admin finance untuk reimburse Figma & Vercel",
            priority: "low",
            is_done: false,
            created_at: new Date().toISOString()
          }
        ];
        localStorage.setItem("prawitech_reminders", JSON.stringify(mock));
        setReminders(mock);
      }
      setUsingFallback(true);
    } else {
      setReminders(initialReminders);
      setUsingFallback(false);
    }
  }, [initialReminders, remindersTableExists]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Create or Update Reminder
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingId) {
      // Editing
      if (usingFallback) {
        const updated = reminders.map(r => {
          if (r.id === editingId) {
            return {
              ...r,
              title: formData.title,
              note: formData.note,
              priority: formData.priority,
              linked_order_id: formData.linked_order_id || null,
              linked_plan_id: formData.linked_plan_id || null
            };
          }
          return r;
        });
        localStorage.setItem("prawitech_reminders", JSON.stringify(updated));
        setReminders(updated);
        showToast("Reminder updated in sandbox storage!");
      } else {
        const { error } = await supabase
          .from("reminders")
          .update({
            title: formData.title,
            note: formData.note,
            priority: formData.priority,
            linked_order_id: formData.linked_order_id || null,
            linked_plan_id: formData.linked_plan_id || null
          })
          .eq("id", editingId);

        if (error) {
          showToast(error.message, "error");
          return;
        }
        showToast("Reminder updated successfully!");
        router.refresh();
      }
    } else {
      // Creating
      const newRem = {
        title: formData.title,
        note: formData.note,
        priority: formData.priority,
        linked_order_id: formData.linked_order_id || null,
        linked_plan_id: formData.linked_plan_id || null,
        is_done: false,
      };

      if (usingFallback) {
        const generated = {
          ...newRem,
          id: `mock-${Date.now()}`,
          created_at: new Date().toISOString()
        };
        const updated = [generated, ...reminders];
        localStorage.setItem("prawitech_reminders", JSON.stringify(updated));
        setReminders(updated);
        showToast("Reminder created in sandbox storage!");
      } else {
        const { error } = await supabase
          .from("reminders")
          .insert([newRem]);

        if (error) {
          showToast(error.message, "error");
          return;
        }
        showToast("Reminder created successfully!");
        router.refresh();
      }
    }

    // Reset Form
    setFormData({
      title: "",
      note: "",
      priority: "medium",
      linked_order_id: "",
      linked_plan_id: ""
    });
    setEditingId(null);
    setIsDrawerOpen(false);
  };

  // Complete Reminder
  const handleComplete = async (id) => {
    // Optimistic Update
    const prev = [...reminders];
    setReminders(reminders.filter(r => r.id !== id));

    if (usingFallback) {
      const updated = prev.map(r => r.id === id ? { ...r, is_done: true } : r).filter(r => !r.is_done);
      localStorage.setItem("prawitech_reminders", JSON.stringify(updated));
      showToast("Completed! (Sandbox Storage)");
    } else {
      const { error } = await supabase
        .from("reminders")
        .update({ is_done: true })
        .eq("id", id);

      if (error) {
        setReminders(prev);
        showToast(error.message, "error");
        return;
      }
      showToast("Reminder marked as completed!");
      router.refresh();
    }
  };

  // Delete Reminder
  const handleDelete = async (id) => {
    const prev = [...reminders];
    setReminders(reminders.filter(r => r.id !== id));

    if (usingFallback) {
      const updated = prev.filter(r => r.id !== id);
      localStorage.setItem("prawitech_reminders", JSON.stringify(updated));
      showToast("Reminder deleted! (Sandbox Storage)", "warning");
    } else {
      const { error } = await supabase
        .from("reminders")
        .delete()
        .eq("id", id);

      if (error) {
        setReminders(prev);
        showToast(error.message, "error");
        return;
      }
      showToast("Reminder deleted successfully!", "warning");
      router.refresh();
    }
  };

  // Open Edit Form
  const startEdit = (rem) => {
    setFormData({
      title: rem.title,
      note: rem.note || "",
      priority: rem.priority || "medium",
      linked_order_id: rem.linked_order_id || "",
      linked_plan_id: rem.linked_plan_id || ""
    });
    setEditingId(rem.id);
    setIsDrawerOpen(true);
  };

  // Priority Weights for sorting
  const priorityWeight = { urgent: 1, high: 2, medium: 3, low: 4 };
  const sortedReminders = [...reminders].sort((a, b) => {
    return (priorityWeight[a.priority] || 9) - (priorityWeight[b.priority] || 9);
  });

  // Days remaining chip calculation for approaching deadlines
  const getDeadlineChip = (deadlineDate) => {
    const diffTime = new Date(deadlineDate) - new Date();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 3) {
      return {
        label: `${diffDays} hari lagi`,
        badgeClass: "bg-red-50 text-red-600 border border-red-200",
        indicatorClass: "bg-red-500"
      };
    } else if (diffDays <= 7) {
      return {
        label: `${diffDays} hari lagi`,
        badgeClass: "bg-amber-50 text-amber-600 border border-amber-200",
        indicatorClass: "bg-amber-500"
      };
    } else {
      return {
        label: `${diffDays} hari lagi`,
        badgeClass: "bg-slate-50 text-slate-600 border border-slate-200",
        indicatorClass: "bg-slate-400"
      };
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4F7FB] overflow-hidden px-6 md:px-12 py-8 select-none font-sans text-[#1A1A1A]">
      
      {/* Background Cursor Glow Effect (prd.md Section 4) */}
      {isMounted && (
        <div
          className="pointer-events-none fixed rounded-full bg-[#0768FB] blur-[140px] opacity-[0.035] transition-all duration-300 ease-out hidden md:block"
          style={{
            left: `${mousePos.x - 200}px`,
            top: `${mousePos.y - 200}px`,
            width: "400px",
            height: "400px",
            zIndex: 0,
          }}
        />
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-6">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight leading-none">
              Dashboard
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              Welcome back, <span className="text-[#1A1A1A] font-bold">{user?.email ? user.email.split("@")[0] : 'Admin'}</span>. Here is your workspace status.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/70 px-3 py-1.5 rounded-full border border-slate-200 text-slate-500 shadow-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {new Date().toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </header>

        {/* Sandbox Storage Notice Banner */}
        {usingFallback && (
          <div className="flex items-start gap-3 p-4 bg-amber-50/80 backdrop-blur-sm border border-amber-200 text-amber-800 rounded-xl shadow-sm animate-page-fade-in">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Sandbox Mode (Reminders)</p>
              <p className="text-xs text-amber-700/95 font-medium mt-0.5">
                The database table <code className="font-bold font-mono">reminders</code> is not yet configured in Supabase. Your changes to reminders are currently being saved locally in your browser (LocalStorage).
              </p>
            </div>
          </div>
        )}

        {/* Top Row: 4 KPI Summary Cards (prd.md Colors & Radii) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Active Orders */}
          <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-xl hover:shadow-lg hover:border-[#0768FB]/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-36">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Active Orders</span>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-[#0768FB] group-hover:border-[#0768FB] transition-colors duration-300">
                <ClipboardList className="w-5 h-5 text-[#0768FB] group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">{activeOrdersCount}</h2>
              <p className="text-xs text-slate-400 font-semibold mt-1">Pending, negotiating & briefing</p>
            </div>
          </div>

          {/* Card 2: Revenue Bulan Ini */}
          <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-xl hover:shadow-lg hover:border-[#0768FB]/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-36">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Revenue (Bulan Ini)</span>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300">
                <TrendingUp className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight truncate" title={formatCurrency(revenue)}>
                {formatCurrency(revenue)}
              </h2>
              <p className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-1">
                <span>Total income received</span>
              </p>
            </div>
          </div>

          {/* Card 3: Expense Bulan Ini */}
          <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-xl hover:shadow-lg hover:border-[#0768FB]/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-36">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Expense (Bulan Ini)</span>
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100 group-hover:bg-rose-600 group-hover:border-rose-600 transition-colors duration-300">
                <TrendingDown className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#1A1A1A] tracking-tight truncate" title={formatCurrency(expense)}>
                {formatCurrency(expense)}
              </h2>
              <p className="text-xs text-rose-600 font-bold flex items-center gap-1 mt-1">
                <span>Operational expenses & tool subs</span>
              </p>
            </div>
          </div>

          {/* Card 4: Net Profit */}
          <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-xl hover:shadow-lg hover:border-[#0768FB]/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-36">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Net Profit</span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300",
                netProfit >= 0 
                  ? "bg-blue-50 border-blue-100 group-hover:bg-[#0768FB] group-hover:border-[#0768FB]" 
                  : "bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:border-rose-600"
              )}>
                <DollarSign className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  netProfit >= 0 
                    ? "text-[#0768FB] group-hover:text-white" 
                    : "text-rose-600 group-hover:text-white"
                )} />
              </div>
            </div>
            <div>
              <h2 className={cn(
                "text-2xl font-extrabold tracking-tight truncate",
                netProfit >= 0 ? "text-[#0768FB]" : "text-rose-600"
              )} title={formatCurrency(netProfit)}>
                {formatCurrency(netProfit)}
              </h2>
              <p className="text-xs text-slate-400 font-semibold mt-1">Margin after expenses</p>
            </div>
          </div>

        </div>

        {/* Content Section: 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left / Middle: Deadlines and Reminders (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Widget A: Strip Deadline Mendekat (Approaching Deadlines) */}
            <section className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-6 bg-rose-500 rounded-full" />
                  <h2 className="font-heading text-lg font-bold text-[#1A1A1A]">Deadline Mendekat (14 Hari)</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                  {approachingDeadlines.length} Orders
                </span>
              </div>

              {approachingDeadlines.length === 0 ? (
                <div className="py-8 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                  <Calendar className="w-8 h-8 text-slate-300" />
                  <p className="text-sm font-medium">Aman! Tidak ada project yang mendekati deadline.</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {approachingDeadlines.map((order) => {
                    const chip = getDeadlineChip(order.deadline);
                    return (
                      <div key={order.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
                        <div className="space-y-1">
                          <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-[#0768FB] transition-colors duration-200">
                            {order.project_name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="font-bold text-slate-700">{order.client_name}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(order.deadline).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-center">
                          <span className={cn("text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md", chip.badgeClass)}>
                            {chip.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Widget B: Interactive Reminder Checklist */}
            <section className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-6 bg-[#0768FB] rounded-full" />
                  <h2 className="font-heading text-lg font-bold text-[#1A1A1A]">Daily Reminders Checklist</h2>
                </div>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      title: "",
                      note: "",
                      priority: "medium",
                      linked_order_id: "",
                      linked_plan_id: ""
                    });
                    setIsDrawerOpen(true);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0768FB] hover:opacity-90 px-3 py-2 rounded-xl transition-all shadow-sm hover:scale-[1.03]"
                >
                  <Plus className="w-4 h-4" />
                  Add Reminder
                </button>
              </div>

              {sortedReminders.length === 0 ? (
                <div className="py-12 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0768FB]">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold mt-2 text-slate-700">Semua tugas selesai!</p>
                  <p className="text-xs max-w-xs text-slate-400 leading-normal">Kamu bebas hari ini. Tambahkan reminder baru untuk mencatat tugas mendatang.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedReminders.map((rem) => {
                    // Priority chip color mapping
                    let priorityBadge = "bg-slate-100 text-slate-600 border-slate-200";
                    if (rem.priority === "urgent") priorityBadge = "bg-red-50 text-red-700 border-red-200";
                    else if (rem.priority === "high") priorityBadge = "bg-amber-50 text-amber-700 border-amber-200";
                    else if (rem.priority === "medium") priorityBadge = "bg-blue-50 text-blue-700 border-blue-200";

                    return (
                      <div
                        key={rem.id}
                        className="group flex items-start gap-4 p-4 bg-slate-50/50 hover:bg-white rounded-xl border border-slate-200/60 hover:border-[#0768FB]/20 hover:shadow-md transition-all duration-300"
                      >
                        {/* Custom Animated Checkbox (Slight Radius 4px-6px as per prd.md) */}
                        <button
                          onClick={() => handleComplete(rem.id)}
                          className="mt-1 w-5 h-5 rounded-md border-2 border-slate-300 hover:border-[#0768FB] flex items-center justify-center transition-all bg-white shrink-0 hover:scale-105"
                          title="Complete task"
                        >
                          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0768FB] opacity-0 hover:opacity-20 transition-opacity" />
                        </button>

                        {/* Text and links */}
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                              {rem.title}
                            </span>
                            <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border", priorityBadge)}>
                              {rem.priority}
                            </span>
                          </div>
                          
                          {rem.note && (
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {rem.note}
                            </p>
                          )}

                          {/* Linked fields indicator */}
                          {(rem.order || rem.plan) && (
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {rem.order && (
                                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 font-semibold border border-slate-200 flex items-center gap-1">
                                  <ClipboardList className="w-3 h-3 text-slate-400" />
                                  Order: {rem.order.project_name}
                                </span>
                              )}
                              {rem.plan && (
                                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 font-semibold border border-slate-200 flex items-center gap-1">
                                  <CalendarClock className="w-3 h-3 text-slate-400" />
                                  Plan: {rem.plan.title}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Action buttons (always visible, highlight on hover) */}
                        <div className="flex items-center gap-1 ml-auto shrink-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button
                            onClick={() => startEdit(rem)}
                            className="p-1.5 hover:bg-slate-100 hover:text-blue-600 text-slate-400 rounded-md transition-colors"
                            title="Edit task"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(rem.id)}
                            className="p-1.5 hover:bg-rose-50 hover:text-rose-600 text-slate-400 rounded-md transition-colors"
                            title="Delete task"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

          </div>

          {/* Right Column: Quick Stats & Access (1/3 width) */}
          <div className="space-y-6">
            
            {/* Quick Actions Panel */}
            <section className="bg-white border border-[#1A1A1A]/10 rounded-xl p-6 shadow-sm">
              <h3 className="font-heading font-bold text-base text-slate-800 mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#0768FB]" />
                Quick Operations
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/admin/orders")}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-3 text-left transition-all hover:scale-[1.01] flex items-center justify-between text-xs font-bold text-slate-700"
                >
                  <span>Go to Orders Pipeline</span>
                  <ClipboardList className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => router.push("/admin/work")}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-3 text-left transition-all hover:scale-[1.01] flex items-center justify-between text-xs font-bold text-slate-700"
                >
                  <span>Manage Works (CMS)</span>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => router.push("/admin/finance")}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-3 text-left transition-all hover:scale-[1.01] flex items-center justify-between text-xs font-bold text-slate-700"
                >
                  <span>Record Finance Entries</span>
                  <Landmark className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </section>

            {/* Quick Info Box (Less is More, but Impactful) */}
            <section className="bg-gradient-to-br from-[#0768FB] to-[#054ec4] text-white rounded-xl p-6 shadow-md relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-x-4 translate-y-4 group-hover:scale-125 transition-transform duration-500" />
              <h3 className="font-heading font-bold text-lg mb-2">Prawitech Platform</h3>
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                This dashboard gives you real-time metrics of active client orders, monthly cash flow status, and approaching deadlines. Ensure account managers review reminders daily.
              </p>
              <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-[10px] font-black tracking-widest uppercase">
                <span>Versi 2.0</span>
                <span>Production ready</span>
              </div>
            </section>

          </div>

        </div>

      </div>

      {/* Floating Side Drawer for "+ Add" / "Edit" Reminder (Modern Glassmorphism) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-page-fade-in bg-black/20 backdrop-blur-xs">
          
          {/* Backdrop click close */}
          <div className="flex-1" onClick={() => setIsDrawerOpen(false)} />
          
          {/* Drawer container (obedient to Standard Radius 12px / Large Radius 24px) */}
          <div className="w-full max-w-md bg-white border-l border-slate-200 p-8 shadow-2xl flex flex-col h-full overflow-y-auto relative animate-interface-panel-2">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-6 right-6 p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              title="Close panel"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
              {editingId ? "Edit Reminder" : "New Daily Reminder"}
            </h3>
            <p className="text-xs text-slate-400 font-semibold mb-8">
              {editingId ? "Modifikasi detail tugas harian Anda" : "Catat tugas baru untuk ditindaklanjuti hari ini"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Title Input (Slight Radius 4px-6px as per prd.md) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Reminder Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] text-[#1A1A1A]"
                    placeholder="Contoh: Kirim invoice down payment"
                    required
                  />
                </div>

                {/* Notes Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] text-[#1A1A1A] h-24 resize-none"
                    placeholder="Catatan detail mengenai tugas..."
                  />
                </div>

                {/* Priority Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Priority Level
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["low", "medium", "high", "urgent"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData({ ...formData, priority: p })}
                        className={cn(
                          "py-2 px-1 rounded-md text-[10px] font-black uppercase tracking-wider border transition-all text-center",
                          formData.priority === p
                            ? "bg-[#0768FB] border-[#0768FB] text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Link to Order (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Link to Active Order (Optional)
                  </label>
                  <select
                    value={formData.linked_order_id}
                    onChange={(e) => setFormData({ ...formData, linked_order_id: e.target.value })}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] text-slate-700 bg-white"
                  >
                    <option value="">-- No Order Selected --</option>
                    {dropdownOrders.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.project_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Link to Plan (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Link to Schedule Plan (Optional)
                  </label>
                  <select
                    value={formData.linked_plan_id}
                    onChange={(e) => setFormData({ ...formData, linked_plan_id: e.target.value })}
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:border-[#0768FB] focus:outline-none focus:ring-1 focus:ring-[#0768FB] text-slate-700 bg-white"
                  >
                    <option value="">-- No Plan Selected --</option>
                    {dropdownPlans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Submit Buttons */}
              <div className="pt-8 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-xs text-slate-600 hover:bg-slate-50 transition-colors uppercase tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#0768FB] hover:opacity-90 text-white rounded-xl font-bold text-xs transition-opacity uppercase tracking-wider shadow-sm"
                >
                  {editingId ? "Save Changes" : "Create Task"}
                </button>
              </div>
            </form>
          </div>

        </div>
      )}

      {/* Floating Micro Toast Notifications */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-page-fade-in">
          <div className={cn(
            "flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg border text-sm font-semibold backdrop-blur-md",
            toast.type === "success" && "bg-white/90 border-[#0768FB]/20 text-[#0768FB]",
            toast.type === "warning" && "bg-rose-50/90 border-rose-200 text-rose-700",
            toast.type === "error" && "bg-red-50/90 border-red-200 text-red-700"
          )}>
            {toast.type === "success" ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertTriangle className="w-4 h-4" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

    </div>
  );
}
