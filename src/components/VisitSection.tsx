import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, ExternalLink } from 'lucide-react';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#FCFBF8] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D6B24C]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D6B24C]" />
              <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
                09 — LOCATION & HOURS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35]">
              Visit Orion Banjara Hills
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5C5C] max-w-md leading-relaxed">
            Conveniently situated in Hyderabad's premier hospitality neighborhood, equipped with dedicated valet services.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details & Hours */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-[#F7F3EC] border-l-2 border-[#D6B24C]">
              <MapPin size={24} className="text-[#D6B24C] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-normal text-[#071A35] mb-1">
                  Destination Address
                </h3>
                <p className="font-sans text-sm text-[#1A1A1A]/80 leading-relaxed">
                  Orion Cafe & Social Hub, Road No. 12, <br />
                  Banjara Hills, Hyderabad, Telangana 500034
                </p>
                <p className="text-xs text-[#5C5C5C] mt-2 font-mono">
                  Landmark: Opposite Lotus Pond Avenue
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 bg-[#FCFBF8] border border-[#D6B24C]/30 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#D6B24C]/20">
                <Clock size={18} className="text-[#D6B24C]" />
                <h4 className="font-serif text-lg text-[#071A35] font-semibold">
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-[#D6B24C]/10">
                  <span className="font-medium text-[#071A35]">Monday – Thursday</span>
                  <span className="font-mono text-[#5C5C5C]">08:00 AM – 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#D6B24C]/10">
                  <span className="font-medium text-[#071A35]">Friday – Sunday (Lounge Nights)</span>
                  <span className="font-mono text-[#D6B24C] font-semibold">08:00 AM – 01:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#071A35]">Barista Breakfast & Espresso Bar</span>
                  <span className="font-mono text-[#5C5C5C]">From 08:00 AM Daily</span>
                </div>
              </div>
            </div>

            {/* Contact & Valet Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F7F3EC] border border-[#D6B24C]/20 flex items-center gap-3">
                <Phone size={18} className="text-[#D6B24C]" />
                <div>
                  <span className="text-[10px] font-mono text-[#5C5C5C] uppercase block">Concierge Phone</span>
                  <a href="tel:+914088997722" className="text-xs font-semibold text-[#071A35] hover:text-[#D6B24C]">
                    +91 40 8899 7722
                  </a>
                </div>
              </div>

              <div className="p-4 bg-[#F7F3EC] border border-[#D6B24C]/20 flex items-center gap-3">
                <Car size={18} className="text-[#D6B24C]" />
                <div>
                  <span className="text-[10px] font-mono text-[#5C5C5C] uppercase block">Valet Service</span>
                  <span className="text-xs font-semibold text-[#071A35]">Complimentary Valet</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Interactive Map Frame */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#071A35] p-2 border border-[#D6B24C]/30 shadow-xl overflow-hidden relative group">
              
              {/* Map Canvas Visual Mock with Pin */}
              <div className="relative w-full h-[400px] sm:h-[480px] bg-[#071A35] overflow-hidden flex flex-col items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=85"
                  alt="Banjara Hills Hyderabad Map View"
                  className="w-full h-full object-cover filter brightness-50 contrast-125"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-[#071A35]/60" />

                {/* Map Pin Pulse */}
                <div className="relative z-10 flex flex-col items-center text-center p-6 bg-[#071A35]/90 border border-[#D6B24C] max-w-xs shadow-2xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-[#D6B24C] text-[#071A35] flex items-center justify-center mb-3 animate-bounce">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-[#F7F3EC]">
                    Orion Banjara Hills
                  </h4>
                  <p className="text-[11px] font-sans text-[#F7F3EC]/80 mt-1 mb-4">
                    Road No. 12, Hyderabad
                  </p>

                  <a
                    href="https://maps.google.com/?q=Banjara+Hills+Road+12+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-[11px] font-sans font-medium uppercase tracking-widest text-[#071A35] bg-[#D6B24C] hover:bg-[#e6c565] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Open Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
