import type { ReactNode } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  className = "",
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slideUp":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "slideLeft":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "slideRight":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "scaleIn":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
