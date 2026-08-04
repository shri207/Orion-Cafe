import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#071A35] text-[#F7F3EC] relative overflow-hidden">
      
      {/* Subtle Star Grid */}
      <div className="absolute inset-0 celestial-subtle opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Quote size={40} className="text-[#D6B24C] mb-4 opacity-80" />
          
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-[#D6B24C]" />
            <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
              07 — CRITICAL ACCLAIM & TESTIMONIALS
            </span>
            <span className="w-8 h-[1px] bg-[#D6B24C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F7F3EC]">
            Words from Our Guests
          </h2>
        </div>

        {/* 3 Designed Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#071A35]/90 border border-[#D6B24C]/25 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D6B24C] transition-all duration-500"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex items-center gap-1 text-[#D6B24C] mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D6B24C" className="text-[#D6B24C]" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="font-serif text-lg sm:text-xl font-light text-[#F7F3EC]/90 leading-relaxed italic mb-8">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-[#D6B24C]/20">
                <h3 className="font-serif text-lg font-semibold text-[#F7F3EC]">
                  {review.author}
                </h3>
                <p className="font-sans text-xs text-[#D6B24C] mt-0.5">
                  {review.role}
                </p>
                <p className="font-mono text-[10px] text-[#F7F3EC]/40 mt-2 uppercase">
                  Verified Visit • {review.date}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
