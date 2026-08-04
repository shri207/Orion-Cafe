import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#071A35] overflow-hidden pt-20"
    >
      {/* Cinematic Dark Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=90"
          alt="Orion Cafe & Lounge Atmosphere in Banjara Hills"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Soft Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/60 to-[#071A35]/40" />
        <div className="absolute inset-0 celestial-subtle opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Astronomy / Celestial Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D6B24C]/30 bg-[#071A35]/70 backdrop-blur-md mb-8">
          <Compass size={12} className="text-[#D6B24C] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
            17°25′24″N 78°25′54″E • BANJARA HILLS, HYDERABAD
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F7F3EC] leading-[1.15] mb-6 max-w-4xl tracking-tight">
          Where Conversations Meet <br className="hidden sm:inline" />
          <span className="italic font-light text-[#D6B24C]">Exceptional Taste</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-lg md:text-xl font-light text-[#F7F3EC]/85 max-w-2xl leading-relaxed mb-10">
          Premium café, gourmet dining, handcrafted beverages, and unforgettable evenings in the heart of Banjara Hills.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 text-xs font-sans font-medium uppercase tracking-widest text-[#071A35] bg-[#D6B24C] border border-[#D6B24C] hover:bg-[#e6c565] transition-all duration-300 shadow-xl"
          >
            Reserve Table
          </button>
          
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 text-xs font-sans font-medium uppercase tracking-widest text-[#F7F3EC] border border-[#F7F3EC]/40 hover:border-[#D6B24C] hover:text-[#D6B24C] transition-all duration-300 bg-[#071A35]/30 backdrop-blur-sm"
          >
            Explore Menu
          </a>
        </div>

        {/* Subtle Feature Badges */}
        <div className="mt-16 pt-8 border-t border-[#D6B24C]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full max-w-3xl">
          <div>
            <p className="font-serif text-xl text-[#F7F3EC]">Single-Origin</p>
            <p className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase mt-1">Micro-Batch Beans</p>
          </div>
          <div>
            <p className="font-serif text-xl text-[#F7F3EC]">36-Hour</p>
            <p className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase mt-1">Fermented Sourdough</p>
          </div>
          <div>
            <p className="font-serif text-xl text-[#F7F3EC]">Fresh Truffle</p>
            <p className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase mt-1">Handmade Pasta</p>
          </div>
          <div>
            <p className="font-serif text-xl text-[#F7F3EC]">Banjara Hills</p>
            <p className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase mt-1">Social Lounge</p>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#story"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-[#F7F3EC]/60 hover:text-[#D6B24C] transition-colors flex flex-col items-center gap-2"
        aria-label="Scroll to Story section"
      >
        <span className="text-[10px] font-mono tracking-luxury uppercase">Discover</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
};
