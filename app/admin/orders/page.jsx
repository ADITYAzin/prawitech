import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();

  // Fetch orders with profiles relation for Account Manager
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
  }

  const statuses = ["pending", "negotiating", "briefing", "invoiced", "paid"];

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "paid": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "partial": return "bg-blue-100 text-blue-700 border-blue-200";
      case "unpaid": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Order Management</h1>
        <p className="text-slate-500 font-medium">Pipeline hulu data dan monitoring status pembayaran.</p>
      </header>

      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
        {statuses.map((status) => (
          <div key={status} className="flex-shrink-0 w-80">
            <div className="bg-white/50 backdrop-blur-sm rounded-t-3xl p-5 border border-slate-200 border-b-0">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black uppercase tracking-[0.15em] text-slate-400">
                  {status}
                </h2>
                <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {orders?.filter(o => o.status === status).length || 0}
                </span>
              </div>
            </div>
            
            <div className="bg-slate-100/50 min-h-[calc(100vh-280px)] p-4 rounded-b-3xl border border-slate-200 space-y-4">
              {orders
                ?.filter((order) => order.status === status)
                .map((order) => (
                  <div
                    key={order.id}
                    className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                        {order.client_name}
                      </h3>
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Project Name</p>
                        <p className="text-sm font-semibold text-slate-700 line-clamp-1">{order.project_name || "N/A"}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                        <div className={`text-[10px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-wider ${getStatusBadgeColor(order.payment_status)}`}>
                            {order.payment_status}
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {order.deadline ? new Date(order.deadline).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }) : 'No Date'}
                      </div>
                      
                      {order.profiles && (
                        <div className="flex items-center gap-2" title={order.profiles.full_name}>
                          <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-white overflow-hidden ring-1 ring-slate-200">
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
