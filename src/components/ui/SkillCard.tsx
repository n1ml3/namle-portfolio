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
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-6">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        </div>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Trình độ</span>
            <span className="text-gray-900 dark:text-white font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
