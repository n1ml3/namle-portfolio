import type { Project } from "../types"

export const projects: Project[] = [
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
    technologies: ["NextJS14", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
    github: "https://github.com/n1ml3/task-management-app",
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
    github: "https://github.com/n1ml3/namle-portfolio",
    demo: "https://namle-portfolio.vercel.app/",
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
    title: "Dự đoán bệnh tiểu đường",
    description:
      "Sử dụng machine learning để dự đoán nguy cơ mắc bệnh tiểu đường dựa trên các chỉ số sức khỏe. Ứng dụng này sử dụng mô hình random forest và có thể giúp người dùng theo dõi sức khỏe của mình.",
    image: "https://private-user-images.githubusercontent.com/129405738/452318202-7c34d8be-b965-4a06-9d8e-d5d3dc85763a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTExNjc5MzUsIm5iZiI6MTc1MTE2NzYzNSwicGF0aCI6Ii8xMjk0MDU3MzgvNDUyMzE4MjAyLTdjMzRkOGJlLWI5NjUtNGEwNi05ZDhlLWQ1ZDNkYzg1NzYzYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyOVQwMzI3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZTQ2NjEwOWNiYTljMDI5Y2I0NWYzMGM1Y2MyOTk2YzQ4MjliYWU0MTBkYmM4NDBjMWQ4NTcyNDczMDQ4Y2Q4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.98TX1G1TzOX6q7KKOWb8jVl_FZg8kfSvK2EV38Tfe9A",
    technologies: ["Python", "Random Forest", "Flask", "Pandas", "NumPy"],
    github: "https://github.com/n1ml3/diabetes-prediction-model",
    demo: "",
  },
]
