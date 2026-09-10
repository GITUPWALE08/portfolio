import type { Skill } from '../types';

export const skills: Skill[] = [
  // Backend & Systems
  { id: "python", category: "Backend & Systems", name: "Python", usedIn: ["Entercom", "IoT Bridge", "Finance", "Trading Pipeline", "Telegram Bot"] },
  { id: "django", category: "Backend & Systems", name: "Django", usedIn: ["Entercom", "IoT Bridge", "Pronto Microsystems"] },
  { id: "drf", category: "Backend & Systems", name: "Django REST Framework", usedIn: ["Entercom", "IoT Bridge"] },
  { id: "flask", category: "Backend & Systems", name: "Flask", usedIn: ["RBAC Visualizer", "Pronto Microsystems"] },
  { id: "rest-apis", category: "Backend & Systems", name: "REST APIs" },
  { id: "postgresql-backend", category: "Backend & Systems", name: "PostgreSQL" },
  { id: "redis-backend", category: "Backend & Systems", name: "Redis" },
  { id: "celery", category: "Backend & Systems", name: "Celery", usedIn: ["Entercom", "IoT Bridge"] },
  { id: "websockets-backend", category: "Backend & Systems", name: "WebSockets", usedIn: ["Entercom", "IoT Bridge"] },
  { id: "event-driven", category: "Backend & Systems", name: "Event-driven architecture", usedIn: ["IoT Bridge"] },

  // Frontend
  { id: "react", category: "Frontend", name: "React", usedIn: ["Entercom", "Drool NFT", "RBAC Visualizer", "Finance", "ESDAN", "IoT Bridge"] },
  { id: "typescript", category: "Frontend", name: "TypeScript" },
  { id: "javascript", category: "Frontend", name: "JavaScript" },
  { id: "vite", category: "Frontend", name: "Vite" },
  { id: "tailwind", category: "Frontend", name: "Tailwind CSS" },
  { id: "react-native", category: "Frontend", name: "React Native", usedIn: ["Entercom"] },
  { id: "expo", category: "Frontend", name: "Expo", usedIn: ["Entercom"] },

  // IoT & Real-Time
  { id: "mqtt", category: "IoT & Real-Time", name: "MQTT", usedIn: ["IoT Bridge"] },
  { id: "redis-streams", category: "IoT & Real-Time", name: "Redis Streams", usedIn: ["IoT Bridge"] },
  { id: "websockets-iot", category: "IoT & Real-Time", name: "WebSockets", usedIn: ["IoT Bridge"] },
  { id: "telemetry", category: "IoT & Real-Time", name: "Telemetry systems", usedIn: ["IoT Bridge"] },
  { id: "realtime-dashboards", category: "IoT & Real-Time", name: "Real-time dashboards", usedIn: ["IoT Bridge"] },
  { id: "iiot", category: "IoT & Real-Time", name: "Industrial IoT", usedIn: ["IoT Bridge"] },

  // Databases
  { id: "postgresql", category: "Databases", name: "PostgreSQL", usedIn: ["Entercom", "Drool NFT", "Finance", "IoT Bridge"] },
  { id: "supabase", category: "Databases", name: "Supabase", usedIn: ["Entercom", "Drool NFT"] },
  { id: "sqlite", category: "Databases", name: "SQLite" },
  { id: "timescaledb", category: "Databases", name: "TimescaleDB", usedIn: ["IoT Bridge"] },
  { id: "neo4j", category: "Databases", name: "Neo4j/CognoDB", usedIn: ["RBAC Visualizer"] },

  // Infrastructure
  { id: "vercel", category: "Infrastructure", name: "Vercel" },
  { id: "render", category: "Infrastructure", name: "Render" },
  { id: "railway", category: "Infrastructure", name: "Railway" },
  { id: "docker", category: "Infrastructure", name: "Docker", usedIn: ["IoT Bridge"] },
  { id: "git", category: "Infrastructure", name: "Git" },
  { id: "cicd", category: "Infrastructure", name: "CI/CD" },

  // AI & Automation
  { id: "llm", category: "AI & Automation", name: "LLM integrations", usedIn: ["IoT Bridge"] },
  { id: "groq", category: "AI & Automation", name: "GROQ" },
  { id: "gemini", category: "AI & Automation", name: "Gemini", usedIn: ["IoT Bridge"] },
  { id: "telethon", category: "AI & Automation", name: "Telethon", usedIn: ["Telegram Bot"] },
  { id: "automation-pipelines", category: "AI & Automation", name: "Automation pipelines" },
  { id: "background-workers", category: "AI & Automation", name: "Background workers" }
];
