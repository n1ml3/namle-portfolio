import { Github, ExternalLink } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import type { Project } from "../../types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection animation="slideUp" delay={200 + index * 150}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
        <div className="overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:scale-110 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
