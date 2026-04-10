import { useTranslation } from "react-i18next"
import { AnimatedSection } from "./AnimatedSection"
import type { Skill } from "../../types"

interface SkillTagProps {
  skill: Skill
  color: string
  delay: number
}

export function SkillTag({ skill, color, delay }: SkillTagProps) {
  const Icon = skill.icon
  const { t } = useTranslation()

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800"
      case "green":
        return "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-100 dark:border-green-800"
      case "purple":
        return "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800"
      case "orange":
        return "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800"
      case "red":
        return "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-100 dark:border-red-800"
      default:
        return "bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-800"
    }
  }

  const getLevelLabel = (level?: string) => {
    if (!level) return ""
    return t(`skills.levels.${level}`, level)
  }

  return (
    <AnimatedSection animation="fadeIn" delay={delay}>
      <div
        className={`flex items-center justify-between p-3 rounded-xl border ${getColorClasses()} hover:scale-105 hover:shadow-md transition-all duration-300 group cursor-default`}
      >
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <Icon size={18} className="transition-transform group-hover:rotate-12" />
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
        {skill.level && (
          <span className="text-[10px] uppercase tracking-wider font-bold opacity-70">
            {getLevelLabel(skill.level)}
          </span>
        )}
      </div>
    </AnimatedSection>
  )
}
