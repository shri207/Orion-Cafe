import React from 'react';
import { SOCIAL_HUB_PILLARS } from '../data/experiencesData';

export const SocialHub: React.FC = () => {
  return (
    <section id="social" className="py-24 sm:py-32 bg-[#071A35] text-[#F7F3EC] relative overflow-hidden">
      
      <div className="absolute inset-0 celestial-subtle opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D6B24C]" />
            <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
              05 — THE SOCIAL HUB
            </span>
            <span className="w-8 h-[1px] bg-[#D6B24C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F7F3EC] max-w-2xl">
            Designed for Connection
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#F7F3EC]/70 max-w-xl mt-4 leading-relaxed">
            Spaces designed to foster spontaneous dialogues, deep focus, intimate dates, and grand family celebrations.
          </p>
        </div>

        {/* 3 Large Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOCIAL_HUB_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-[#071A35]/80 border border-[#D6B24C]/25 hover:border-[#D6B24C] transition-all duration-500 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#071A35]/90 px-3 py-1 text-[10px] font-mono text-[#D6B24C] tracking-luxury uppercase border border-[#D6B24C]/30">
                    0{idx + 1} — {pillar.subtitle}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-2xl font-normal text-[#F7F3EC] mb-3 group-hover:text-[#D6B24C] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-xs text-[#F7F3EC]/75 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <div className="pt-4 border-t border-[#D6B24C]/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase">
                    {pillar.highlightText}
                  </span>
                  <span className="text-xs font-mono text-[#F7F3EC]/50">Orion Lounge</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
