import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isMobileMenuOpen: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isMobileMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeVisible = window.scrollY > 500;
          setIsVisible(shouldBeVisible);
          ticking = false;
        });
        ticking = true;
      }
    };

    // { passive: true } improves scroll performance by telling the browser we won't preventDefault
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && !isMobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0, y: 40, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 40, x: "-50%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 z-50 group flex items-center justify-center w-12 h-12 rounded-full bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 will-change-transform"
          aria-label="Voltar ao topo"
        >
          <div className="relative w-5 h-5 overflow-hidden">
            {/* Seta Principal (Sobe ao dar hover) */}
            <ArrowUp 
              size={20} 
              className="absolute top-0 left-0 transform group-hover:-translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" 
            />
            
            {/* Seta Secundária (Vem de baixo ao dar hover) */}
            <ArrowUp 
              size={20} 
              className="absolute top-0 left-0 transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" 
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};