import { AnimatedSection } from "./AnimatedSection"

interface SkillTagProps {
  text: string
  color: string
  delay: number
}

export function SkillTag({ text, color, delay }: SkillTagProps) {
  // Hardcoded color classes for Tailwind
  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      case "green":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
      case "purple":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
      case "orange":
        return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    }
  }

  return (
    <AnimatedSection animation="fadeIn" delay={delay}>
      <span
        className={`inline-block ${getColorClasses()} px-3 py-1 rounded-full text-sm hover:scale-110 transition-transform duration-200 cursor-default`}
      >
        {text}
      </span>
    </AnimatedSection>
  )
}
