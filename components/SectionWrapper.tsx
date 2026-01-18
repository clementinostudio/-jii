import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'black' | 'white';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = '',
  background = 'black'
}) => {
  const bgColor = background === 'black' ? 'bg-black text-white' : 'bg-white text-black';
  
  // Padding lateral: Desktop 80px, Tablet 48px, Mobile 32px (mais respiro no mobile)
  const paddingX = "px-8 md:px-12 lg:px-20"; 
  
  return (
    <section id={id} className={`${bgColor} py-20 md:py-40 ${className}`}>
      <div className={`max-w-[1200px] mx-auto w-full ${paddingX}`}>
        {children}
      </div>
    </section>
  );
};