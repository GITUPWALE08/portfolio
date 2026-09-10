import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from '../components/common/Icons';
import { projects } from '../data/projects';
import { SectionHeader } from '../components/common/SectionHeader';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.visible && p.category.includes(project.category.split('/')[0].trim()))
    .slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      <Link to="/#work" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Work
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-mono text-accent">{project.category}</span>
          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold capitalize bg-surface text-muted-foreground">
            {project.status.replace('-', ' ')}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              <Github width={16} height={16} className="mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
        <div className="md:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">What I Built</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap mb-4">{project.solution}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>

          {project.architecture && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Architecture</h2>
              <div className="p-4 bg-muted/50 rounded-lg border border-border font-mono text-sm whitespace-pre-wrap overflow-x-auto text-muted-foreground">
                {project.architecture}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Important Engineering Work</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.engineeringWork.map((work, i) => (
                <li key={i}>{work}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Challenges</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">What I Learned</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.lessons.map((lesson, i) => (
                <li key={i}>{lesson}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">My Role</h3>
            <p className="text-muted-foreground">{project.role}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Technologies</h3>
            <div className="space-y-4">
              {project.technologies.map((tech) => (
                <div key={tech.category}>
                  <h4 className="text-xs text-muted-foreground mb-2">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map(item => (
                      <span key={item} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Metrics</h3>
              <div className="space-y-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-surface border border-border rounded-lg">
                    <p className="text-2xl font-bold text-accent mb-1">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {relatedProjects.length > 0 && (
        <div className="mt-20 pt-12 border-t border-border">
          <SectionHeader title="Related Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map(rp => (
              <Link key={rp.id} to={`/projects/${rp.slug}`} className="block group">
                <div className="p-6 rounded-xl border border-border bg-surface transition-all group-hover:border-accent/50">
                  <span className="text-xs font-mono text-muted-foreground block mb-2">{rp.category}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">{rp.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{rp.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
