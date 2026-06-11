import { CalendarClock } from "lucide-react";

export default function PlansPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900">
          Plans
        </h1>
        <p className="text-slate-500 mt-1 font-medium">
          This page is under construction.
        </p>
      </div>
      <div className="rounded-2xl border-2 border-dashed border-slate-200 h-96 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <CalendarClock className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="font-bold text-lg text-slate-600">Plans Page</h3>
        <p className="text-sm text-slate-400">The UI and logic for this section are not yet built.</p>
      </div>
    </div>
  );
}
