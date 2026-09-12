import { Download } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { skills } from '../data/skills';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../data/site';

export function Resume() {
  const backendSkills = skills.filter(s => s.category === 'Backend & Systems' || s.category === 'Databases').map(s => s.name);
  const frontendSkills = skills.filter(s => s.category === 'Frontend').map(s => s.name);
  const otherSkills = skills.filter(s => s.category !== 'Frontend' && s.category !== 'Backend & Systems' && s.category !== 'Databases').map(s => s.name);

  const handleDownload = () => {
    const originalTitle = document.title;
    document.title = 'adegokeadewale_resume';
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      <SEO 
        title={`Resume | ${siteConfig.name}`}
        description={`Professional resume of ${siteConfig.name}, detailing engineering experience, education, and technical skills.`}
        canonical={`${siteConfig.url}/resume`}
      />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 no-print">
        <SectionHeader title="Resume" />
        <button 
          onClick={handleDownload}
          className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent/90 shrink-0 cursor-pointer"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </button>
      </div>

      <div id="resume-content" className="bg-surface border border-border rounded-xl p-8 md:p-12 shadow-sm">
        <div className="border-b border-border pb-8 mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{profile.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{profile.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground font-mono">
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a>
            <span>•</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">github.com/GITUPWALE08</a>
            <span>•</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">linkedin.com/in/adegoke-adewale</a>
            {profile.telegram && (
              <>
                <span>•</span>
                <a href={profile.telegram} target="_blank" rel="noreferrer" className="hover:text-foreground">t.me/GITUPWALE08</a>
              </>
            )}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground mb-4 pb-2 border-b border-border/50">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">{profile.aboutPositioning}</p>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground mb-6 pb-2 border-b border-border/50">Experience</h2>
          <div className="space-y-8">
            {experiences.filter(e => e.visible).map(exp => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-mono text-muted-foreground shrink-0 sm:ml-4">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-md font-medium text-muted-foreground mb-3">{exp.company}</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5 text-muted-foreground text-sm">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground mb-6 pb-2 border-b border-border/50">Education</h2>
          <div className="space-y-6">
            {education.map(edu => (
              <div key={edu.id}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm font-mono text-muted-foreground shrink-0 sm:ml-4">Expected {edu.expectedGraduation}</span>
                </div>
                <p className="text-md text-muted-foreground">{edu.institution} • {edu.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground mb-4 pb-2 border-b border-border/50">Skills</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-semibold text-foreground mr-2">Backend & Databases:</span>
              <span className="text-muted-foreground">{backendSkills.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-foreground mr-2">Frontend:</span>
              <span className="text-muted-foreground">{frontendSkills.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-foreground mr-2">Infrastructure & Other:</span>
              <span className="text-muted-foreground">{otherSkills.join(', ')}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
