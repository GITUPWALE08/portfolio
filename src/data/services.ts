import type { Service } from '../types';

export const services: Service[] = [
  {
    id: "backend",
    title: "Backend & API Systems",
    description: "Design and build high-performance APIs, decoupled backend services, and scalable database architectures."
  },
  {
    id: "iot",
    title: "Industrial IoT Integration",
    description: "Build telemetry ingestion, memory-safe buffering, and visualization systems for high-frequency hardware devices."
  },
  {
    id: "realtime",
    title: "Real-Time Data Systems",
    description: "Engineer event-driven architectures utilizing WebSockets, Redis Streams, and continuous background processing."
  },
  {
    id: "automation",
    title: "Automation & System Integration",
    description: "Develop autonomous workflows that ingest, validate, and execute complex business logic without manual intervention."
  },
  {
    id: "operational",
    title: "Internal/Operational Platforms",
    description: "Architect full-stack management dashboards and secure administrative tooling tailored to physical business operations."
  },
  {
    id: "system-design",
    title: "Technical System Design",
    description: "Map complex domain requirements into strictly typed, strictly modeled software architectures prior to implementation."
  }
];
