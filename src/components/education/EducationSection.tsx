import type { Education, Certification } from '../../types';
import { SectionHeader } from '../common/SectionHeader';

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader title="Education & Certifications" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
          <div className="space-y-8">
            {education.map(edu => (
              <div key={edu.id} className="border-l-2 border-accent pl-6">
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-lg text-muted-foreground mt-1">{edu.institution}</p>
                <div className="flex gap-4 mt-2 text-sm font-mono text-muted-foreground">
                  <span>{edu.level}</span>
                  <span>•</span>
                  <span>Class of {edu.expectedGraduation}</span>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-semibold">Relevant Areas:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.relevantAreas.map(area => (
                      <span key={area} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map(cert => (
              <div key={cert.id} className="p-4 rounded-lg border border-border bg-surface">
                <h4 className="font-medium text-foreground">{cert.name}</h4>
                {cert.issuer && <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
