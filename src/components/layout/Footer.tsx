import { AnimatedSection } from "../ui/AnimatedSection"
import { SocialLinks } from "../shared/SocialLinks"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              © 2024 Portfolio. Được tạo với ❤️ bằng React và Tailwind CSS.
            </p>
            <SocialLinks />
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
