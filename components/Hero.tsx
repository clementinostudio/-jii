import React from 'react';
import { MinimalistHero } from './ui/minimalist-hero';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const navLinks = [
    { label: 'PROJETOS', href: '#projects' },
    { label: 'SOBRE', href: '#about' },
    { label: 'CONTATO', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <MinimalistHero
      logoText="FELIPE C."
      navLinks={navLinks}
      mainText="Olá, sou Felipe Clementino. Crio experiências digitais claras, profissionais e focadas em converter visitantes em clientes fiéis."
      readMoreLink="#projects"
      readMoreLabel="Ver Projetos"
      imageSrc="arquivos/felipe.png"
      imageAlt="Felipe Clementino"
      overlayText={{
        part1: 'FRONT',
        part2: 'END',
      }}
      socialLinks={socialLinks}
    />
  );
};