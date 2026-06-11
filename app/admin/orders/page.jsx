import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select(`
      *,
      profiles:account_manager_id (
        full_name,
        avatar_url
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    // Silent fail for UI but log error
  }

  const statuses = ["pending", "negotiating", "briefing", "invoiced", "paid"];

  const getPaymentBadgeColor = (status) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800 border-green-200";
      case "partial": return "bg-blue-100 text-blue-800 border-blue-200";
      case "unpaid": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Order Management</h1>
        <p className="text-slate-500 mt-1">Hulu data flow and client acquisition tracking.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {statuses.map((status) => (
          <div key={status} className="flex-shrink-0 w-80">
            <div className="bg-slate-200/60 rounded-t-2xl p-4 border-b border-slate-200">
              <h2 className="font-bold text-slate-800 capitalize flex items-center justify-between">
                {status}
                <span className="bg-white/80 text-slate-600 text-[10px] px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">
                  {orders?.filter(o => o.status === status).length || 0}
                </span>
              </h2>
            </div>
            <div className="bg-slate-100/40 min-h-[calc(100vh-280px)] p-3 rounded-b-2xl border border-t-0 border-slate-200 space-y-3">
              {orders
                ?.filter((order) => order.status === status)
                .map((order) => (
                  <div
                    key={order.id}
                    className="group bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-slate-900 truncate pr-2 group-hover:text-indigo-600 transition-colors">
                        {order.client_name}
                      </h3>
                      <div className={`text-[9px] font-black px-2 py-0.5 rounded-full border uppercase tracking-tighter ${getPaymentBadgeColor(order.payment_status)}`}>
                        {order.payment_status}
                      </div>
                    </div>
                    
                    <div className="text-xs font-medium text-slate-600 mb-4 line-clamp-1 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {order.project_name || "Untitled Project"}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {order.deadline ? new Date(order.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'TBD'}
                      </div>
                      
                      {order.profiles && (
                        <div className="flex items-center gap-2" title={order.profiles.full_name}>
                          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 border border-slate-200 overflow-hidden shadow-inner ring-2 ring-white">
                            {order.profiles.avatar_url ? (
                                <img src={order.profiles.avatar_url} alt={order.profiles.full_name} className="w-full h-full object-cover" />
                            ) : (
                                order.profiles.full_name?.charAt(0) || '?'
                            )}
                          </div>
                        </div>
                      )}
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
