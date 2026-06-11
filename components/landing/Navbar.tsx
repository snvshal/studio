"use client"

import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { SlidingHoverList } from "@/components/ui/custom/sliding-hover-list"

interface NavbarProps {
  onContactClick?: () => void
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="flex items-center gap-10">
          <a href="#" className="font-serif text-xl font-medium tracking-tight text-foreground">
            Codeware <span className="italic font-normal text-muted-foreground">Studio</span>
          </a>

          {/* Desktop navigation next to title */}
          <nav className="hidden md:flex items-center gap-6">
            <HoverCard openDelay={0} closeDelay={150}>
              <HoverCardTrigger asChild>
                <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1 focus:outline-none">
                  Content
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="dark w-48 p-2 rounded-2xl border border-border bg-card shadow-xl z-50"
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
              <a
                key={item}
                href={item === "Services" ? "#services" : `#${item.toLowerCase()}`}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side: CTA, Mobile Menu Sheet */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault()
                onContactClick()
              }
            }}
            className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground hover:opacity-90 active:scale-95 text-xs font-medium px-4 py-2 rounded-full transition-all"
          >
            Start a Project
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-lg w-10 h-10 border border-border text-foreground"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="dark bg-background/98 border-border p-6 flex flex-col gap-4 overflow-y-auto"
            >
              <SheetTitle className="sr-only">Navigation Drawer</SheetTitle>

              <div className="flex flex-col gap-1 border-b border-border pb-4 mt-8">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 py-1">
                  Content
                </span>
                {[
                  { label: "Services", href: "#services" },
                  { label: "Work", href: "#work" },
                  { label: "Process", href: "#process" },
                  { label: "Stack", href: "#stack" },
                  { label: "Contact", href: "#contact" },
                ].map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-xl py-2 pl-4 text-foreground capitalize hover:pl-6 transition-all"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>

              {["pricing", "services", "about"].map((item) => (
                <a
                  key={item}
                  href={item === "services" ? "#services" : `#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl py-3 border-b border-border text-foreground capitalize hover:pl-2 transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setIsOpen(false)
                    if (onContactClick) {
                      e.preventDefault()
                      onContactClick()
                    }
                  }}
                  className="w-full text-center bg-primary text-primary-foreground py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-all"
                >
                  Start a Project
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
