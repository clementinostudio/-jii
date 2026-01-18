import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

const stack = [
  "React", "TypeScript", "Next.js", 
  "Tailwind CSS", "Node.js", "Framer Motion",
  "Figma", "SEO Avançado", "Web Performance"
];

export const About: React.FC = () => {
  return (
    <SectionWrapper background="white">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center justify-between">
        
        {/* Left: Value Proposition */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Título */}
            <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-4 text-cta">
              Sobre mim
            </h3>

            {/* Subtítulo (Visualmente o H2) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight leading-snug md:leading-tight">
              Desenvolvedor Front-End focado em interfaces simples e bem estruturadas.
            </h2>

            {/* Texto */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Desenvolvedor front-end com interesse em criar interfaces modernas, responsivas e organizadas. 
              Gosto de trabalhar com código limpo, atenção a detalhes e boas práticas de performance e UX.
            </p>
          </motion.div>
        </div>

        {/* Right: Tech Stack */}
        <div className="md:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-6 text-gray-400">
              Tech Stack & Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm md:text-base text-gray-700 font-medium hover:border-cta hover:text-cta transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};