import { AnimatedSection } from "./AnimatedSection"
import type { Skill } from "../../types"

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <AnimatedSection animation="slideUp" delay={200 + index * 150}>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
      </div>
    </AnimatedSection>
  )
}
