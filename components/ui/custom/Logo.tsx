import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-foreground flex items-center font-serif font-bold tracking-normal transition-opacity select-none hover:opacity-90",
        {
          "text-lg": size === "sm",
          "text-2xl": size === "md",
          "text-3xl": size === "lg",
        },
        className
      )}
    >
      Apex
    </Link>
  )
}
