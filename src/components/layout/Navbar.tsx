import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignJustify, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, setIsOpen } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 mx-auto max-w-[95%] sm:max-w-[90%] rounded-full ${
        scrolled || (isMobile && isOpen)
          ? 'bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-lg py-2'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="px-4 sm:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group font-heading text-xl sm:text-2xl font-bold tracking-tighter text-gray-900 hover:text-primary transition-all duration-500 flex items-center gap-2 sm:gap-3">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary shadow-md flex items-center justify-center text-primary-foreground text-base sm:text-lg font-black"
              whileHover={{ scale: 1.1, rotate: 10, shadow: '0 0 30px rgba(30,64,175,0.4)' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              KG
            </motion.div>
            <span className="hidden sm:inline uppercase tracking-[0.2em] text-[10px] sm:text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:tracking-[0.3em] transition-all">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-heading text-[10px] font-bold uppercase tracking-widest transition-all duration-500 rounded-full ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary rounded-full shadow-md"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 sm:p-3 rounded-full text-gray-900 hover:text-primary bg-gray-100 border border-gray-200 transition-all duration-300 shadow-sm"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlignJustify size={18} className="sm:w-5 sm:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden absolute top-full left-0 right-0 mt-4 px-2"
            >
              <div className="bg-white/95 backdrop-blur-3xl border border-gray-200 rounded-[2rem] p-6 shadow-2xl">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-4 px-6 rounded-2xl font-heading text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight 
                          className={`w-5 h-5 transition-transform ${
                            location.pathname === link.path ? 'translate-x-1' : ''
                          }`} 
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
