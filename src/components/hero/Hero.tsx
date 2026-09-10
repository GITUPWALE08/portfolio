import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../common/Icons';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';


export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium w-fit">
              <span className="flex h-2 w-2 rounded-full bg-success mr-2"></span>
              {profile.title}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {profile.headline}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg font-mono">
              {profile.supportingStatement}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#work"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Selected Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href={`mailto:${profile.email}?subject=Engineering%20%2F%20Software%20Opportunity%20%E2%80%94%20Adegoke%20Adewale`}
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Let's Work Together
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                <Github width={18} height={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                <Linkedin width={18} height={18} /> LinkedIn
              </a>
              <Link to="/resume" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
                <Download size={18} /> Resume
              </Link>
            </div>
          </motion.div>

          {/* Abstract System Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center h-[500px] relative"
          >
            <SystemDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  const nodes = [
    { label: 'Devices', x: 20, y: 50 },
    { label: 'Data', x: 50, y: 20 },
    { label: 'Processing', x: 80, y: 50 },
    { label: 'Automation', x: 80, y: 80 },
    { label: 'Systems', x: 50, y: 80 },
    { label: 'Users', x: 20, y: 80 },
  ];

  return (
    <div className="relative w-full h-full border border-border/50 rounded-xl bg-surface/30 backdrop-blur-sm overflow-hidden p-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 120 250 Q 200 100 250 120 T 380 250 T 380 400 T 250 400 T 120 400 Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Moving data packets */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-accent"
        animate={{
          x: [120, 250, 380, 380, 250, 120, 120],
          y: [250, 120, 250, 400, 400, 400, 250],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ zIndex: 10 }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-success"
        animate={{
          x: [120, 250, 380, 380, 250, 120, 120],
          y: [250, 120, 250, 400, 400, 400, 250],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ zIndex: 10 }}
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex items-center justify-center font-mono text-[10px] tracking-wider uppercase text-muted-foreground bg-background border border-border px-3 py-1 rounded-sm shadow-sm"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 20
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  );
}
