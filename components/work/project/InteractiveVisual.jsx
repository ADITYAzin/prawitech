"use client";

export default function InteractiveVisual({ gradient, caption }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full max-w-lg">
          <div className="animate-interface-panel-1 absolute inset-x-8 top-8 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <div className="h-2 w-24 rounded-full bg-white/40" />
            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/20" />
              <div className="h-2 w-[80%] rounded-full bg-white/15" />
              <div className="h-2 w-[60%] rounded-full bg-white/10" />
            </div>
          </div>

          <div className="animate-interface-panel-2 absolute inset-x-12 top-20 rounded-xl border border-white/25 bg-white/15 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#0768FB]/60" />
              <div className="space-y-1.5">
                <div className="h-2 w-20 rounded-full bg-white/50" />
                <div className="h-2 w-14 rounded-full bg-white/25" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-[#0768FB]/30" />
              <div className="h-12 rounded-lg bg-white/10" />
            </div>
          </div>

          <div className="animate-interface-panel-3 absolute inset-x-16 top-32 rounded-xl border border-white/30 bg-white/20 p-6 backdrop-blur-lg">
            <div className="flex justify-between">
              <div className="h-2 w-16 rounded-full bg-white/50" />
              <div className="h-6 w-16 rounded-full bg-[#0768FB]/70" />
            </div>
            <div className="mt-4 h-24 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>

      {caption && (
        <p className="absolute bottom-6 left-6 text-sm font-medium text-white/70">
          {caption}
        </p>
      )}
    </div>
  );
}
