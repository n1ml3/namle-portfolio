import { Github, Linkedin, Mail } from "lucide-react"
import { AnimatedSection } from "../ui/AnimatedSection"

export function SocialLinks() {
  // Danh sách các liên kết mạng xã hội thực tế của tác giả để hiển thị ở chân trang
  const socialLinks = [
    { Icon: Github, href: "https://github.com/n1ml3", target: "_blank", rel: "noopener noreferrer" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/lê-nam-296791368", target: "_blank", rel: "noopener noreferrer" },
    { Icon: Mail, href: "mailto:namle26022004@gmail.com" }
  ]

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ Icon, href, target, rel }, index) => (
        <AnimatedSection key={index} animation="scaleIn" delay={200 + index * 100}>
          <a
            href={href}
            target={target}
            rel={rel}
            className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors hover:scale-125 transform duration-200"
          >
            <Icon size={24} />
          </a>
        </AnimatedSection>
      ))}
    </div>
  )
}
