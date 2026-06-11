"use client"

export function LogosStrip() {
  const logos = [
    "Streamline Analytics",
    "LegalMind",
    "Ritmo",
    "DataForge",
    "PageSense",
    "deploykit",
    "Axiom Health",
    "NovaSaaS",
    "BuildRight",
    "Orion Labs",
    "Quantra",
    "Luminary",
  ]

  // Duplicate the list twice to ensure seamless infinite scrolling loop
  const displayLogos = [...logos, ...logos, ...logos]

  return (
    <div
      className="border-border bg-muted/50 flex w-full flex-col gap-6 overflow-hidden border-y px-6 py-6 md:flex-row md:items-center md:px-12"
      aria-label="Trusted by our partners"
    >
      <span className="text-muted-foreground text-[10px] font-bold tracking-widest whitespace-nowrap uppercase">
        Trusted by industry leaders
      </span>

      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-scroll flex w-max gap-16">
          {displayLogos.map((logo, idx) => (
            <span
              key={`${logo}-${idx}`}
              className="text-muted-foreground hover:text-foreground font-serif text-base tracking-wide italic transition-colors duration-200"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </div>
  )
}
