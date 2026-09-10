import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../common/Icons';
import { profile } from '../../data/profile';

export function ContactSection() {
  const emailSubject = encodeURIComponent("Engineering / Software Opportunity — Adegoke Adewale");
  const emailBody = encodeURIComponent("Hi Adegoke,\n\nI saw your portfolio and I would like to discuss...");

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <div className="rounded-2xl border border-border bg-surface p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Let's work together.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you need a backend system, an automation pipeline, or a full-stack product, I'm available for engineering roles and consulting.
        </p>
        
        <a 
          href={`mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`}
          className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-4 text-base font-semibold transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
        >
          <Mail className="mr-2 h-5 w-5" />
          Email Me
        </a>
        
        <div className="flex justify-center items-center gap-6 mt-12 text-muted-foreground">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 font-medium">
            <Github width={20} height={20} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 font-medium">
            <Linkedin width={20} height={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
