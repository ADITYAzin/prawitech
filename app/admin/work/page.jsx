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
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight italic mb-2 uppercase">Project Workspace</h1>
          <p className="text-slate-500 font-medium">Monitoring pipeline produksi dan eksekusi tim.</p>
        </div>

        <div className="flex bg-slate-200/50 p-1.5 rounded-2xl border border-slate-200 shadow-inner backdrop-blur-sm">
          <a
            href="?tab=active"
            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === "active"
                ? "bg-white text-slate-900 shadow-xl scale-[1.02] ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Active
          </a>
          <a
            href="?tab=archive"
            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === "archive"
                ? "bg-white text-slate-900 shadow-xl scale-[1.02] ring-1 ring-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Archive
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {!filteredProjects || filteredProjects.length === 0 ? (
          <div className="col-span-full py-40 flex flex-col items-center justify-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200 shadow-sm">
             <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             </div>
             <div className="text-slate-400 font-black uppercase tracking-[0.3em] text-sm">Workspace Clear</div>
             <p className="text-slate-300 text-[10px] font-bold mt-2 italic">EMPTY_STATE_TRIGGERED: {activeTab.toUpperCase()}</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-3">
                    <div className="inline-flex items-center px-3 py-1 rounded-xl bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-[0.15em] border border-blue-100 shadow-sm">
                      {project.orders?.project_type || "PRODUCTION"}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.orders?.project_name || "PROJ_" + project.id.slice(0, 5)}
                    </h3>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest border-l-2 border-slate-200 pl-3">
                      {project.orders?.client_name || "PRIVATE_CLIENT"}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-12 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
                   <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Efficiency</span>
                      <span className="text-sm font-black text-slate-900 tracking-tighter">{project.progress_percentage || 0}%</span>
                   </div>
                   <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner ring-4 ring-white">
                      <div
                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-in-out ${
                          project.progress_percentage >= 100 ? 'bg-emerald-500' : 
                          project.progress_percentage >= 70 ? 'bg-blue-600' : 'bg-slate-900'
                        }`}
                        style={{ width: `${project.progress_percentage || 0}%` }}
                      ></div>
                   </div>
                </div>
              </div>
              
              <div className="px-10 py-6 bg-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full ${
                        project.status === 'review' ? 'bg-amber-400 animate-pulse' : 
                        project.status === 'in_progress' ? 'bg-blue-400' : 'bg-slate-500'
                    }`}></div>
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.15em]">
                        {project.status.replace('_', ' ')}
                    </span>
                </div>
                <button className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2">
                   View Pipeline <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
