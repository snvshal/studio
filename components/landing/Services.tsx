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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              <span className="w-6 h-px bg-border" />
              Services
            </div>
            <h2
              id="services-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground"
            >
              Every platform. <br />
              <span className="italic font-normal text-muted-foreground">One studio.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-lg lg:mb-1">
            We don&apos;t pick a lane — we build the right software for your use case, whether it
            runs in a browser, on a phone, or in a terminal.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
          {services.map((svc) => (
            <Card
              key={svc.num}
              className="group relative flex flex-col justify-between p-6 rounded-none border-t-0 border-l-0 border-r border-b border-border bg-card hover:bg-accent/40 transition-all duration-300 cursor-pointer overflow-hidden min-h-[490px] shadow-none ring-0"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Card Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/30">
                  <span className="text-[9px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                    {svc.title}
                  </span>
                  <span className="text-muted-foreground/40 group-hover:text-foreground transition-colors duration-300">
                    {svc.icon}
                  </span>
                </div>

                {/* Animated app ui mockup box */}
                <div className="h-36 border border-border bg-muted/30 rounded-xl flex items-center justify-center p-3 relative overflow-hidden mb-6 shadow-sm group-hover:border-border transition-colors duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                  <div className="w-full h-full transform group-hover:scale-[1.01] transition-transform duration-500">
                    {svc.visual}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-normal text-foreground leading-[1.25] mb-2.5">
                  {svc.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {svc.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[9px] font-semibold tracking-wider text-muted-foreground uppercase border border-border bg-muted px-2 py-0.5 rounded-md shadow-none ring-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-foreground group-hover:text-foreground transition-all duration-300">
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
