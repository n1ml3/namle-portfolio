import type { Project } from "../types"

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Một nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với React và Node.js. Bao gồm giỏ hàng, thanh toán, quản lý sản phẩm và dashboard admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "https://github.com/n1ml3/commerce-backend",
    demo: "https://commerce-frontend-brown.vercel.app/login",
  },
  {
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc với tính năng kéo thả và cộng tác nhóm. Hỗ trợ real-time updates, notifications và team collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
    technologies: ["NextJS14", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
    github: "https://github.com/n1ml3/task-management-app",
    demo: "",
  },
  {
    title: "Edge Clock Extension",
    description:
      "Một tiện ích mở rộng trình duyệt đơn giản và thanh lịch hiển thị đồng hồ thời gian thực trên thanh công cụ của Microsoft Edge.",
    image: "https://user-images.githubusercontent.com/5198206/59003071-e4aab300-87ea-11e9-95f9-e9d3caccd64d.png",
    technologies: ["HTML", "CSS", "Javascipt"],
    github: "https://github.com/n1ml3/always-on-clock-extention-for-edge",
    demo: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio cá nhân với dark mode, scroll animations và responsive design. Được xây dựng với React, TypeScript và Tailwind CSS.",
    image: "/portfoliopage.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/n1ml3/namle-portfolio",
    demo: "https://namle-portfolio.vercel.app/",
  },
  {
    title: "Flutter Todo App",
    description:
      "Đây là ứng dụng quản lý công việc (Todo App) hoàn chỉnh được xây dựng bằng Flutter và Dart.",
    image: "/flutter.jpeg",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/HUMG-IT/flutter-final-project-n1ml3?tab=readme-ov-file",
    demo: "",
  },
  {
    title: "Dự đoán bệnh tiểu đường",
    description:
      "Sử dụng machine learning để dự đoán nguy cơ mắc bệnh tiểu đường dựa trên các chỉ số sức khỏe. Ứng dụng này sử dụng mô hình random forest và có thể giúp người dùng theo dõi sức khỏe của mình.",
    image: "/diabetes.jpeg",
    technologies: ["Python", "Random Forest", "Flask", "Pandas", "NumPy"],
    github: "https://github.com/n1ml3/diabetes-prediction-model",
    demo: "",
  },
]
