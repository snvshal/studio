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
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 max-w-xl">
          <div className="text-muted-foreground mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
            <span className="bg-border h-px w-6" />
            Process
          </div>
          <h2
            id="process-heading"
            className="text-foreground mb-4 font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
          >
            How we work.
          </h2>
          <p className="text-muted-foreground max-w-lg text-base leading-relaxed font-light text-pretty">
            Lean, transparent, and predictable. We keep you in the loop at every step.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="border-border bg-card grid grid-cols-1 overflow-hidden rounded-2xl border md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step) => (
            <Card
              key={step.num}
              className="group hover:bg-accent/40 border-border relative flex min-h-[280px] flex-col justify-between rounded-none border-b border-none bg-transparent p-8 shadow-none ring-0 transition-all duration-300 last:border-r-0 last:border-b-0 max-sm:px-6 md:border-r md:border-b-0"
            >
              <div>
                <span className="text-muted-foreground/20 group-hover:text-muted-foreground/45 mb-8 block font-serif text-4xl font-normal tracking-tight italic transition-colors duration-300 lg:text-5xl">
                  {step.num}
                </span>
                <h3 className="text-foreground mb-3 text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-xs leading-relaxed font-light text-pretty">
                  {step.description}
                </p>
              </div>

              <div>
                <Badge
                  variant="secondary"
                  className={`inline-block rounded-full border px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase shadow-none ring-0 ${step.colorClass}`}
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
