import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { Layout, Smartphone, Zap } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    description: 'Sites construídos com React e Tailwind, otimizados para velocidade e SEO técnico desde a primeira linha de código.',
    Icon: Layout
  },
  {
    id: 2,
    title: 'Design Responsivo',
    description: 'Layouts fluidos que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência mobile.',
    Icon: Smartphone
  },
  {
    id: 3,
    title: 'Performance & UX',
    description: 'Foco obsessivo em tempos de carregamento e jornadas de usuário intuitivas para maximizar a conversão.',
    Icon: Zap
  }
];

export const Services: React.FC = () => {
  return (
    <SectionWrapper background="white" id="services">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-black mb-4 tracking-tight">
          Como posso ajudar seu negócio
        </h2>
        <p className="text-gray-600 text-lg">
          Soluções técnicas para problemas reais de crescimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-light p-8 rounded-lg group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-transparent hover:border-gray-200"
          >
            <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-cta group-hover:text-white transition-colors duration-300">
              <service.Icon size={24} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-4 text-black">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};