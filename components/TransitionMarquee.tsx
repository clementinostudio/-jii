import React from 'react';

export const TransitionMarquee: React.FC = () => {
  const items = [
    "High Conversion",
    "Pixel Perfect",
    "SEO Optimized",
    "Clean Code",
    "Fast Performance",
    "UX/UI Design"
  ];

  const MarqueeContent = () => (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="text-sm md:text-lg font-bold uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-300 select-none whitespace-nowrap">
            {item}
          </span>
          <span className="text-cta/50 font-bold text-sm md:text-lg">•</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="w-full bg-black h-24 border-b border-white/5 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden flex items-center relative z-20 -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* Track 1 */}
      <div className="flex animate-marquee gap-12 md:gap-24 min-w-full items-center pl-12 md:pl-24">
        <MarqueeContent />
      </div>
      
      {/* Track 2 (Duplicate for loop) */}
      <div aria-hidden="true" className="flex animate-marquee gap-12 md:gap-24 min-w-full items-center absolute left-full pl-12 md:pl-24">
        <MarqueeContent />
      </div>
    </div>
  );
};