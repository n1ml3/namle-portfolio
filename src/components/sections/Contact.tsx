import { AnimatedSection } from "../ui/AnimatedSection"
import { ContactInfo } from "../ui/ContactInfo"
import { ContactForm } from "../ui/ContactForm"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const contactItems = [
    { icon: Mail, title: "Email", value: "namle26022004@gmail.com" },
    { icon: Github, title: "GitHub", value: "github.com/n1ml3" },
    { icon: Linkedin, title: "LinkedIn", value: "https://www.linkedin.com/in/lê-nam-296791368" },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Liên hệ với tôi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hãy kết nối và thảo luận về dự án tiếp theo của bạn
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <AnimatedSection animation="slideLeft" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Thông tin liên hệ</h3>
            </AnimatedSection>

            <div className="space-y-6">
              {contactItems.map((contact, index) => (
                <ContactInfo key={contact.title} contact={contact} index={index} />
              ))}
            </div>
          </div>

          <AnimatedSection animation="slideRight" delay={400}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
