"use client"

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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            <span className="w-6 h-px bg-border" />
            Client Voices
          </div>
          <h2
            id="testi-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground mb-4"
          >
            What our partners <br />
            <span className="italic font-normal text-muted-foreground">say about us.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {testimonials.map((testi, idx) => (
            <Card
              key={idx}
              className="group p-8 md:p-12 bg-card hover:bg-accent/40 transition-all duration-300 flex flex-col justify-between min-h-[300px] rounded-none border-none shadow-none ring-0"
            >
              <div>
                <div
                  className="flex gap-0.5 text-amber-500 text-[10px] tracking-wide mb-6"
                  aria-label="5 stars rating"
                >
                  {"★".repeat(testi.stars)}
                </div>
                <p className="font-serif italic text-lg md:text-xl font-normal text-foreground leading-relaxed mb-8">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <footer className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center font-serif italic text-xs text-muted-foreground flex-shrink-0 group-hover:bg-background transition-colors">
                  {testi.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-foreground block">
                    {testi.name}
                  </cite>
                  <span className="text-[10px] text-muted-foreground block mt-0.5 uppercase tracking-wider font-semibold">
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
