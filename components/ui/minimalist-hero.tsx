import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MinimalistHeroProps {
  // Keeping interface compatible but ignoring nav props in render
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  readMoreLabel?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText?: string;
  className?: string;
}

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  mainText,
  readMoreLink,
  readMoreLabel = "Read More",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = readMoreLink.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn(
        // Mobile padding: px-8 (32px) to match other sections.
        // Reduced pt-28 to pt-20 to reduce top spacing on mobile.
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background font-sans pt-20 pb-8 px-8 md:px-12 lg:px-20 md:pt-24',
        className
      )}
    >
      {/* Note: Navbar has been moved to App.tsx for global fixed positioning */}

      {/* Main Content Area */}
      {/* Added gap-8 for better vertical spacing on mobile */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 mt-4 md:mt-0 gap-8 md:gap-0">
        
        {/* Left Text Content (Description) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          {/* Increased font size for mobile (text-base) and desktop (text-lg) */}
          <p className="mx-auto max-w-xs text-base md:text-lg leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a 
            href={readMoreLink} 
            onClick={handleScroll}
            className="mt-6 inline-block text-sm md:text-base font-medium text-foreground underline decoration-from-font cursor-pointer hover:text-foreground/80 transition-colors"
          >
            {readMoreLabel}
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full min-h-[300px] md:min-h-auto">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[280px] w-[280px] rounded-full bg-yellow-400/90 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            ></motion.div>
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-auto w-48 object-cover md:w-64 scale-125 md:scale-150 lg:w-72"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
                }}
            />
        </div>

        {/* Right Text (Big Title) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          {/* Responsive font sizing: 5xl on mobile -> 9xl on large screens */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground md:text-8xl lg:text-9xl tracking-tighter leading-none">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between pb-4 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-6 md:space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Scroll</span>
          <ChevronDown className="animate-bounce-slow text-foreground/70" size={20} />
        </motion.div>

        {locationText ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-sm font-medium text-foreground/80"
          >
            {locationText}
          </motion.div>
        ) : (
           <div className="w-10"></div> // Spacer
        )}
      </footer>
    </div>
  );
};