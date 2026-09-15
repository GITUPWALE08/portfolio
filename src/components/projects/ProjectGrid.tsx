import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from '../common/SectionHeader';

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  description?: string;
  id?: string;
}

export function ProjectGrid({ projects, title = "My projects", description, id = "projects" }: ProjectGridProps) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title={title} 
        description={description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
