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
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Giới thiệu về tôi</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Với hơn 3 năm kinh nghiệm trong phát triển web, tôi đã tham gia vào nhiều dự án từ startup đến doanh
              nghiệp lớn.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft" delay={200}>
            <img
              src="https://i.pinimg.com/736x/ad/f3/ec/adf3ec750c697a1352fc82916a78ae4f.jpg"
              alt="About me"
              className="rounded-lg shadow-lg dark:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </AnimatedSection>

          <div>
            <AnimatedSection animation="slideRight" delay={300}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Câu chuyện của tôi</h3>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={400}>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Tôi bắt đầu hành trình lập trình từ năm 2020 với niềm đam mê tạo ra những sản phẩm có ý nghĩa. Qua thời
                gian, tôi đã phát triển kỹ năng trong nhiều lĩnh vực từ frontend đến backend.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={500}>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Tôi luôn tìm kiếm những thách thức mới và cơ hội để học hỏi các công nghệ tiên tiến. Mục tiêu của tôi là
                tạo ra những sản phẩm không chỉ đẹp mắt mà còn mang lại giá trị thực tế.
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
