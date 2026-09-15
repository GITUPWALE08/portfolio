export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  engineeringWork: string[];
  challenges: string[];
  lessons: string[];
  architecture?: string;
  technologies: {
    category: string;
    items: string[];
  }[];
  status: "active" | "completed" | "prototype" | "in-progress";
  visibility: "public" | "partial" | "private";
  featured: boolean;
  visible: boolean;
  order: number;
  demoUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  client?: boolean;
  images?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
  benchmarks?: {
    type: "ACHIEVED" | "VERIFIED" | "TESTED" | "TARGET" | "DESIGNED FOR";
    description: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  order: number;
  visible: boolean;
}

export interface Skill {
  id: string;
  category: string;
  name: string;
  usedIn?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  level: string;
  expectedGraduation: string;
  relevantAreas: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  supportingStatement: string;
  aboutPositioning: string;
  email: string;
  github: string;
  linkedin: string;
  telegram?: string;
  whatsapp?: string; 
}
