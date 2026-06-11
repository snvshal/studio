"use client"

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border py-12 md:py-8 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a
          href="#"
          className="font-serif text-lg font-medium tracking-tight text-foreground hover:opacity-90"
        >
          Codeware <span className="italic font-normal text-muted-foreground">Studio</span>
        </a>

        <p className="text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} Codeware Studio. Crafted with care.
        </p>
      </div>
    </footer>
  )
}
