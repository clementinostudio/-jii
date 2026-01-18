import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';

const items = [
  "Entrega rigorosamente dentro do prazo acordado.",
  "Código limpo, documentado e fácil de manter.",
  "Comunicação clara e sem tecnicês desnecessário.",
  "Foco total na experiência do seu usuário final."
];

export const Differentiators: React.FC = () => {
  return (
    <SectionWrapper background="black" id="why-me">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-6 leading-tight">
            Por que confiar seu projeto a mim?
          </h2>
        </div>
        <div className="md:col-span-7">
          <ul className="flex flex-col gap-6">
            {items.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 border-l-2 border-gray-800 hover:border-cta hover:bg-white/5 transition-colors duration-300"
              >
                <CheckCircle2 className="text-cta shrink-0 mt-1" size={24} />
                <span className="text-xl md:text-2xl text-gray-200 font-medium">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};