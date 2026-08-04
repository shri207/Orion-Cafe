import React from 'react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FCFBF8] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[1px] bg-[#D6B24C]" />
          <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
            01 — THE ORION PHILOSOPHY
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with frame border */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden border border-[#D6B24C]/20 p-2 bg-[#F7F3EC]">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
                alt="Orion Cafe Coffee Extraction & Interior"
                className="w-full h-[480px] sm:h-[580px] object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle background offset frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D6B24C]/40 z-0 hidden sm:block" />
            
            {/* Floating Tag */}
            <div className="absolute top-8 left-8 z-20 bg-[#071A35] text-[#F7F3EC] px-4 py-2 border border-[#D6B24C]/30 text-[11px] font-mono tracking-luxury uppercase">
              Est. Banjara Hills, Hyderabad
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35] leading-tight mb-8">
              A Celestial Sanctuary for <br />
              <span className="italic font-light text-[#D6B24C]">Mindful Gatherings</span>
            </h2>

            <div className="space-y-6 text-[#1A1A1A]/80 font-sans text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Named after the most iconic constellation visible in the night sky, <strong className="text-[#071A35] font-semibold">Orion Cafe & Social Hub</strong> was born from a desire to redefine hospitality in Hyderabad. We conceived Orion not merely as a café, but as an architectural haven where time slows down and meaningful human connections flourish.
              </p>

              <p>
                Nestled on Road No. 12 in Banjara Hills, our space fuses European café culture with a modern social lounge. From our 36-hour slow-fermented sourdough to micro-batch single-origin Arabica roasted specifically for our La Marzocco espresso bar, every detail celebrates uncompromising craftsmanship.
              </p>

              <p>
                Whether you enter for an invigorating morning flat white, an afternoon of focused work in our private acoustic alcoves, or an evening enjoying freshly shaved truffle pasta over candlelight, Orion welcomes you into an atmosphere of quiet luxury.
              </p>
            </div>

            {/* Key Pillars Grid */}
            <div className="mt-10 pt-8 border-t border-[#D6B24C]/30 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-lg text-[#071A35] font-semibold mb-1">Uncompromising Culinary</h3>
                <p className="text-xs text-[#5C5C5C] font-sans">Imported truffles, cold-pressed oils, and zero artificial preservatives.</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#071A35] font-semibold mb-1">Acoustic Sanctuaries</h3>
                <p className="text-xs text-[#5C5C5C] font-sans">Soft lighting and tuned soundscapes designed for conversation.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
