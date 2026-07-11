"use client"

import React from "react"

// 1. Web Applications Mockup (GreenOps Carbon Index Tracker)
export function WebVisual() {
  return (
    <div className="via-card to-card text-foreground relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 p-4 shadow-sm dark:from-emerald-950/20 dark:via-zinc-950 dark:to-neutral-950">
      <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2 dark:border-emerald-900/20">
        <span className="font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-500/70">
          ESG CARBON INDEX
        </span>
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
          -12.4% CO₂
        </span>
      </div>
      {/* Mini Chart */}
      <div className="flex flex-1 items-end gap-1.5 px-1 pt-4 pb-2">
        {[40, 55, 45, 60, 50, 75, 65, 80, 70, 95].map((height, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <div
              style={{ height: `${height}%`, animationDelay: `${i * 50}ms` }}
              className={`animate-bar-grow w-full rounded-t-sm ${
                i === 9
                  ? "bg-gradient-to-t from-emerald-500 to-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                  : "border border-emerald-100 bg-emerald-50/60 dark:border-emerald-950/40 dark:bg-emerald-950/40"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-emerald-500/10 pt-2 text-[10px] text-emerald-600/50 dark:border-emerald-900/20 dark:text-emerald-500/50">
        <span>Jan 2026</span>
        <span>Jun 2026</span>
      </div>
    </div>
  )
}

// 2. Mobile Applications Mockup (Ritmo Habit Tracker)
export function MobileVisual() {
  return (
    <div className="via-card text-foreground relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-violet-500/20 bg-gradient-to-br from-violet-50/50 to-purple-50/30 p-4 shadow-sm dark:from-indigo-950/30 dark:via-slate-950 dark:to-purple-950/30">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-wider text-violet-600 dark:text-violet-300">
          RITMO DAILY
        </span>
        <span className="flex items-center gap-0.5 text-[10px] font-semibold text-amber-500 dark:text-amber-400">
          28 Days
        </span>
      </div>
      <div className="grid flex-1 grid-cols-7 items-center gap-1.5">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={`${day}-${i}`} className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[8px] text-violet-500/70 dark:text-violet-400/70">
              {day}
            </span>
            <div
              style={i === 6 ? { animationDelay: "500ms" } : undefined}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-500 ${
                i < 6
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400"
                  : "animate-reveal-success border border-violet-200 bg-violet-50 text-violet-400 dark:border-violet-900/40 dark:bg-violet-950/50 dark:text-violet-400"
              }`}
            >
              {i < 6 ? (
                "✓"
              ) : (
                <>
                  <span
                    className="animate-fade-out text-violet-400/60"
                    style={{ animationDelay: "500ms" }}
                  >
                    •
                  </span>
                  <span
                    className="animate-fade-in absolute text-emerald-600 opacity-0 dark:text-emerald-400"
                    style={{ animationDelay: "500ms" }}
                  >
                    ✓
                  </span>
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
    <div className="via-card to-card relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-teal-500/20 bg-gradient-to-br from-teal-50/40 dark:from-teal-950/20 dark:via-slate-950 dark:to-slate-950">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-teal-500/10 bg-teal-500/5 px-3 py-2 dark:border-teal-900/30 dark:bg-teal-950/70">
        <span className="font-mono text-[9px] font-bold tracking-wide text-teal-700 dark:text-teal-300">
          DataForge Workbench
        </span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
        </div>
      </div>
      {/* Flow visual nodes */}
      <div className="bg-muted/20 relative flex flex-1 items-center justify-around p-3 dark:bg-slate-950/80">
        <div className="bg-card z-10 flex flex-col items-center rounded border border-teal-500/20 p-1.5 font-mono text-[8px] shadow-sm dark:border-teal-900/40">
          <span className="text-teal-600 dark:text-teal-500">SOURCE</span>
          <span className="mt-0.5 font-medium text-teal-700 dark:text-teal-300">CSV File</span>
        </div>

        {/* Animated link line */}
        <div className="absolute right-[30%] left-[30%] h-[1.5px] bg-teal-100 dark:bg-teal-950">
          <div
            style={{ animationDelay: "200ms" }}
            className="animate-width-grow h-full bg-gradient-to-r from-teal-500 to-emerald-500"
          />
        </div>

        <div className="bg-card z-10 flex flex-col items-center rounded border border-teal-500/20 p-1.5 font-mono text-[8px] shadow-sm dark:border-teal-900/40">
          <span className="text-teal-600 dark:text-teal-500">TARGET</span>
          <span className="mt-0.5 font-medium text-emerald-600 dark:text-emerald-400">DuckDB</span>
        </div>
      </div>
    </div>
  )
}

// 4. CLI Tools Mockup (deploykit CLI execution window)
export function CLIVisual() {
  return (
    <div className="border-border bg-muted/30 text-foreground relative flex h-full w-full flex-col overflow-hidden rounded-lg border p-4 font-mono text-[8.5px] shadow-inner dark:bg-zinc-950 dark:text-zinc-200">
      <div className="border-border text-muted-foreground mb-2 flex items-center justify-between border-b pb-1.5 text-[8px] dark:border-neutral-900">
        <span>bash — deploykit</span>
        <span>12:44:02</span>
      </div>
      <div className="text-foreground/90 flex flex-1 flex-col gap-1 dark:text-zinc-300">
        <div className="font-semibold text-amber-600 dark:text-amber-400">
          $ deploykit --env=production
        </div>
        <div className="text-muted-foreground">[1/3] Uploading bundle (14.2 MB)...</div>
        <div className="text-muted-foreground">[2/3] Injecting production secrets...</div>
        <div
          style={{ animationDelay: "700ms" }}
          className="animate-fade-in-down mt-1 font-semibold text-emerald-600 dark:text-emerald-400"
        >
          ✔ [3/3] Deployment successful! (2.8s)
        </div>
      </div>
    </div>
  )
}

// 5. AI Agents & LLM Apps Mockup (LegalMind Autonomous Reader)
export function AIVisual() {
  return (
    <div className="border-border bg-card text-foreground relative flex h-full w-full flex-col overflow-hidden rounded-lg border p-4 shadow-sm dark:bg-neutral-950">
      <div className="border-border mb-2 flex items-center justify-between border-b pb-2 dark:border-neutral-800">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          <span className="text-muted-foreground font-mono text-[10px]">LegalMind Agent</span>
        </div>
        <span className="text-muted-foreground/60 font-mono text-[9px]">v1.2.0</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden font-mono text-[9px]">
        <div className="border-border bg-muted/30 rounded border p-2 dark:bg-neutral-900">
          <span className="text-muted-foreground">&gt;_ Reading nda_final.pdf</span>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div
              style={{ animationDelay: "150ms" }}
              className="animate-width-grow h-full bg-rose-500"
            />
          </div>
        </div>
        <div className="border-border/80 bg-muted/10 text-muted-foreground rounded border p-2 leading-normal dark:bg-neutral-900/50">
          <span className="text-emerald-600 dark:text-emerald-500">✔</span> Analysis ready. Found 3
          high-risk clauses in section 4.2.
        </div>
      </div>
    </div>
  )
}

// 6. Browser Extensions Mockup (PageSense overlay panel)
export function ExtensionVisual() {
  return (
    <div className="border-border bg-muted/40 relative flex h-full w-full flex-col overflow-hidden rounded-lg border dark:bg-zinc-950">
      {/* Chrome top bar */}
      <div className="border-border bg-muted/80 flex items-center gap-1.5 border-b px-3 py-2 dark:bg-neutral-900">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="border-border/80 bg-card text-muted-foreground flex-1 truncate rounded border px-2 py-0.5 font-mono text-[8px] dark:bg-neutral-950">
          wikipedia.org/wiki/Quantum_Computers
        </div>
      </div>
      {/* Extension Panel overlay */}
      <div className="bg-muted/10 flex flex-1 justify-end p-2 dark:bg-neutral-900/50">
        <div className="border-border bg-card flex w-[65%] flex-col justify-between rounded border p-2 font-mono text-[8px] shadow-sm dark:bg-neutral-950">
          <div className="border-border flex items-center justify-between border-b pb-1.5">
            <span className="font-semibold text-teal-600 uppercase dark:text-teal-400">
              PAGESENSE AI
            </span>
            <span className="text-muted-foreground/60">80%</span>
          </div>
          <p className="text-muted-foreground pt-1.5 text-[7.5px] leading-relaxed">
            Quantum computers use superposition to process complex mathematical calculations
            exponentially faster...
          </p>
          <div className="border-border flex justify-end gap-1 border-t pt-1.5">
            <span className="rounded border border-teal-500/20 bg-teal-500/10 px-1 py-0.5 font-bold text-teal-600 dark:text-teal-400">
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
    <div className="border-border bg-card text-foreground relative flex h-full w-full flex-col overflow-hidden rounded-lg border p-4 font-mono text-[8.5px] shadow-sm dark:bg-zinc-950 dark:text-zinc-200">
      <div className="border-border text-muted-foreground mb-2 flex items-center justify-between border-b pb-1.5 text-[8px] dark:border-neutral-900">
        <span>POST /api/v1/query</span>
        <span className="font-bold text-emerald-600 dark:text-emerald-400">200 OK</span>
      </div>
      <div className="text-muted-foreground flex flex-1 flex-col justify-between gap-0.5">
        <div>{"{"}</div>
        <div className="pl-3">
          <span className="text-emerald-600 dark:text-emerald-400">&quot;status&quot;</span>:{" "}
          <span className="text-amber-600 dark:text-amber-400">&quot;success&quot;</span>,
        </div>
        <div className="pl-3">
          <span className="text-emerald-600 dark:text-emerald-400">&quot;latency&quot;</span>:{" "}
          <span className="text-amber-600 dark:text-amber-400">&quot;14ms&quot;</span>,
        </div>
        <div className="pl-3">
          <span className="text-emerald-600 dark:text-emerald-400">&quot;rows&quot;</span>: [
        </div>
        <div
          style={{ animationDelay: "450ms" }}
          className="animate-fade-in-down rounded border-l border-emerald-500/30 bg-emerald-500/5 py-0.5 pl-6 text-[8px] dark:bg-emerald-500/10"
        >
          {"{ "} <span className="text-purple-600 dark:text-purple-400">&quot;id&quot;</span>: 1,{" "}
          <span className="text-purple-600 dark:text-purple-400">&quot;name&quot;</span>:{" "}
          <span className="text-amber-600 dark:text-amber-400">&quot;cached&quot;</span> {"}"}
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
    <div className="border-border bg-card text-foreground relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border p-4 font-mono text-[8px] shadow-sm dark:bg-neutral-900 dark:text-neutral-200">
      <div className="border-border flex items-center justify-between border-b pb-1.5 dark:border-neutral-800">
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
          <span className="text-foreground/90 text-[9px] font-bold dark:text-neutral-300">
            Figma Sync
          </span>
        </div>
        <span className="text-muted-foreground">Active</span>
      </div>
      <div className="my-2 flex flex-1 flex-col justify-center gap-2">
        <div className="border-border bg-muted/40 flex items-center justify-between rounded border p-1.5 dark:bg-neutral-950">
          <span className="text-muted-foreground">Exporting frames</span>
          <span className="text-orange-500">12 / 12</span>
        </div>
        <div className="bg-muted h-1.5 overflow-hidden rounded-full dark:bg-neutral-800">
          <div
            style={{ animationDelay: "250ms" }}
            className="animate-width-grow h-full bg-gradient-to-r from-orange-500 to-amber-400"
          />
        </div>
      </div>
    </div>
  )
}
