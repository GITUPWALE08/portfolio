import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: "entercom",
    company: "Entercom",
    role: "Freelance Full-Stack Developer",
    startDate: "Dec 2025",
    endDate: "Present",
    current: true,
    description: "Developing and maintaining full-stack operations, leading technical architecture for security systems platforms.",
    responsibilities: [
      "Django/DRF backend service architecture",
      "React and React Native/Expo frontend implementation",
      "Designing complex business workflows and Role-Based Access Control (RBAC)",
      "Payment systems integration with audit logging",
      "Real-time communication using WebSockets",
      "Backend workflows with Celery and Redis"
    ],
    technologies: ["Django", "DRF", "React", "React Native", "Expo", "PostgreSQL", "Redis", "Celery", "WebSockets"],
    order: 1,
    visible: true
  },
  {
    id: "esdan-lead",
    company: "ESDAN Software Development",
    role: "Team Lead",
    startDate: "Sep 2025",
    endDate: "March 2026",
    current: true,
    description: "Leading a software development team to deliver scalable organizational and commercial digital platforms.",
    responsibilities: [
      "Leading 5+ developers in frontend and backend implementation",
      "Conducting code reviews and establishing development standards",
      "Maintaining technical documentation",
      "Software architecture design",
      "Coordinating delivery and deployments"
    ],
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "Git"],
    order: 4,
    visible: true
  },
  {
    id: "pronto-intern",
    company: "Pronto Microsystems",
    role: "Engineering Intern",
    startDate: "Mar 2026",
    endDate: "Sep 2026",
    current: false,
    description: "Assisted in building REST APIs, performance tuning, and implementing scalable backend architectures.",
    responsibilities: [
      "Developed web applications using Django, Flask, and React",
      "Designed and optimized REST APIs",
      "Wrote complex SQL queries for relational databases",
      "Debugging and performance optimization",
      "CI/CD pipeline management"
    ],
    technologies: ["Django", "Flask", "React", "REST APIs", "SQL", "CI/CD"],
    order: 2  ,
    visible: true
  },
  {
    id: "prebit-analyst",
    company: "Prebit Telegram",
    role: "Data Analyst",
    startDate: "Dec 2024",
    endDate: "Jul 2025",
    current: false,
    description: "Conducted data-driven market research, modeling, and automated data workflows.",
    responsibilities: [
      "Market analysis and statistical analysis",
      "Building technical models",
      "Developing data-driven trading workflows"
    ],
    technologies: ["Python", "Data Analysis", "Statistical Modeling", "Trading Workflows"],
    order: 3,
    visible: true
  }
];
