import React from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedDishesProps {
  onAddToOrder: (item: MenuItem) => void;
  onOpenReservation: () => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onAddToOrder, onOpenReservation }) => {
  const featured = MENU_ITEMS.filter((item) => item.isFeatured);

  return (
    <section className="py-24 sm:py-32 bg-[#071A35] text-[#F7F3EC] relative overflow-hidden">
      
      {/* Background Subtle Stars */}
      <div className="absolute inset-0 celestial-subtle opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D6B24C]/30 bg-[#071A35] mb-4">
            <Sparkles size={12} className="text-[#D6B24C]" />
            <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase">
              03 — CHEF'S SIGNATURE CREATIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F7F3EC] max-w-2xl">
            Epicurean Highlights
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#F7F3EC]/70 max-w-xl mt-4 leading-relaxed">
            Plated art designed to engage every sense, honoring seasonal harvests and centuries-old culinary traditions.
          </p>
        </div>

        {/* Alternating Dishes Showcase */}
        <div className="space-y-24 lg:space-y-32">
          {featured.map((dish, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group overflow-hidden border border-[#D6B24C]/30 p-2 bg-[#071A35]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-[400px] sm:h-[500px] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gold corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D6B24C]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D6B24C]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D6B24C]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D6B24C]" />

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-6 right-6 bg-[#071A35]/95 text-[#D6B24C] px-5 py-2 font-mono text-lg font-semibold border border-[#D6B24C]/40 backdrop-blur-md">
                      ₹{dish.price}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                  
                  <span className="text-[11px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-3">
                    {dish.categoryName} • {dish.tags?.[0] || 'Chef Creation'}
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#F7F3EC] mb-6 leading-tight">
                    {dish.name}
                  </h3>

                  <p className="font-sans text-sm text-[#F7F3EC]/80 leading-relaxed mb-6">
                    {dish.description}
                  </p>

                  {dish.shortStory && (
                    <div className="mb-8 p-4 bg-[#071A35]/60 border-l-2 border-[#D6B24C] text-xs font-serif italic text-[#F7F3EC]/90">
                      "{dish.shortStory}"
                    </div>
                  )}

                  {/* Ingredients List */}
                  <div className="mb-8">
                    <span className="text-[10px] font-mono tracking-widest text-[#D6B24C] uppercase block mb-2">
                      Key Ingredients
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono text-[#F7F3EC]/70 bg-[#F7F3EC]/5 px-3 py-1 border border-[#D6B24C]/20"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onAddToOrder(dish)}
                      className="px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest text-[#071A35] bg-[#D6B24C] hover:bg-[#e6c565] transition-all duration-300"
                    >
                      Order Now
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest text-[#F7F3EC] border border-[#F7F3EC]/30 hover:border-[#D6B24C] hover:text-[#D6B24C] transition-all duration-300 flex items-center gap-2"
                    >
                      <span>Reserve Table</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
