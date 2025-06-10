import { AnimatedSection } from "../ui/AnimatedSection"
import { SkillCard } from "../ui/SkillCard"
import { SkillTag } from "../ui/SkillTag"
import type { Skill, SkillCategory } from "../../types"

interface SkillsProps {
  skills: {
    mainSkills: Skill[]
    categories: SkillCategory[]
  }
}

export function Skills({ skills }: SkillsProps) {
  const { mainSkills, categories } = skills

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Kỹ năng của tôi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Các công nghệ và kỹ năng tôi sử dụng để tạo ra những sản phẩm tuyệt vời
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.name} animation="slideUp" delay={600 + categoryIndex * 150}>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h4>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <SkillTag
                      key={item}
                      text={item}
                      color={category.color}
                      delay={800 + categoryIndex * 50 + itemIndex * 50}
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
