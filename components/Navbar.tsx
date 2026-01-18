import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Twitter, ArrowRight, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
  ];

  // Animation Variants
  const menuVariants = {
    initial: { 
      y: "-100%",
      opacity: 0
    },
    animate: { 
      y: "0%",
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
    exit: { 
      y: "-100%",
      opacity: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { y: 20, opacity: 0 }
  };

  // Styles for the "Dynamic Islands"
  const islandTransition = "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  
  const islandClasses = isScrolled
    ? "bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full px-6 py-3"
    : "bg-transparent border-transparent px-0 py-2";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between pointer-events-auto">
          
          {/* --- Island 1: Logo --- */}
          <div className={`${islandTransition} ${islandClasses} relative z-50`}>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity block"
            >
              Felipe Clementino
            </a>
          </div>

          {/* --- Island 2: Navigation (Desktop) --- */}
          <div className={`hidden md:flex items-center gap-1 ${islandTransition} ${islandClasses}`}>
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-1.5 rounded-full hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Minimalist CTA separator */}
            <div className={`h-4 w-[1px] bg-white/10 mx-2 ${isScrolled ? 'opacity-100' : 'opacity-50'}`}></div>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group flex items-center gap-2 text-sm font-medium text-white pl-2 pr-1"
            >
              Vamos conversar
              <div className="bg-white/10 rounded-full p-1 group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                <ArrowRight size={12} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={`md:hidden ${islandTransition} ${islandClasses} !px-3 !py-2 relative z-50`}>
            <button 
              className="text-white flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Stylized Custom Hamburger Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="9" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between pt-32 pb-12 px-8 md:hidden"
          >
            {/* Main Links Container */}
            <motion.div 
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-6"
            >
              {navLinks.map((link, idx) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-5xl font-light tracking-tighter text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="pt-4">
                <a 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="inline-flex items-center gap-3 text-2xl font-medium text-cta"
                  >
                    Vamos conversar <ArrowUpRight size={28} />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Footer / Socials */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Social Networks</p>
              <div className="flex gap-8">
                <a href="#" className="text-white hover:text-cta transition-colors"><Github size={24} strokeWidth={1.5} /></a>
                <a href="#" className="text-white hover:text-cta transition-colors"><Linkedin size={24} strokeWidth={1.5} /></a>
                <a href="#" className="text-white hover:text-cta transition-colors"><Twitter size={24} strokeWidth={1.5} /></a>
              </div>
              <p className="text-gray-700 text-xs mt-8">
                © {new Date().getFullYear()} Felipe Clementino.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};