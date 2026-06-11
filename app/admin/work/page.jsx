import { createClient } from "@/utils/supabase/server";

export default async function WorkPage({ searchParams }) {
  const supabase = await createClient();
  const params = await searchParams;
  const activeTab = params.tab || "active";

  // Fetch projects with order details
  const { data: projects, error } = await supabase
    .from("projects")
    .select(`
      *,
      orders:order_id (
        client_name,
        project_name,
        project_type
      )
    `)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
  }

  // Filter projects based on status
  const activeStatuses = ["planning", "in_progress", "review"];
  const archiveStatuses = ["completed", "archived"];

  const filteredProjects = projects?.filter((project) => 
    activeTab === "active" 
      ? activeStatuses.includes(project.status) 
      : archiveStatuses.includes(project.status)
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">PROJECT WORKSPACE</h1>
          <p className="text-slate-500 font-medium">Production pipeline and execution monitoring.</p>
        </div>

        <div className="flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200 shadow-inner self-start">
          <a
            href="?tab=active"
            className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === "active"
                ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Active
          </a>
          <a
            href="?tab=archive"
            className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === "archive"
                ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Showcase
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!filteredProjects || filteredProjects.length === 0 ? (
          <div className="col-span-full py-32 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
             <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
             </div>
             <div className="text-slate-400 font-bold uppercase tracking-tighter">Queue Empty</div>
             <p className="text-slate-300 text-[10px] font-medium mt-1">NO PROJECTS FOUND IN {activeTab.toUpperCase()}</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-widest border border-indigo-100">
                      {project.orders?.project_type || "GENERIC"}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                      {project.orders?.project_name || "PROJECT_" + project.id.slice(0, 5)}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                      {project.orders?.client_name || "UNKNOWN CLIENT"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                   <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</span>
                      <span className="text-sm font-black text-slate-900">{project.progress_percentage || 0}%</span>
                   </div>
                   <div className="relative w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-in-out ${
                          project.progress_percentage >= 100 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 
                          project.progress_percentage >= 70 ? 'bg-indigo-600' : 'bg-slate-900'
                        }`}
                        style={{ width: `${project.progress_percentage || 0}%` }}
                      ></div>
                   </div>
                </div>
              </div>
              
              <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'review' ? 'bg-amber-500 animate-pulse' : 
                        project.status === 'in_progress' ? 'bg-blue-600' : 'bg-slate-400'
                    }`}></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                        {project.status.replace('_', ' ')}
                    </span>
                </div>
                <button className="text-[10px] font-black text-slate-900 uppercase tracking-widest hover:text-indigo-600 transition-colors flex items-center gap-1">
                   Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
