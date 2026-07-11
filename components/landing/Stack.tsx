"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/custom/section"

interface StackCategory {
  title: string
  dotColor: string
  items: string[]
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
    LangChain: "langchain",
    LangGraph: "python",
    Anthropic: "anthropic",
    Pinecone: "pinecone",
    DuckDB: "duckdb",
    Qt: "qt",
    WPF: "windows",
  }

  const slug = mapping[tech] || mapping[tech.toLowerCase()]
  return slug ? `/icons/${slug}.svg` : null
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
  ]

  return (
    <Section id="stack" background="default">
      <div className="mb-16 max-w-xl">
        <div className="text-muted-foreground mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
          <span className="bg-border h-px w-6" />
          Technology
        </div>
        <h2
          id="stack-heading"
          className="text-foreground mb-4 font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
        >
          Right tool, <br />
          <span className="text-muted-foreground font-normal italic">right job.</span>
        </h2>
        <p className="text-muted-foreground max-w-lg text-base leading-relaxed font-light text-pretty">
          We choose the best stack for your use case, not the trendiest one.
        </p>
      </div>

      {/* Stack Grid */}
      <div className="bg-border border-border grid grid-cols-1 gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card
            key={cat.title}
            className="group bg-card hover:bg-accent/40 flex min-h-[300px] flex-col rounded-none border-none p-8 shadow-none ring-0 transition-all duration-300 max-sm:px-6"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${cat.dotColor}`} />
              <span className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                {cat.title}
              </span>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-x-3 gap-y-5">
              {cat.items.map((item) => (
                <div key={item} className="flex flex-col items-center gap-1.5" title={item}>
                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 hover:scale-110">
                    {getSkillIconUrl(item) ? (
                      <Image
                        src={getSkillIconUrl(item) || ""}
                        alt={item}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="border-border/50 bg-muted/40 flex h-full w-full items-center justify-center rounded-xl border">
                        <span className="text-muted-foreground text-[10px] font-semibold">
                          {item.slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-muted-foreground w-full truncate text-center text-[10px] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
