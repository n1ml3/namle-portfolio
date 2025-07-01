import { Code, Palette} from "lucide-react"
import type { Skill, SkillCategory } from "../types"

export const skills = {
  mainSkills: [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Machine Learning", icon: Code, level: 90 },
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
      name: "Machine Learning",
      color: "orange",
      items: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Random Forest"],
    },
  ] as SkillCategory[],
}
