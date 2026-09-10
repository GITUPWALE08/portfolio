1. Portfolio Identity
    A.Whatthe portfolio should primarily sell me as: Hybrid (Systems & Automation Engineer)
    B. What the visitor should think about me after 10 seconds: "This guy builds real-world products." "This guy builds complex systems."
    C. Primary audience: Recruiters -> comapnies looking for interns/junior engineers - > startup founders -> potential collaborators


2. Visual/ Design direction: 
    A. Visual Style: A minimalistic modern engineering + industrial/systems.
    B. Both with dark mode as default
    C. Animation: Subtle professional animations
    D. Yes I want a custom hero visual



3. My projects:
    entercom-v1.vercel.app:
    ***
    PROJECT NAME:
Entercom Security Systems Platform

PROJECT URL:
https://entercom-v1.vercel.app/

WHAT IS IT?

A full-stack security and smart-home service platform that connects customers with security-system and home-automation services.

The platform manages the customer journey from service requests and quotations through payments, technician assignment, verification, support, product orders, and internal operations.

MY ROLE:

Full-Stack Engineer / Systems Design Engineer

I designed and implemented major parts of the platform architecture, backend services, frontend interfaces, workflows, real-time features, payment flows, operational dashboards, and mobile application foundation.

I also worked on system audits, workflow design, testing, integration, and incremental improvements across the platform.

WHY DID I BUILD IT?

To replace fragmented and manual service operations with a unified digital platform.

The system allows customers to request services, receive and approve quotes, make payments, track technicians and jobs, purchase products, and communicate with support while giving internal teams tools to manage the entire operation.

KEY FEATURES:

* Service request and lifecycle management
* Quote creation, approval, revision, and payment workflow
* Technician assignment and job management
* Customer, Technician, Staff, Manager, and Admin portals
* Product catalog, orders, inventory, and payment processing
* Paystack payment and webhook integration
* Real-time notifications and WebSocket communication
* Customer support chat with attachments and internal notes
* Technician recruitment and onboarding
* Verification and inspection workflows
* SLA and escalation management
* Immutable audit logging
* Operational and management analytics
* Customer mobile application

TECH STACK:

Frontend:
React, TypeScript, Vite, Tailwind CSS, Zustand, TanStack Query

Backend:
Python, Django, Django REST Framework, Django Channels

Database:
PostgreSQL, Supabase

Infrastructure:
Vercel, Render, Railway, Redis

Other:
Celery, WebSockets, JWT, Paystack, REST APIs, React Native / Expo

IMPORTANT ENGINEERING WORK:

* Designed domain-driven request, quote, assignment, verification, payment, and escalation workflows
* Built service-layer architecture around business operations rather than putting logic directly inside API views
* Implemented state-driven request lifecycle and transition controls
* Integrated Paystack webhook processing with payment verification and idempotency safeguards
* Implemented partial and full quote payment handling
* Built asynchronous Celery workflows for scheduled reminders and background processing
* Implemented real-time WebSocket infrastructure and support chat
* Built immutable audit logging for important system operations
* Developed RBAC across Customer, Technician, Staff, Manager, and Super Admin roles
* Built operational dashboards and graphical analytics
* Designed the mobile application around a mobile-first customer experience

CHALLENGES:

* Managing complex request, quote, payment, technician, and verification workflows without breaking existing business rules
* Maintaining consistency between frontend state, backend state, payments, and real-time events
* Handling partial payments while preventing requests from being incorrectly completed
* Building reliable real-time communication and reconnect behaviour
* Designing a flexible platform that can support customers, technicians, staff, managers, and administrators
* Incrementally improving a growing system without unnecessarily redesigning existing architecture

WHAT I LEARNED:

* How to design and implement complex business workflows using state-driven architecture
* How to build reliable payment and webhook systems
* How asynchronous processing and real-time communication work together in production systems
* How RBAC, auditability, and domain boundaries affect system design
* How to evolve a large application incrementally without introducing unnecessary architectural complexity

STATUS:

Active — Client Project

GITHUB:
Private / Not provided

Demo:
https://entercom-v1.vercel.app/

Documentation:
Internal project documentation

CAN I SHOW THE SOURCE CODE?

No — Private client project

IS THIS A CLIENT/PRIVATE PROJECT?

Yes

WHAT SHOULD THE PORTFOLIO EMPHASIZE?

