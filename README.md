# Adegoke Adewale Idris — Engineering Portfolio

This is the source code for my professional engineering portfolio, designed to showcase my work as a **Systems & Automation Engineer**.

The portfolio is built as a highly performant, statically delivered React application that clearly communicates engineering capability through its own architecture, focusing on real-world products, backend systems, and industrial IoT.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React + Custom SVGs
- **Deployment**: Vercel

## 🏗️ Architecture

The portfolio follows a strict **data-driven component architecture**. The UI components are completely decoupled from the portfolio content. This means the application does not rely on a heavy backend CMS, yet it is fully dynamic.

All content is managed through version-controlled TypeScript data objects located in `src/data/`.

### Directory Structure

```text
src/
├── components/       # Reusable UI components (Navbar, Hero, ProjectCard, etc.)
├── data/             # Data layer (projects, experience, skills, profile, etc.)
├── lib/              # Utility functions (Tailwind class merging, etc.)
├── pages/            # Route pages (Home, ProjectDetail, Resume, NotFound)
└── types/            # TypeScript interfaces defining the data models
```

## 📝 How to Update Content

You do not need to modify any React components to update the portfolio. Simply edit the corresponding files in `src/data/`:

- **Add a new project:** Add a new `Project` object to `src/data/projects.ts`. The UI (including the homepage grid and dynamic routing) will automatically update.
- **Add a new job:** Edit `src/data/experience.ts`.
- **Update skills:** Edit `src/data/skills.ts`.
- **Update contact info:** Edit `src/data/profile.ts`.

### Project Visibility Controls

Projects in `projects.ts` support the following flags to give you granular control over what is displayed without changing code:

- `visible: boolean` — If false, the project is completely hidden from the portfolio.
- `featured: boolean` — If true, the project appears in the "Selected Work" section on the homepage.
- `order: number` — Controls the sorting order of the projects on the homepage.

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment

This project is configured for seamless deployment on **Vercel**. 
The repository includes a `vercel.json` file which contains the necessary rewrite rules to support React Router's client-side SPA routing and prevent `404` errors on direct navigation.

## 📄 License

Copyright © 2026 Adegoke Adewale Idris. All rights reserved.
