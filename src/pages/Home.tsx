import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Download, Briefcase, Trophy, GraduationCap, Code2, Sparkles, 
  Github, Linkedin, ExternalLink, Award, Images, FolderGit2,
  Database, Cloud, Terminal, Cpu, Brain, Layout as LayoutIcon, Blocks, Laptop,
  ChevronLeft, ChevronRight as ChevronRightIcon, Search, Instagram, Youtube, Twitter, 
  Menu, X as CloseIcon, User, MapPin, Calendar, Heart, Globe, Mail
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import profileImage from '@/assets/profile.jpeg';
import achievementAwardImg from '@/assets/achivement.png';
import pillarOfIntegrityImg from '@/assets/certificates/t4.jpeg';
import internshipCertificateImg from '@/assets/gallery/t3.jpeg';

// Import project assets for preview
import coldmailImg from '@/assets/projects/coldmail.png';
import appointmentImg from '@/assets/projects/appointment.jpg';
import handloomsImg from '@/assets/projects/handlooms.png';
import languagesImg from '@/assets/projects/languages.png';
import languagesImg1 from '@/assets/projects/quiz.png';
import languagesImg2 from '@/assets/projects/french.png';

// Import certificate assets for preview
import awsCert from '@/assets/certificates/gfgcloud.jpg';
import appreciationCert from '@/assets/certificates/TS.png';
import f1 from '@/assets/certificates/data.png';
import f2 from '@/assets/certificates/Deliotte.jpg';
import f3 from '@/assets/certificates/Agile.jpg';

// Import gallery assets for preview
import sicmit1 from '@/assets/gallery/ben8.jpeg';
import ben2 from '@/assets/gallery/ben2.jpeg';
import tech7 from '@/assets/gallery/ben9.jpeg';
import tech1 from '@/assets/gallery/img1.jpeg';
import tech2 from '@/assets/gallery/t5.jpeg';
import tech3 from '@/assets/gallery/ben6.jpeg';
import tech4 from '@/assets/gallery/img6.jpeg';
import tech5 from '@/assets/gallery/sicmit/2.jpeg';

import SectionTitle from '@/components/ui/SectionTitle';
import ImageGallery from '@/components/ui/image-gallery';
import { PortfolioGallery } from '@/components/ui/portfolio-gallery';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import BookSlider from '@/components/ui/book-slider';

