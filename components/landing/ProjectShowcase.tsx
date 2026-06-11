"use client"

/* eslint-disable @next/next/no-img-element */

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
}

function getSkillIconUrl(tech: string): string | null {
  const mapping: { [key: string]: string } = {
    React: "react",
    "Next.js": "nextjs",
    Vue: "vue",
    SvelteKit: "svelte",
    TypeScript: "ts",
    Tailwind: "tailwind",
    Flutter: "flutter",
    "React Native": "react",
    Swift: "swift",
    Kotlin: "kotlin",
    Expo: "expo",
    "Node.js": "nodejs",
    FastAPI: "fastapi",
    Django: "django",
    Go: "go",
    Rust: "rust",
    tRPC: "trpc",
    OpenAI: "openai",
    PostgreSQL: "postgres",
    MongoDB: "mongodb",
    Redis: "redis",
    Supabase: "supabase",
    AWS: "aws",
    GCP: "gcp",
    Vercel: "vercel",
    Docker: "docker",
    Kubernetes: "kubernetes",
    Terraform: "terraform",
    Tauri: "tauri",
    Electron: "electron",
    "GitHub Actions": "githubactions",
    Jest: "jest",
    Playwright: "playwright",
    Sentry: "sentry",
    "D3.js": "d3",
    Firebase: "firebase",
    Python: "python",
  }

  const slug = mapping[tech] || mapping[tech.toLowerCase()]
  return slug ? `/icons/${slug}.svg` : null
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
    },
  ]

  return (
    <section
      id="work"
      className="bg-background py-24 transition-colors duration-300"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
              <span className="bg-border h-px w-6" />
              Selected Work
            </div>
            <h2
              id="work-heading"
              className="text-foreground font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
            >
              Projects we&apos;re <br />
              <span className="text-muted-foreground font-normal italic">proud of.</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="group border-border hover:border-foreground text-foreground hover:bg-accent/40 inline-flex h-auto cursor-pointer items-center gap-2 rounded-full border px-5 py-6 text-xs font-semibold tracking-wider uppercase transition-all"
          >
            <a href="#contact">
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Project Grid */}
        <div className="bg-border border-border grid grid-cols-1 gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.num}
              className="group bg-card relative flex min-h-[500px] flex-col justify-between border-none p-8 shadow-none ring-0 transition-all duration-300 md:p-12"
            >
              {/* Subtle hover gradient */}
              <div className="bg-accent/40 pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className="mb-8 flex items-start justify-between">
                  <Badge
                    variant="secondary"
                    className={`rounded-md border-none px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-none ring-0 ${project.typeColor}`}
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Animated project mockup visual */}
                <div className="border-border bg-muted/60 group-hover:border-border relative mb-8 flex h-64 items-center justify-center overflow-hidden rounded-xl border shadow-sm transition-colors duration-300">
                  <img
                    src="/project.png"
                    alt={`${project.title} mockup`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-foreground mb-3 font-serif text-3xl leading-[1.25] font-normal">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="border-border flex flex-wrap gap-2 border-t pt-6">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-muted-foreground border-border flex items-center gap-1 rounded-md bg-transparent px-2 py-0.5 text-[10px] font-medium shadow-none ring-0"
                    >
                      {getSkillIconUrl(tech) && (
                        <img
                          src={getSkillIconUrl(tech) || ""}
                          alt={tech}
                          className="h-2.5 w-2.5 object-contain"
                          loading="lazy"
                        />
                      )}
                      <span>{tech}</span>
                    </Badge>
                  ))}
                </div>

                {/* Project hover Link */}
                <div className="border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground absolute right-8 bottom-8 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:scale-90 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100">
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
