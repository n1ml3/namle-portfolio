import type { LucideIcon } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"

interface ContactInfoProps {
  contact: {
    icon: LucideIcon
    title: string
    value: string
    link: string
  }
  index: number
}

export function ContactInfo({ contact, index }: ContactInfoProps) {
  const { icon: Icon, title, value, link } = contact

  return (
    <AnimatedSection animation="slideLeft" delay={300 + index * 100}>
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 hover:scale-105 hover:bg-white dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 group"
      >
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
          <p className="text-gray-600 dark:text-gray-300">{value}</p>
        </div>
      </a>
    </AnimatedSection>
  )
}
