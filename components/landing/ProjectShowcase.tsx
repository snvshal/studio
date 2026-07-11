"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/custom/section"
import Link from "next/link"

interface ProjectItem {
  num: string
  type: string
  typeColor: string
  title: string
  description: string
  image: string
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
      image: "/projects/greenops.jpg",
    },
    {
      num: "02",
      type: "AI Agent",
      typeColor: "text-rose-400 bg-rose-500/10",
      title: "LegalMind AI",
      description:
        "Autonomous legal research agent that reads case documents and drafts summaries — hours reduced to minutes.",
      image: "/projects/legalmind.jpg",
    },
    {
      num: "03",
      type: "Mobile App",
      typeColor: "text-blue-400 bg-blue-500/10",
      title: "Ritmo — Habit Tracker",
      description:
        "Gamified cross-platform habit app that hit #4 in App Store productivity charts within a month.",
      image: "/projects/ritmo.jpg",
    },
    {
      num: "04",
      type: "Chrome Extension",
      typeColor: "text-teal-400 bg-teal-500/10",
      title: "PageSense",
      description:
        "AI-powered extension that lets you summarize, extract, and chat with any webpage or PDF inline.",
      image: "/projects/pagesense.jpg",
    },
    {
      num: "05",
      type: "Desktop App",
      typeColor: "text-purple-400 bg-purple-500/10",
      title: "DataForge",
      description:
        "Local-first ETL desktop tool for data engineers to transform large datasets without cloud dependencies.",
      image: "/projects/dataforge.jpg",
    },
    {
      num: "06",
      type: "CLI Tool",
      typeColor: "text-amber-400 bg-amber-500/10",
      title: "Deploykit",
      description:
        "Open-source CLI automating multi-environment deployments, secret injection, and rollbacks in one command.",
      image: "/projects/deploykit.jpg",
    },
  ]

  return (
    <Section id="work" background="default">
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
          <Link href="#contact">
            Start Your Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>

      {/* Project Grid */}
      <div className="bg-border border-border grid grid-cols-1 gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.num}
            className="group bg-card relative flex flex-col rounded-none border-none p-8 shadow-none ring-0 transition-all duration-300 max-sm:px-6 md:p-12"
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
              <div className="border-border bg-muted/60 group-hover:border-border relative mb-8 aspect-video w-full overflow-hidden rounded-xl border shadow-sm transition-colors duration-300">
                <Image
                  src={project.image}
                  alt={`${project.title} mockup`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-foreground mb-3 font-serif text-3xl leading-[1.25] font-normal">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light text-pretty">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
