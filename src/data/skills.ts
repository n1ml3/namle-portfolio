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
      items: ["HTML", "CSS (Bootstrap)", "JavaScript (React)"],
    },
    {
      name: "Backend",
      color: "green",
      items: ["Node.js", "PHP", "Python"],
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
    {
      name: "Database",
      color: "red",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
  ] as SkillCategory[],
}
