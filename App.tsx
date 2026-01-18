import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  // Mobile Menu State (Lifted up to coordinate with BackToTop)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Controle geral do Hero (0 a 800px)
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.92]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.4]);
  const heroRadius = useTransform(scrollY, [0, 800], ["0rem", "3rem"]);

  // Controle da transição Sobre -> Projetos
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "start start"] // Começa quando o topo de Projetos entra na tela, termina quando toca o topo
  });

  // Animações da seção About (enquanto Projetos sobe)
  const aboutScale = useTransform(projectsProgress, [0, 1], [1, 0.92]);
  const aboutOpacity = useTransform(projectsProgress, [0, 0.9], [1, 0.5]); 
  
  return (
    <main className="w-full bg-black text-white selection:bg-cta selection:text-white">
      
      {/* Global Components */}
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <BackToTop isMobileMenuOpen={isMobileMenuOpen} />

      {/* 1. Hero Layer (Fixo no fundo) */}
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity, borderRadius: heroRadius }}
        className="sticky top-0 z-0 h-screen w-full overflow-hidden origin-center will-change-transform bg-background"
      >
        <Hero />
      </motion.div>

      {/* Anchor for About Section */}
      <div id="about" className="absolute top-[100vh] w-full h-1 pointer-events-none -mt-4" />

      {/* 2. About Layer (Card Branco) */}
      <motion.div 
        style={{ scale: aboutScale, opacity: aboutOpacity }}
        className="sticky top-0 z-10 flex flex-col justify-center w-full min-h-screen bg-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden origin-center will-change-transform"
      >
        <About />
      </motion.div>

      {/* Anchor for Projects Section - Separated from the animated container to prevent layout thrashing */}
      <div id="projects" className="absolute w-full h-1 pointer-events-none -mt-24 z-10" />

      {/* 3. Projects Layer (Card Preto) */}
      <div 
        ref={projectsRef}
        className="relative z-20 w-full min-h-screen bg-black text-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(255,255,255,0.1)] overflow-hidden border-t border-white/10"
      >
        <Projects />
      </div>

      {/* 4. Final CTA & Footer Layer (Card Branco) */}
      {/* Removed rounded-t classes to make corners straight */}
      <div className="relative z-30 w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <FinalCTA />
        
        <footer className="bg-white py-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Felipe Clementino. Todos os direitos reservados.
          </p>
        </footer>
      </div>

    </main>
  );
};

export default App;