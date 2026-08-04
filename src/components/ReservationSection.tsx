import React from 'react';
import { Calendar, Compass } from 'lucide-react';

interface ReservationSectionProps {
  onOpenReservation: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF8] text-[#1A1A1A] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Outer Frame Box */}
        <div className="border border-[#D6B24C]/40 p-10 sm:p-16 bg-[#F7F3EC] relative overflow-hidden shadow-xl">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 celestial-subtle opacity-30 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            
            <Compass size={28} className="text-[#D6B24C] mb-4" />

            <span className="text-[10px] sm:text-xs font-mono tracking-luxury text-[#D6B24C] uppercase mb-2">
              08 — SEATING RESERVATIONS
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35] mb-6">
              Reserve Your Table
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#5C5C5C] max-w-xl leading-relaxed mb-8">
              To preserve our tranquil atmosphere, we accept a limited number of reservations each evening. Walk-ins are welcomed warmly at the bar.
            </p>

            <button
              onClick={onOpenReservation}
              className="px-10 py-4 text-xs font-sans font-medium uppercase tracking-widest text-[#071A35] bg-[#D6B24C] border border-[#D6B24C] hover:bg-[#e6c565] transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <Calendar size={14} />
              <span>Book Table Online</span>
            </button>

            {/* Quick Policy Notes */}
            <div className="mt-8 pt-6 border-t border-[#D6B24C]/20 flex flex-wrap justify-center gap-6 text-[11px] font-mono text-[#5C5C5C]">
              <span>• Valet Parking Available</span>
              <span>• Dress Code: Smart Casual</span>
              <span>• Immediate Digital Pass</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
