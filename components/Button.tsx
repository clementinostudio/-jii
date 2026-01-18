import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center h-12 px-8 rounded font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-cta text-white hover:bg-blue-700 shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    white: "bg-cta text-white hover:bg-blue-700 shadow-sm", // Used on white backgrounds usually, keeping consistent CTA color
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};