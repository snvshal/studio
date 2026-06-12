"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface TestimonialItem {
  quote: string
  name: string
  title: string
  initials: string
  stars: number
}

export function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      stars: 5,
      quote:
        "Codeware Studio built our entire SaaS product from scratch in under three months. The code quality was extraordinary — our engineering team still references it as the gold standard.",
      initials: "SR",
      name: "Siddharth Rao",
      title: "CTO, Streamline Analytics",
    },
    {
      stars: 5,
      quote:
        "We came with a vague idea for an AI agent and they turned it into a production product in 8 weeks. The depth of LLM expertise they have is genuinely rare.",
      initials: "PK",
      name: "Priya Kapoor",
      title: "Founder, LegalMind",
    },
    {
      stars: 5,
      quote:
        "The mobile app they built hit #4 in the App Store productivity charts. I've worked with many agencies — Codeware is on a completely different level.",
      initials: "AM",
      name: "Aryan Mehta",
      title: "Product Lead, Ritmo",
    },
    {
      stars: 5,
      quote:
        "Needed a complex Tauri app with Rust backends. Very few teams can do that well. They delivered on time, on budget, and the performance is astonishing.",
      initials: "TG",
      name: "Thomas Greene",
      title: "Eng. Manager, DataForge",
    },
  ]

  return (
    <section
      id="testi"
      className="bg-muted/50 py-24 transition-colors duration-300"
      aria-labelledby="testi-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 max-w-xl">
          <div className="text-muted-foreground mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
            <span className="bg-border h-px w-6" />
            Client Voices
          </div>
          <h2
            id="testi-heading"
            className="text-foreground mb-4 font-serif text-4xl leading-[1.05] font-normal md:text-5xl lg:text-6xl"
          >
            What our partners <br />
            <span className="text-muted-foreground font-normal italic">say about us.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="bg-border border-border grid grid-cols-1 gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
          {testimonials.map((testi, idx) => (
            <Card
              key={idx}
              className="group bg-card hover:bg-accent/40 flex min-h-[300px] flex-col justify-between rounded-none border-none p-8 shadow-none ring-0 transition-all duration-300 max-sm:px-6 md:p-12"
            >
              <div>
                <div
                  className="mb-6 flex gap-0.5 text-[10px] tracking-wide text-amber-500"
                  aria-label="5 stars rating"
                >
                  {"★".repeat(testi.stars)}
                </div>
                <p className="text-foreground mb-8 font-serif text-lg leading-relaxed font-normal text-pretty italic md:text-xl">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <footer className="border-border flex items-center gap-4 border-t pt-6">
                <div className="border-border bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border">
                  <Image
                    src="/profile.png"
                    alt={testi.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <cite className="text-foreground block text-sm font-semibold not-italic">
                    {testi.name}
                  </cite>
                  <span className="text-muted-foreground mt-0.5 block text-[10px] font-semibold tracking-wider uppercase">
                    {testi.title}
                  </span>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
