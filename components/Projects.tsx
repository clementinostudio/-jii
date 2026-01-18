import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Extended locally to avoid changing global types for visual-only data
interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'E-commerce Premium',
    category: 'Web Application',
    description: 'Plataforma de vendas high-end com checkout otimizado, animações fluidas e carregamento instantâneo via Next.js.',
    imageUrl: 'https://picsum.photos/seed/proj1/1000/800',
    tags: ['Next.js', 'Stripe', 'Zustand'],
    year: '2024'
  },
  {
    id: 2,
    title: 'Dashboard Financeiro',
    category: 'SaaS Platform',
    description: 'Interface analítica complexa simplificada para tomada de decisões rápidas. Visualização de dados em tempo real.',
    imageUrl: 'https://picsum.photos/seed/proj2/1000/800',
    tags: ['React', 'D3.js', 'TypeScript'],
    year: '2023'
  },
  {
    id: 3,
    title: 'Landing Page SaaS',
    category: 'Marketing Site',
    description: 'Página de alta conversão para software B2B. Foco total em SEO técnico, performance Core Web Vitals e A/B testing.',
    imageUrl: 'https://picsum.photos/seed/proj3/1000/800',
    tags: ['Astro', 'Tailwind', 'Framer'],
    year: '2023'
  },
  {
    id: 4,
    title: 'Portal Corporativo',
    category: 'Enterprise System',
    description: 'Arquitetura escalável para grandes volumes de acesso. Sistema de Design System proprietário integrado.',
    imageUrl: 'https://picsum.photos/seed/proj4/1000/800',
    tags: ['Next.js', 'Storybook', 'GraphQL'],
    year: '2022'
  }
];

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 md:py-40 w-full relative overflow-hidden">
      
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Header Content */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-20 w-full mb-16 md:mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold text-white mb-2 tracking-tighter leading-[1.1] md:leading-none">
            Trabalhos <br/> 
            <span className="text-gray-500">Selecionados</span>
          </h2>
        </div>
        <div className="md:max-w-xs md:pb-2">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Uma coleção de interfaces criadas com precisão, focadas em resolver problemas reais de negócios.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-20 w-full relative z-10">
        <div className="flex flex-col gap-12 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              
              {/* Project Info (Left on Desktop) */}
              <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center relative pt-4 md:pt-0">
                {/* Index Number - Styled as Hollow Text */}
                {/* Adjusted size and position for mobile to prevent overlapping important text */}
                <span className="text-stroke absolute -top-10 -left-6 md:-top-16 md:-left-8 text-7xl md:text-[120px] lg:text-[180px] font-black opacity-10 select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-20">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3 md:mb-4">
                    <span className="text-cta font-mono text-xs md:text-sm tracking-wider uppercase">{project.category}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-gray-500 font-mono text-xs md:text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-gray-400 border border-white/10 rounded-full group-hover:border-white/30 group-hover:text-white transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-white font-medium group/btn text-sm md:text-base">
                    <span className="border-b border-white/30 pb-1 group-hover/btn:border-cta group-hover/btn:text-cta transition-all duration-300">
                      Ver Case Study
                    </span>
                    <div className="bg-white text-black rounded-full p-2 transform group-hover/btn:bg-cta group-hover/btn:text-white group-hover/btn:rotate-45 transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Project Image (Right on Desktop) */}
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-900 cursor-pointer shadow-lg">
                  {/* Overlay for inactive state */}
                  <div className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-0' : 'opacity-40'}`} />
                  
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      hoveredProject === project.id 
                        ? 'scale-105 grayscale-0' 
                        : 'scale-100 grayscale'
                    }`}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};