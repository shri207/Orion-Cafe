import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Interior', 'Culinary', 'Coffee', 'Atmosphere'];

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FCFBF8] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#D6B24C]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D6B24C]" />
              <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
                06 — VISUAL ESSAY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35]">
              Editorial Gallery
            </h2>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-widest transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#071A35] text-[#D6B24C] border border-[#D6B24C]/40'
                    : 'bg-[#F7F3EC] text-[#5C5C5C] hover:text-[#071A35]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden bg-[#071A35] border border-[#D6B24C]/20 hover:border-[#D6B24C] transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A35] via-[#071A35]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#F7F3EC] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F7F3EC]/80 line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-[#D6B24C] uppercase">
                  <Maximize2 size={12} />
                  <span>Expand View</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A35]/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FCFBF8] border border-[#D6B24C]/40 max-w-4xl w-full p-6 sm:p-8 relative text-[#1A1A1A] shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-[#1A1A1A] hover:text-[#D6B24C] transition-colors p-2 text-xl font-mono"
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[65vh] object-cover border border-[#D6B24C]/20 mb-6"
              referrerPolicy="no-referrer"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#D6B24C]/20">
              <div>
                <span className="text-[10px] font-mono text-[#D6B24C] uppercase tracking-luxury block mb-1">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl text-[#071A35] font-normal">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-[#5C5C5C] mt-1">
                  {selectedImage.caption}
                </p>
              </div>

              <span className="text-xs font-mono text-[#071A35]/60 shrink-0">
                Banjara Hills Collection
              </span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
