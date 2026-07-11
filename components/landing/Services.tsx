"use client"

import { useState } from "react"
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
import { Section } from "@/components/ui/custom/section"
import { cn } from "@/lib/utils"
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
  features: string[]
  icon: React.ReactNode
  visual: React.ReactNode
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const services: ServiceItem[] = [
    {
      num: "01",
      title: "Web Applications",
      description:
        "Fast, accessible, scalable web apps — from SaaS dashboards to marketing sites and complex platforms.",
      features: [
        "Custom SaaS Dashboards",
        "Next.js & React Architectures",
        "Responsive Grid Layouts",
        "SEO & Core Web Vitals Optimization",
      ],
      icon: <Globe className="h-4 w-4" />,
      visual: <WebVisual />,
    },
    {
      num: "02",
      title: "Mobile Applications",
      description:
        "Cross-platform and native iOS & Android apps built for performance and delight.",
      features: [
        "Native iOS & Android Sprints",
        "Flutter & React Native Speed",
        "Smooth 60FPS Animations",
        "App Store Submission Support",
      ],
      icon: <Smartphone className="h-4 w-4" />,
      visual: <MobileVisual />,
    },
    {
      num: "03",
      title: "Desktop Software",
      description:
        "Windows, macOS, and Linux desktop apps — from productivity tools to heavy data processing utilities.",
      features: [
        "Cross-Platform System Tools",
        "Tauri & Rust Architectures",
        "Local Hardware Integrations",
        "OS-Specific API Bundles",
      ],
      icon: <Monitor className="h-4 w-4" />,
      visual: <DesktopVisual />,
    },
    {
      num: "04",
      title: "CLI Tools",
      description:
        "Developer-first command-line tools, automation scripts, and build pipeline integrations.",
      features: [
        "Go & Rust Compiled Binaries",
        "Developer Automation Scripts",
        "Pipeline CI/CD Integrations",
        "Package Manager Publishing",
      ],
      icon: <Terminal className="h-4 w-4" />,
      visual: <CLIVisual />,
    },
    {
      num: "05",
      title: "AI Agents & LLM Apps",
      description:
        "RAG systems, autonomous agents, multi-modal pipelines, and LLM-powered products that ship.",
      features: [
        "RAG & Vector Integrations",
        "Autonomous Agent Workflows",
        "Multi-Modal API Syncing",
        "Custom LLM Fine-Tuning",
      ],
      icon: <Cpu className="h-4 w-4" />,
      visual: <AIVisual />,
    },
    {
      num: "06",
      title: "Browser Extensions",
      description:
        "Chrome, Firefox, and Edge extensions that augment the web with custom superpowers.",
      features: [
        "Chrome & Safari Support",
        "Manifest V3 Compliance",
        "DOM & Page Manipulation",
        "Secure Background Workers",
      ],
      icon: <Puzzle className="h-4 w-4" />,
      visual: <ExtensionVisual />,
    },
    {
      num: "07",
      title: "APIs & Backends",
      description:
        "Scalable REST and GraphQL APIs, microservices, serverless, and data infrastructure.",
      features: [
        "REST & GraphQL Endpoints",
        "Serverless Infrastructure",
        "High-Performance Databases",
        "Redis Cache & WebSockets",
      ],
      icon: <Database className="h-4 w-4" />,
      visual: <BackendVisual />,
    },
    {
      num: "08",
      title: "Plugins & Integrations",
      description:
        "Custom Figma, Shopify, Notion, and Slack plugins — plus complex third-party API integrations.",
      features: [
        "Figma Custom Plug-Ins",
        "Shopify App Implementations",
        "Notion & Slack Integrations",
        "Third-Party API Syncing",
      ],
      icon: <Grid className="h-4 w-4" />,
      visual: <PluginVisual />,
    },
  ]

  return (
    <Section id="services" background="muted">
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
        <p className="text-muted-foreground max-w-lg text-base leading-relaxed font-light text-pretty lg:mb-1">
          We don&apos;t pick a lane. We build the right software for your use case, whether it runs
          in a browser, on a phone, or in a terminal.
        </p>
      </div>

      {/* Services Showcase Layout Container */}
      <div className="flex w-full gap-8">
        {/* Left Column: Interactive vertical list of tabs (Desktop-only) */}
        <div className="border-border/40 hidden w-1/3 shrink-0 flex-col gap-3 border-r pr-8 lg:flex">
          {services.map((svc, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={svc.num}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "group flex w-full cursor-pointer items-center justify-between rounded-xl border p-4 text-left transition-all duration-300 focus:outline-none",
                  isActive
                    ? "border-primary/20 bg-primary/[0.03] text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground border-transparent"
                )}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={cn(
                      "font-mono text-xs transition-colors duration-300",
                      isActive ? "text-primary" : "text-muted-foreground/50"
                    )}
                  >
                    {svc.num}
                  </span>
                  <span className="text-sm font-medium tracking-tight">{svc.title}</span>
                </div>
                <span
                  className={cn(
                    "transition-all duration-300",
                    isActive
                      ? "text-primary translate-x-0 opacity-100"
                      : "text-muted-foreground/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  )}
                >
                  {svc.icon}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right Column: Immersive active component display container (Desktop-only) */}
        <div className="bg-card border-border/40 relative hidden min-h-[540px] flex-1 overflow-hidden rounded-2xl border p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] backdrop-blur-md lg:block">
          {services.map((svc, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={svc.num}
                className={cn(
                  "group absolute inset-8 flex flex-col justify-between transition-all duration-500 ease-in-out",
                  isActive
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-4 scale-[0.98] opacity-0"
                )}
              >
                {/* Visual Representation Frame */}
                <div className="border-border bg-muted/30 relative flex h-[220px] shrink-0 items-center justify-center overflow-hidden rounded-xl border p-4 shadow-sm">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:12px_12px]" />
                  <div className="h-full w-full">{isActive && svc.visual}</div>
                </div>

                {/* Service Details & Features */}
                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-foreground mb-3 font-serif text-2xl font-normal">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl text-sm leading-relaxed font-light text-pretty">
                      {svc.description}
                    </p>

                    {/* Rich Features Checklist */}
                    <ul className="grid max-w-2xl grid-cols-2 gap-3">
                      {svc.features.map((feat) => (
                        <li
                          key={feat}
                          className="text-muted-foreground/90 flex items-center gap-2.5 text-xs"
                        >
                          <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Bar */}
                  <div className="border-border/30 mt-auto flex items-center justify-between border-t pt-4">
                    <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                      Platform {svc.num}
                    </span>
                    <a
                      href="#contact"
                      className="text-primary inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-85"
                    >
                      Request Consultation
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile/Tablet Responsive Accordion Layout (lg:hidden) */}
        <div className="flex w-full flex-col gap-4 lg:hidden">
          {services.map((svc, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={svc.num}
                className={cn(
                  "bg-card group overflow-hidden rounded-2xl border transition-all duration-300",
                  isActive ? "border-primary/20 shadow-sm" : "border-border/40"
                )}
              >
                {/* Accordion Trigger Header Button */}
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "font-mono text-xs",
                        isActive ? "text-primary" : "text-muted-foreground/50"
                      )}
                    >
                      {svc.num}
                    </span>
                    <span className="text-foreground text-base font-medium">{svc.title}</span>
                  </div>
                  <span
                    className={cn(
                      "text-muted-foreground/60 transition-transform duration-300",
                      isActive ? "text-primary rotate-45" : "rotate-0"
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>

                {/* Accordion Expandable Content Frame */}
                <div
                  className={cn(
                    "px-5 transition-all duration-500 ease-in-out",
                    isActive
                      ? "max-h-[600px] pb-5 opacity-100"
                      : "pointer-events-none max-h-0 overflow-hidden opacity-0"
                  )}
                >
                  {/* Mockup Representation Frame */}
                  <div className="border-border bg-muted/30 relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl border p-3 shadow-sm">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:12px_12px]" />
                    <div className="h-full w-full">{isActive && svc.visual}</div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed font-light text-pretty">
                    {svc.description}
                  </p>

                  {/* Bullet features list */}
                  <ul className="mb-6 space-y-2">
                    {svc.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-muted-foreground/90 flex items-center gap-2.5 text-xs"
                      >
                        <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="bg-primary text-primary-foreground inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-3 text-xs font-medium transition-all hover:opacity-90"
                  >
                    Inquire About This Service
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
