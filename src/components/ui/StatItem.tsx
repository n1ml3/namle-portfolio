import { AnimatedSection } from "./AnimatedSection"
import type { Stat } from "../sections/About"

interface StatItemProps {
  stat: Stat
  index: number
}

export function StatItem({ stat, index }: StatItemProps) {
  return (
    <AnimatedSection animation="scaleIn" delay={700 + index * 100}>
      <div className="hover:scale-105 transition-transform duration-200">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</h4>
        <p className="text-gray-600 dark:text-gray-300">{stat.value}</p>
      </div>
    </AnimatedSection>
  )
}
