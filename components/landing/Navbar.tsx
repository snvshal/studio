"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/ui/custom/Logo"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { SlidingHoverList } from "@/components/ui/custom/sliding-hover-list"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onContactClick?: () => void
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 z-50 flex -translate-x-1/2 items-center justify-between transition-all duration-500 ease-in-out",
          isScrolled
            ? "border-border/50 bg-background/40 top-4 w-[calc(100%-2rem)] max-w-4xl rounded-full border py-2.5 pr-2.5 pl-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:w-[calc(100%-3rem)]"
            : "top-0 w-full max-w-full rounded-none border-b border-transparent bg-transparent px-6 py-4 md:px-12"
        )}
      >
        <div className="flex items-center gap-10">
          <Logo />

          {/* Desktop navigation next to title */}
          <nav className="hidden items-center gap-6 md:flex">
            <HoverCard openDelay={0} closeDelay={150}>
              <HoverCardTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors focus:outline-none">
                  Content
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="border-border/50 bg-background/40 z-50 w-48 rounded-2xl border p-2 shadow-xl backdrop-blur-2xl"
              >
                <SlidingHoverList
                  items={[
                    { label: "Services", href: "#services" },
                    { label: "Work", href: "#work" },
                    { label: "Process", href: "#process" },
                    { label: "Stack", href: "#stack" },
                    { label: "Contact", href: "#contact" },
                  ]}
                />
              </HoverCardContent>
            </HoverCard>

            {["Pricing", "Services", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Services" ? "#services" : `#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: CTA, Mobile Menu Sheet */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            className="hidden rounded-full text-xs font-medium sm:inline-flex"
          >
            <Link
              href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault()
                  onContactClick()
                }
              }}
            >
              Start a Project
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon-lg"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-foreground/[0.05] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.1] relative z-50 rounded-full border-none transition-all active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative flex h-3 w-4 items-center justify-center">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isOpen ? "top-1.5 rotate-45" : "top-0.5"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isOpen ? "top-1.5 -rotate-45" : "top-2"
                )}
              />
            </div>
          </Button>
        </div>
      </header>

      {/* Custom Full-Screen Mobile Overlay Menu (Moved outside header for true viewport scaling) */}
      <div
        className={cn(
          "bg-background/95 fixed inset-0 z-40 flex h-dvh w-screen flex-col items-start justify-between px-8 pt-32 pb-12 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden",
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        {/* Scrollable links list wrapper */}
        <div className="min-h-0 w-full flex-1 overflow-y-auto pr-2">
          <nav className="flex flex-col items-start gap-8 pb-4">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Stack", href: "#stack" },
              { label: "Contact", href: "#contact" },
              { label: "Pricing", href: "#pricing" },
              { label: "About", href: "#about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false)
                  if (item.label === "Contact" && onContactClick) {
                    e.preventDefault()
                    onContactClick()
                  }
                }}
                className="text-foreground hover:text-muted-foreground font-serif text-3xl font-light transition-all duration-300 hover:pl-2 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Start a Project Button (Bottom CTA - pinned to bottom, always visible, shrink-0) */}
        <div className="w-full shrink-0 pt-6 sm:hidden">
          <Button
            asChild
            className="flex h-12 w-full rounded-full text-sm font-medium shadow-sm transition-all active:scale-95"
          >
            <Link
              href="#contact"
              onClick={(e) => {
                setIsOpen(false)
                if (onContactClick) {
                  e.preventDefault()
                  onContactClick()
                }
              }}
            >
              Start a Project
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
