import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "iot-bridge",
    slug: "iot-telemetry-bridge",
    title: "High-Frequency IIoT Telemetry Bridge v2.0",
    shortTitle: "IIoT Telemetry Bridge",
    category: "Industrial IoT / Systems Architecture",
    summary: "An event-driven IIoT middleware platform designed to ingest, buffer, and visualize high-frequency industrial machine data in sub-second real-time.",
    description: "An event-driven industrial IoT middleware platform designed to ingest, buffer, process, store, and visualize high-frequency machine telemetry with minimal latency. It acts as a fault-tolerant bridge between edge hardware and human operators, integrating a Gemini-powered AI layer to execute predictive maintenance analysis on live telemetry streams.",
    role: "Lead Systems Architect & Full-Stack Engineer",
    problem: "Hardware developers face a grueling process of designing, coding, and paying to host custom backends just to visualize sensor data. The overhead of protocol handling, connection management, and database ingestion slows down physical engineering.",
    solution: "A plug-and-play middleware that handles data ingestion and visualization instantly. By pointing a microcontroller's payload to this bridge, data is buffered and visualized in real-time, eliminating the software friction of hardware development.",
    features: [
      "Decoupled Ingestion Pipeline: Routes thousands of HTTP/MQTT payloads per second through an in-memory Redis stream before database persistence.",
      "Ultra-Low Latency WebSocket Dashboard: Renders high-frequency telemetry streams into 60-second OHLC charts instantly without UI blocking.",
      "AI Predictive Indicators: Integrates Gemini LLM analysis directly into the data stream to predict hardware degradation."
    ],
    engineeringWork: [
      "Replaced standard relational tables with TimescaleDB hypertables partitioned by timestamp, removing unique_together constraints to allow high-velocity, append-only inserts.",
      "Engineered a supervised background worker utilizing a hybrid flush logic to pull from Redis via XREADGROUP and execute single bulk_create disk operations.",
      "Implemented a local in-process LRU cache (cachetools.TTLCache) for API key validation, reducing authentication latency to nanoseconds."
    ],
    challenges: [
      "Handling Protocol Overhead: Resolved severe latency from repeated TCP/TLS handshakes by implementing persistent Keep-Alive connections for HTTP and optimizing MQTTS with QoS 1.",
      "Mitigating OOM Crashes: Enforced strict MAXLEN eviction flags on Redis streams and routed failed database writes to a Dead-Letter Queue for manual auditing."
    ],
    lessons: [
      "Abstracting complex systems architecture (Redis streams, TimescaleDB) into a frictionless backend for the end-user.",
      "Engineering fault-tolerant, decoupled event architectures that prioritize memory-safe buffering over direct database transactions.",
      "Strictly isolating the ingestion layer from the storage layer to prevent upstream API schema drift."
    ],
    architecture: "Edge Device -> HTTP/MQTT -> Ingestion Layer -> Redis Streams -> Background Workers -> TimescaleDB / WebSockets",
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind", "WebSockets", "Lightweight Charts"] },
      { category: "Backend", items: ["Python", "Django", "DRF", "Daphne", "Celery", "Pydantic", "orjson", "cachetools"] },
      { category: "Database & Infra", items: ["TimescaleDB", "PostgreSQL", "Redis Streams", "Mosquitto MQTT", "Docker Compose"] }
    ],
    status: "prototype",
    visibility: "public",
    featured: true,
    visible: true,
    order: 1,
    metrics: [
      { label: "Sandbox stress test", value: "5,000+ records/sec" },
      { label: "Architectural target", value: "~50k rows/sec" }
    ]
  },
  {
    id: "entercom",
    slug: "entercom-platform",
    title: "Entercom Security Systems Platform",
    shortTitle: "Entercom Platform",
    category: "Full-Stack Development / Systems Design",
    summary: "A full-stack security and smart-home service platform that connects customers with security-system services while managing the complete operational lifecycle.",
    description: "The platform manages the customer journey from service requests and quotations through payments, technician assignment, verification, support, product orders, and internal operations.",
    role: "Full-Stack Engineer / Systems Design Engineer",
    problem: "Fragmented and manual service operations lacked a unified digital platform to handle quotes, payments, technician assignments, and communication.",
    solution: "A unified platform allowing customers to request services, approve quotes, and make payments, while giving internal teams and technicians tools to manage the entire operation securely.",
    features: [
      "Service request and lifecycle management",
      "Quote creation, approval, revision, and payment workflow",
      "Technician assignment and job management",
      "Customer, Technician, Staff, Manager, and Admin portals",
      "Product catalog, orders, inventory, and payment processing",
      "Paystack payment and webhook integration",
      "Real-time notifications and support chat"
    ],
    engineeringWork: [
      "Designed domain-driven request, quote, assignment, verification, payment, and escalation workflows.",
      "Built service-layer architecture around business operations rather than putting logic directly inside API views.",
      "Integrated Paystack webhook processing with payment verification and idempotency safeguards.",
      "Implemented partial and full quote payment handling.",
      "Built asynchronous Celery workflows for scheduled reminders and background processing.",
      "Developed RBAC across Customer, Technician, Staff, Manager, and Super Admin roles."
    ],
    challenges: [
      "Managing complex request, quote, payment, technician, and verification workflows without breaking existing business rules.",
      "Maintaining consistency between frontend state, backend state, payments, and real-time events.",
      "Handling partial payments while preventing requests from being incorrectly completed."
    ],
    lessons: [
      "Designing complex business workflows using state-driven architecture.",
      "Building reliable payment and webhook systems.",
      "How asynchronous processing and real-time communication work together in production systems."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "React Native", "Expo"] },
      { category: "Backend", items: ["Python", "Django", "Django REST Framework", "Django Channels"] },
      { category: "Database & Infra", items: ["PostgreSQL", "Supabase", "Vercel", "Render", "Railway", "Redis"] }
    ],
    status: "active",
    visibility: "private",
    featured: true,
    visible: true,
    order: 2,
    demoUrl: "https://entercom-v1.vercel.app/",
    client: true
  },
  {
    id: "drool-nft",
    slug: "drool-nft",
    title: "Drool NFT Whitelist Platform",
    shortTitle: "Drool NFT",
    category: "Web3 / Frontend Development",
    summary: "A Web3 NFT whitelist platform designed for high-volume wallet registration and engagement collection.",
    description: "A highly scalable Web3 landing page and whitelist application designed to collect user engagement data and Ethereum wallet addresses for an upcoming NFT mint. It features a multi-step submission UI, native MetaMask integration, and a secure admin dashboard built to handle massive traffic spikes.",
    role: "Lead Frontend Developer",
    problem: "No-code tools suffer from bottlenecks and rate-limiting crashes during high-concurrency mint announcements. A solution was needed to manage massive whitelist submissions while preventing duplicate wallet spam.",
    solution: "A bespoke React application with Supabase PostgreSQL to eliminate API rate limits and connection throttling, utilizing unique database constraints to reject duplicate submissions natively.",
    features: [
      "Interactive Whitelist Flow requiring users to verify engagement.",
      "Web3 Wallet Integration with native MetaMask auto-fill.",
      "Hidden Admin Command Center for real-time signup metrics.",
      "Memory-Safe Data Export tools for tens of thousands of wallets."
    ],
    engineeringWork: [
      "Database-Level Duplicate Prevention leveraging PostgreSQL UNIQUE constraints to automatically reject duplicates.",
      "Data-Layer Re-architecture migrating from Google Apps Script webhook to Supabase to eliminate rate limits.",
      "Asynchronous Chunk Fetching engineered to paginate 40,000+ rows of data in small chunks, preventing browser memory crashes.",
      "Static-Site Hash Routing implemented to securely serve the admin dashboard without triggering 404 errors."
    ],
    challenges: [
      "Handling potential browser memory crashes when fetching massive datasets.",
      "Ensuring duplicate wallet submissions were instantly and safely rejected.",
      "Securing the wallet data so it was strictly write-only for the public."
    ],
    lessons: [
      "Integrating and optimizing Supabase PostgreSQL for high-concurrency Web3 applications.",
      "Techniques for safely handling large data exports in the browser.",
      "Managing Web3 wallet connection states."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "ethers.js"] },
      { category: "Backend & DB", items: ["Supabase Auth", "Supabase PostgreSQL"] },
      { category: "Infrastructure", items: ["Vercel"] }
    ],
    status: "completed",
    visibility: "public",
    featured: true,
    visible: true,
    order: 3,
    demoUrl: "https://droolnft.vercel.app/",
    githubUrl: "https://github.com/GITUPWALE08/DROOLNFT",
    metrics: [
      { label: "Campaign target", value: "40,000+ users" }
    ]
  },
  {
    id: "rbac-visualizer",
    slug: "rbac-visualizer",
    title: "RBAC Visualizer",
    shortTitle: "RBAC Visualizer",
    category: "Full-Stack Development / Graph Databases",
    summary: "A full-stack application for visualizing role-based access control hierarchies using a graph database.",
    description: "A full-stack web application that visualizes Role-Based Access Control (RBAC) hierarchies. It maps relationships between users, roles, and permissions using a graph database, enabling rapid and efficient multi-hop access checks.",
    role: "Full-Stack Developer",
    problem: "Visually exploring and efficiently querying complex, nested permission structures typically requires slow, recursive JOINs in traditional relational databases.",
    solution: "Leveraging a graph database (Neo4j) to map inheritances as nodes and edges, paired with a visual React interface for rapid exploration.",
    features: [
      "Visual Hierarchy Dashboard: Displays users alongside their directly assigned roles and inherited permissions.",
      "Multi-Hop Access Checker: Evaluates if a user has specific access rights by natively traversing through multiple relationship hops.",
      "Automated Data Seeding: Initializes the cloud-hosted graph database with test data."
    ],
    engineeringWork: [
      "Modeled and implemented a graph schema that natively represents RBAC inheritances.",
      "Wrote parameterized Cypher queries to securely prevent injection vulnerabilities while executing multi-hop traversals.",
      "Kept the architecture strictly minimal, intentionally bypassing complex ORMs."
    ],
    challenges: [
      "Condensing a full-stack implementation into a strict 5-hour sprint.",
      "Ensuring the multi-hop Cypher traversal query was syntactically correct and securely parameterized.",
      "Troubleshooting cross-origin issues during split-stack deployment."
    ],
    lessons: [
      "Graph databases drastically simplify querying hierarchical and highly connected data.",
      "Utilizing a highly constrained, single-file Flask API is incredibly effective for raw database operations."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
      { category: "Backend", items: ["Python", "Flask"] },
      { category: "Database & Infra", items: ["Neo4j (CognoDB)", "Cypher", "Vercel", "Render"] }
    ],
    status: "completed",
    visibility: "public",
    featured: true,
    visible: true,
    order: 4,
    demoUrl: "https://wexa-psi.vercel.app/",
    githubUrl: "https://github.com/GITUPWALE08/wexa"
  },
  {
    id: "finance-platform",
    slug: "finance-platform",
    title: "Finance Trading Platform",
    shortTitle: "Finance Platform",
    category: "Full-Stack Development / Financial Tech",
    summary: "A stock-trading simulation platform implementing live quotes, buying/selling, portfolio tracking and transaction history.",
    description: "A web-based stock trading simulation platform where users can retrieve real-time stock quotes, buy/sell shares, and track their portfolio performance. It serves as a modern, decoupled full-stack recreation of a financial trading application.",
    role: "Full-Stack Developer",
    problem: "Handling financial data correctly requires strict database transaction integrity, preventing race conditions, and securely passing state between a backend and a Single Page Application.",
    solution: "A decoupled architecture utilizing PostgreSQL with strict ON CONFLICT constraints and atomic SQL updates to ensure user balances and share counts are perfectly synchronized during trades.",
    features: [
      "Real-Time Quoting: Fetches and displays live stock market prices.",
      "Trading Engine: Calculates costs and verifies sufficient funds before execution.",
      "Portfolio Management: Tracks owned assets dynamically via upsert operations."
    ],
    engineeringWork: [
      "Engineered a strict separation of concerns by splitting the app into two repositories communicating via REST API.",
      "Implemented strict ON CONFLICT constraints and atomic SQL updates to ensure integrity.",
      "Implemented robust backend try/except/finally blocks with session.rollback() capabilities."
    ],
    challenges: [
      "Resolving complex SQL ambiguities during portfolio updates.",
      "Bridging the gap between the React frontend and Python backend, resolving 405 errors.",
      "Deployment configuration across two different cloud providers."
    ],
    lessons: [
      "The critical importance of proper SQL transaction isolation.",
      "How to properly trace a full-stack request cycle through the network layer down to the database ORM."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Python", "SQLAlchemy", "PostgreSQL (psycopg2)"] },
      { category: "Infrastructure", items: ["Vercel", "Render"] }
    ],
    status: "active",
    visibility: "public",
    featured: true,
    visible: true,
    order: 5,
    demoUrl: "https://finance-three-sepia.vercel.app/",
    githubUrl: "https://github.com/GITUPWALE08/fin_frontend"
  },
  {
    id: "entercom-website",
    slug: "entercom-website",
    title: "Entercom Security Systems Website",
    shortTitle: "Entercom Website",
    category: "IT Infrastructure & Frontend",
    summary: "Corporate website and digital presence for Entercom Security, managing domain architecture and email routing.",
    description: "Corporate website and digital platform for Entercom Security, a firm specializing in physical protection, smart home security, and structured cabling. It serves as their primary online presence, built with a decoupled web and email infrastructure.",
    role: "IT Infrastructure & Frontend Developer",
    problem: "The client needed a high-performance web presence with custom domain architecture that could run reliable corporate email without DNS conflicts with the Vercel edge network.",
    solution: "Seamlessly routed traffic from a Hostinger domain to Vercel via precise DNS mapping, resolving A/CNAME conflicts, and configured secure Titan Email with SPF/MX records.",
    features: [
      "High-Performance Frontend showcasing physical security services.",
      "Custom Domain Architecture separating Vercel edge delivery from Hostinger domain management.",
      "Secure Corporate Email infrastructure."
    ],
    engineeringWork: [
      "Navigated and resolved DNS conflict issues where registrar's default site provisioning overrode Vercel's routing.",
      "Configured specific MX priorities and a robust TXT/SPF record to guarantee secure communication.",
      "Successfully separated the email hosting from the web hosting on the same root domain."
    ],
    challenges: [
      "Hostinger's automated system conflicting with Vercel DNS settings.",
      "Debugging Vercel's Invalid Configuration errors caused by hidden default IPv6 records.",
      "Ensuring email MX records verified successfully alongside Vercel's IP."
    ],
    lessons: [
      "Deepened practical understanding of DNS Zone management and manual record overrides.",
      "Mastered maintaining decoupled architectures where email and frontend apps are hosted on entirely separate networks."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Infrastructure", items: ["Vercel", "Hostinger", "Titan Email", "DNS", "SPF", "MX Records"] }
    ],
    status: "active",
    visibility: "partial",
    featured: true,
    visible: true,
    order: 6,
    demoUrl: "https://www.entercomsecurity.com/",
    githubUrl: "https://github.com/GITUPWALE08/Entercom",
    client: true
  },
  {
    id: "esdan",
    slug: "esdan",
    title: "ESDAN",
    shortTitle: "ESDAN Website",
    category: "Frontend Development",
    summary: "Corporate web application for the Economic and Social Development Association of Nigeria.",
    description: "ESDAN is a corporate web application designed to showcase economic and social development programs alongside a commercial catalog for products like solar-powered tricycles.",
    role: "Frontend Developer",
    problem: "Stakeholders needed a unified digital platform that clearly separated philanthropic development projects from commercial product catalogs.",
    solution: "A highly modular React architecture with custom scroll-handling and dynamic routing for seamless navigation and quote requests.",
    features: [
      "Responsive sidebar navigation and mobile-friendly layout.",
      "Modular product catalog with a dedicated quote request system.",
      "Smart anchor-linking system for direct navigation to specific page sections."
    ],
    engineeringWork: [
      "Structured the application into highly modular components, separating UI logic from data layers.",
      "Implemented a custom scroll-handler within React Router to seamlessly support anchor links.",
      "Configured SPA client-side routing on Vercel using vercel.json."
    ],
    challenges: [
      "Resolving 404 errors when users attempted direct navigation to sub-routes.",
      "Overriding React Router's default scroll-to-top behavior for targeted anchor linking."
    ],
    lessons: [
      "Configuring Vercel rewrite rules to support Single Page Application (SPA) routing.",
      "Managing DOM scrolling and hash-based navigation alongside React Router."
    ],
    technologies: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"] },
      { category: "Infrastructure", items: ["Vercel"] }
    ],
    status: "active",
    visibility: "public",
    featured: true,
    visible: true,
    order: 7,
    demoUrl: "https://esdan.vercel.app/",
    githubUrl: "https://github.com/GITUPWALE08/ESDAN",
    client: true
  }
];
