import type { Experience } from '../../types';
import { SectionHeader } from '../common/SectionHeader';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title="Engineering Experience" 
        description="Professional roles focusing on software architecture, backend systems, and team leadership."
      />
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-0">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] md:left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"></div>
            
            <div className="md:grid md:grid-cols-4 md:gap-8 md:items-baseline md:pl-12">
              <div className="mb-2 md:mb-0 md:col-span-1">
                <span className="text-sm font-mono text-muted-foreground">
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              
              <div className="md:col-span-3 flex flex-col space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                
                <p className="text-muted-foreground">{exp.description}</p>
                
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm">{resp}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
