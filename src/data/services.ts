import type { Service } from '../types';

export const services: Service[] = [
  {
    id: "systems",
    title: "Systems & Backend Engineering",
    description: "Design and build APIs, backend services and system architectures."
  },
  {
    id: "automation",
    title: "Automation Engineering",
    description: "Build systems that ingest information, process it and perform actions with minimal manual intervention."
  },
  {
    id: "realtime",
    title: "Real-Time Systems",
    description: "Design event-driven and real-time applications using WebSockets, Redis Streams and background workers."
  },
  {
    id: "iot",
    title: "IoT & Telemetry Systems",
    description: "Build telemetry ingestion, buffering, processing and visualization systems for connected devices."
  },
  {
    id: "fullstack",
    title: "Full-Stack Product Development",
    description: "Build complete products across frontend, backend, databases and deployment."
  }
];
