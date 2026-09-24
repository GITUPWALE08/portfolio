import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground border-success/20';
      case 'completed': return 'bg-accent text-accent-foreground border-accent/20';
      case 'prototype': return 'bg-warning text-warning-foreground border-warning/20';
      case 'in-progress': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between h-full rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-sm"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-1.5">
            <span className="text-xs font-mono text-muted-foreground">{project.category}</span>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                {project.shortTitle || project.title}
              </h3>
            </a>
          </div>
          <Link to={`/projects/${project.slug}`} className="p-2 -mr-2 -mt-2 rounded-full text-muted-foreground hover:bg-muted transition-colors">
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 2).map((techCategory) => 
            techCategory.items.slice(0, 2).map(tech => (
              <span key={tech} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
                {tech}
              </span>
            ))
          )}
          {project.technologies.flatMap(t => t.items).length > 4 && (
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
              +{project.technologies.flatMap(t => t.items).length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
        <div className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
          getStatusColor(project.status)
        )}>
          {project.status.replace('-', ' ')}
        </div>

        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize  bg-foreground text-background text-sm font-medium transition-colors hover:bg-foreground/90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
        
        <Link 
          to={`/projects/${project.slug}`}
          className="text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
