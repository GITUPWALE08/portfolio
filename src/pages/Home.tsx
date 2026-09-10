import { Hero } from '../components/hero/Hero';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { SkillGroup } from '../components/skills/SkillGroup';
import { ServicesSection } from '../components/services/ServicesSection';
import { About } from '../components/about/About';
import { EducationSection } from '../components/education/EducationSection';
import { ContactSection } from '../components/contact/ContactSection';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { skills } from '../data/skills';
import { services } from '../data/services';
import { education } from '../data/education';
import { certifications } from '../data/certifications';

export function Home() {
  const featuredProjects = projects.filter(p => p.visible && p.featured).sort((a, b) => a.order - b.order);
  const visibleExperiences = experiences.filter(e => e.visible).sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <Hero />
      <About />
      <ProjectGrid projects={featuredProjects} />
      <ExperienceTimeline experiences={visibleExperiences} />
      <SkillGroup skills={skills} />
      <ServicesSection services={services} />
      <EducationSection education={education} certifications={certifications} />
      <ContactSection />
    </div>
  );
}
