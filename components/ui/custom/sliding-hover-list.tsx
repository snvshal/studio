"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface SlidingHoverItem {
  label: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  className?: string
}

interface SlidingHoverListProps {
  items: SlidingHoverItem[]
  orientation?: "horizontal" | "vertical"
  className?: string
  itemClassName?: string
  highlightClassName?: string
}

export function SlidingHoverList({
  items,
  orientation = "vertical",
  className,
  itemClassName,
  highlightClassName,
}: SlidingHoverListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null)

  // Track bounding rect of the hovered element relative to the container
  const [rect, setRect] = useState<{
    top: number
    left: number
    width: number
    height: number
  } | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const activeIndex = hoveredIndex !== null ? hoveredIndex : lastActiveIndex
    if (activeIndex === null || activeIndex === undefined) {
      requestAnimationFrame(() => setRect(null))
      return
    }

    const container = containerRef.current
    const item = itemRefs.current[activeIndex]

    if (container && item) {
      const containerRect = container.getBoundingClientRect()
      const itemRect = item.getBoundingClientRect()

      requestAnimationFrame(() => {
        setRect({
          top: itemRect.top - containerRect.top,
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
          height: itemRect.height,
        })
      })
    }
  }, [hoveredIndex, lastActiveIndex])

  // Handle resizing or viewport adjustments dynamically
  useEffect(() => {
    const handleResize = () => {
      const activeIndex = hoveredIndex !== null ? hoveredIndex : lastActiveIndex
      if (activeIndex !== null && containerRef.current && itemRefs.current[activeIndex]) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const itemRect = itemRefs.current[activeIndex]!.getBoundingClientRect()
        setRect({
          top: itemRect.top - containerRect.top,
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
          height: itemRect.height,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [hoveredIndex, lastActiveIndex])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex",
        orientation === "vertical" ? "flex-col gap-0.5" : "flex-row items-center gap-2",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Sliding background highlight */}
      {rect && (
        <div
          className={cn(
            "bg-foreground/[0.05] pointer-events-none absolute z-0 rounded-lg transition-all duration-200 ease-out dark:bg-white/[0.08]",
            highlightClassName
          )}
          style={{
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            opacity: hoveredIndex !== null ? 1 : 0,
            transform: hoveredIndex !== null ? "scale(1)" : "scale(0.95)",
          }}
        />
      )}

      {items.map((item, i) => {
        const isLink = !!item.href
        const commonProps = {
          ref: (el: HTMLAnchorElement | HTMLButtonElement | null) => {
            itemRefs.current[i] = el
          },
          className: cn(
            "text-sm font-medium rounded-lg relative z-10 transition-colors duration-200 focus:outline-none select-none",
            orientation === "vertical"
              ? "h-9 flex items-center px-3 w-full"
              : "px-3 py-1.5 flex items-center justify-center",
            hoveredIndex === i ? "text-foreground" : "text-muted-foreground",
            item.className,
            itemClassName
          ),
          onMouseEnter: () => {
            setHoveredIndex(i)
            setLastActiveIndex(i)
          },
          onClick: item.onClick,
        }

        if (isLink) {
          const href = item.href || "#"
          if (href.startsWith("http") || href.startsWith("mailto:")) {
            return (
              <a key={i} href={href} {...commonProps}>
                {item.label}
              </a>
            )
          }
          return (
            <Link key={i} href={href} {...commonProps}>
              {item.label}
            </Link>
          )
        }

        return (
          <button key={i} type="button" {...commonProps}>
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
