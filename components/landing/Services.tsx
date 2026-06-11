"use client"

import {
  Globe,
  Smartphone,
  Monitor,
  Terminal,
  Cpu,
  Puzzle,
  Database,
  Grid,
  ArrowUpRight,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  WebVisual,
  MobileVisual,
  DesktopVisual,
  CLIVisual,
  AIVisual,
  ExtensionVisual,
  BackendVisual,
  PluginVisual,
} from "./MockupVisuals"

interface ServiceItem {
  num: string
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  visual: React.ReactNode
}

export function Services() {
  const services: ServiceItem[] = [
    {
      num: "01",
      title: "Web Applications",
      description:
        "Fast, accessible, scalable web apps — from SaaS dashboards to marketing sites and complex platforms.",
      tags: ["React", "Next.js", "SvelteKit"],
      icon: <Globe className="h-4 w-4" />,
      visual: <WebVisual />,
    },
    {
      num: "02",
      title: "Mobile Applications",
      description:
        "Cross-platform and native iOS & Android apps built for performance and delight.",
      tags: ["Flutter", "React Native", "Swift"],
      icon: <Smartphone className="h-4 w-4" />,
      visual: <MobileVisual />,
    },
    {
      num: "03",
      title: "Desktop Software",
      description:
        "Windows, macOS, and Linux desktop apps — from productivity tools to heavy data processing utilities.",
      tags: ["Tauri", "Electron", "Qt"],
      icon: <Monitor className="h-4 w-4" />,
      visual: <DesktopVisual />,
    },
    {
      num: "04",
      title: "CLI Tools",
      description:
        "Developer-first command-line tools, automation scripts, and build pipeline integrations.",
      tags: ["Go", "Rust", "Node.js"],
      icon: <Terminal className="h-4 w-4" />,
      visual: <CLIVisual />,
    },
    {
      num: "05",
      title: "AI Agents & LLM Apps",
      description:
        "RAG systems, autonomous agents, multi-modal pipelines, and LLM-powered products that ship.",
      tags: ["LangChain", "Claude", "MCP"],
      icon: <Cpu className="h-4 w-4" />,
      visual: <AIVisual />,
    },
    {
      num: "06",
      title: "Browser Extensions",
      description:
        "Chrome, Firefox, and Edge extensions that augment the web with custom superpowers.",
      tags: ["Manifest V3", "TypeScript"],
      icon: <Puzzle className="h-4 w-4" />,
      visual: <ExtensionVisual />,
    },
    {
      num: "07",
      title: "APIs & Backends",
      description:
        "Scalable REST and GraphQL APIs, microservices, serverless, and data infrastructure.",
      tags: ["FastAPI", "tRPC", "Postgres"],
      icon: <Database className="h-4 w-4" />,
      visual: <BackendVisual />,
    },
    {
      num: "08",
      title: "Plugins & Integrations",
      description:
        "Custom Figma, Shopify, Notion, and Slack plugins — plus complex third-party API integrations.",
      tags: ["Figma API", "Shopify"],
      icon: <Grid className="h-4 w-4" />,
      visual: <PluginVisual />,
    },
  ]

  return (
    <section
      id="services"
      className="bg-muted/50 py-24 transition-colors duration-300"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
              <span className="bg-border h-px w-6" />
              Services
            </div>
            <h2
              id="services-heading"
              className="text-foreground font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
            >
              Every platform. <br />
              <span className="text-muted-foreground font-normal italic">One studio.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg text-base leading-relaxed font-light lg:mb-1">
            We don&apos;t pick a lane — we build the right software for your use case, whether it
            runs in a browser, on a phone, or in a terminal.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="border-border grid grid-cols-1 border-t border-l md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <Card
              key={svc.num}
              className="group border-border bg-card hover:bg-accent/40 relative flex min-h-[490px] cursor-pointer flex-col justify-between overflow-hidden rounded-none border-t-0 border-r border-b border-l-0 p-6 shadow-none ring-0 transition-all duration-300"
            >
              {/* Subtle hover gradient */}
              <div className="to-foreground/[0.02] pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Card Header Bar */}
                <div className="border-border/30 mb-4 flex items-center justify-between border-b pb-3">
                  <span className="text-muted-foreground/60 font-mono text-[9px] tracking-widest uppercase">
                    {svc.title}
                  </span>
                  <span className="text-muted-foreground/40 group-hover:text-foreground transition-colors duration-300">
                    {svc.icon}
                  </span>
                </div>

                {/* Animated app ui mockup box */}
                <div className="border-border bg-muted/30 group-hover:border-border relative mb-6 flex h-36 items-center justify-center overflow-hidden rounded-xl border p-3 shadow-sm transition-colors duration-300">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:12px_12px]" />
                  <div className="h-full w-full transform transition-transform duration-500 group-hover:scale-[1.01]">
                    {svc.visual}
                  </div>
                </div>

                <h3 className="text-foreground mb-2.5 font-serif text-xl leading-[1.25] font-normal">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-xs leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>

              <div>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-muted-foreground border-border bg-muted rounded-md border px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase shadow-none ring-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground absolute right-6 bottom-6 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
