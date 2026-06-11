"use client"

import React from "react"

// 1. Web Applications Mockup (GreenOps Carbon Index Tracker)
export function WebVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-neutral-950 text-neutral-100 rounded-lg overflow-hidden border border-emerald-900/20 shadow-inner">
      <div className="flex items-center justify-between border-b border-emerald-900/20 pb-2">
        <span className="text-[10px] font-mono text-emerald-500/70 font-medium">
          ESG CARBON INDEX
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          -12.4% CO₂
        </span>
      </div>
      {/* Mini Chart */}
      <div className="flex-1 flex items-end gap-1.5 pt-4 pb-2 px-1">
        {[40, 55, 45, 60, 50, 75, 65, 80, 70, 95].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              style={{ height: `${height}%` }}
              className={`w-full rounded-t-sm transition-all duration-500 ${
                i === 9
                  ? "bg-gradient-to-t from-emerald-500 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                  : "bg-emerald-950/40 group-hover:bg-emerald-900/30 border border-emerald-950/40"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-emerald-500/50 border-t border-emerald-900/20 pt-2">
        <span>Jan 2026</span>
        <span>Jun 2026</span>
      </div>
    </div>
  )
}

// 2. Mobile Applications Mockup (Ritmo Habit Tracker)
export function MobileVisual() {
  return (
    <div className="relative w-full h-full flex flex-col p-4 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-purple-950/60 text-violet-100 rounded-lg overflow-hidden border border-violet-900/30 shadow-inner">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-bold tracking-wider text-violet-300">RITMO DAILY</span>
        <span className="text-[10px] text-amber-400 flex items-center gap-0.5 font-semibold">
          28 Days
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1.5 flex-1 items-center">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={`${day}-${i}`} className="flex flex-col items-center gap-1.5">
            <span className="text-[8px] font-mono text-violet-400/70">{day}</span>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
                i < 6
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-violet-950/50 text-violet-400 border border-violet-900/40 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/30"
              }`}
            >
              {i < 6 ? (
                "✓"
              ) : (
                <>
                  <span className="group-hover:hidden text-violet-400/60">•</span>
                  <span className="hidden group-hover:inline text-emerald-400">✓</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 3. Desktop Software Mockup (DataForge Tauri workbench)
export function DesktopVisual() {
  return (
    <div className="relative w-full h-full flex flex-col bg-gradient-to-br from-teal-950/40 via-slate-950 to-slate-950 rounded-lg border border-teal-900/30 overflow-hidden">
      {/* App Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-teal-950/70 border-b border-teal-900/30">
        <span className="text-[9px] font-bold text-teal-300 tracking-wide font-mono">
          DataForge Workbench
        </span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
        </div>
      </div>
      {/* Flow visual nodes */}
      <div className="flex-1 flex items-center justify-around p-3 relative bg-slate-950/80">
        <div className="flex flex-col items-center bg-slate-900 border border-teal-900/40 p-1.5 rounded text-[8px] font-mono z-10">
          <span className="text-teal-500">SOURCE</span>
          <span className="text-teal-300 mt-0.5 font-medium">CSV File</span>
        </div>

        {/* Animated link line */}
        <div className="absolute left-[30%] right-[30%] h-[1.5px] bg-teal-950">
          <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 w-1/3 group-hover:w-full transition-all duration-1000 animate-pulse" />
        </div>

        <div className="flex flex-col items-center bg-slate-900 border border-teal-900/40 p-1.5 rounded text-[8px] font-mono z-10">
          <span className="text-teal-500">TARGET</span>
          <span className="text-emerald-400 mt-0.5 font-medium">DuckDB</span>
        </div>
      </div>
    </div>
  )
}

// 4. CLI Tools Mockup (deploykit CLI execution window)
export function CLIVisual() {
  return (
    <div className="relative w-full h-full flex flex-col p-4 bg-zinc-950 text-zinc-200 rounded-lg overflow-hidden border border-zinc-900 shadow-inner font-mono text-[8.5px]">
      <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5 mb-2 text-neutral-500 text-[8px]">
        <span>bash — deploykit</span>
        <span>12:44:02</span>
      </div>
      <div className="flex-1 flex flex-col gap-1 text-zinc-300">
        <div className="text-amber-400">$ deploykit --env=production</div>
        <div className="text-neutral-500">[1/3] Uploading bundle (14.2 MB)...</div>
        <div className="text-neutral-500">[2/3] Injecting production secrets...</div>
        <div className="text-emerald-400 font-semibold mt-1 group-hover:block transition-all duration-500">
          ✔ [3/3] Deployment successful! (2.8s)
        </div>
      </div>
    </div>
  )
}

// 5. AI Agents & LLM Apps Mockup (LegalMind Autonomous Reader)
export function AIVisual() {
  return (
    <div className="relative w-full h-full flex flex-col p-4 bg-neutral-950 text-neutral-200 rounded-lg overflow-hidden border border-neutral-800 shadow-inner">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] font-mono text-neutral-400">LegalMind Agent</span>
        </div>
        <span className="text-[9px] font-mono text-neutral-600">v1.2.0</span>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[9px] font-mono">
        <div className="p-2 rounded bg-neutral-900 border border-neutral-800">
          <span className="text-neutral-500">&gt;_ Reading nda_final.pdf</span>
          <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-1">
            <div className="bg-rose-500 h-full w-[85%] group-hover:w-full transition-all duration-1000" />
          </div>
        </div>
        <div className="p-2 rounded bg-neutral-900/50 border border-neutral-900 text-neutral-400 leading-normal">
          <span className="text-emerald-500">✔</span> Analysis ready. Found 3 high-risk clauses in
          section 4.2.
        </div>
      </div>
    </div>
  )
}

// 6. Browser Extensions Mockup (PageSense overlay panel)
export function ExtensionVisual() {
  return (
    <div className="relative w-full h-full flex flex-col bg-zinc-950 border border-neutral-800 rounded-lg overflow-hidden">
      {/* Chrome top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900 border-b border-neutral-800">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-neutral-950 text-[8px] text-neutral-500 px-2 py-0.5 rounded border border-neutral-800/80 font-mono truncate">
          wikipedia.org/wiki/Quantum_Computers
        </div>
      </div>
      {/* Extension Panel overlay */}
      <div className="flex-1 flex justify-end p-2 bg-neutral-900/50">
        <div className="w-[65%] bg-neutral-950 border border-neutral-800 rounded p-2 text-[8px] font-mono flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-neutral-900 pb-1.5">
            <span className="text-teal-400 font-semibold uppercase">PAGESENSE AI</span>
            <span className="text-neutral-600">80%</span>
          </div>
          <p className="text-[7.5px] leading-relaxed text-neutral-400 pt-1.5">
            Quantum computers use superposition to process complex mathematical calculations
            exponentially faster...
          </p>
          <div className="flex justify-end gap-1 pt-1.5 border-t border-neutral-900">
            <span className="bg-teal-500/10 text-teal-400 px-1 py-0.5 rounded border border-teal-500/20 font-bold">
              Summarized
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 7. APIs & Backends Mockup (JSON query interface)
export function BackendVisual() {
  return (
    <div className="relative w-full h-full flex flex-col p-4 bg-zinc-950 text-zinc-200 rounded-lg overflow-hidden border border-zinc-900 shadow-inner font-mono text-[8.5px]">
      <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5 mb-2 text-neutral-500 text-[8px]">
        <span>POST /api/v1/query</span>
        <span className="text-emerald-400 font-bold">200 OK</span>
      </div>
      <div className="flex-1 flex flex-col gap-0.5 text-neutral-400 justify-between">
        <div>{"{"}</div>
        <div className="pl-3">
          <span className="text-emerald-400">&quot;status&quot;</span>:{" "}
          <span className="text-amber-400">&quot;success&quot;</span>,
        </div>
        <div className="pl-3">
          <span className="text-emerald-400">&quot;latency&quot;</span>:{" "}
          <span className="text-amber-400">&quot;14ms&quot;</span>,
        </div>
        <div className="pl-3">
          <span className="text-emerald-400">&quot;rows&quot;</span>: [
        </div>
        <div className="pl-6 bg-emerald-500/5 py-0.5 rounded border-l border-emerald-500/30 text-[8px] group-hover:translate-x-1 transition-transform duration-300">
          {"{ "} <span className="text-purple-400">&quot;id&quot;</span>: 1,{" "}
          <span className="text-purple-400">&quot;name&quot;</span>:{" "}
          <span className="text-amber-400">&quot;cached&quot;</span> {"}"}
        </div>
        <div className="pl-3">]</div>
        <div>{"}"}</div>
      </div>
    </div>
  )
}

// 8. Plugins & Integrations Mockup (FigmaSync exporter)
export function PluginVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 bg-neutral-900 text-neutral-200 rounded-lg overflow-hidden border border-neutral-800 shadow-inner font-mono text-[8px]">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[9px] font-bold text-neutral-300">Figma Sync</span>
        </div>
        <span className="text-neutral-500">Active</span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2 my-2">
        <div className="flex items-center justify-between bg-neutral-950 p-1.5 rounded border border-neutral-800">
          <span className="text-neutral-400">Exporting frames</span>
          <span className="text-orange-400">12 / 12</span>
        </div>
        <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 w-[70%] group-hover:w-full transition-all duration-1000" />
        </div>
      </div>
    </div>
  )
}
