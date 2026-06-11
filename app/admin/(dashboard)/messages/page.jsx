import { createClient } from "@/lib/supabase/server";
import { Server, AlertCircle } from "lucide-react";

export default async function MessagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
          Messages
        </h1>
        <p className="text-[#1A1A1A]/60 font-sans mt-1">
          Inquiries from the contact form.
        </p>
      </div>

      <div className="rounded-2xl bg-amber-50 border-2 border-dashed border-amber-200 p-12 text-center shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center border-4 border-white ring-2 ring-amber-200">
            <AlertCircle className="w-8 h-8 text-amber-600" />
          </div>
        </div>
        <h3 className="font-heading font-bold text-lg text-amber-900 mb-2">Schema Mismatch Detected</h3>
        <p className="text-amber-800/80 font-sans text-sm max-w-lg mx-auto">
          This page cannot be displayed because the required table <code>contact_messages</code> is not defined in the Master Schema. Please update the database schema to include this table if you wish to use this feature.
        </p>
      </div>
    </div>
  );
}
