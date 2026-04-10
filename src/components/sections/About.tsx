import { useTranslation } from "react-i18next"
import { AnimatedSection } from "../ui/AnimatedSection"
import { StatItem } from "../ui/StatItem"

export interface Stat {
  label: string
  value: string
}

interface AboutProps {
  stats: Stat[]
}

export function About({ stats }: AboutProps) {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("about.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("about.description")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="slideLeft" delay={200}>
            <img
              src="/about-image.jpg"
              alt="About me"
              className="rounded-lg shadow-lg dark:shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
            />
          </AnimatedSection>

          <div>
            <AnimatedSection animation="slideRight" delay={300}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("about.story_title")}</h3>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={400}>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t("about.story_p1")}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={500}>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t("about.story_p2")}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={600}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <StatItem key={stat.label} stat={stat} index={index} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
