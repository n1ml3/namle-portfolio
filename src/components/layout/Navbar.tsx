"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { AnimatedSection } from "../ui/AnimatedSection"

interface NavbarProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ["Trang chủ", "Giới thiệu", "Kỹ năng", "Dự án", "Liên hệ"]
  const getHref = (item: string) => {
    switch (item) {
      case "Trang chủ":
        return "#home"
      case "Giới thiệu":
        return "#about"
      case "Kỹ năng":
        return "#skills"
      case "Dự án":
        return "#projects"
      case "Liên hệ":
        return "#contact"
      default:
        return "#"
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <AnimatedSection animation="slideRight" delay={100}>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">N4MLE</div>
          </AnimatedSection>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <AnimatedSection key={item} animation="fadeIn" delay={200 + index * 100}>
                <a
                  href={getHref(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </AnimatedSection>
            ))}

            <AnimatedSection animation="scaleIn" delay={700}>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </AnimatedSection>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <AnimatedSection animation="scaleIn" delay={200}>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={300}>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </AnimatedSection>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <AnimatedSection key={item} animation="slideLeft" delay={index * 100}>
                  <a
                    href={getHref(item)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
