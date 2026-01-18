import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <SectionWrapper background="white" id="contact" className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto flex flex-col items-center px-4 md:px-0"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 leading-tight tracking-tight">
          Pronto para ter um site profissional de verdade?
        </h2>
        
        <Button 
          variant="primary" 
          href="https://wa.me/" 
          className="h-14 md:h-16 text-base md:text-lg px-8 md:px-12 gap-3 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <MessageCircle size={20} className="md:w-6 md:h-6" />
          Falar comigo no WhatsApp
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};