const Home = () => {
  const isMobile = useIsMobile();
  const highlights = [
    {
      icon: Briefcase,
      label: 'Internship',
      value: 'Associate Trainee',
      sublabel: 'TechnoSprint Info Solutions',
    },
    {
      icon: Trophy,
      label: 'Award',
      value: 'Operational Excellence',
      sublabel: 'Excellence in Internship',
      image: achievementAwardImg,
    },
    {
      icon: Award,
      label: 'Recognition',
      value: 'Pillar of Integrity',
      sublabel: 'Straight Shooter Award',
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
      value: '9.04',
      sublabel: 'B.Tech - CCE',
    },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      icon: Terminal,
      color: 'blue',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'Go', 'Shell Script'],
    },
    {
      title: 'Development',
      icon: LayoutIcon,
      color: 'orange',
      skills: ['Full-Stack', 'React', 'Node.js', 'Blockchain', 'SQL'],
    },
    {
      title: 'Cloud & Data',
      icon: Cloud,
      color: 'green',
      skills: ['AWS', 'Cloud Computing', 'Linux', 'PowerBI', 'PostgreSQL'],
    },
    {
      title: 'AI & Tools',
      icon: Brain,
      color: 'purple',
      skills: ['Cursor', 'Trae', 'Windsurf', 'Lovable', 'Bolt.new', 'n8n'],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowtham-venkata-bhaskar-kollati-6988452a4' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/KollatiGowtham?tab=repositories' },
    { icon: ExternalLink, label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0150865053849b8da6' },
    { icon: ExternalLink, label: 'Fiverr', href: 'https://www.fiverr.com/s/xXVQEE1' },
  ];

  const projectPreview = [
    { title: 'ColdMail Automation', image: coldmailImg, tech: ['Python', 'Flask'] },
    { title: 'Appointment Booking', image: appointmentImg, tech: ['React', 'Node.js'] },
    { title: 'Handlooms Business', image: handloomsImg, tech: ['HTML', 'PHP'] },
    { title: 'Language Learning', image: languagesImg, tech: ['JS', 'CSS'] },
  ];

  const certificatePreview = [
    { title: 'AWS Cloud Practitioner', image: awsCert, issuer: 'GFG' },
    { title: 'Agile', image: f3, issuer: 'HP Life' },
    { title: 'Data Analytics', image: f2, issuer: 'Deloitte' },
    { title: 'Data Science', image: f1, issuer: 'Board' },
  ];

  const galleryPreview = [sicmit1, ben2, tech7, tech1];

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

  const cornerStickers = [
    { id: 'internship', label: 'Internship', icon: Briefcase, ariaLabel: 'Jump to Internship section' },
    { id: 'projects-preview', label: 'Projects', icon: FolderGit2, ariaLabel: 'Jump to Projects preview' },
    { id: 'certificates-preview', label: 'Awards', icon: Award, ariaLabel: 'Jump to Certificates preview' },
    { id: 'gallery-preview', label: 'Gallery', icon: Images, ariaLabel: 'Jump to Gallery preview' },
    { id: 'skills', label: 'Skills', icon: Code2, ariaLabel: 'Jump to Skills section' },
  ];

  return (
    <Layout>
      {/* Overhauled Header (Hero Section) - Replicated Style */}
      <section className="relative min-h-screen lg:min-h-screen w-full overflow-hidden flex flex-col lg:flex-row bg-[#F0F4F8]">
        {/* Left Side: Profile Image & Vertical Labels */}
        <div className="relative w-full lg:w-[42%] h-[40vh] sm:h-[45vh] lg:min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-0 overflow-hidden bg-white">
          {/* Vertical Navigation Bar (Replicating "Singer, Idol" style) */}
          <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-16 border-l border-gray-200 hidden lg:flex flex-col items-center py-12 gap-12 z-20 bg-white">
            
            <div className="flex-1 flex flex-col justify-center items-center gap-72">
              <span className="font-heading text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap origin-center">Full-Stack Developer</span>
              <span className="font-heading text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap origin-center">Cloud & AI Engineer</span>
            </div>
          </div>



          {/* Profile Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end lg:pr-20"
          >
            <img 
              src={profileImage} 
              alt="Gowtham" 
              className="h-[95%] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* Background Skew Element */}
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#2D5A9E]/5 -skew-y-6 transform -translate-y-1/2 z-0" />
        </div>

        {/* Right Side: Information Grid & Vertical Title */}
        <div className="relative w-full lg:w-[58%] min-h-[60vh] lg:min-h-screen bg-[#2D5A9E] text-white flex flex-col p-6 sm:p-10 lg:p-12 xl:p-14 overflow-hidden">
          {/* Vertical Title (Replicating "ADEL" style) */}
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-40 flex items-center justify-center z-0 pointer-events-none opacity-5 lg:opacity-10">
            <h1 className="font-heading text-[5rem] sm:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black uppercase tracking-tighter rotate-90 whitespace-nowrap select-none">
              
            </h1>
          </div>

          {/* Main Name Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mb-2 sm:mb-4 lg:mb-6"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[7rem] font-black uppercase tracking-tighter leading-[0.8] mb-2 sm:mb-4 lg:mb-6">
              GOWTHAM
            </h2>
             <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 block mb-1">Specialization</span>
              <p className="font-heading text-sm sm:text-base lg:text-lg font-bold uppercase tracking-tight">Aspiring Software Engineer | Full-Stack Developer | Cloud & AI Enthusiast</p>
            </div>

            <div className="w-12 sm:w-16 lg:w-24 h-1 lg:h-2 bg-white mt-2 sm:mt-3 mb-4 sm:mb-6 lg:mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
          </motion.div>

          {/* Info Grid (Replicating the structured card info) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-3 flex-1">
            {/* Real Name */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Real Name</span>
              <p className="font-heading text-xs sm:text-sm lg:text-lg font-bold uppercase tracking-tight">KOLLATI GOWTHAM VENKATA BHASKAR</p>
            </div>

            {/* Nickname */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Nickname</span>
              <p className="font-heading text-sm lg:text-lg font-bold uppercase tracking-tight">GOWTHAM</p>
            </div>

            {/* Email */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Email</span>
              <p className="font-heading text-[10px] sm:text-xs lg:text-sm font-bold lowercase tracking-tight">gowthamaha05@gmail.com</p>
            </div>

            {/* Contact */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Contact</span>
              <p className="font-heading text-sm lg:text-lg font-bold uppercase tracking-tight">+91 8341305025</p>
            </div>

            {/* Birthday */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Birthday</span>
              <p className="font-heading text-sm lg:text-lg font-bold uppercase tracking-tight">MAY 29, 2005</p>
            </div>

            {/* Birthplace */}
            <div className="border-t border-white/20 pt-2 lg:pt-3">
              <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/70 block mb-1">Birthplace</span>
              <p className="font-heading text-sm lg:text-lg font-bold uppercase tracking-tight">YANAM, PUDUCHERRY, INDIA</p>
            </div>

          </div>

          {/* Footer of the card with Media Links */}
          <div className="relative z-10 mt-6 sm:mt-8 lg:mt-6 pt-4 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-3 sm:gap-4 items-center">
              {socialLinks.slice(0, 2).map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <link.icon size={16} />
                </a>
              ))}
              
              {/* Resume Download Button */}
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-[#2D5A9E] font-black text-[10px] uppercase tracking-widest hover:bg-white/90 transition-all shadow-lg"
              >
                <span>Resume</span>
                <Download size={12} />
              </a>
            </div>
            <div className="font-heading text-base sm:text-lg lg:text-xl font-black italic tracking-tighter text-white/20 select-none">
              Gowtham.
            </div>
          </div>
        </div>


      </section>

      {/* Professional Summary Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2D5A9E]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#2D5A9E]/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-[#2D5A9E]/10 rounded-full opacity-50" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-[#2D5A9E]/5 rounded-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white p-8 sm:p-14 md:p-20 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-700 overflow-hidden relative group"
            >
              {/* Inner gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A9E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#2D5A9E]/5 to-transparent rounded-bl-[100px]" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#2D5A9E]/10 border border-[#2D5A9E]/20 rounded-full mb-8 sm:mb-12"
                >
                  <User className="w-4 h-4 text-[#2D5A9E]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2D5A9E]">Professional Summary</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-8 sm:mb-12 tracking-tighter uppercase leading-none"
                >
                  About <span className="text-[#2D5A9E] relative inline-block">
                    Me
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-3 bg-[#2D5A9E]/10 w-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </span>
                </motion.h2>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <p className="text-base sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                    As an <span className="text-[#2D5A9E] font-bold">Aspiring Software Engineer</span> and 
                    <span className="text-[#2D5A9E] font-bold ml-1">Full-Stack Developer</span>, 
                    I thrive on the intersection of logic and creativity. My journey is defined by a relentless 
                    pursuit of excellence and a deep passion for building scalable, high-impact digital solutions.
                  </p>
                  <p className="text-base sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                    With expertise in <span className="text-gray-900 font-bold">Full-Stack Development, Cloud Computing, and AI-driven automation</span>, 
                    I specialize in transforming complex challenges into elegant, efficient code. My goal is to 
                    architect the future of technology, one line at a time.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-10 sm:mt-16 flex flex-wrap gap-8 sm:gap-16"
                >
                  <div className="flex flex-col relative pl-6 border-l-2 border-[#2D5A9E]/20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2D5A9E]/60 mb-2">Status</span>
                    <span className="text-sm sm:text-lg font-bold text-gray-900">Open to Opportunities</span>
                  </div>
                  <div className="flex flex-col relative pl-6 border-l-2 border-[#2D5A9E]/20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2D5A9E]/60 mb-2">Location</span>
                    <span className="text-sm sm:text-lg font-bold text-gray-900">India / Remote</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section - Modern Minimalist Design */}
      <section id="skills" className="py-12 sm:py-20 relative overflow-hidden scroll-mt-24 bg-[#2D5A9E] text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[35%] h-[35%] bg-white/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[25%] h-[25%] bg-white/5 rounded-full blur-[80px] -z-10" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-auto space-y-4"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.25em] border border-white/20 shadow-sm backdrop-blur-sm">
                <Code2 size={14} className="text-white" />
                Technical Arsenal
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tighter uppercase leading-none">
                My <span className="text-white italic underline decoration-white/10 decoration-[12px] underline-offset-[-6px]">Expertise.</span>
              </h2>
            </motion.div>
            
            <Link 
              to="/about" 
              className="group flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#2D5A9E] rounded-2xl sm:rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white/90 transition-all shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10">Detailed Stack</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                {/* Main Card - Modern Minimalist Card Style */}
                <div className="relative h-full bg-white text-gray-900 border border-white/20 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Decorative Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 relative z-10">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm relative group-hover:bg-[#2D5A9E] group-hover:text-white transition-all duration-500"
                      >
                        <category.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </motion.div>
                      {/* Numbering Label */}
                      <div className="mt-4 sm:mt-6 text-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#2D5A9E] transition-colors">Archive 0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-6 sm:space-y-10">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-gray-900 uppercase tracking-tighter leading-none">
                          {category.title}
                        </h3>
                        <motion.div 
                          className="h-1 w-16 sm:w-20 bg-primary/10 rounded-full"
                          whileInView={{ width: [16, 80, 20] }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.span 
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * skillIdx }}
                            whileHover={{ scale: 1.1, backgroundColor: '#2D5A9E', color: 'white' }}
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-gray-700 rounded-xl sm:rounded-2xl border border-gray-200 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-10 sm:py-16 bg-white relative overflow-hidden scroll-mt-24">
        <div className="container-custom relative z-10">
          <SectionTitle title="Quick Highlights" subtitle="Career Snapshot" centered={true} />
          
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Conditional Rendering: Book Slider for Desktop, Grid for Mobile */}
            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center"
              >
                <BookSlider items={highlights} />
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-4 w-full px-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      {'image' in item && item.image ? (
                        <img src={item.image} alt={item.value} className="w-7 h-7 object-contain" />
                      ) : (
                        <item.icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-primary/60 mb-0.5">{item.label}</p>
                      <h3 className="font-heading font-extrabold text-sm sm:text-lg text-gray-900 leading-tight">
                        {item.value}
                      </h3>
                      <p className="text-[10px] font-medium text-gray-500 mt-0.5">
                        {item.sublabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internship Experience Section - Blue Background with White Card */}
      <section id="internship" className="py-16 sm:py-24 relative overflow-hidden scroll-mt-24 bg-[#2D5A9E] text-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.02] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-1 relative group"
            >
              <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 border border-white/10 shadow-2xl overflow-hidden text-[#2D5A9E]">
                {/* Inner Gradient Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2D5A9E]/0 via-[#2D5A9E]/20 to-[#2D5A9E]/0" />
                
                <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
                  {/* Content Area */}
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#2D5A9E]/5 border border-[#2D5A9E]/10 rounded-full"
                    >
                      <Award className="w-4 h-4 text-[#2D5A9E]" />
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#2D5A9E]">Professional Journey</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-[#2D5A9E] mb-6 leading-[0.9] tracking-tighter uppercase">
                        Associate <br />
                        <span className="text-[#2D5A9E]/60 italic underline decoration-[#2D5A9E]/10 decoration-8 underline-offset-4">Trainee.</span>
                      </h2>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6 text-gray-600"
                    >
                      <p className="text-lg sm:text-xl leading-relaxed font-medium">
                        During my internship at <span className="text-[#2D5A9E] font-black">TechnoSprint Info Solutions</span>, I focused on high-impact execution and consistency.
                      </p>
                      <p className="text-base sm:text-lg leading-relaxed font-medium">
                        I was honored with the <span className="text-[#2D5A9E] font-bold italic underline decoration-[#2D5A9E]/20">Operational Excellence Award</span> and the 
                        <span className="text-[#2D5A9E] font-bold italic underline decoration-[#2D5A9E]/20 ml-1">Pillar of Integrity Award</span> for 
                        exceptional professional ethics.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-8 sm:gap-12 pt-4"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D5A9E]/40 mb-2">Company</span>
                        <span className="text-sm sm:text-base font-black text-[#2D5A9E] uppercase tracking-tight">TechnoSprint Info Solutions</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D5A9E]/40 mb-2">Recognition</span>
                        <span className="text-sm sm:text-base font-black text-[#2D5A9E] uppercase tracking-tight">2x Special Awards</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual Display Area */}
                  <div className="relative group/images">
                    {/* Decorative Background Glow */}
                    <div className="absolute inset-0 bg-[#2D5A9E]/10 blur-[60px] rounded-full scale-110 opacity-50 group-hover/images:opacity-80 transition-opacity duration-1000" />
                    
                    <div className="relative grid grid-cols-2 gap-4 sm:gap-6 perspective-1000">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: -5,
                          rotateX: 5,
                          z: 50
                        }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-20 group/img1"
                      >
                        <div className="absolute inset-0 bg-[#2D5A9E]/10 opacity-0 group-hover/img1:opacity-100 transition-opacity z-10" />
                        <img src={internshipCertificateImg} alt="Certificate" className="w-full h-full object-cover" />
                      </motion.div>

                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          rotateX: -5,
                          z: 50
                        }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 mt-12 sm:mt-16 group/img2"
                      >
                        <div className="absolute inset-0 bg-[#2D5A9E]/10 opacity-0 group-hover/img2:opacity-100 transition-opacity z-10" />
                        <img src={pillarOfIntegrityImg} alt="Certificate" className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Gallery Section */}
      <section id="showcase" className="py-12 sm:py-20 relative overflow-hidden bg-background/30">
        <div className="container-custom">
          <ImageGallery 
            title="Work Showcase" 
            subtitle="Expanding Visual Gallery" 
            items={[
              { src: coldmailImg, title: 'ColdMail Automation', description: 'Systems Automation' },
              { src: appointmentImg, title: 'Appointment Nexus', description: 'Health-Tech' },
              { src: handloomsImg, title: 'Kalamkari Heritage', description: 'E-Commerce' },
              { src: languagesImg, title: 'BroCode Learning', description: 'Ed-Tech' },
              { src: languagesImg1, title: 'Technical Seminar', description: 'Event Highlights' },
              { src: languagesImg2, title: 'Innovation Workshop', description: 'R&D Archive' },
            ]}
          />
          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 text-center"
          >
            <Link 
              to="/projects" 
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gray-50 border border-gray-200 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(30,64,175,0.5)] transition-all duration-500 hover:-translate-y-1"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certifications Radial Scroll Section */}
      <section id="certificates" className="py-8 sm:py-16 bg-[#2D5A9E] text-white relative overflow-hidden scroll-mt-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 sm:mb-12 gap-4 sm:gap-8">
            <div className="w-full md:w-auto">
              <SectionTitle 
                title="Certifications" 
                subtitle="Professional proof" 
                centered={true} 
                dark={true} 
                className="md:!text-left md:!items-start mb-0 sm:!mb-0" 
              />
            </div>
            <Link 
              to="/certificates" 
              className="group flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#2D5A9E] border border-white/20 rounded-full font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-white/90 hover:shadow-xl transition-all sm:mb-4"
            >
              View Full List
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {!isMobile ? (
            <RadialScrollGallery 
              baseRadius={580} 
              mobileRadius={200} 
              visiblePercentage={65} 
              scrollDuration={3000}
              className="!min-h-[450px] sm:!min-h-[920px]"
              startTrigger="top top"
            >
              {(hoveredIndex) => 
                certificatePreview.map((cert, index) => { 
                  const isActive = hoveredIndex === index; 
                  return ( 
                    <div  
                      key={`${cert.title}-${index}`}  
                      className="group relative w-[160px] h-[220px] sm:w-[320px] sm:h-[440px] overflow-hidden rounded-[1.2rem] sm:rounded-[2.5rem] bg-white border border-gray-200 shadow-2xl transition-all duration-500" 
                    > 
                      <div className="absolute inset-0 overflow-hidden p-2 sm:p-6 bg-white"> 
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className={`h-full w-full object-contain transition-all duration-700 ease-out contrast-[1.05] saturate-[1.05] drop-shadow-[0_28px_70px_rgba(0,0,0,0.18)] ${ 
                            isActive ? 'scale-110 rotate-1' : 'scale-100' 
                          }`} 
                        /> 
                      </div> 
        
                      <div className="absolute top-2 left-2 right-2 sm:top-6 sm:left-6 sm:right-6 flex justify-between items-start pointer-events-none"> 
                        <Badge variant="secondary" className="pointer-events-auto text-[6px] sm:text-[9px] font-black px-1.5 sm:px-3 py-0.5 sm:py-1 bg-white/90 text-[#2D5A9E] border border-gray-200 backdrop-blur uppercase tracking-widest shadow-sm"> 
                          {cert.issuer} 
                        </Badge> 
                        <div className={`pointer-events-auto w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-[#2D5A9E] text-white flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}> 
                          <ArrowUpRight size={8} className="sm:w-[14px] sm:h-[14px]" /> 
                        </div> 
                      </div> 
  
                      <div className={`absolute bottom-0 left-0 right-0 p-2 sm:p-6 bg-white/95 backdrop-blur border-t border-gray-200 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}> 
                        <h3 className="text-[10px] sm:text-xl font-black font-heading leading-tight text-[#0B1B33] uppercase tracking-tight line-clamp-2">{cert.title}</h3> 
                        <div className={`h-0.5 sm:h-1 bg-[#2D5A9E] mt-1 sm:mt-3 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} /> 
                      </div> 
                    </div> 
                  ); 
                }) 
              } 
            </RadialScrollGallery>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-white/40 mb-2">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[8px] font-black uppercase tracking-[0.3em]">Swipe to explore</span>
                <div className="h-px w-8 bg-white/20" />
              </div>
              <div className="flex overflow-x-auto gap-5 pb-8 no-scrollbar snap-x snap-mandatory px-4">
                {certificatePreview.map((cert, index) => (
                  <div  
                    key={`${cert.title}-${index}`}  
                    className="flex-shrink-0 snap-center w-[260px] bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col" 
                  > 
                    <div className="relative h-[200px] bg-white flex items-center justify-center p-4"> 
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="max-h-full max-w-full object-contain" 
                      /> 
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#2D5A9E] text-white text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
                          {cert.issuer}
                        </span>
                      </div>
                    </div> 
                    
                    <div className="p-6 bg-white border-t border-gray-50 flex-1"> 
                      <h3 className="text-sm font-black font-heading leading-tight text-[#0B1B33] uppercase tracking-tight line-clamp-2">
                        {cert.title}
                      </h3> 
                      <div className="w-8 h-1 bg-[#2D5A9E] mt-3 rounded-full" />
                    </div> 
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Visual Gallery Section - Portfolio Gallery Replicated */}
      <PortfolioGallery 
        title="Visual Gallery" 
        archiveButton={{ text: "See More", href: "/gallery" }} 
        images={[
          { src: sicmit1, alt: "Technical Seminar" },
          { src: ben2, alt: "Professional Meetup" },
          { src: tech7, alt: "Innovation Lab" },
          { src: tech1, alt: "Workshop Highlight" },
          { src: tech2, alt: "System Design" },
          { src: tech3, alt: "App Architecture" },
          { src: tech4, alt: "E-Commerce" },
          { src: tech5, alt: "Learning Platform" },
        ]}
      />

      <footer className="bg-white border-t border-gray-100">
        <div className="container-custom py-6 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Kollati Gowtham Venkata Bhaskar
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {[
              {
                icon: Linkedin,
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/gowtham-venkata-bhaskar-kollati-6988452a4',
              },
              {
                icon: Github,
                label: 'GitHub',
                href: 'https://github.com/KollatiGowtham?tab=repositories',
              },
              {
                icon: Mail,
                label: 'Email',
                href: 'mailto:gowthamkollati05@protonmail.com',
              },
              {
                icon: Download,
                label: 'Download Resume',
                href: '/resume.pdf',
                download: true,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: true } : {})}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:shadow-[0_0_24px_rgba(30,64,175,0.22)] hover:-translate-y-1 transition-all duration-500"
                aria-label={link.label}
              >
                <link.icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>



    </Layout>
  );
};

export default Home;