* Systems architecture and engineering ownership
* Full-stack development
* Complex business workflow design
* Payment reliability and transaction integrity
* Real-time WebSocket systems
* Async processing with Celery and Redis
* RBAC and auditability
* Technician/service operations
* Building a real production-oriented platform rather than a simple CRUD application
* Ability to design and evolve a complex system incrementally
    ***


    entercomsecurity.com:
    ***
**PROJECT NAME:**
Entercom Security Systems Website

**PROJECT URL:**
[entercomsecurity.com](https://www.entercomsecurity.com)

**WHAT IS IT?**
A corporate website and digital platform for Entercom Security, a firm specializing in physical protection, smart home security, and structured cabling for homes and small businesses. It serves as their primary online presence to showcase hardware solutions and generate client leads.

**MY ROLE:**
I acted as the IT Infrastructure & Frontend Developer. I built the user interface, orchestrated the frontend deployment to Vercel, managed the domain architecture via Hostinger, and provisioned the company's secure corporate email system.

**WHY DID I BUILD IT?**
Entercom Security needed a professional, high-performance web presence to establish digital authority and attract clients. Furthermore, they required a custom domain setup with reliable corporate email (`sales@entercomsecurity.com`) to manage inquiries, which involved solving complex DNS routing conflicts between their domain registrar and hosting platform.

**KEY FEATURES:**

* **High-Performance Frontend:** A responsive UI showcasing their physical security services, from camera installations to access control systems.
* **Custom Domain Architecture:** Seamlessly routed traffic from a Hostinger domain to a Vercel edge network using precise custom DNS mapping.
* **Secure Corporate Email:** Fully authenticated business email infrastructure with SPF and MX records to ensure deliverability and prevent spoofing.

**TECH STACK:**

* **Frontend:** React / Next.js, Tailwind CSS (UI styling)
* **Backend/Database:** N/A (Static / Edge delivery focus)
* **Infrastructure:** Vercel (Hosting & Edge Network), Hostinger (Domain & DNS Zone Management), Titan Email (Business Mail)
* **Other:** DNS Configuration (A, CNAME, TXT, MX), SPF Authentication

**IMPORTANT ENGINEERING WORK:**

* **DNS Conflict Resolution:** Successfully navigated a deployment issue where Hostinger's default site provisioning overrode Vercel's edge network routing. I manually audited and purged conflicting IPv6 (AAAA) and duplicate A records to stabilize the connection.
* **Email Deliverability Setup:** Configured specific MX priorities and a robust TXT/SPF record (`v=spf1 include:spf.titan.email ~all`) to guarantee secure communication without breaking the live web application.
* **Decoupled Architecture:** Successfully separated the email hosting (Titan/Hostinger) from the web hosting (Vercel), allowing both systems to operate flawlessly on the same root domain.

**CHALLENGES:**

* Hostinger's automated system required an active "website container" to unlock their email service. However, creating that container automatically overwrote the Vercel DNS settings, temporarily breaking the site.
* Debugging Vercel's "Invalid Configuration" errors, which were caused by hidden default IPv6 (AAAA) records silently added by the domain registrar.
* Ensuring email MX records verified successfully while keeping the root domain A records pointed strictly to Vercel's IP (`76.76.21.21`).

**WHAT I LEARNED:**

* Deepened my practical understanding of DNS Zone management, specifically how different registrars automate record injection and how to manually override them for custom edge hosting environments.
* Mastered the relationship between web hosting plans and email provisioning, learning how to safely maintain decoupled architectures where email and frontend applications are hosted on entirely separate networks.

**STATUS:**
Active / Client project

**GITHUB:**

* **Demo:** entercomsecurity.com
* **Repository:** [https://github.com/GITUPWALE08/Entercom](https://github.com/GITUPWALE08/Entercom)

**CAN I SHOW THE SOURCE CODE?**
Yes / Partial (Since it is public on your GitHub, you can show the code, but you may want to obscure sensitive API keys or client-specific backend credentials).

**IS THIS A CLIENT/PRIVATE PROJECT?**
Yes, Client Project.

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
The portfolio should emphasize your ability to handle **end-to-end IT infrastructure and DevOps.** It shows that you don't just build nice-looking UIs—you engineer the deployment pipeline, manage domain architecture, solve complex DNS routing conflicts, and provision secure corporate communication systems. It highlights you as a holistic Full-Stack Developer who understands networking and server configuration just as well as code.
***


    droolnft.vercel.app:
***
**PROJECT NAME:**
Drool NFT Whitelist Platform

**PROJECT URL:**
[droolnft.vercel.app](https://www.google.com/search?q=https://droolnft.vercel.app)

**WHAT IS IT?**
A highly scalable Web3 landing page and whitelist application designed to collect user engagement data and Ethereum wallet addresses for an upcoming NFT mint. It features a multi-step submission UI, native MetaMask integration, and a secure admin dashboard built to handle massive traffic spikes of up to 40,000 concurrent users.

**MY ROLE:**
Lead Frontend Developer. I built the entire React application from scratch, designed the interactive UI, implemented the Web3 wallet connection logic, and architected the Supabase PostgreSQL database to handle high-volume data collection.

**WHY DID I BUILD IT?**
To securely manage a massive NFT whitelist targeting 40,000+ users without the bottlenecks and rate-limiting crashes typical of no-code tools like Google Sheets. It solves the critical Web3 problems of bot spam, duplicate wallet submissions, and server timeouts during highly anticipated mint announcements.

**KEY FEATURES:**

* **Interactive Whitelist Flow:** A step-by-step modal requiring users to verify Twitter/X engagement before submission.
* **Web3 Wallet Integration:** Users can auto-fill their Ethereum address seamlessly using the MetaMask browser extension.
* **Hidden Admin Command Center:** A secure, password-protected portal (`/#admin`) for the team to view real-time signup metrics and download data.
* **Memory-Safe Data Export:** Custom CSV and TXT generation tools that safely bundle and download tens of thousands of wallets without freezing the browser.

**TECH STACK:**

* **Frontend:** React 18 (Vite), TypeScript, Tailwind CSS v4, Lucide React.
* **Backend:** Supabase Auth (for secure admin access).
* **Database:** Supabase (PostgreSQL).
* **Infrastructure:** Vercel.
* **Other:** `ethers.js` (for wallet validation), Git.

**IMPORTANT ENGINEERING WORK:**

* **Database-Level Duplicate Prevention:** Leveraged PostgreSQL `UNIQUE` constraints to automatically catch and reject duplicate wallet submissions at the database level, saving frontend processing power and preventing API bloat.
* **Data-Layer Re-architecture:** Migrated the initial data-collection strategy from a Google Apps Script webhook to a scalable Supabase backend to eliminate API rate limits and connection throttling during high-concurrency traffic spikes.
* **Asynchronous Chunk Fetching:** Engineered a paginated `while` loop algorithm in the Admin Dashboard to fetch 40,000+ rows of data in small chunks (1,000 at a time), preventing browser memory crashes when generating the final CSV export.
* **Static-Site Hash Routing:** Implemented a lightweight, `useEffect`-driven hash router (`#admin`) to securely serve the admin dashboard without requiring a complex backend or triggering 404 errors on Vercel's static hosting.

**CHALLENGES:**

* Handling potential browser memory crashes when fetching massive datasets (40,000+ rows) for the admin export.
* Ensuring duplicate wallet submissions were instantly and safely rejected without writing heavy, slow frontend validation logic.
* Securing the valuable wallet data so it was strictly write-only for the public, while remaining easily accessible for the marketing team.

**WHAT I LEARNED:**

* How to integrate and optimize Supabase PostgreSQL for high-concurrency Web3 applications using Row Level Security (RLS).
* Techniques for safely handling large data exports in the browser without freezing the UI.
* Managing Web3 wallet connection states, handling silent rejections, and providing proper error feedback to users.

**STATUS:**
Completed / Active

**GITHUB:**
[https://github.com/GITUPWALE08/DROOLNFT](https://github.com/GITUPWALE08/DROOLNFT)

**Demo:**
[droolnft.vercel.app](https://www.google.com/search?q=https://droolnft.vercel.app)

**Documentation:**
Available in the GitHub README.

**CAN I SHOW THE SOURCE CODE?**
Yes

**IS THIS A CLIENT/PRIVATE PROJECT?**
No (Independent Web3 Project)

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
Scalability, handling high-concurrency traffic, Web3 integration, UI/UX polish, database optimization (preventing duplicates), and data security.

***


    wexa-psi.vercel.app:
***
Here is the filled-out template based on the architecture, technical decisions, and deliverables from your Wexa assessment.

**PROJECT NAME:**
RBAC Visualizer

**PROJECT URL:**
[https://wexa-psi.vercel.app](https://www.google.com/search?q=https://wexa-psi.vercel.app)

**WHAT IS IT?**
A full-stack web application that visualizes Role-Based Access Control (RBAC) hierarchies. It maps relationships between users, roles, and permissions using a graph database, enabling rapid and efficient multi-hop access checks.

**MY ROLE:**
Full-Stack Developer. I designed and built the entire application, including the graph data model, the REST API, the React frontend, and the automated seed script to populate the cloud database.

**WHY DID I BUILD IT?**
This project was built as a technical take-home assignment for a software developer role at Wexa AI[cite: 1]. It solves the problem of visually exploring and efficiently querying complex, nested permission structures, which typically require slow, recursive JOINs in traditional relational databases.

**KEY FEATURES:**

* **Visual Hierarchy Dashboard:** Displays users alongside their directly assigned roles and inherited permissions.
* **Multi-Hop Access Checker:** Evaluates if a user has specific access rights by natively traversing through multiple relationship hops (User $\rightarrow$ Role $\rightarrow$ Permission) in real-time[cite: 1].
* **Automated Data Seeding:** Includes a robust script to initialize the cloud-hosted graph database with realistic test data.

**TECH STACK:**

* **Frontend:** React, TypeScript, Vite, Tailwind CSS
* **Backend:** Python, Flask, flask-cors
* **Database:** CognoDB (Neo4j), official Neo4j Python driver[cite: 1]
* **Infrastructure:** Vercel (Frontend), Render (Backend)
* **Other:** Cypher (query language)

**IMPORTANT ENGINEERING WORK:**

* Modeled and implemented a graph schema that natively represents RBAC inheritances instead of relying on complex relational tables[cite: 1].
* Wrote parameterized Cypher queries to securely prevent injection vulnerabilities while executing multi-hop traversals[cite: 1].
* Kept the architecture strictly minimal, intentionally bypassing complex ORMs and GraphQL layers for speed, reliability, and a clear demonstration of core graph principles.

**CHALLENGES:**

* Condensing a full-stack implementation into a strict 5-hour sprint without compromising code quality or UI/UX requirements.
* Ensuring the multi-hop Cypher traversal query was syntactically correct and securely parameterized using the official Neo4j Python driver[cite: 1].
* Troubleshooting cross-origin issues and runtime environments when deploying the separated frontend and backend architectures to live servers.

**WHAT I LEARNED:**

* Graph databases drastically simplify querying hierarchical and highly connected data compared to traditional relational schemas.
* Utilizing a highly constrained, single-file Flask API is incredibly effective when you need to quickly expose raw database operations without the overhead of heavy abstraction layers.

**STATUS:**
Completed (Technical Assessment)

**GITHUB:**
[https://github.com/GITUPWALE08/wexa](https://github.com/GITUPWALE08/wexa)

**Demo:**
[https://wexa-psi.vercel.app](https://www.google.com/search?q=https://wexa-psi.vercel.app)

**Documentation:**
Available within the GitHub repository's README.md (includes setup instructions and the "Why a graph database?" rationale)[cite: 1].

**CAN I SHOW THE SOURCE CODE?**
Yes

**IS THIS A CLIENT/PRIVATE PROJECT?**
No (Take-home assignment)

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
The ability to quickly learn and apply new data models and query languages, rapid full-stack prototyping, strict adherence to technical constraints, and clean, minimal software architecture.

***

    finance-three-sepia.vercel.app:
***
**PROJECT NAME:**
Finance Trading Platform

**PROJECT URL:**
[https://finance-three-sepia.vercel.app](https://finance-three-sepia.vercel.app)

**WHAT IS IT?**
A web-based stock trading simulation platform where users can retrieve real-time stock quotes, buy/sell shares, and track their portfolio performance. It serves as a modern, decoupled full-stack recreation of a financial trading application.

**MY ROLE:**
Full-Stack Developer. I built the complete React/TypeScript frontend client and the Python backend REST API from scratch, integrating them to handle user authentication, concurrent database transactions, and real-time financial data.

**WHY DID I BUILD IT?**
I built this to master the complexities of decoupled architectures (separating frontend from backend) and to solve the technical challenges of handling financial data—specifically ensuring database transaction integrity, preventing race conditions during purchases, and securely passing state between a server and a Single Page Application (SPA).

**KEY FEATURES:**

* **Real-Time Quoting:** Fetches and displays live stock market prices.
* **Trading Engine:** Allows users to buy and sell shares, automatically calculating costs and verifying sufficient user funds before execution.
* **Portfolio Management:** Tracks owned assets, dynamically updating shares via "upsert" operations, and maintains a complete history of user transactions.

**TECH STACK:**

* **Frontend:** React, TypeScript
* **Backend:** Python, SQLAlchemy (ORM)
* **Database:** PostgreSQL (psycopg2)
* **Infrastructure:** Vercel (Frontend Hosting), Render (Backend API Hosting & Database)
* **Other:** RESTful APIs, Git/GitHub for version control

**IMPORTANT ENGINEERING WORK:**

* **Decoupled Architecture:** Engineered a strict separation of concerns by splitting the app into two repositories (`fin_frontend` and `fin_backend`), communicating securely via a REST API.
* **Database Integrity & Migrations:** Upgraded the database layer to PostgreSQL, implementing strict `ON CONFLICT` constraints and atomic SQL updates to ensure user balances and share counts are perfectly synchronized during trades.
* **Error Handling & Transaction Management:** Implemented robust backend `try/except/finally` blocks with `session.rollback()` capabilities to ensure the database connection pool remains stable even if a transaction fails.

**CHALLENGES:**

* **Resolving Complex SQL Ambiguities:** Navigated strict PostgreSQL syntax rules during portfolio updates, specifically fixing `AmbiguousColumn` errors when writing complex `INSERT ... ON CONFLICT DO UPDATE` queries for user shares.
* **Cross-Origin & Routing Issues:** Bridged the gap between the React frontend and Python backend, resolving 405 (Method Not Allowed) errors by overriding native HTML form submissions and ensuring accurate API route targeting.
* **Deployment Configuration:** Successfully deployed a multi-tier application across two different cloud providers (Vercel and Render), managing environment variables and database connection strings in production.

**WHAT I LEARNED:**

* The critical importance of proper SQL transaction isolation; specifically, how a single failed query can lock a PostgreSQL transaction block until explicitly rolled back.
* How to properly trace a full-stack request cycle, from a React asynchronous `fetch` call, through the network layer, to a Python backend controller, down to the database ORM, and back up to the client interface.

**STATUS:**
Completed / Active

**GITHUB:**

* **Frontend:** [https://github.com/GITUPWALE08/fin_frontend](https://github.com/GITUPWALE08/fin_frontend)
* **Backend:** [https://github.com/GITUPWALE08/fin_backend](https://github.com/GITUPWALE08/fin_backend)
* **Demo:** [https://finance-three-sepia.vercel.app](https://finance-three-sepia.vercel.app)

**CAN I SHOW THE SOURCE CODE?**
Yes

**IS THIS A CLIENT/PRIVATE PROJECT?**
No (Personal / Portfolio Project)

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
The portfolio piece should emphasize your ability to **build, deploy, and debug a decoupled full-stack application**. Highlight your understanding of strict database constraints (PostgreSQL), safe transaction handling (rollbacks, atomic updates), and your capability to trace and resolve complex bugs across the client-server boundary.

***


    esdan.vercel.app:
***
**PROJECT NAME:**
Economic and Social Development Association of Nigeria (ESDAN)

**PROJECT URL:**
[https://esdan.vercel.app](https://esdan.vercel.app)

**WHAT IS IT?**
ESDAN is a corporate web application designed to showcase economic and social development programs across Nigeria. It highlights the organization's initiatives—such as agricultural and educational reforms—while also serving as a commercial catalog for products like their new solar-powered tricycles.

**MY ROLE:**
I acted as the Frontend Developer, building the entire React-based web application from the ground up, including the responsive sidebar layout, dynamic routing, and modular product and project showcases.

**WHY DID I BUILD IT?**
The project solves the need for ESDAN to have a unified digital platform that clearly separates their philanthropic development projects from their commercial products. It allows stakeholders to easily navigate initiatives and enables customers to request quotes for sustainable goods.

**KEY FEATURES:**

* Responsive sidebar navigation and mobile-friendly layout.
* Modular product catalog with a dedicated quote request system.
* Smart anchor-linking system for direct navigation to specific page sections.

**TECH STACK:**
**Frontend:** React, TypeScript, Tailwind CSS, Lucide React
**Backend:** N/A (Client-side application)
**Database:** Local structured data files (JSON/TS arrays)
**Infrastructure:** Vercel
**Other:** Vite, ESLint, PostCSS

**IMPORTANT ENGINEERING WORK:**

* Structured the application into highly modular components, separating UI logic from data layers for scalability.


* Implemented a custom scroll-handler within React Router to seamlessly support anchor links across different routes.


* Configured SPA client-side routing on Vercel using `vercel.json` to prevent 404 errors on direct navigation.

**CHALLENGES:**

* Resolving 404 errors when users attempted to directly access sub-routes (like `/products`) via the browser URL instead of internal links.
* Overriding React Router's default scroll-to-top behavior to allow users to share links that point to specific sections of a page.

**WHAT I LEARNED:**

* How to properly configure Vercel rewrite rules to support Single Page Application (SPA) routing.
* Techniques for managing DOM scrolling and hash-based navigation alongside React Router's state management.

**STATUS:**
Active / Client project

**GITHUB:**
[https://github.com/GITUPWALE08/ESDAN](https://github.com/GITUPWALE08/ESDAN)
**Demo:** [https://esdan.vercel.app](https://esdan.vercel.app)
**Documentation:** Available in the repository README.

**CAN I SHOW THE SOURCE CODE?**
Yes

**IS THIS A CLIENT/PRIVATE PROJECT?**
Yes (Client project, but the repository is public).

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
Clean React architecture, responsive UI design using Tailwind CSS, and problem-solving skills related to deployment routing and user experience optimizations.

***


    iotbridging.tech:
***
Here is your portfolio template filled out with the aggressive, highly technical framing we have engineered for this project.

**PROJECT NAME:**
High-Frequency IIoT Telemetry Bridge v2.0

**PROJECT URL:**
`[Insert Live Link / Vercel / Hosted IP Here]`

**WHAT IS IT?**
An event-driven IIoT middleware platform designed to ingest, buffer, and visualize high-frequency industrial machine data in sub-second real-time. It acts as a fault-tolerant bridge between edge hardware and human operators, integrating a Gemini-powered AI layer to execute predictive maintenance analysis on live telemetry streams.

**MY ROLE:**
Lead Systems Architect and Full-Stack Engineer. I architected and built the entire system end-to-end, including the decoupled Python ingestion pipeline, the Redis stream buffer, the TimescaleDB hypertable schema, and the real-time React WebSocket dashboard.

**WHY DID I BUILD IT?**
I built this to solve a massive, recurring bottleneck for engineering students and hardware developers. Every time an engineer builds an IoT or hardware project, they are forced through a grueling, week-long process of designing, coding, debugging, and paying to host a custom backend just to see their sensor data. I built this platform to completely eliminate that software friction. It is a plug-and-play middleware that handles the data ingestion and visualization instantly, allowing hardware engineers to focus entirely on their physical builds without the unnecessary stress and expense of backend deployment.

**WHAT PROBLEM DOES IT SOLVE?**
It eliminates the software and cloud-hosting overhead for hardware developers. By simply pointing a microcontroller's payload to this bridge, the data is instantly buffered and visualized in real-time. It turns a week of frustrating backend coding and deployment into a 10-minute configuration.

**KEY FEATURES:**

* **Decoupled Ingestion Pipeline:** Natively handles thousands of HTTP/MQTT payloads per second by routing them through an in-memory Redis stream before hitting the disk.
* **Ultra-Low Latency WebSocket Dashboard:** Renders high-frequency telemetry streams into 60-second OHLC (Open, High, Low, Close) charts instantly without UI blocking.
* **AI Predictive Indicators:** Integrates Gemini LLM analysis directly into the data stream to predict hardware degradation and trigger threshold watchdog alerts before critical failure occurs.

**TECH STACK:**

* **Frontend:** React, TypeScript, Tailwind CSS, WebSockets, Lightweight Charts
* **Backend:** Python, Django, Django REST Framework (Daphne), Celery/Custom Python Daemon
* **Database:** PostgreSQL with TimescaleDB extension
* **Infrastructure:** Docker (`docker-compose`), Redis Streams, Eclipse Mosquitto (MQTT)
* **Other:** Gemini API, `orjson`, Pydantic, `cachetools`

**IMPORTANT ENGINEERING WORK:**

* **Eliminated Database Index Locking:** Replaced standard relational tables with TimescaleDB hypertables partitioned by timestamp, removing `unique_together` constraints to allow high-velocity, append-only inserts.
* **Micro-Batched Background Writes:** Engineered a supervised background worker utilizing a hybrid flush logic (500 records or 1.0s window) to pull from Redis via `XREADGROUP` and execute single `bulk_create` disk operations.
* **Zero-I/O Authentication:** Implemented a local in-process LRU cache (`cachetools.TTLCache`) for API key validation, reducing authentication latency to nanoseconds and bypassing the database entirely during the gateway handshake.

**CHALLENGES:**

* **Handling Protocol Overhead:** Edge devices suffered severe latency from repeated TCP/TLS handshakes. I resolved this by implementing persistent `Keep-Alive` connections for HTTP and optimizing MQTTS with QoS 1.
* **Mitigating OOM (Out-Of-Memory) Crashes:** Simulated traffic spikes caused host memory exhaustion. I fixed this by enforcing strict `MAXLEN` eviction flags on Redis streams and routing failed database writes to a Dead-Letter Queue (`XCLAIM`) for manual auditing.

**WHAT I LEARNED:**

* How to abstract complex systems architecture (like Redis streams and TimescaleDB) into a frictionless, invisible backend for the end-user.

* How to identify a genuine, frustrating gap in the academic engineering process and build a scalable developer tool to solve it.
* Deep expertise in engineering fault-tolerant, decoupled event architectures that prioritize memory-safe buffering over direct database transactions.
* How to strictly isolate the ingestion layer from the storage layer to prevent upstream API schema drift or "poison pill" payloads from corrupting the core time-series database.

**STATUS:**
Active / Prototype (Sandbox stress-tested to 5,000 records/sec).

**GITHUB:**
`[Insert GitHub Repo Link]`
**Demo:** `[Insert YouTube Demo Video Link]`
**Documentation:** `[Insert Notion/Readme Link]`

**CAN I SHOW THE SOURCE CODE?**
Yes

**IS THIS A CLIENT/PRIVATE PROJECT?**
No (Bootstrapped Infrastructure Project)

**WHAT SHOULD THE PORTFOLIO EMPHASIZE?**
The portfolio must emphasize the platform's utility as a "developer tool" built by an engineer, for engineers. It should highlight how the system provides a frictionless, zero-setup experience for students and hardware builders, removing the barrier to entry for IoT projects.

***


4. I think the info in "3" showcase this, but if you think it does not let me know so I can provide more insight

5. Project Ranking: I should be able to manually index the each project so that they can take precedence (you can also use your initiative)

6. Experience should be engineering focused


7. for skills use your discretion

8. GitHub: https://github.com/GITUPWALE08/
LinkedIn: inkedin.com/in/adegoke-adewale/
Email: princeadewale391@gmail.com
whatsapp/phone number: +234-8083368552
Portfolio domain: adegoke-adewale-idris.me (this is the domain I will be getting for free on github student developer pack)


9. option C: A resume page inside the portfolio + A Download Resume button.

10. Why did you get into software engineering? I am very good at logical thinking and software engineering is the easiest and less expensive way to showcase this skill, couple with the fact that I am more of an indoor person, I prefer showing than explaining infact I am very bad in explaining or communicating -properly, but ai love showing how gtings should work instead of just talking.
What kind of problems do you enjoy solving? complex logical problems, in areas where concrete proof prefered tom writeups
What do you want to become exceptionally good at? Analytical thinking

What kind of engineering work do you want more of? Areas that showcase engineering system design, I prefer to work on the backbone rather than the outlook.

11. Yes include services/"what I do" section

12. when someone clicks let's work together, I normally would prefer whatsapp but I sometimes might not be able to distinguish between client and normal first time chat, so I'll say let's go with gmail and we should provide template


13. technical archittecture: the forntend should be something light: React
TypeScript
Vite
Tailwind
Framer Motion

14. I am confortable with either code editting or admin page

15. for hosting I'll use vercel I am confortable and used to it, for domain I'll get it from github student developer pack for free, SO in short you/AI assistant don't need to worry about this part I got it covered.


16. for this part is also covered by number "3"

17. I only have a brand logo and my own unedited raw unprofessional image

18. Use your discretion here, especially fpor the iot bridging project
