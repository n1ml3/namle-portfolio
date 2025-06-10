import { Github, Linkedin, Mail } from "lucide-react"
import { AnimatedSection } from "../ui/AnimatedSection"

export function SocialLinks() {
  const socialIcons = [Github, Linkedin, Mail]

  return (
    <div className="flex justify-center space-x-6">
      {socialIcons.map((Icon, index) => (
        <AnimatedSection key={index} animation="scaleIn" delay={200 + index * 100}>
          <a
            href="#"
            className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors hover:scale-125 transform duration-200"
          >
            <Icon size={24} />
          </a>
        </AnimatedSection>
      ))}
    </div>
  )
}
