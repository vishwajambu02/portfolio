import { Project, Education, SkillCategory, Certification, Achievement } from "./types";

export const PERSONAL_INFO = {
  name: "Vishwa Jambu",
  nickname: "VJ",
  title: "Full-Stack Developer & AI Solutions Engineer",
  subTitle: "B.Tech Computer Science Student | Parul University",
  email: "vishwaj@myyahoo.com ",
  secondaryEmail: "vishwajambu66@gmail.com",
  phone: "+91 8320342909",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/vishwajambu02",
  linkedin: "https://linkedin.com/in/vishwa-jambu-7a007039b",
  about: "A passionate Computer Science & Engineering student at Parul University specializing in building high-performance full-stack web applications and AI-integrated platforms. Proficient in React, Node.js, Express, and modern database ecosystems, with a strong emphasis on interactive UI/UX, robust security protocols, and seamless user experiences."
};

export const PROJECTS: Project[] = [
  {
    id: "newscore",
    title: "NewsCore",
    subtitle: "AI-Powered Aggregator & Summarization Platform",
    year: "2026",
    isFeatured: true,
    stack: ["React.js", "Node.js", "Express.js", "Gemini API", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/vishwajambu02",
    status: "live",
    description: [
      "Built a progressive web application (PWA) news aggregator featuring automated content ingestion from toggleable RSS feeds and real-time frontend caching.",
      "Leveraged the Gemini API to perform single-call execution for automated text summarization, multi-class categorization, and core sentiment tagging (Positive/Neutral/Negative).",
      "Engineered high-performance UI mechanics including infinite scroll, skeleton loading states, image lazyloading, and a dynamic 'Top Story' hero layout.",
      "Implemented client-side engagement layers including a localStorage-backed bookmarking system for guest users, Web Speech API speech synthesis ('Listen' functionality), and automated browser push notifications."
    ]
  },
  {
    id: "swachhspot",
    title: "Swachh Spot",
    subtitle: "Public Sanitation Discovery Platform",
    year: "2026",
    isFeatured: true,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Leaflet Maps"],
    githubUrl: "https://github.com/vishwajambu02",
    status: "future",
    description: [
      "Built a full-stack web platform to help citizens discover, rate, and verify nearby public sanitation facilities in real time.",
      "Implemented granular filters for accessibility needs including wheelchair access, water availability, lighting, MHM-friendly, and gender-neutral restrooms.",
      "Integrated a crowdsourced audit system where users earn credits for uploading verified photos and confirming live facility status.",
      "Designed an SOS Panic Button feature for women in secluded areas, alerting emergency contacts with geotagged location.",
      "Built an administrator dashboard for municipalities to track grievances, assign cleanup tickets, and monitor contractor SLA compliance."
    ]
  },
  {
    id: "dailydrape",
    title: "Daily Drape",
    subtitle: "Clothing E-Commerce Website",
    year: "2026",
    isFeatured: false,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/vishwajambu02",
    status: "live",
    description: [
      "Built a highly responsive e-commerce platform for clothing with products, robust multi-criteria search and filter mechanics, and full-featured local shopping cart functionality.",
      "Implemented JWT-based secure user authentication, user session management, and simplified checkout order processes with a clean, mobile-first design.",
      "Designed reusable stateful React components and integrated a backend REST API for real-time catalog fetching and state synchronization."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "C/C++", "TypeScript"]
  },
  {
    name: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design", "UI/UX Principles"]
  },
  {
    name: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "PostgreSQL", "Firebase"]
  },
  {
    name: "Cloud & Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Render", "AWS (Beginner)", "ESBuild", "Vite"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Parul University, Vadodara",
    period: "2024 – 2028",
    score: "CGPA: 7.42 / 10"
  },
  {
    degree: "Class XII (GSEB – NCERT)",
    institution: "G.N.F.C. Narmada Vidyalaya, Bharuch",
    period: "2024",
    score: "Percentage: 66%"
  },
  {
    degree: "Class X (GSEB – NCERT)",
    institution: "G.N.F.C. Narmada Vidyalaya, Bharuch",
    period: "2022",
    score: "Percentage: 80.33%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Community Day Participant",
    issuer: "Amazon Web Services User Group",
    year: "2026"
  },
  {
    title: "Introduction to Microsoft Azure & Cloud Computing",
    issuer: "Parul University — Value Added Course",
    year: "2025"
  },
  {
    title: "Web Development using React.js",
    issuer: "Parul University — Value Added Course",
    year: "2025"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Tech Expo Showcased Innovator",
    description: "Participated in the regional Tech Expo, demonstrating the architecture and real-world impact of Swachh Spot, a civic-tech sanitation platform built to address public hygiene."
  },
  {
    title: "AWS & Cloud Practitioner",
    description: "Attended AWS Community Day, engaging with cloud experts, gaining valuable hands-on exposure to scalable AWS server structures, CI/CD pipelines, and DevOps patterns."
  },
  {
    title: "MERN Stack Solutions Builder",
    description: "Architected and delivered two highly responsive production-ready web products (Swachh Spot & Daily Drape) focused on solving community and retail friction points."
  }
];
