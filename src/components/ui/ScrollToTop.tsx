"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Manual smooth scroll to top function using requestAnimationFrame for premium feel
  const scrollToTop = () => {
    const duration = 800 // ms
    const startTime = performance.now()
    const startPosition = window.scrollY

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Cubic Ease-Out function
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const currentPosition = startPosition * (1 - easeOutCubic(progress))

      window.scrollTo(0, currentPosition)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <div
      className={`fixed bottom-8 right-28 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-50 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full 
                 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                 border border-white/20 dark:border-gray-700/30 
                 shadow-lg shadow-black/5 dark:shadow-white/5 
                 hover:bg-blue-600 dark:hover:bg-blue-500 
                 transition-all duration-300 ease-out 
                 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        aria-label="Cuộn lên đầu trang"
      >
        {/* Shine/Overlay effect */}
        <div className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-20 
                      bg-gradient-to-tr from-white to-transparent" />
        
        <ChevronUp 
          size={24} 
          className="text-gray-700 dark:text-gray-200 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1" 
        />
      </button>
    </div>
  )
}
