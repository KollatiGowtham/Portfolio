import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white/95 backdrop-blur-2xl border-t border-primary/20 relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(30,64,175,0.5)]" />
      
      <div className="container-custom py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-black tracking-tighter text-foreground mb-4 sm:mb-6 uppercase">
              KG <span className="text-primary">Portfolio</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              A Software Developer dedicated to creating visually striking, 
              high-performance applications with modern cloud and blockchain technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-4 sm:mt-0">
            <h4 className="font-heading text-base sm:text-lg font-bold uppercase tracking-widest text-primary mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(170,77,255,0.5)] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-4 sm:mt-0">
            <h4 className="font-heading text-base sm:text-lg font-bold uppercase tracking-widest text-primary mb-4 sm:mb-6">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(30,64,175,0.3)] hover:-translate-y-1 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                Fiverr <ExternalLink size={10} className="sm:w-3 sm:h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                Upwork <ExternalLink size={10} className="sm:w-3 sm:h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
            © {currentYear} KG Portfolio. Built with <span className="text-primary animate-pulse">Passion</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Modern Design</span>
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Performance Optimized</span>
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
