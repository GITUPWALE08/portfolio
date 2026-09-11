import type { Service } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { ExpandableContent } from '../common/ExpandableContent';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title="What I Build" 
      />
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {services.map((service) => (
          <div key={service.id} className="relative pl-8 md:pl-0">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] md:left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"></div>
            
            <div className="md:grid md:grid-cols-4 md:gap-8 md:items-baseline md:pl-12">
              
              
              <div className="md:col-span-3 flex flex-col space-y-3">
                <div className="mb-2 md:mb-0 md:col-span-1">
                  <span className="text-sm font-mono text-muted-foreground">
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </span>
                </div>
                
                <ExpandableContent collapsedHeight="3rem">
                  <p className="text-muted-foreground">{service.description}</p>
                </ExpandableContent>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
