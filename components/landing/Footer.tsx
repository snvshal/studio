"use client"

import { Logo } from "@/components/ui/custom/Logo"

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-border border-t px-6 py-12 transition-colors duration-300 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo size="sm" />

        <p className="text-muted-foreground text-xs font-light text-pretty">
          © {new Date().getFullYear()} Apex. Crafted with care.
        </p>
      </div>
    </footer>
  )
}
