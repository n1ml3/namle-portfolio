import type { LucideIcon } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"

interface ContactInfoProps {
  contact: {
    icon: LucideIcon
    title: string
    value: string
  }
  index: number
}

export function ContactInfo({ contact, index }: ContactInfoProps) {
  const { icon: Icon, title, value } = contact

  return (
    <AnimatedSection animation="slideLeft" delay={300 + index * 100}>
      <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
          <p className="text-gray-600 dark:text-gray-300">{value}</p>
        </div>
      </div>
    </AnimatedSection>
  )
}
