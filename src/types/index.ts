import type { LucideIcon } from "lucide-react"

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export interface Skill {
  name: string
  icon: LucideIcon
  level: number
}

export interface SkillCategory {
  name: string
  color: string
  items: string[]
}
