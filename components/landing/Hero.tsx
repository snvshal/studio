"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Premium Background Visuals */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated glowing mesh gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 dark:bg-primary/10 blur-[80px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-emerald-400/5 dark:bg-emerald-500/10 blur-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end w-full">
        {/* Hero Left Content */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6 animate-fade-in">
            <span className="w-8 h-px bg-border" />
            Full-Spectrum Software Studio
          </div>
          <h1
            id="hero-heading"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-foreground"
          >
            We ship <br />
            <span className="italic font-normal text-muted-foreground">software</span> <br />
            that lasts.
          </h1>
        </div>

        {/* Hero Right Content */}
        <div className="flex flex-col items-start lg:pb-3">
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
            From web and mobile to desktop, CLI, AI agents, and browser extensions — we build
            production-grade software for every platform, with teams that care about the craft.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 active:scale-95 text-sm font-medium px-6 py-3 rounded-full transition-all group shadow-sm"
            >
              See Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-border hover:border-foreground text-foreground hover:bg-accent/40 active:scale-95 text-sm font-medium px-6 py-3 rounded-full transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-6 w-full border-t border-border pt-8">
            <div>
              <div className="font-serif text-3xl md:text-4xl text-foreground tabular-nums">
                120+
              </div>
              <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-foreground tabular-nums">8</div>
              <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">
                Platform Types
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-foreground tabular-nums">
                98%
              </div>
              <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-1">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
