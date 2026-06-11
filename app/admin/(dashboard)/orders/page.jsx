import { createClient } from "@/lib/supabase/server";
import { DollarSign, Calendar, AlertTriangle } from "lucide-react";
import { format } from 'date-fns';

export const dynamic = "force-dynamic";

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "paid":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "invoiced":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default: // unpaid
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount || 0);
};

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select(`
      *,
      account_manager:account_manager_id (
        full_name,
        avatar_url,
        role
      )
    `)
    .order("created_at", { ascending: false });

  const kanbanStatuses = ["pending", "negotiating", "briefing", "invoiced", "paid", "cancelled"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 lg:p-8">
      <header className="mb-8 lg:mb-10">
        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1">
          Order Pipeline
        </h1>
        <p className="text-slate-500 font-medium">
          Monitor status negosiasi, briefing, dan pembayaran dari klien.
        </p>
        {error && (
          <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-sm font-medium">
            <p className="font-bold">Error Loading Orders:</p>
            <p className="font-mono text-xs mt-1">{error.message}</p>
          </div>
        )}
      </header>

      <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 lg:-mx-8 px-6 lg:px-8" style={{ scrollbarWidth: 'none', 'MsOverflowStyle': 'none' }}>
        {kanbanStatuses.map((status) => (
          <div key={status} className="flex-shrink-0 w-80 lg:w-96">
            <div className="bg-white/60 backdrop-blur-sm rounded-t-2xl p-4 border-t border-x border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  {status}
                </h2>
                <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {orders?.filter((o) => o.status === status).length || 0}
                </span>
              </div>
            </div>

            <div className="bg-slate-50/50 min-h-[calc(100vh-280px)] p-4 rounded-b-2xl border border-slate-200 space-y-4">
              {orders
                ?.filter((order) => order.status === status)
                .map((order) => (
                  <div
                    key={order.id}
                    className="group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-blue-600 transition-colors">
                        {order.project_name}
                      </h3>
                      {order.account_manager ? (
                        <div className="flex items-center gap-2" title={`AM: ${order.account_manager.full_name}`}>
                          <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden ring-1 ring-slate-200">
                            {order.account_manager.avatar_url ? (
                              <img src={order.account_manager.avatar_url} alt={order.account_manager.full_name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-slate-700 text-white text-[10px] font-bold">
                                {order.account_manager.full_name?.charAt(0).toUpperCase() || '?'}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div title="Account Manager not assigned">
                           <AlertTriangle className="w-5 h-5 text-amber-500" />
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm font-medium text-slate-500 mb-4">{order.client_name}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className={`text-[10px] font-black px-2 py-1 rounded-md border uppercase tracking-wider ${getStatusBadgeColor(order.payment_status)}`}>
                        {order.payment_status}
                      </div>
                       <div className="text-[10px] font-black px-2 py-1 rounded-md border uppercase tracking-wider bg-slate-100 text-slate-600 border-slate-200">
                        {order.project_type}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>{formatCurrency(order.total_budget)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{order.deadline ? format(new Date(order.deadline), 'dd MMM yyyy') : 'TBD'}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
