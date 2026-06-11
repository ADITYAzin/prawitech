"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Briefcase, 
  ClipboardList, 
  MessageSquare,
  Landmark,
  CalendarClock,
  LogOut,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ClipboardList },
  { label: "Works", href: "/admin/work", icon: Briefcase },
  { label: "Finance", href: "/admin/finance", icon: Landmark },
  { label: "Plans", href: "/admin/plans", icon: CalendarClock },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
];

export default function AdminDashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className={cn(
        "hidden lg:flex flex-col sticky top-0 h-screen bg-white border-r border-slate-200 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}>
        <div className={cn(
          "flex items-center gap-3 p-8 transition-all duration-300",
          isCollapsed && "p-0 justify-center py-8"
        )}>
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm">P</span>
            </div>
            <span className={cn(
              "font-heading text-xl font-bold text-slate-900 tracking-tight transition-opacity duration-200",
              isCollapsed && "opacity-0 w-0"
            )}>
              Prawitech<span className="text-blue-600">.</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={isCollapsed ? item.label : ''}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group",
                  isCollapsed && "justify-center",
                  isActive ? "bg-slate-100 text-blue-600" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                )}
              >
                <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-blue-600")} />
                <span className={cn(!isCollapsed ? "opacity-100" : "opacity-0 w-0 h-0 hidden")}>{item.label}</span>
                {!isCollapsed && <ChevronRight className={cn(
                  "w-4 h-4 ml-auto transition-opacity",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm w-full font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all mb-2"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronsRight className="w-5 h-5 mx-auto" /> : <ChevronsLeft className="w-5 h-5" />}
          </button>
          <Link 
            href="/api/auth/logout"
            title="Sign Out"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-all",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span>Sign Out</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-10">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-black text-xs">P</span>
            </div>
            <span className="font-heading text-lg font-bold text-slate-900">Prawitech</span>
          </Link>
          {/* TODO: Mobile menu drawer can be implemented here */}
          <button className="p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </header>
        
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
