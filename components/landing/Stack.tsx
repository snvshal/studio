"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface StackCategory {
  title: string
  dotColor: string
  items: string[]
}

export function Stack() {
  const categories: StackCategory[] = [
    {
      title: "Frontend",
      dotColor: "bg-emerald-500",
      items: ["React", "Next.js", "Vue", "SvelteKit", "TypeScript", "Tailwind"],
    },
    {
      title: "Mobile",
      dotColor: "bg-blue-500",
      items: ["Flutter", "React Native", "Swift", "Kotlin", "Expo"],
    },
    {
      title: "Backend",
      dotColor: "bg-purple-500",
      items: ["Node.js", "FastAPI", "Django", "Go", "Rust", "tRPC"],
    },
    {
      title: "AI / ML",
      dotColor: "bg-rose-500",
      items: ["LangChain", "LangGraph", "OpenAI", "Anthropic", "Pinecone"],
    },
    {
      title: "Database",
      dotColor: "bg-teal-500",
      items: ["PostgreSQL", "MongoDB", "Redis", "DuckDB", "Supabase"],
    },
    {
      title: "Infrastructure",
      dotColor: "bg-amber-500",
      items: ["AWS", "GCP", "Vercel", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "Desktop",
      dotColor: "bg-indigo-500",
      items: ["Tauri", "Electron", "Qt", "WPF"],
    },
    {
      title: "DevOps & QA",
      dotColor: "bg-cyan-500",
      items: ["GitHub Actions", "Jest", "Playwright", "Sentry"],
    },
  ]

  return (
    <section
      id="stack"
      className="bg-background py-24 transition-colors duration-300"
      aria-labelledby="stack-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            <span className="w-6 h-px bg-border" />
            Technology
          </div>
          <h2
            id="stack-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground mb-4"
          >
            Right tool, <br />
            <span className="italic font-normal text-muted-foreground">right job.</span>
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-lg">
            We choose the best stack for your use case, not the trendiest one.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="group p-8 bg-card hover:bg-accent/40 transition-all duration-300 flex flex-col min-h-[240px] border-none shadow-none ring-0 rounded-none"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                  {cat.title}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="text-xs text-foreground/80 border border-border bg-muted px-3 py-1.5 rounded-xl group-hover:bg-background transition-all duration-300 shadow-none ring-0"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
