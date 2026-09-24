import { Hero } from '../components/hero/Hero';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { SkillGroup } from '../components/skills/SkillGroup';
import { ServicesSection } from '../components/services/ServicesSection';
import { About } from '../components/about/About';
import { EducationSection } from '../components/education/EducationSection';
// import { ContactSection } from '../components/contact/ContactSection';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../data/site';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { skills } from '../data/skills';
import { services } from '../data/services';
import { education } from '../data/education';
import { certifications } from '../data/certifications';

export function Home() {
  const featuredProjects = projects.filter(p => p.visible && p.featured).sort((a, b) => a.order - b.order);
  const moreProjects = projects.filter(p => p.visible && !p.featured).sort((a, b) => a.order - b.order);
  const visibleExperiences = experiences.filter(e => e.visible).sort((a, b) => a.order - b.order);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "jobTitle": "Systems & Automation Engineer",
        "sameAs": [
          siteConfig.links.github,
          siteConfig.links.linkedin
        ]
      },
      {
        "@type": "WebSite",
        "name": siteConfig.name,
        "url": siteConfig.url
      }
    ]
  };

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <SEO 
        canonical={siteConfig.url}
        schema={homeSchema}
      />
      <Hero />
      <About />
      <div className="flex flex-col gap-12 md:gap-16">
        <ProjectGrid 
          projects={featuredProjects} 
          title="Featured Projects/Works" 
          description="Flagship engineering case studies spanning IIoT telemetry, real-time workflows, and systems design." 
          id="projects" 
        />
        {moreProjects.length > 0 && (
          <ProjectGrid 
            projects={moreProjects} 
            title="Other Projects/Works" 
            id="more-projects"
          />
        )}
      </div>
      <ExperienceTimeline experiences={visibleExperiences} />
      <SkillGroup skills={skills} />
      <ServicesSection services={services} />
      <EducationSection education={education} certifications={certifications} />
    </div>
  );
}
