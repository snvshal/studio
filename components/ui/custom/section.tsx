import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  background?: "default" | "muted"
  containerClassName?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, background = "default", className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        aria-labelledby={`${id}-heading`}
        className={cn(
          "relative py-24 transition-colors duration-300",
          background === "muted" ? "bg-muted/50" : "bg-background text-foreground",
          className
        )}
        {...props}
      >
        <div className={cn("mx-auto max-w-7xl px-6 md:px-12", containerClassName)}>{children}</div>
      </section>
    )
  }
)

Section.displayName = "Section"
