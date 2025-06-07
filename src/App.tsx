"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone,
  Sun,
  Moon,
} from "lucide-react"
import { AnimatedSection } from "./components/AnimatedSection"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Một nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với React và Node.js. Bao gồm giỏ hàng, thanh toán, quản lý sản phẩm và dashboard admin.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://your-ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với tính năng kéo thả và cộng tác nhóm. Hỗ trợ real-time updates, notifications và team collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourusername/task-management",
      demo: "https://your-task-app-demo.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard thời tiết với biểu đồ tương tác và dự báo 7 ngày. Tích hợp OpenWeather API với hiển thị dữ liệu real-time và maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuex", "SCSS"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-demo.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Website portfolio cá nhân với dark mode, scroll animations và responsive design. Được xây dựng với React, TypeScript và Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.vercel.app",
    },
    {
      title: "Social Media App",
      description:
        "Ứng dụng mạng xã hội với tính năng đăng bài, like, comment và chat real-time. Hỗ trợ upload ảnh và video.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop&auto=format",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "AWS S3"],
      github: "https://github.com/yourusername/social-media-app",
      demo: "https://your-social-app-demo.vercel.app",
    },
    {
      title: "Crypto Trading Bot",
      description:
        "Bot trading cryptocurrency tự động với AI prediction và risk management. Tích hợp với Binance API và Telegram notifications.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&auto=format",
      technologies: ["Python", "TensorFlow", "Binance API", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/crypto-trading-bot",
      demo: "https://your-crypto-bot-demo.vercel.app",
    },
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 75 },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <AnimatedSection animation="slideRight" delay={100}>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">N4MLE</div>
            </AnimatedSection>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Trang chủ", "Giới thiệu", "Kỹ năng", "Dự án", "Liên hệ"].map((item, index) => (
                <AnimatedSection key={item} animation="fadeIn" delay={200 + index * 100}>
                  <a
                    href={`#${item === "Trang chủ" ? "home" : item === "Giới thiệu" ? "about" : item === "Kỹ năng" ? "skills" : item === "Dự án" ? "projects" : "contact"}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </AnimatedSection>
              ))}

              <AnimatedSection animation="scaleIn" delay={700}>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </AnimatedSection>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <AnimatedSection animation="scaleIn" delay={200}>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={300}>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </AnimatedSection>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col space-y-4">
                {["Trang chủ", "Giới thiệu", "Kỹ năng", "Dự án", "Liên hệ"].map((item, index) => (
                  <AnimatedSection key={item} animation="slideLeft" delay={index * 100}>
                    <a
                      href={`#${item === "Trang chủ" ? "home" : item === "Giới thiệu" ? "about" : item === "Kỹ năng" ? "skills" : item === "Dự án" ? "projects" : "contact"}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
                  <span className="text-blue-600 dark:text-blue-400 block">LÊ ĐỨC NAM</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft" delay={400}>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Tôi là một Full-stack Developer đam mê tạo ra những trải nghiệm web tuyệt vời. Chuyên về React,
                  Node.js và các công nghệ hiện đại.
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

      {/* About Section */}
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
                  Tôi bắt đầu hành trình lập trình từ năm 2020 với niềm đam mê tạo ra những sản phẩm có ý nghĩa. Qua
                  thời gian, tôi đã phát triển kỹ năng trong nhiều lĩnh vực từ frontend đến backend.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={500}>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Tôi luôn tìm kiếm những thách thức mới và cơ hội để học hỏi các công nghệ tiên tiến. Mục tiêu của tôi
                  là tạo ra những sản phẩm không chỉ đẹp mắt mà còn mang lại giá trị thực tế.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={600}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Kinh nghiệm", value: "3+ năm" },
                    { label: "Dự án hoàn thành", value: "50+" },
                    { label: "Khách hàng hài lòng", value: "30+" },
                    { label: "Công nghệ", value: "15+" },
                  ].map((stat, index) => (
                    <AnimatedSection key={stat.label} animation="scaleIn" delay={700 + index * 100}>
                      <div className="hover:scale-105 transition-transform duration-200">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{stat.value}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} animation="slideUp" delay={200 + index * 150}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">Trình độ</span>
                      <span className="text-gray-900 dark:text-white font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Frontend", skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"], color: "blue" },
              { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"], color: "green" },
              { title: "Tools", skills: ["Git", "Docker", "AWS", "Figma"], color: "purple" },
              { title: "Mobile", skills: ["React Native", "Flutter", "Expo"], color: "orange" },
            ].map((category, categoryIndex) => (
              <AnimatedSection key={category.title} animation="slideUp" delay={600 + categoryIndex * 150}>
                <div className="text-center hover:scale-105 transition-transform duration-200">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimatedSection
                        key={skill}
                        animation="fadeIn"
                        delay={800 + categoryIndex * 150 + skillIndex * 50}
                      >
                        <span
                          className={`inline-block bg-${category.color}-100 dark:bg-${category.color}-900 text-${category.color}-800 dark:text-${category.color}-200 px-3 py-1 rounded-full text-sm hover:scale-110 transition-transform duration-200 cursor-default`}
                        >
                          {skill}
                        </span>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Dự án nổi bật</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Một số dự án tôi đã thực hiện gần đây</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} animation="slideUp" delay={200 + index * 150}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="overflow-hidden">
                    <img
                      src={project.image || "https://i.pinimg.com/736x/43/85/11/43851151ed815204265c755eb0bd1d16.jpg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:scale-110 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                {[
                  { icon: Mail, title: "Email", value: "namle26022004@gmail.com" },
                  { icon: Github, title: "GitHub", value: "github.com/n1ml3" },
                  { icon: Linkedin, title: "LinkedIn", value: "https://www.linkedin.com/in/lê-nam-296791368" },
                ].map((contact, index) => (
                  <AnimatedSection key={contact.title} animation="slideLeft" delay={300 + index * 100}>
                    <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-200">
                      <contact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{contact.title}</p>
                        <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection animation="slideRight" delay={400}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:scale-105 focus:scale-105"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:scale-105 focus:scale-105"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:scale-105 focus:scale-105"
                    placeholder="Nhập tin nhắn của bạn"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 font-semibold hover:scale-105 transform"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" delay={100}>
            <div className="text-center">
              <p className="text-gray-400 dark:text-gray-500 mb-4">
                © 2025 Portfolio. Được tạo với namle bằng React và Tailwind CSS.
              </p>
              <div className="flex justify-center space-x-6">
                {[Github, Linkedin, Mail].map((Icon, index) => (
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
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
