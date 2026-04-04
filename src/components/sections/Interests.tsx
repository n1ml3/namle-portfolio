"use client"

import { useRef, useEffect } from "react"
import { InterestCard } from "../ui/InterestCard"
import { interests } from "../../data/interests"
import { AnimatedSection } from "../ui/AnimatedSection"

export function Interests() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  // Handle drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'auto'
      scrollRef.current.style.cursor = 'grabbing'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current.offsetLeft || 0)
    const walk = (x - startX.current) * 2
    let newScrollLeft = scrollLeftStart.current - walk

    // Loop during drag
    const oneThird = scrollRef.current.scrollWidth / 3
    if (newScrollLeft >= 2 * oneThird) {
      newScrollLeft -= oneThird
      scrollLeftStart.current -= oneThird
    } else if (newScrollLeft <= 0) {
      newScrollLeft += oneThird
      scrollLeftStart.current += oneThird
    }

    scrollRef.current.scrollLeft = newScrollLeft
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth'
      scrollRef.current.style.cursor = 'grab'
    }
  }

  // Triplicating interests to create a seamless infinite scroll effect
  const displayInterests = [...interests, ...interests, ...interests]

  // Handle looping logic
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isDragging.current) return
      
      const { scrollLeft, scrollWidth } = scrollRef.current
      const oneThird = scrollWidth / 3

      if (scrollLeft >= 2 * oneThird) {
        scrollRef.current.scrollLeft = scrollLeft - oneThird
      } else if (scrollLeft <= 0) {
        scrollRef.current.scrollLeft = oneThird
      }
    }

    const container = scrollRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      
      // Set initial position to the middle set
      const updatePosition = () => {
        if (container.scrollWidth > 0) {
          const oneThird = container.scrollWidth / 3
          container.scrollLeft = oneThird
        }
      }
      
      updatePosition()
      // Small timeout to ensure correctly calculated scrollWidth after render
      const timeoutId = setTimeout(updatePosition, 100)
      return () => {
        container.removeEventListener("scroll", handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <section id="interests" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Phim & Trò chơi yêu thích</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Những niềm đam mê giúp tôi cân bằng cuộc sống và khơi nguồn sáng tạo.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative group/carousel">
          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
            style={{ 
                msOverflowStyle: 'none', 
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch' 
            }}
          >
            {displayInterests.map((interest, index) => (
              <InterestCard key={`${interest.id}-${index}`} interest={interest} />
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
