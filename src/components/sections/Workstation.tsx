import { AnimatedSection } from "../ui/AnimatedSection"
import { WorkstationCard } from "../ui/WorkstationCard"

export function Workstation() {
  return (
    <section id="workstation" className="py-20 bg-gray-50 dark:bg-gray-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Góc làm việc</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Những công cụ đồng hành cùng tôi trong quá trình sáng tạo và lập trình hàng ngày.
            </p>
          </div>
        </AnimatedSection>
        
        <WorkstationCard />
      </div>
    </section>
  )
}
