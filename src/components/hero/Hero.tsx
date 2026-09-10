import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TelegramIcon as Telegram } from '../common/Icons';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import myImage from '../../assets/my_image.png';


export function Hero() {
  const emailSubject = encodeURIComponent("Engineering / Software Opportunity — Adegoke Adewale");
  const emailBody = encodeURIComponent("Hi Adegoke,\n\nI saw your portfolio and I would like to discuss...");

  return (
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto mt-0 px-4 lg:px-8 w-full z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-top">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col space-y-3 lg:space-y-6 min-w-0"
            >

              <div className="pt-2">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">{profile.name}</h1>
                <div className="inline-flex items-center rounded-full border border-border bg-surface px-2 py-0.5 lg:px-3 lg:py-1 sm:font-medium lg:font-bold w-fit mt-2 lg:mt-4">
                  <span className="flex h-1.5 w-1.5  font-bold lg:h-2 lg:w-2 rounded-full bg-success mr-2"></span>
                  <p className="lg:text-xl text-xs  text-accent font-bold">{profile.title}</p>  
                </div>
              </div>

              
              <p className="text-xl sm:text-3xl lg:text-6xl font-small tracking-tight text-foreground leading-[1.2]">
                {profile.headline}
              </p>
              
              <p className="text-xs sm:text-sm lg:text-lg text-muted-foreground max-w-lg font-mono">
                {profile.supportingStatement}
              </p>
              
              <div className="flex flex-wrap gap-2 lg:gap-4 pt-2 lg:pt-4">
                <a 
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-3 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  View Projects
                  <ArrowRight className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                </a>
                <a 
                  href={`mailto:${profile.email}?subject=Engineering%20%2F%20Software%20Opportunity%20%E2%80%94%20Adegoke%20Adewale`}
                  className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-3 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hidden sm:inline-flex"
                >
                  Let's Work Together
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:gap-6 pt-4 lg:pt-8 text-muted-foreground">       
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs lg:text-sm font-medium">
                  <Github className="w-4 h-4 lg:w-[18px] lg:h-[18px]" /> <span className="hidden inline">GitHub</span>
                </a>

                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs lg:text-sm font-medium">
                  <Linkedin className="w-4 h-4 lg:w-[18px] lg:h-[18px]" /> <span className="hidden inline">LinkedIn</span>
                </a>

                <Link to="/resume" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs lg:text-sm font-medium">
                  <Download className="w-4 h-4 lg:w-[18px] lg:h-[18px]" /> <span className="hidden inline">Resume</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:gap-6 pt-4 lg:pt-8 text-muted-foreground">
                <a 
                  href={`mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`}
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>

                {profile.telegram && (
                  <a 
                    href={profile.telegram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Telegram width={16} height={16} className="mr-2" /> 
                    Telegram
                  </a>
                )}

                {profile.whatsapp && (
                  <a 
                    href={profile.whatsapp} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Phone width={16} height={16} className="mr-2" /> 
                    WhatsApp
                  </a>
                )}
            
              </div>
            </motion.div>



            {/* right side image*/}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 justify-center items-top h-70 sm:w-40 sm:h-48 lg:h-[700px] lg:w-full lg:max-w-none relative"
            >
              <img 
                src={myImage} 
                alt={`${profile.name} - ${profile.title}`} 
                className="w-full h-full object-cover object-top bg-muted rounded-xl lg:rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      // <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
      //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      //       <motion.div 
      //         initial={{ opacity: 0, y: 20 }}
      //         animate={{ opacity: 1, y: 0 }}
      //         transition={{ duration: 0.5 }}
      //         className="flex flex-col space-y-6"
      //       >
      //         <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium w-fit">
      //           <span className="flex h-2 w-2 rounded-full bg-success mr-2"></span>
      //           {profile.title}
      //         </div>
              
      //         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
      //           {profile.headline}
      //         </h1>
              
      //         <p className="text-lg text-muted-foreground max-w-lg font-mono">
      //           {profile.supportingStatement}
      //         </p>
              
      //         <div className="flex flex-wrap gap-4 pt-4">
      //           <a 
      //             href="#projects"
      //             className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      //           >
      //             View Selected Work
      //             <ArrowRight className="ml-2 h-4 w-4" />
      //           </a>
      //           <a 
      //             href={`mailto:${profile.email}?subject=Engineering%20%2F%20Software%20Opportunity%20%E2%80%94%20Adegoke%20Adewale`}
      //             className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      //           >
      //             Let's Work Together
      //           </a>
      //         </div>

      //         <div className="flex items-center gap-6 pt-8 text-muted-foreground">
      //           <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
      //             <Github width={18} height={18} /> GitHub
      //           </a>
      //           <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
      //             <Linkedin width={18} height={18} /> LinkedIn
      //           </a>
      //           <Link to="/resume" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
      //             <Download size={18} /> Resume
      //           </Link>
      //         </div>
      //       </motion.div>

      //       {/* Abstract System Animation */}
      //       <motion.div 
      //         initial={{ opacity: 0 }}
      //         animate={{ opacity: 1 }}
      //         transition={{ duration: 0.8, delay: 0.2 }}
      //         className="hidden lg:flex justify-center items-center h-[500px] relative"
      //       >
      //         <SystemDiagram />
      //       </motion.div>
      //     </div>
      //   </div>
      // </section>
  );
}

// function SystemDiagram() {
//   const nodes = [
//     { label: 'Devices', x: 20, y: 50 },
//     { label: 'Data', x: 50, y: 20 },
//     { label: 'Processing', x: 80, y: 50 },
//     { label: 'Automation', x: 80, y: 80 },
//     { label: 'Systems', x: 50, y: 80 },
//     { label: 'Users', x: 20, y: 80 },
//   ];

//   return (
//     <div className="relative w-full h-full border border-border/50 rounded-xl bg-surface/30 backdrop-blur-sm overflow-hidden p-8 flex items-center justify-center">
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
//       {/* Connections */}
//       <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
//             <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
//           </linearGradient>
//         </defs>
//         <motion.path
//           d="M 120 250 Q 200 100 250 120 T 380 250 T 380 400 T 250 400 T 120 400 Z"
//           fill="none"
//           stroke="url(#gradient)"
//           strokeWidth="1.5"
//           strokeDasharray="4 4"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
//         />
//       </svg>

//       {/* Moving data packets */}
//       <motion.div
//         className="absolute w-2 h-2 rounded-full bg-accent"
//         animate={{
//           x: [120, 250, 380, 380, 250, 120, 120],
//           y: [250, 120, 250, 400, 400, 400, 250],
//         }}
//         transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//         style={{ zIndex: 10 }}
//       />
//       <motion.div
//         className="absolute w-2 h-2 rounded-full bg-success"
//         animate={{
//           x: [120, 250, 380, 380, 250, 120, 120],
//           y: [250, 120, 250, 400, 400, 400, 250],
//         }}
//         transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
//         style={{ zIndex: 10 }}
//       />

//       {/* Nodes */}
//       {nodes.map((node, i) => (
//         <motion.div
//           key={node.label}
//           className="absolute flex items-center justify-center font-mono text-[10px] tracking-wider uppercase text-muted-foreground bg-background border border-border px-3 py-1 rounded-sm shadow-sm"
//           style={{ 
//             left: `${node.x}%`, 
//             top: `${node.y}%`,
//             transform: 'translate(-50%, -50%)',
//             zIndex: 20
//           }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: i * 0.1 + 0.5, duration: 0.4 }}
//         >
//           {node.label}
//         </motion.div>
//       ))}
//     </div>
//   );
// }
