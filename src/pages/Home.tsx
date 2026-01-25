import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Trophy, GraduationCap, Code2, Sparkles, Github, Linkedin, ExternalLink } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import profileImage from '@/assets/profile.jpeg';
import SectionTitle from '@/components/ui/SectionTitle';

const Home = () => {
  const highlights = [
    {
      icon: Briefcase,
      label: 'Internship',
      value: 'Associate Trainee',
      sublabel: 'TechnoSprint Info Solutions',
    },
    {
      icon: Trophy,
      label: 'Hackathon',
      value: '4th Place',
      sublabel: 'TechSprint Hackathon',
    },
    {
      icon: GraduationCap,
      label: 'CGPA',
      value: '8.96',
      sublabel: 'B.Tech Computer & Communication Engineering',
    },
  ];

  const skills = {
    intermediate: ['Java', 'Python', 'C', 'JavaScript', 'Linux', 'Full-Stack', 'PowerBI'],
    beginner: ['Go', 'Shell Script', 'Blockchain', 'Cloud Computing'],
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowtham-venkata-bhaskar-kollati-6988452a4' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/KollatiGowtham?tab=repositories' },
    { icon: ExternalLink, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0150865053849b8da6' },
    { icon: ExternalLink, label: 'Fiverr', href: 'https://www.fiverr.com/s/xXVQEE1' },
  ];

  // Render social links in the hero section
  const renderSocialLinks = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="flex gap-4 mt-6"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          <link.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {link.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );

  // Actually render the social links inside the hero content
  // Add this call right after the CTA buttons in the hero section
  {renderSocialLinks()}
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="order-2 lg:order-1"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium mb-2 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Hello, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              >
                Kollati Gowtham <span className="gradient-text">Venkata Bhaskar</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-6"
              >
                <span className="text-foreground font-medium"></span>Software Developer | Full-Stack Enthusiast | Cloud & Blockchain Learner
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
              >
                Passionate about building innovative solutions with modern technologies. 
                Currently exploring cloud computing and blockchain to create scalable, 
                secure applications that make a difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/resume.pdf"
                  download="Kollati_Gowtham_Venkata_Bhaskar_Resume.pdf"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-0.5"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative group">
                {/* Glow effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <img
                  src={profileImage}
                  alt="Kollati Gowtham - Software Developer"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -bottom-2 -right-2 bg-card px-4 py-2 rounded-full shadow-lg border border-border"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Open to Work
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-primary/30 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Proficient Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">★</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Intermediate</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.intermediate.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'hsl(var(--primary) / 0.1)',
                    }}
                    className="px-4 py-3 bg-primary/10 rounded-lg text-sm font-medium text-foreground text-center cursor-default hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/5 via-secondary/10 to-secondary/5 rounded-xl p-6 border border-border hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">◆</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Learning</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.beginner.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'hsl(var(--accent) / 0.1)',
                    }}
                    className="px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground text-center cursor-default hover:bg-accent/20 transition-all duration-300 border border-border hover:border-accent/40"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI Tools & Core Competencies */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
            {/* AI Tools Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/5 via-purple-500/10 to-pink-500/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-500/80 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">AI Tools</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Code Editors</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Cursor', 'Trae', 'Windsurf', 'Emergent'].map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-2 bg-purple-500/10 rounded-lg text-xs font-medium text-foreground text-center cursor-default hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                      >
                        {tool}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Builders</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Lovable', 'Builder.io', 'Bolt.new', 'Heyboss'].map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="px-3 py-2 bg-purple-500/10 rounded-lg text-xs font-medium text-foreground text-center cursor-default hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                      >
                        {tool}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Backend & Automation</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Supabase', 'Firebase', 'n8n', 'Zapier'].map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.4 }}
                        className="px-3 py-2 bg-purple-500/10 rounded-lg text-xs font-medium text-foreground text-center cursor-default hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                      >
                        {tool}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Competencies Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/5 via-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-500/80 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">♦</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {['Team Collaboration', 'Effective Communication', 'Time Management'].map((competency, index) => (
                  <motion.div
                    key={competency}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'hsl(var(--green) / 0.1)',
                    }}
                    className="px-4 py-3 bg-green-500/10 rounded-lg text-sm font-medium text-foreground text-center cursor-default hover:bg-green-500/20 transition-all duration-300 border border-green-500/20 hover:border-green-500/40"
                  >
                    {competency}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skill Progress Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6 text-center">Skill Progress</h4>
            <div className="space-y-4">
              {[
                { name: 'Full-Stack Development', level: 85 },
                { name: 'Java & Python', level: 80 },
                { name: 'Cloud Computing', level: 65 },
                { name: 'Blockchain', level: 45 },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View detailed skills & experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Languages" subtitle="My linguistic skills" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {['Telugu', 'English', 'Hindi', 'Tamil'].map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-secondary/50 rounded-lg"
                  >
                    <h4 className="font-medium text-foreground">{lang}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
