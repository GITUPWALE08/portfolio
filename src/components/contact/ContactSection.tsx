import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../common/Icons';
import { profile } from '../../data/profile';
import myImage from '../../assets/my_image.png';

export function ContactSection() {
  const emailSubject = encodeURIComponent("Engineering / Software Opportunity — Adegoke Adewale");
  const emailBody = encodeURIComponent("Hi Adegoke,\n\nI saw your portfolio and I would like to discuss...");

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <div className="rounded-2xl border border-border bg-surface p-8 md:p-16 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start max-w-4xl mx-auto">
          
          {/* Left Column: Image */}
          <div className="w-48 md:w-64 flex-shrink-0">
            <div className="aspect-square overflow-hidden rounded-2xl border-2 border-border shadow-sm">
              <img 
                src={myImage} 
                alt={`${profile.name} - ${profile.title}`} 
                className="w-full h-full object-cover object-center bg-muted"
              />
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Let's work together.
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                Whether you need a backend system, an automation pipeline, or a full-stack product, I'm available for engineering roles and consulting.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
              <p className="text-md text-accent font-medium mt-1 mb-6">{profile.title}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href={`mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`}
                className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
              
              <a 
                href={profile.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github width={16} height={16} className="mr-2" /> 
                GitHub
              </a>

              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin width={16} height={16} className="mr-2" /> 
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
