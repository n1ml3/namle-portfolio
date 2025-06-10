import { Download } from "lucide-react"
import { AnimatedSection } from "../ui/AnimatedSection"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <AnimatedSection animation="slideLeft" delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Xin chào, tôi là
                <span className="text-blue-600 dark:text-blue-400 block">Le Duc Nam</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={400}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Tôi là một Full-stack Developer đam mê tạo ra những trải nghiệm web tuyệt vời. Chuyên về React, Node.js
                và các công nghệ hiện đại.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 hover:scale-105 transform duration-200">
                  <Download size={20} />
                  Tải CV
                </button>
                <button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-colors hover:scale-105 transform duration-200">
                  Xem dự án
                </button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scaleIn" delay={800} className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/129405738?v=4"
                alt="Profile"
                className="w-72 h-72 rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
