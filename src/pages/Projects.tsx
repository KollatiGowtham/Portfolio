import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import coldmailImg from '@/assets/projects/coldmail.jpg';
import appointmentImg from '@/assets/projects/appointment.jpg';
import handloomsImg from '@/assets/projects/handlooms.png';
import datarecoveryImg from '@/assets/projects/datarecovery.jpg';
import quiz from '@/assets/projects/quiz.png';

const Projects = () => {
  const projects = [
    {
      title: 'ColdMail Automation',
      description: 'An intelligent email automation tool that helps businesses streamline their outreach campaigns with personalized cold emails and analytics tracking.',
      image: coldmailImg,
      tech: ['Python', 'Flask', 'JavaScript', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Appointment Booking Web App',
      description: 'A modern appointment scheduling system with calendar integration, automated reminders, and multi-user support for service-based businesses.',
      image: appointmentImg,
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://gowtham-hospital-appointment.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Appontment_Booking',
    },
    {
      title: 'Handlooms Business Website',
      description: 'E-commerce platform showcasing traditional handloom textiles with product catalog, secure checkout, and inventory management features.',
      image: handloomsImg,
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://kkhandlooms.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Kalamkari',
    },
    {
      title: 'Data Recovery using XFS in Linux',
      description: 'A command-line tool for recovering deleted files from XFS filesystem partitions, featuring deep scan capabilities and file integrity verification.',
      image: datarecoveryImg,
      tech: ['C', 'Linux', 'Shell Script', 'XFS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Interactive Quiz App',
      description: 'A responsive quiz application with real-time scoring, multiple categories, and instant feedback to enhance learning and engagement.',
      image: quiz,
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://gowthamkollatiquiz.netlify.app/',
      githubUrl: 'https://github.com/KollatiGowtham/Quiz12',
    },
  ];

  const upcomingProjects = [
    {
      title: 'My Khatas',
      description: 'A digital khata book platform for shopkeepers to manage customer credit/debit records, track payments, and generate reports.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform using blockchain technology.',
      tech: ['Solidity', 'Ethereum', 'React'],
    },
    {
      title: 'Cloud-Based Depression Level Tracker',
      description: 'A secure cloud application that helps patients monitor and track their depression levels over time with mood analytics and therapist dashboards.',
      tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Projects Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle
              title="Projects"
              subtitle="Some of my recent work"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors border border-border"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Projects Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <SectionTitle
              title="Upcoming Projects"
              subtitle="What I'm working on next"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 shadow-card border border-border border-dashed"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
