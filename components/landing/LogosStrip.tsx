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
      className="w-full border-y border-border py-6 px-6 md:px-12 bg-muted/50 overflow-hidden flex flex-col md:flex-row md:items-center gap-6"
      aria-label="Trusted by our partners"
    >
      <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase whitespace-nowrap">
        Trusted by industry leaders
      </span>

      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 w-max animate-scroll">
          {displayLogos.map((logo, idx) => (
            <span
              key={`${logo}-${idx}`}
              className="font-serif italic text-base text-muted-foreground tracking-wide hover:text-foreground transition-colors duration-200"
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
