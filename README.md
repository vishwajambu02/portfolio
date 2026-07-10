<div align="center">

# 🚀 Vishwa Jambu — Developer Portfolio

### Full-Stack Developer · AI Solutions Engineer · B.Tech CSE Student

A premium, dark-themed, animation-rich developer portfolio built with React, TypeScript, and an integrated AI assistant.

[![Live Site](https://img.shields.io/badge/Live-Demo-14b8a6?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-lyqp.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Made with React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[View Demo](https://portfolio-lyqp.onrender.com) · [Report Bug](https://github.com/vishwajambu02/portfolio/issues) · [Request Feature](https://github.com/vishwajambu02/portfolio/issues)

</div>

---

## 📖 About The Project

This repository powers my personal developer portfolio — designed to showcase my projects, technical skills, and educational background through a premium, futuristic interface. It features smooth motion-driven animations, a fully responsive layout, and a built-in AI assistant that can answer questions about my background in real time.

Built as a full-stack application (not just a static site), it pairs a React/Vite frontend with an Express backend that powers the AI chat integration.

---

## ✨ Features

| | |
|---|---|
| 🌌 **Dark, Futuristic UI** | Glassmorphism panels, gradient accents, and a cinematic splash intro |
| ⚡ **Fluid Animations** | Powered by Motion (Framer Motion) throughout every section |
| 🤖 **AI Chat Assistant** | Ask questions about my skills, projects, and background — answered live via AI |
| 📱 **Fully Responsive** | Optimized layouts from mobile to ultra-wide desktop |
| 🗂️ **Interactive Project Gallery** | Filterable, detailed showcases of featured work |
| 🎓 **Education & Certification Timeline** | Structured, easy-to-scan academic history |
| 📄 **One-Click Resume Download** | Direct PDF resume access |
| 🌠 **Animated Particle Background** | Subtle depth without sacrificing performance |
| 🎯 **SEO & Performance Optimized** | Fast loads via Vite's production build pipeline |

---

## 🛠️ Tech Stack

**Frontend**
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev) — build tooling & dev server
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first styling
- [Motion](https://motion.dev) — animation engine
- [Lucide React](https://lucide.dev) — icon system

**Backend**
- [Express](https://expressjs.com) — API server
- [Google Gemini API](https://ai.google.dev) — AI chat assistant

**Tooling & Deployment**
- [esbuild](https://esbuild.github.io) — server bundling
- [Render](https://render.com) — hosting

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg          # Profile photo
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── components/          # UI sections (Hero, Skills, Projects, etc.)
│   ├── data.ts              # ⭐ Central content file — edit this to update your info
│   ├── types.ts             # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── server.ts                 # Express server + Gemini AI chat API
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vishwajambu02/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# then add your GEMINI_API_KEY inside .env
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GEMINI_API_KEY` | API key for the AI chat assistant — get one free at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) | Optional (chat falls back gracefully without it) |
| `NODE_ENV` | Set to `production` when deploying | Recommended for deployment |

---

## ☁️ Deployment

This project deploys cleanly to [Render](https://render.com) as a Node web service:

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Environment Variables | `GEMINI_API_KEY`, `NODE_ENV=production` |

---

## 🗺️ Sections Overview

- **Hero** — Introduction, quick stats, and contact shortcuts
- **Skills** — Categorized technical skill set
- **Projects** — Featured full-stack builds with tech stack breakdowns
- **Education** — Academic timeline and certifications
- **AI Assistant** — Floating chat widget for interactive Q&A
- **Contact** — Direct email, phone, and social links

---

## 📈 Roadmap

- [ ] Blog / writing section
- [ ] Visitor analytics dashboard
- [ ] Light/dark theme switcher
- [ ] Project filtering by tech stack
- [ ] GitHub contribution graph embed
- [ ] Multi-language support

---

## 👨‍💻 About Me

I'm **Vishwa Jambu**, a B.Tech Computer Science & Engineering student at Parul University, Vadodara. I build AI-integrated, full-stack web applications with a strong focus on clean architecture and premium UI/UX design.

- 🌐 Portfolio: [portfolio-lyqp.onrender.com](https://portfolio-lyqp.onrender.com)
- 💼 GitHub: [@vishwajambu02](https://github.com/vishwajambu02)
- 🔗 LinkedIn: [Vishwa Jambu](https://linkedin.com/in/vishwa-jambu-7a007039b/)
- 📧 Email: vishwajambu66@gmail.com

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

### If you like this project, consider giving it a ⭐

**Designed & Developed by Vishwa Jambu** · © 2026

</div>
