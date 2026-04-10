import { AnimatedSection } from "../ui/AnimatedSection"
import { SkillTag } from "../ui/SkillTag"
import type { Skill, SkillCategory } from "../../types"

interface SkillsProps {
  skills: {
    mainSkills: Skill[]
    categories: SkillCategory[]
  }
}

export function Skills({ skills }: SkillsProps) {
  const { categories } = skills

  const getCategoryColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-500"
      case "green": return "bg-green-500"
      case "purple": return "bg-purple-500"
      case "red": return "bg-red-500"
      case "orange": return "bg-orange-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Kỹ năng của tôi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Các công nghệ và kỹ năng tôi sử dụng để tạo ra những sản phẩm tuyệt vời (Thực tập sinh năm 4)
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.name} animation="fadeIn" delay={200 + categoryIndex * 150}>
              <div className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className={`w-2 h-8 rounded-full mr-4 ${getCategoryColor(category.color)}`}></span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      delay={400 + categoryIndex * 100 + skillIndex * 50}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
