import React from 'react';
import { COFFEE_METHODS } from '../data/experiencesData';
import { Coffee, Flame, Droplets, Clock } from 'lucide-react';

export const CoffeeExperience: React.FC = () => {
  return (
    <section id="coffee" className="py-24 sm:py-32 bg-[#FCFBF8] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D6B24C]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D6B24C]" />
              <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
                04 — THE ART OF COFFEE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35]">
              Handcrafted Coffee Culture
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5C5C] max-w-md leading-relaxed">
            From farm elevation to grind particle distribution, we treat coffee extraction as both science and sacred ritual.
          </p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Main Barista Image */}
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden border border-[#D6B24C]/20 p-2 bg-[#F7F3EC]">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
                alt="Orion Pour-Over Coffee Extraction"
                className="w-full h-[450px] sm:h-[550px] object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#071A35] text-[#F7F3EC] p-6 max-w-xs border border-[#D6B24C]/30 hidden sm:block">
              <p className="font-serif text-lg text-[#D6B24C]">La Marzocco Leva</p>
              <p className="text-xs text-[#F7F3EC]/80 mt-1 font-sans">Custom manual lever machine calibrated for peak flavor clarity.</p>
            </div>
          </div>

          {/* Sourcing Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <span className="text-[11px] font-mono tracking-luxury text-[#D6B24C] uppercase mb-2">
              Micro-Batch Roasting
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#071A35] mb-6">
              Single-Origin Terroir & Precision
            </h3>

            <div className="space-y-5 text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed">
              <p>
                We direct-source 100% Arabica beans from high-altitude estates across Chikmagalur, Karnataka, as well as seasonal microlots from Colombia, Ethiopia, and Panama.
              </p>
              <p>
                Beans are hand-sorted and roasted in small 5kg batches every Tuesday in Hyderabad to ensure peak degassing and aromatic intensity.
              </p>
              <p>
                Our baristas measure water mineral content (TDS 120ppm) and brew with custom temperature profiles tailored to each roast profile.
              </p>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#D6B24C]/20">
              <div className="flex items-center gap-3">
                <Coffee size={20} className="text-[#D6B24C]" />
                <div>
                  <h4 className="text-xs font-semibold text-[#071A35]">100% Arabica</h4>
                  <p className="text-[10px] text-[#5C5C5C]">Single-estate origin</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flame size={20} className="text-[#D6B24C]" />
                <div>
                  <h4 className="text-xs font-semibold text-[#071A35]">Weekly Roasts</h4>
                  <p className="text-[10px] text-[#5C5C5C]">Micro-batch freshness</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Extraction Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COFFEE_METHODS.map((method) => (
            <div
              key={method.id}
              className="bg-[#FCFBF8] p-6 border border-[#D6B24C]/20 hover:border-[#D6B24C] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-2">
                  Extraction Method
                </span>
                <h4 className="font-serif text-xl text-[#071A35] font-semibold mb-2">
                  {method.name}
                </h4>
                <p className="text-xs font-semibold text-[#071A35]/80 mb-3">
                  {method.origin}
                </p>
                <p className="text-xs text-[#5C5C5C] leading-relaxed mb-4 italic">
                  "{method.profile}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D6B24C]/20 space-y-1.5 text-[11px] font-mono text-[#071A35]">
                <div className="flex justify-between">
                  <span className="text-[#5C5C5C]">Temp / Beam:</span>
                  <span>{method.temp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C5C5C]">Ratio:</span>
                  <span>{method.ratio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
