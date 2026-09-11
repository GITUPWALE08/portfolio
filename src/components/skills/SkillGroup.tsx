import type { Skill } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { ExpandableContent } from '../common/ExpandableContent';

interface SkillGroupProps {
  skills: Skill[];
}

export function SkillGroup({ skills }: SkillGroupProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader 
        title="Systems & Skills" 
        description="Technologies and architectures I use to solve engineering problems."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="flex flex-col rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-4">{category}</h3>
            <ExpandableContent collapsedHeight="9rem" gradientFrom="from-surface">
              <ul className="space-y-3 pb-2">
                {categorySkills.map(skill => (
                  <li key={skill.id} className="flex flex-col space-y-1">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    {skill.usedIn && skill.usedIn.length > 0 && (
                      <span className="text-xs text-muted-foreground flex flex-wrap gap-1">
                        <span className="opacity-70">↳</span>
                        {skill.usedIn.join(', ')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ExpandableContent>
          </div>
        ))}
      </div>
    </section>
  );
}
