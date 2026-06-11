"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface StepItem {
  num: string
  title: string
  description: string
  duration: string
  colorClass: string
}

export function Process() {
  const steps: StepItem[] = [
    {
      num: "01",
      title: "Discovery",
      description:
        "Deep-dive into goals, users, and constraints. A clear scope prevents most failures before they begin.",
      duration: "1–2 days",
      colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      num: "02",
      title: "Architecture",
      description:
        "System design — stack, data models, API contracts, and infrastructure — before any product code.",
      duration: "3–5 days",
      colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    {
      num: "03",
      title: "Build Sprints",
      description:
        "Two-week sprints with working demos every cycle. Real progress, not slide decks.",
      duration: "2-week cycles",
      colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      num: "04",
      title: "QA & Launch",
      description:
        "Thorough testing, staging environments, and staged rollouts. We don't ship until it's ready.",
      duration: "1 week",
      colorClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    },
    {
      num: "05",
      title: "Post-Launch",
      description:
        "Monitoring, fixes, and feature iterations. Launch is the beginning, not the end.",
      duration: "Ongoing",
      colorClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
  ]

  return (
    <section
      id="process"
      className="bg-muted/50 py-24 transition-colors duration-300"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            <span className="w-6 h-px bg-border" />
            Process
          </div>
          <h2
            id="process-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground mb-4"
          >
            How we work.
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-lg">
            Lean, transparent, and predictable. We keep you in the loop at every step.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-border rounded-2xl overflow-hidden bg-card">
          {steps.map((step) => (
            <Card
              key={step.num}
              className="group relative p-8 bg-transparent hover:bg-accent/40 transition-all duration-300 flex flex-col justify-between min-h-[280px] rounded-none border-none shadow-none ring-0 border-b md:border-b-0 md:border-r border-border last:border-b-0 last:border-r-0"
            >
              <div>
                <span className="font-serif italic text-4xl lg:text-5xl font-normal text-muted-foreground/20 tracking-tight block mb-8 transition-colors duration-300 group-hover:text-muted-foreground/45">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div>
                <Badge
                  variant="secondary"
                  className={`inline-block text-[9px] font-bold tracking-widest uppercase border px-2.5 py-1 rounded-full shadow-none ring-0 ${step.colorClass}`}
                >
                  {step.duration}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
