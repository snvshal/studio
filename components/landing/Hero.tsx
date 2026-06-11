"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [isHovered, setIsHovered] = useState(false)

  // Automatic ambient spotlight floating movement when mouse is not active
  useEffect(() => {
    if (isHovered) return

    let angle = 0
    let animationFrameId: number

    const updatePosition = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radiusX = rect.width * 0.25
      const radiusY = rect.height * 0.2

      angle += 0.003
      setMousePos({
        x: centerX + Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle) * radiusY,
      })

      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-0 flex min-h-dvh w-full items-center overflow-hidden pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Premium Background Visuals */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Background Image Container */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('/hero.gif')",
          }}
        />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

        {/* Interactive glowing grid lines */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.12)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:40px_40px] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.6,
            WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
            maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
          }}
        />

        {/* Animated glowing mesh gradients */}
        <div className="dark:bg-primary/10 animate-float-1 absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-400/10 blur-[80px]" />
        <div className="animate-float-2 absolute right-[-10%] bottom-[20%] h-[45%] w-[45%] rounded-full bg-emerald-400/5 blur-[100px] dark:bg-emerald-500/10" />
      </div>

      {/* Centered content wrapper matching page bounds */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Hero Left Content */}
          <div className="flex flex-col items-start">
            <h1
              id="hero-heading"
              className="text-foreground font-serif text-5xl leading-[0.95] font-normal tracking-tight md:text-7xl lg:text-8xl"
            >
              We ship <br />
              <span className="text-muted-foreground font-normal italic">software</span> <br />
              that lasts.
            </h1>
          </div>

          {/* Hero Right Content */}
          <div className="flex flex-col items-start lg:pb-3">
            <p className="text-muted-foreground mb-8 max-w-lg text-base leading-relaxed font-light md:text-lg">
              We build software tailored to your unique business needs, from web and mobile apps to
              desktop applications and AI agents.
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-primary text-primary-foreground group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-all hover:opacity-90 active:scale-95"
              >
                See Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="border-border hover:border-foreground text-foreground hover:bg-accent/40 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-all active:scale-95"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats Display */}
            <div className="border-border grid w-full grid-cols-3 gap-6 border-t pt-8">
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  120+
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  8
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Platform Types
                </div>
              </div>
              <div>
                <div className="text-foreground font-serif text-3xl tabular-nums md:text-4xl">
                  98%
                </div>
                <div className="text-muted-foreground mt-1 text-[10px] font-bold tracking-wider uppercase">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
