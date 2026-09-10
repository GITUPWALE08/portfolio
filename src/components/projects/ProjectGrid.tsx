import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from '../common/SectionHeader';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title="Selected Work" 
        description="Engineering projects spanning systems architecture, full-stack development, and industrial IoT."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
