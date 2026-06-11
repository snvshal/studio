"use client"

import React from "react"

// 1. Web Applications Mockup (GreenOps Carbon Index Tracker)
export function WebVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border border-emerald-900/20 bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-neutral-950 p-4 text-neutral-100 shadow-inner">
      <div className="flex items-center justify-between border-b border-emerald-900/20 pb-2">
        <span className="font-mono text-[10px] font-medium text-emerald-500/70">
          ESG CARBON INDEX
        </span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
          -12.4% CO₂
        </span>
      </div>
      {/* Mini Chart */}
      <div className="flex flex-1 items-end gap-1.5 px-1 pt-4 pb-2">
        {[40, 55, 45, 60, 50, 75, 65, 80, 70, 95].map((height, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <div
              style={{ height: `${height}%` }}
              className={`w-full rounded-t-sm transition-all duration-500 ${
                i === 9
                  ? "bg-gradient-to-t from-emerald-500 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                  : "border border-emerald-950/40 bg-emerald-950/40 group-hover:bg-emerald-900/30"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-emerald-900/20 pt-2 text-[10px] text-emerald-500/50">
        <span>Jan 2026</span>
        <span>Jun 2026</span>
      </div>
    </div>
  )
}

// 2. Mobile Applications Mockup (Ritmo Habit Tracker)
export function MobileVisual() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-violet-900/30 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-purple-950/60 p-4 text-violet-100 shadow-inner">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-wider text-violet-300">RITMO DAILY</span>
        <span className="flex items-center gap-0.5 text-[10px] font-semibold text-amber-400">
          28 Days
        </span>
      </div>
      <div className="grid flex-1 grid-cols-7 items-center gap-1.5">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={`${day}-${i}`} className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[8px] text-violet-400/70">{day}</span>
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-500 ${
                i < 6
                  ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400"
                  : "border border-violet-900/40 bg-violet-950/50 text-violet-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:text-emerald-400"
              }`}
            >
              {i < 6 ? (
                "✓"
              ) : (
                <>
                  <span className="text-violet-400/60 group-hover:hidden">•</span>
                  <span className="hidden text-emerald-400 group-hover:inline">✓</span>
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
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-teal-900/30 bg-gradient-to-br from-teal-950/40 via-slate-950 to-slate-950">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-teal-900/30 bg-teal-950/70 px-3 py-2">
        <span className="font-mono text-[9px] font-bold tracking-wide text-teal-300">
          DataForge Workbench
        </span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
        </div>
      </div>
      {/* Flow visual nodes */}
      <div className="relative flex flex-1 items-center justify-around bg-slate-950/80 p-3">
        <div className="z-10 flex flex-col items-center rounded border border-teal-900/40 bg-slate-900 p-1.5 font-mono text-[8px]">
          <span className="text-teal-500">SOURCE</span>
          <span className="mt-0.5 font-medium text-teal-300">CSV File</span>
        </div>

        {/* Animated link line */}
        <div className="absolute right-[30%] left-[30%] h-[1.5px] bg-teal-950">
          <div className="h-full w-1/3 animate-pulse bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-1000 group-hover:w-full" />
        </div>

        <div className="z-10 flex flex-col items-center rounded border border-teal-900/40 bg-slate-900 p-1.5 font-mono text-[8px]">
          <span className="text-teal-500">TARGET</span>
          <span className="mt-0.5 font-medium text-emerald-400">DuckDB</span>
        </div>
      </div>
    </div>
  )
}

// 4. CLI Tools Mockup (deploykit CLI execution window)
export function CLIVisual() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-zinc-900 bg-zinc-950 p-4 font-mono text-[8.5px] text-zinc-200 shadow-inner">
      <div className="mb-2 flex items-center justify-between border-b border-neutral-900 pb-1.5 text-[8px] text-neutral-500">
        <span>bash — deploykit</span>
        <span>12:44:02</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 text-zinc-300">
        <div className="text-amber-400">$ deploykit --env=production</div>
        <div className="text-neutral-500">[1/3] Uploading bundle (14.2 MB)...</div>
        <div className="text-neutral-500">[2/3] Injecting production secrets...</div>
        <div className="mt-1 font-semibold text-emerald-400 transition-all duration-500 group-hover:block">
          ✔ [3/3] Deployment successful! (2.8s)
        </div>
      </div>
    </div>
  )
}

// 5. AI Agents & LLM Apps Mockup (LegalMind Autonomous Reader)
export function AIVisual() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-neutral-200 shadow-inner">
      <div className="mb-2 flex items-center justify-between border-b border-neutral-800 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          <span className="font-mono text-[10px] text-neutral-400">LegalMind Agent</span>
        </div>
        <span className="font-mono text-[9px] text-neutral-600">v1.2.0</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden font-mono text-[9px]">
        <div className="rounded border border-neutral-800 bg-neutral-900 p-2">
          <span className="text-neutral-500">&gt;_ Reading nda_final.pdf</span>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-neutral-800">
            <div className="h-full w-[85%] bg-rose-500 transition-all duration-1000 group-hover:w-full" />
          </div>
        </div>
        <div className="rounded border border-neutral-900 bg-neutral-900/50 p-2 leading-normal text-neutral-400">
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
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-zinc-950">
      {/* Chrome top bar */}
      <div className="flex items-center gap-1.5 border-b border-neutral-800 bg-neutral-900 px-3 py-2">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 truncate rounded border border-neutral-800/80 bg-neutral-950 px-2 py-0.5 font-mono text-[8px] text-neutral-500">
          wikipedia.org/wiki/Quantum_Computers
        </div>
      </div>
      {/* Extension Panel overlay */}
      <div className="flex flex-1 justify-end bg-neutral-900/50 p-2">
        <div className="flex w-[65%] flex-col justify-between rounded border border-neutral-800 bg-neutral-950 p-2 font-mono text-[8px]">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
            <span className="font-semibold text-teal-400 uppercase">PAGESENSE AI</span>
            <span className="text-neutral-600">80%</span>
          </div>
          <p className="pt-1.5 text-[7.5px] leading-relaxed text-neutral-400">
            Quantum computers use superposition to process complex mathematical calculations
            exponentially faster...
          </p>
          <div className="flex justify-end gap-1 border-t border-neutral-900 pt-1.5">
            <span className="rounded border border-teal-500/20 bg-teal-500/10 px-1 py-0.5 font-bold text-teal-400">
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
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-zinc-900 bg-zinc-950 p-4 font-mono text-[8.5px] text-zinc-200 shadow-inner">
      <div className="mb-2 flex items-center justify-between border-b border-neutral-900 pb-1.5 text-[8px] text-neutral-500">
        <span>POST /api/v1/query</span>
        <span className="font-bold text-emerald-400">200 OK</span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-0.5 text-neutral-400">
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
        <div className="rounded border-l border-emerald-500/30 bg-emerald-500/5 py-0.5 pl-6 text-[8px] transition-transform duration-300 group-hover:translate-x-1">
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
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-[8px] text-neutral-200 shadow-inner">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
          <span className="text-[9px] font-bold text-neutral-300">Figma Sync</span>
        </div>
        <span className="text-neutral-500">Active</span>
      </div>
      <div className="my-2 flex flex-1 flex-col justify-center gap-2">
        <div className="flex items-center justify-between rounded border border-neutral-800 bg-neutral-950 p-1.5">
          <span className="text-neutral-400">Exporting frames</span>
          <span className="text-orange-400">12 / 12</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-800">
          <div className="h-full w-[70%] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-1000 group-hover:w-full" />
        </div>
      </div>
    </div>
  )
}
