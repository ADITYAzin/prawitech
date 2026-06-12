import { createClient } from "@/lib/supabase/server";

export default async function MessagesPage() {
  const supabase = await createClient();

  // FIX: Tarik data dari tabel 'messages' (sesuai PRD v2.0), BUKAN 'contact_messages'
  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("received_at", { ascending: false });

  if (error) {
    console.error("Waduh error fetch messages:", error.message);
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Messages</h1>
        <p className="text-slate-500 font-medium">Inquiries from the contact form.</p>
        
        {error && (
          <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-sm font-medium">
            <p className="font-bold">Error loading messages:</p>
            <p className="font-mono text-xs mt-1">{error.message}</p>
          </div>
        )}
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {messages && messages.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Sender</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Subject</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Message</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Status</th>
                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-5">
                      <p className="font-bold text-slate-900">{msg.sender_name || 'Unknown'}</p>
                      <p className="text-xs text-slate-500 font-medium">{msg.sender_email || '-'}</p>
                    </td>
                    <td className="p-5 font-bold text-slate-800">{msg.subject || '(No Subject)'}</td>
                    <td className="p-5 text-sm text-slate-600 max-w-xs truncate">{msg.body}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border ${
                        msg.status === 'unread' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                        msg.status === 'read' ? 'bg-slate-100 text-slate-600 border-slate-200' : 
                        'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                        {msg.status}
                      </span>
                    </td>
                    <td className="p-5 text-xs font-bold text-slate-400">
                      {msg.received_at ? new Date(msg.received_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Messages Yet</h3>
            <p className="text-sm text-slate-500">Pesan dari form kontak visitor akan muncul di sini.</p>
          </div>
        )}
      </div>
    </div>
  );
}