import { Code, Palette, Smartphone } from "lucide-react"
import type { Skill, SkillCategory } from "../types"

export const skills = {
  mainSkills: [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 75 },
  ] as Skill[],

  categories: [
    {
      name: "Frontend",
      color: "blue",
      items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      color: "green",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      name: "Tools",
      color: "purple",
      items: ["Git", "Docker", "AWS", "Figma"],
    },
    {
      name: "Mobile",
      color: "orange",
      items: ["React Native", "Flutter", "Expo"],
    },
  ] as SkillCategory[],
}
