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
      <header className="bg-background/90 border-border fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b px-6 backdrop-blur-md transition-colors duration-300 md:px-12">
        <div className="flex items-center gap-10">
          <a href="#" className="text-foreground font-serif text-xl font-medium tracking-tight">
            Codeware <span className="text-muted-foreground font-normal italic">Studio</span>
          </a>

          {/* Desktop navigation next to title */}
          <nav className="hidden items-center gap-6 md:flex">
            <HoverCard openDelay={0} closeDelay={150}>
              <HoverCardTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-xs font-medium transition-colors focus:outline-none">
                  Content
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="dark border-border bg-card z-50 w-48 rounded-2xl border p-2 shadow-xl"
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
                className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
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
            className="bg-primary text-primary-foreground hidden items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition-all hover:opacity-90 active:scale-95 sm:inline-flex"
          >
            Start a Project
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="border-border text-foreground h-10 w-10 rounded-lg border md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="dark bg-background/98 border-border flex flex-col gap-4 overflow-y-auto p-6"
            >
              <SheetTitle className="sr-only">Navigation Drawer</SheetTitle>

              <div className="border-border mt-8 flex flex-col gap-1 border-b pb-4">
                <span className="text-muted-foreground px-2 py-1 text-[10px] font-bold tracking-widest uppercase">
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
                    className="text-foreground py-2 pl-4 font-serif text-xl capitalize transition-all hover:pl-6"
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
                  className="border-border text-foreground border-b py-3 font-serif text-2xl capitalize transition-all hover:pl-2"
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
                  className="bg-primary text-primary-foreground w-full rounded-xl py-3 text-center text-sm font-medium transition-all hover:opacity-90"
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
