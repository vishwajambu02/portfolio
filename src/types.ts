export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  stack: string[];
  year: string;
  githubUrl?: string;
  demoUrl?: string;
  isFeatured?: boolean;
  status: "live" | "future";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  title: string;
  description: string;
}
