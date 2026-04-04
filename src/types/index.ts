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
}

export interface SkillCategory {
  name: string
  color: string
  items: string[]
}
export interface HardwareSpec {
  label: string
  value: string
  icon: LucideIcon
}
