import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  GraduationCap, User, Briefcase, ExternalLink, 
  Github, FolderGit2, Rocket, Sparkles,
  Award, History, Quote, ArrowUpRight,
  Code2, Layers, Globe2, PenTool, 
  CheckCircle2, Cpu, Zap, Share2, Target, Mail,
  Calendar, MapPin, ChevronRight, Image as ImageIcon
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import gibliImage from '@/assets/gibli.png';

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const expertise = [
    { title: 'Full-Stack Development', icon: Code2, desc: 'Engineering robust end-to-end applications with modern frontend frameworks and scalable backend systems.' },
    { title: 'Interface Design', icon: PenTool, desc: 'Designing intuitive, high-fidelity UI/UX that prioritizes user engagement and functional aesthetics.' },
    { title: 'Cloud Architecture', icon: Layers, desc: 'Building high-performance, resilient serverless architectures optimized for global scalability.' },
    { title: 'Digital Innovation', icon: Rocket, desc: 'Researching and implementing emerging technologies to solve complex technical challenges.' },
  ];

  const education = [
    { 
      degree: 'Bachelor of Technology in Computer and Communication', 
      institution: 'Sri Manakula Vinayagar Engineering College', 
      score: '9.04 CGPA', 
      year: '2023 - 2027',
      details: 'Specializing in advanced computing systems, network communication, and cloud-native architecture development.'
    },
    { 
      degree: 'Senior Secondary Education (Class XII)', 
      institution: 'Jawahar Navodaya Vidyalaya', 
      score: '78.9%', 
      year: '2021 - 2023',
      details: 'Focused on intensive studies in Mathematics and Physics, laying a strong foundation for technical problem-solving.'
    },
    { 
      degree: 'Secondary Education (Class X)', 
      institution: 'Jawahar Navodaya Vidyalaya', 
      score: '88.8%', 
      year: '2019 - 2021',
      details: 'Consistently maintained academic excellence while participating in regional technical seminars and logic workshops.'
    },
  ];

  const experience = [
    {
      title: 'Associate Trainee',
      company: 'TechnoSprint Info Solutions',
      period: 'Dec 2024 – Jun 2025',
      location: 'Remote / Chennai',
      responsibilities: [
        'Lead the development of responsive web interfaces using React and modern CSS architectures.',
        'Collaborated with cross-functional teams to implement full-stack features that enhanced system performance.',
        'Designed and integrated RESTful APIs to ensure seamless communication between disparate data sources.',
        'Optimized database schemas and queries to reduce latency in high-traffic application modules.',
        'Participated in end-to-end development cycles including code reviews and technical documentation.'
      ],
    }
  ];

  const projects = [
    { title: 'ColdMail Automation', tag: 'Automation', link: 'https://coldemailui.netlify.app/', desc: 'An intelligent system designed to streamline outreach and communication workflows.' },
    { title: 'Appointment System', tag: 'Health-Tech', link: 'https://gowtham-hospital-appointment.netlify.app/', desc: 'A seamless digital gateway for managing healthcare appointments and patient data.' },
    { title: 'Handlooms Business', tag: 'E-Commerce', link: 'https://kkhandlooms.netlify.app/', desc: 'A modern marketplace bridging traditional craftsmanship with contemporary digital retail.' },
    { title: 'Learning Platform', tag: 'Ed-Tech', link: 'https://brocodelearn.netlify.app/', desc: 'Interactive tools and resources designed to make complex programming concepts accessible.' },
    { title: 'Interactive Quiz', tag: 'Gamification', link: 'https://gowthamkollatiquiz.netlify.app/', desc: 'Engaging digital challenges that combine educational content with competitive mechanics.' },
  ];

  const cornerStickers = [
    { id: 'about', label: 'Identity', icon: User, ariaLabel: 'Jump to Identity section' },
    { id: 'experience', label: 'Journey', icon: History, ariaLabel: 'Jump to Journey section' },
    { id: 'projects', label: 'Works', icon: FolderGit2, ariaLabel: 'Jump to Works section' },
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen relative overflow-hidden font-sans selection:bg-primary/10 selection:text-primary">
        {/* Soft Organic Background Accents */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </motion.div>

        {/* Professional Header Section */}
        <section id="about" className="pt-20 sm:pt-32 pb-10 sm:pb-16 container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
              {/* Left: Content Area */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6 sm:space-y-8"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
                  <Sparkles size={14} />
                    Crafting Digital Experiences
                </div>
                
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading leading-[0.85] text-foreground tracking-tighter uppercase">
                  Who I <br /> <span className="text-primary italic underline decoration-primary/10 decoration-[16px] underline-offset-[-8px]">am.</span>
                </h1>
                
                <div className="space-y-6 sm:space-y-10">
                  <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-medium">
                    I am <span className="text-foreground font-black underline decoration-primary/20 decoration-4 underline-offset-4">Kollati Gowtham</span>. 
                    I build digital products with a focus on clean aesthetics, functional simplicity, and high performance engineering.
                  </p>
                  <div className="bg-gray-50 border border-gray-100 p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-sm relative overflow-hidden group max-w-2xl">
                    <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-primary" />
                    <Quote className="text-primary/10 w-8 h-8 sm:w-12 sm:h-12 mb-4 sm:mb-6" />
                    <p className="text-base sm:text-lg font-bold text-foreground leading-snug uppercase tracking-tight">
                      "Innovative engineering is the result of extreme focus, creative discipline, and a deep understanding of human-digital interaction."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Personal Image Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative group lg:-mt-12 mt-12 sm:mt-16 lg:mt-0"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-2xl sm:blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
                <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 bg-accent/10 rounded-full blur-2xl sm:blur-3xl group-hover:bg-accent/20 transition-colors duration-700" />
                
                <div className="relative aspect-[4/5] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden transition-all duration-700 group-hover:border-primary/30 group-hover:shadow-[0_60px_100px_rgba(0,0,0,0.08)]">
                  <img 
                    src={gibliImage} 
                    alt="Kollati Gowtham" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassmorphism Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white border border-gray-100 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-2xl z-20 hidden sm:block group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-foreground">Available for Projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* expertise horizontal strip */}
        <section className="py-10 sm:py-20 border-y border-gray-100 bg-gray-50/20 relative z-10">
          <div className="container-custom max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {expertise.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 sm:w-16 h-16 rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 sm:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-heading uppercase tracking-tight mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vertical Journey Sections */}
        <section id="experience" className="pt-8 sm:pt-12 pb-10 sm:pb-14 relative z-10">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="space-y-12 sm:space-y-20">
              
              {/* Professional Experience - Vertical Path */}
              <div className="space-y-8 sm:space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
                      <Briefcase size={12} />
                      Career Milestones
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-foreground tracking-tighter uppercase">Work Experience.</h2>
                  </div>
                  <div className="h-[2px] flex-1 bg-gray-100 hidden md:block mb-8 mx-12 opacity-50" />
                </div>

                <div className="space-y-12 sm:space-y-16">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white border-2 border-black/[0.03] rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <History size={200} className="sm:w-[400px] sm:h-[400px] text-black" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 mb-8 sm:mb-12 pb-6 sm:pb-10 border-b border-gray-50">
                          <div className="space-y-3">
                            <h3 className="text-3xl sm:text-5xl font-black font-heading text-foreground uppercase tracking-tighter">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                              <p className="text-lg sm:text-2xl font-black text-primary uppercase tracking-[0.2em]">{exp.company}</p>
                              <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] sm:text-sm uppercase tracking-widest">
                                <MapPin size={12} className="sm:w-[14px] sm:h-[14px] text-primary/40" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <div className="px-6 sm:px-10 py-3 sm:py-5 bg-black text-white rounded-xl sm:rounded-[2rem] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] shadow-2xl">
                            {exp.period}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-6 sm:gap-y-10">
                          {exp.responsibilities.map((resp, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex gap-4 sm:gap-8 items-start group/item"
                            >
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500 shadow-sm flex-shrink-0 font-black text-xs sm:text-sm">
                                0{i + 1}
                              </div>
                              <p className="text-base sm:text-lg font-medium text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors pt-1">
                                {resp}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Path - Vertical Registry */}
              <div className="space-y-8 sm:space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
                      <GraduationCap size={12} />
                      Academic Nexus
                    </div>
                    <h2 className="text-3xl sm:text-6xl md:text-7xl font-black font-heading text-foreground tracking-tighter uppercase">Educational Path.</h2>
                  </div>
                  <div className="h-[2px] flex-1 bg-gray-100 hidden md:block mb-8 mx-12 opacity-50" />
                </div>

                <div className="grid gap-6 sm:gap-10">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white border border-black/[0.03] p-6 sm:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700 group relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 mb-6 sm:mb-10 relative z-10">
                        <div className="flex items-start gap-5 sm:gap-8 flex-1">
                          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[2.5rem] bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 border border-gray-100 shadow-sm flex-shrink-0 group-hover:rotate-6">
                            <GraduationCap className="w-6 h-6 sm:w-9 sm:h-9" />
                          </div>
                          <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                            <h4 className="text-lg sm:text-3xl md:text-4xl font-black font-heading text-foreground uppercase tracking-tight leading-[1.1] group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                              <p className="text-xs sm:text-base font-black text-muted-foreground uppercase tracking-widest">{edu.institution}</p>
                              <div className="h-1 w-1 bg-gray-300 rounded-full hidden md:block" />
                              <div className="flex items-center gap-2 text-primary font-bold text-[8px] sm:text-[10px] uppercase tracking-widest bg-primary/5 px-2 sm:px-3 py-1 rounded-full">
                                <Target size={10} />
                                Major
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 sm:gap-6 self-stretch lg:self-start lg:min-w-[180px]">
                          <div className="flex-1 lg:flex-none">
                            <span className="inline-block text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em] px-4 py-2.5 sm:px-8 sm:py-4 bg-primary/5 rounded-xl sm:rounded-[1.5rem] border border-primary/10 whitespace-nowrap group-hover:bg-primary group-hover:text-white transition-all duration-500">
                              {edu.year}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-[1.5rem] border border-gray-100 shadow-sm group-hover:border-primary/20 transition-colors">
                            <Award size={16} className="sm:w-5 sm:h-5 text-primary" />
                            <div className="flex flex-col">
                              <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-tighter text-muted-foreground leading-none mb-1">Score</span>
                              <span className="text-sm sm:text-xl font-black text-foreground leading-none">{edu.score}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-0 sm:pl-28 mt-4 sm:mt-0">
                        <div className="absolute left-4 sm:left-10 top-0 bottom-0 w-[2px] bg-gray-100 group-hover:bg-primary/20 transition-colors hidden sm:block" />
                        <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-4xl italic group-hover:text-foreground/80 transition-colors">
                          {edu.details}
                        </p>
                      </div>

                      {/* Subtle Decorative Numbering */}
                      <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 text-[6rem] sm:text-[12rem] font-black text-black/[0.02] select-none group-hover:text-primary/[0.03] transition-colors">
                        0{idx + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Technical Registry Section */}
        <section id="projects" className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-gray-50/30 relative z-10">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 sm:mb-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
                  <FolderGit2 size={12} />
                  Systems Archive
                </div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black font-heading text-foreground tracking-tighter uppercase leading-[0.85]">Selected <br /> Works.</h2>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {projects.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-10 hover:px-8 sm:hover:px-12 hover:bg-white hover:rounded-2xl sm:hover:rounded-[3rem] hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12">
                    <span className="text-xl sm:text-2xl font-black text-primary/10 group-hover:text-primary transition-colors">0{idx + 1}</span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors mb-2 sm:mb-3 block">{project.tag}</span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-foreground uppercase tracking-tighter mb-2 sm:mb-3">{project.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-medium group-hover:text-foreground/70 transition-colors max-w-md">{project.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 text-primary md:opacity-0 group-hover:opacity-100 transition-all md:translate-x-8 group-hover:translate-x-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] hidden sm:block">Launch Execution</span>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40">
                      <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact Footer Quote */}
        <section className="py-16 sm:py-32 text-center container-custom relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.04]">
            <Cpu size={250} className="sm:w-[500px] sm:h-[500px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-heading text-foreground tracking-tighter uppercase leading-[0.9] mb-8 sm:mb-12">
              Engineering <br /> The <span className="text-primary italic underline decoration-primary/20 decoration-[20px] underline-offset-[-10px]">Impossible.</span>
            </h2>
            <div className="flex items-center justify-center gap-6 sm:gap-10">
              <div className="h-[2px] w-12 sm:w-24 bg-gray-100" />
              <div className="flex gap-4 sm:gap-6">
                {[Github, Share2, Mail].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer shadow-sm">
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                ))}
              </div>
              <div className="h-[2px] w-12 sm:w-24 bg-gray-100" />
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
