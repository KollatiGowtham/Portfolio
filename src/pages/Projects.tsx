import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ExternalLink, Github, Sparkles, FolderGit2, Rocket, 
  ArrowUpRight, Code2, Globe2, Cpu, Zap, 
  Layers, Box, Layout as LayoutIcon, Eye
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import coldmailImg from '@/assets/projects/coldmail.png';
import appointmentImg from '@/assets/projects/appointment.jpg';
import handloomsImg from '@/assets/projects/handlooms.png';
import datarecoveryImg from '@/assets/projects/datarecovery.jpg';
import languages from '@/assets/projects/languages.png';
import quiz from '@/assets/projects/quiz.png';
import french from '@/assets/projects/french.png';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const projects = [
    {
      title: 'ColdMail Automation',
      category: 'Systems Automation',
      description: 'Intelligent outreach infrastructure with predictive analytics.',
      image: coldmailImg,
      tech: ['Python', 'Flask', 'PostgreSQL'],
      liveUrl: 'https://coldemailui.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Coldmail_UI',
      color: 'bg-blue-500'
    },
    {
      title: 'Appointment Nexus',
      category: 'Health-Tech',
      description: 'Precision scheduling gateway for enterprise healthcare.',
      image: appointmentImg,
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://gowtham-hospital-appointment.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Appontment_Booking',
      color: 'bg-emerald-500'
    },
    {
      title: 'Kalamkari Heritage',
      category: 'E-Commerce',
      description: 'Bridging traditional craftsmanship with digital commerce.',
      image: handloomsImg,
      tech: ['PHP', 'MySQL', 'JavaScript'],
      liveUrl: 'https://kkhandlooms.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Kalamkari',
      color: 'bg-orange-500'
    },
    {
      title: 'Interactive Quiz',
      category: 'Gamification',
      description: 'Dynamic knowledge verification with real-time feedback.',
      image: quiz,
      tech: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://gowthamkollatiquiz.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Quiz12',
      color: 'bg-purple-500'
    },
    {
      title: 'BroCode Learning',
      category: 'Ed-Tech',
      description: 'Interactive pedagogical system for modern engineering.',
      image: languages,
      tech: ['React', 'Framer', 'Vite'],
      liveUrl: 'https://brocodelearn.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Programming_language_website',
      color: 'bg-indigo-500'
    },
    {
      title: 'French Learning School',
      category: 'Language Learning',
      description: 'Course-focused landing experience for French language classes.',
      image: french,
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://frenchlanguage.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/French-Website',
      color: 'bg-blue-500'
    },
    {
      title: 'XFS Data Recovery',
      category: 'Core Systems',
      description: 'Low-level forensic tool for Linux filesystem restoration.',
      image: datarecoveryImg,
      tech: ['C', 'Linux', 'Shell'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'bg-slate-700'
    },
  ];

  const upcomingProjects = [
    {
      title: 'My Khatas',
      tag: 'Fin-Tech',
      desc: 'Digital ledger ecosystem for micro-enterprises.',
      icon: Layers
    },
    {
      title: 'Blockchain Voting',
      tag: 'Web3',
      desc: 'Decentralized consensus for democratic transparency.',
      icon: Box
    },
    {
      title: 'Mood Analytics',
      tag: 'AI-Health',
      desc: 'Cloud-native mental wellness tracking system.',
      icon: Cpu
    },
  ];

  const cornerStickers = [
    { id: 'projects', label: 'Works', icon: FolderGit2, ariaLabel: 'Jump to Works section' },
    { id: 'upcoming', label: 'Future', icon: Rocket, ariaLabel: 'Jump to Future section' },
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen relative overflow-hidden font-sans selection:bg-primary/10 selection:text-primary">
        {/* Parallax Background Elements */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[5%] left-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '4s' }} />
        </motion.div>

        {/* Hero Section - Minimalist & Simple */}
        <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full text-primary text-[8px] sm:text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={10} className="sm:w-3 sm:h-3 animate-spin-slow" />
                Selected Works
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-foreground tracking-tighter uppercase">
                Projects.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Project Gallery - Compact Card Architecture */}
        <section id="projects" className="pb-14 sm:pb-20 container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-14">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx % 2 * 0.1 }}
                className="group cursor-pointer relative"
              >
                {/* Subtle Background Number */}
                <div className="absolute -top-6 sm:-top-10 -left-4 sm:-left-6 text-[5rem] sm:text-[8rem] font-black text-black/[0.015] select-none group-hover:text-primary/[0.03] transition-colors duration-700 pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="relative aspect-[16/10] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white border border-black/[0.03] shadow-[0_30px_70px_rgba(0,0,0,0.02)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[3px]">
                    <div className="flex gap-3 sm:gap-4 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all shadow-xl group/btn"
                      >
                        <ExternalLink size={20} className="sm:w-6 sm:h-6 group-hover/btn:scale-110 transition-transform" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-white/20 group/btn"
                      >
                        <Github size={20} className="sm:w-6 sm:h-6 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 px-2 py-0.5 bg-primary/5 rounded-full text-primary text-[7px] sm:text-[8px] font-black uppercase tracking-widest">
                      <LayoutIcon size={8} />
                      {project.category}
                    </div>
                    <div className="h-[1px] flex-1 bg-gray-50 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-foreground uppercase tracking-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium leading-snug max-w-lg group-hover:text-foreground/70 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg sm:rounded-xl text-muted-foreground group-hover:border-primary/20 group-hover:text-primary transition-all duration-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Systems - Simple Registry */}
        <section id="upcoming" className="py-14 sm:py-20 bg-gray-50/20 relative z-10 border-t border-gray-100">
          <div className="container-custom max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-10 sm:mb-14">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary text-[9px] font-black uppercase tracking-widest">
                  <Rocket size={10} className="animate-bounce-slow" />
                  Next Systems
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-foreground tracking-tighter uppercase leading-none">Pipeline.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-black/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.01)] hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-700 group relative overflow-hidden"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[2rem] bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 border border-gray-100 shadow-sm mb-6 sm:mb-8 group-hover:rotate-12">
                    <project.icon size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <span className="inline-block text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-foreground uppercase tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed italic border-l border-gray-100 pl-4 group-hover:border-primary/20 transition-all">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Footer CTA */}
        <section className="py-14 sm:py-20 text-center container-custom relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02]">
            <Globe2 size={200} className="sm:w-[400px] sm:h-[400px] animate-pulse" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-foreground tracking-tighter uppercase leading-[0.9] mb-8 sm:mb-12">
              Let's <span className="text-primary italic">Connect.</span>
            </h2>
            <a 
              href="/contact"
              className="inline-flex items-center gap-4 sm:gap-6 px-8 sm:px-10 py-4 sm:py-5 bg-black text-white rounded-2xl sm:rounded-[2rem] text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl hover:shadow-primary/30 group"
            >
              Start Conversation
              <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
