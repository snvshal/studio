"use client"

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-border border-t px-6 py-12 transition-colors duration-300 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a
          href="#"
          className="text-foreground font-serif text-lg font-medium tracking-tight hover:opacity-90"
        >
          Codeware <span className="text-muted-foreground font-normal italic">Studio</span>
        </a>

        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Codeware Studio. Crafted with care.
        </p>
      </div>
    </footer>
  )
}
