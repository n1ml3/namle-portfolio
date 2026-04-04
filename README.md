# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design.

## Features

- Dark/Light mode with system preference detection
- Smooth scroll animations with Intersection Observer
- Fully responsive design with mobile menu
- Built with Vite for fast development
- Customizable with Tailwind CSS variables
- SEO optimized
- Interactive UI components and transitions

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- PostCSS
- ESLint

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/n1ml3/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/
│   │       ├── AnimatedSection.tsx
│   │       ├── ContactForm.tsx
│   │       ├── ProjectCard.tsx
│   │       └── SkillCard.tsx
│   ├── data/
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json
```

## Key Components

### Layout Components
- **Navbar**: Responsive navigation with mobile menu and theme switcher
- **Footer**: Site footer with social links

### Section Components
- **Hero**: Landing section with call-to-action buttons
- **About**: About section with stats and description
- **Skills**: Skills section with progress bars and categories
- **Projects**: Projects showcase with interactive cards
- **Contact**: Contact form with social links

### UI Components
- **[`AnimatedSection`](src/components/ui/AnimatedSection.tsx)**: Reusable component for scroll-based animations
- **[`ContactForm`](src/components/ui/ContactForm.tsx)**: Interactive contact form with validation
- **[`ProjectCard`](src/components/ui/ProjectCard.tsx)**: Card component for displaying projects
- **[`SkillCard`](src/components/ui/SkillCard.tsx)**: Card component for displaying skills

### Custom Hooks
- **[`useScrollAnimation`](src/hooks/useScrollAnimation.ts)**: Custom hook for handling scroll-based animations

## Customization

### Theme Colors
Colors can be customized in [`index.css`](src/index.css) using CSS variables:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  // ...other color variables
}
```

### Animations
Animation settings can be adjusted in:
- [`useScrollAnimation.ts`](src/hooks/useScrollAnimation.ts) for scroll triggers
- [`AnimatedSection.tsx`](src/components/ui/AnimatedSection.tsx) for animation styles

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Email: namle26022004@gmail.com
- GitHub: [n1ml3](https://github.com/n1ml3)
- LinkedIn: [Lê Nam](https://www.linkedin.com/in/lê-nam-296791368)

## Screenshots

![image](https://github.com/user-attachments/assets/5628d3e8-d11a-4e02-815c-41f6a69049ca)

---

Built with ❤️ by Nam Le


