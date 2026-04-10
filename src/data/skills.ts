import { 
  Code, 
  Layout, 
  Database, 
  Server, 
  Cpu, 
  GitBranch, 
  Terminal, 
  Layers, 
  Globe, 
  Settings,
  Search,
  Box,
  Braces,
  Palette
} from "lucide-react"
import type { Skill, SkillCategory } from "../types"

// Lưu ý: Sử dụng các icon có sẵn trong lucide-react để đại diện cho công nghệ
export const skills = {
  mainSkills: [
    { name: "Frontend Development", icon: Layout },
    { name: "Backend Development", icon: Server },
    { name: "Fullstack Intern", icon: Code },
  ] as Skill[],

  categories: [
    {
      name: "Frontend",
      color: "blue",
      skills: [
        { name: "React", icon: Globe, level: "Intermediate" },
        { name: "JavaScript", icon: Code, level: "Intermediate" },
        { name: "Bootstrap", icon: Layers, level: "Intermediate" },
        { name: "Tailwind CSS", icon: Palette, level: "Beginner" },
        { name: "HTML5/CSS3", icon: Layout, level: "Intermediate" },
      ],
    },
    {
      name: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", icon: Server, level: "Intermediate" },
        { name: "Express", icon: Settings, level: "Intermediate" },
        { name: "PHP", icon: Code, level: "Beginner" },
        { name: "Python", icon: Braces, level: "Beginner" },
      ],
    },
    {
      name: "Database",
      color: "red",
      skills: [
        { name: "MongoDB", icon: Database, level: "Intermediate" },
        { name: "MySQL", icon: Database, level: "Beginner" },
        { name: "PostgreSQL", icon: Database, level: "Beginner" },
      ],
    },
    {
      name: "DevOps & Tools",
      color: "purple",
      skills: [
        { name: "Git", icon: GitBranch, level: "Intermediate" },
        { name: "Docker", icon: Box, level: "Beginner" },
        { name: "Postman", icon: Terminal, level: "Intermediate" },
        { name: "Vscode", icon: Code, level: "Advanced" },
      ],
    },
    {
      name: "Machine Learning",
      color: "orange",
      skills: [
        { name: "Python", icon: Braces, level: "Beginner" },
        { name: "Scikit-learn", icon: Search, level: "Beginner" },
        { name: "TensorFlow", icon: Cpu, level: "Beginner" },
      ],
    },
  ] as SkillCategory[],
}
