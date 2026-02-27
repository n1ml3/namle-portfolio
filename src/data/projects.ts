import type { Project } from "../types"

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Một nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với React và Node.js. Bao gồm giỏ hàng, thanh toán, quản lý sản phẩm và dashboard admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "https://github.com/n1ml3/commerce-backend",
    demo: "",
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
    image: "https://private-user-images.githubusercontent.com/129405738/452610013-5628d3e8-d11a-4e02-815c-41f6a69049ca.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIyMTAxMTMsIm5iZiI6MTc3MjIwOTgxMywicGF0aCI6Ii8xMjk0MDU3MzgvNDUyNjEwMDEzLTU2MjhkM2U4LWQxMWEtNGUwMi04MTVjLTQxZjZhNjkwNDljYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIyN1QxNjMwMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYjdjODQ5NzdlYTI1MWM0NzVmODU1YWUyODJmODE4MDdkMDYyMzg1NDkyMDZmYWRkYTA4YjYwYTA5OTgzZWM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BEO79AaaMKMVv8pl1-HtcIgCFjpLhvnhNzQbBWLLBiA",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/n1ml3/namle-portfolio",
    demo: "https://namle-portfolio.vercel.app/",
  },
  {
    title: "Flutter Todo App",
    description:
      "Đây là ứng dụng quản lý công việc (Todo App) hoàn chỉnh được xây dựng bằng Flutter và Dart.",
    image: "https://private-user-images.githubusercontent.com/129405738/525157955-f8ab735b-f223-41b1-8476-6463118625a2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIyMDk5MzQsIm5iZiI6MTc3MjIwOTYzNCwicGF0aCI6Ii8xMjk0MDU3MzgvNTI1MTU3OTU1LWY4YWI3MzViLWYyMjMtNDFiMS04NDc2LTY0NjMxMTg2MjVhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIyN1QxNjI3MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZTQyOGRhNjdjYzgwMWNlMDdjZjMyNDUyMjE2NTA2NDVjOTI5MWI3Zjk2MmFmOTNhNjlkOTFlOGZhYTg0MWFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hTbPnJvUDZqE4U4_slI8RBO8DUkcwgSvoqshvY9rjnk",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/HUMG-IT/flutter-final-project-n1ml3?tab=readme-ov-file",
    demo: "",
  },
  {
    title: "Dự đoán bệnh tiểu đường",
    description:
      "Sử dụng machine learning để dự đoán nguy cơ mắc bệnh tiểu đường dựa trên các chỉ số sức khỏe. Ứng dụng này sử dụng mô hình random forest và có thể giúp người dùng theo dõi sức khỏe của mình.",
    image: "https://private-user-images.githubusercontent.com/129405738/452318202-7c34d8be-b965-4a06-9d8e-d5d3dc85763a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzIyMTAzOTgsIm5iZiI6MTc3MjIxMDA5OCwicGF0aCI6Ii8xMjk0MDU3MzgvNDUyMzE4MjAyLTdjMzRkOGJlLWI5NjUtNGEwNi05ZDhlLWQ1ZDNkYzg1NzYzYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIyN1QxNjM0NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYmExMDU1ZTM5ZGVkZWU0ZWZkZWFmYzQ1ZmZjZDBkY2M0YzQzNmVhYmZjZjk4Y2VlYTgyYzc0Y2JlMjIzYzc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pqTD4lZPMOCLNWNFDpDalhbSeu3kIFgGRGUFAAdW1D0",
    technologies: ["Python", "Random Forest", "Flask", "Pandas", "NumPy"],
    github: "https://github.com/n1ml3/diabetes-prediction-model",
    demo: "",
  },
]
