"use client"

import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectItem {
  num: string
  type: string
  typeColor: string
  title: string
  description: string
  stack: string[]
  emoji: string
  visual: React.ReactNode
}

export function ProjectShowcase() {
  const projects: ProjectItem[] = [
    {
      num: "01",
      type: "Web Application",
      typeColor: "text-emerald-400 bg-emerald-500/10",
      title: "GreenOps Dashboard",
      description:
        "Real-time sustainability analytics platform with interactive ESG reporting for enterprise clients.",
      stack: ["Next.js", "D3.js", "Supabase", "Vercel"],
      emoji: "🌱",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🌱</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [GreenOps Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      type: "AI Agent",
      typeColor: "text-rose-400 bg-rose-500/10",
      title: "LegalMind AI",
      description:
        "Autonomous legal research agent that reads case documents and drafts summaries — hours reduced to minutes.",
      stack: ["Python", "LangGraph", "Claude API", "Pinecone"],
      emoji: "🤖",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🤖</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [LegalMind Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      type: "Mobile App",
      typeColor: "text-blue-400 bg-blue-500/10",
      title: "Ritmo — Habit Tracker",
      description:
        "Gamified cross-platform habit app that hit #4 in App Store productivity charts within a month.",
      stack: ["Flutter", "Firebase", "RevenueCat"],
      emoji: "📱",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">📱</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [Ritmo Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      type: "Chrome Extension",
      typeColor: "text-teal-400 bg-teal-500/10",
      title: "PageSense",
      description:
        "AI-powered extension that lets you summarize, extract, and chat with any webpage or PDF inline.",
      stack: ["Manifest V3", "TypeScript", "OpenAI"],
      emoji: "🧩",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🧩</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [PageSense Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
    {
      num: "05",
      type: "Desktop App",
      typeColor: "text-purple-400 bg-purple-500/10",
      title: "DataForge",
      description:
        "Local-first ETL desktop tool for data engineers to transform large datasets without cloud dependencies.",
      stack: ["Tauri", "Rust", "React", "DuckDB"],
      emoji: "🖥️",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🖥️</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [DataForge Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
    {
      num: "06",
      type: "CLI Tool",
      typeColor: "text-amber-400 bg-amber-500/10",
      title: "deploykit",
      description:
        "Open-source CLI automating multi-environment deployments, secret injection, and rollbacks in one command.",
      stack: ["Go", "Cobra", "AWS SDK", "GitHub Actions"],
      emoji: "⚡",
      visual: (
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">⚡</span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
              [deploykit Mockup Image]
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section
      id="work"
      className="bg-background py-24 transition-colors duration-300"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              <span className="w-6 h-px bg-border" />
              Selected Work
            </div>
            <h2
              id="work-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground"
            >
              Projects we&apos;re <br />
              <span className="italic font-normal text-muted-foreground">proud of.</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="group inline-flex items-center gap-2 border border-border hover:border-foreground text-foreground hover:bg-accent/40 text-xs font-semibold uppercase tracking-wider px-5 py-6 h-auto rounded-full transition-all cursor-pointer"
          >
            <a href="#contact">
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {projects.map((project) => (
            <Card
              key={project.num}
              className="group relative bg-card p-8 md:p-12 flex flex-col justify-between transition-all duration-300 min-h-[500px] border-none shadow-none ring-0"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-8">
                  <Badge
                    variant="secondary"
                    className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-none ring-0 border-none ${project.typeColor}`}
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Animated project mockup visual */}
                <div className="h-48 border border-border bg-muted/60 rounded-xl flex items-center justify-center p-4 relative overflow-hidden mb-8 shadow-sm group-hover:border-border transition-colors duration-300">
                  {/* Visual Background grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  <div className="w-full max-w-[280px] h-[140px] transform group-hover:scale-[1.02] transition-transform duration-500">
                    {project.visual}
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-normal text-foreground leading-[1.25] mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 border-t border-border pt-6">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] font-medium text-muted-foreground px-2 py-0.5 rounded-md border-border bg-transparent shadow-none ring-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project hover Link */}
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 group-hover:border-foreground group-hover:text-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
