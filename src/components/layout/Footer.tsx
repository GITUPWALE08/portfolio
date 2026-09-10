import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../common/Icons';
import { profile } from '../../data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">{profile.name}</h3>
            <p className="text-muted-foreground mt-1">{profile.title}</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github width={20} height={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin width={20} height={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {profile.name}.</p>
        </div>
      </div>
    </footer>
  );
}
