"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("animate-in")
          }, delay)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    "fade-in": "opacity-0 transition-opacity duration-700 ease-out",
    "slide-left": "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
    "slide-right": "opacity-0 translate-x-8 transition-all duration-700 ease-out",
    "scale-up": "opacity-0 scale-95 transition-all duration-700 ease-out",
  }

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={
        {
          "--animate-in-opacity": "1",
          "--animate-in-transform": "translateY(0) translateX(0) scale(1)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
