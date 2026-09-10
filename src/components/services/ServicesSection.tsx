import type { Service } from '../../types';
import { SectionHeader } from '../common/SectionHeader';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title="What I Build" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-6 rounded-xl bg-muted/50 border border-border">
            <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
