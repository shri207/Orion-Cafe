import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { CategoryId, MenuItem } from '../types';
import { Search, Sparkles, Plus, Check, Info } from 'lucide-react';

interface SignatureMenuProps {
  onAddToOrder: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onAddToOrder }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'chef-specials', label: 'Chef Specials' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'small-plates', label: 'Small Plates' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'tea', label: 'Tea & Infusions' },
    { id: 'mocktails', label: 'Elixirs & Mocktails' },
    { id: 'pastas', label: 'Artisanal Pastas' },
    { id: 'pizza', label: 'Woodfired Pizza' },
    { id: 'burgers', label: 'Gourmet Burgers' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const availableTags = ['Chef Signature', 'Single Origin', 'Artisanal', 'Gourmet Vegan', 'Gluten Free', 'Banjara Special'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = !selectedTag || (item.tags && item.tags.includes(selectedTag as any));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToOrder(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1500);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F7F3EC] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#D6B24C]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D6B24C]" />
              <span className="text-xs font-mono tracking-luxury text-[#D6B24C] uppercase">
                02 — CURATED CULINARY SELECTION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#071A35]">
              The Signature Menu
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5C5C] max-w-md leading-relaxed">
            Every dish and beverage at Orion is prepared fresh to order using non-GMO ingredients, organic dairy, and heirloom grains.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#FCFBF8] p-4 border border-[#D6B24C]/20 shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80 flex items-center">
            <Search size={16} className="absolute left-3 text-[#D6B24C]" />
            <input
              type="text"
              placeholder="Search dishes, truffle, coffee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-transparent border-b border-[#D6B24C]/30 focus:border-[#071A35] outline-none text-[#1A1A1A] placeholder-[#5C5C5C]"
            />
          </div>

          {/* Tags Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-[11px] font-mono text-[#D6B24C] uppercase tracking-wider shrink-0 mr-1">
              Filter:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-[11px] font-sans tracking-wider uppercase transition-all shrink-0 ${
                selectedTag === null
                  ? 'bg-[#071A35] text-[#D6B24C]'
                  : 'bg-[#F7F3EC] text-[#5C5C5C] hover:text-[#071A35]'
              }`}
            >
              All Types
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-[11px] font-sans tracking-wider uppercase transition-all shrink-0 ${
                  selectedTag === tag
                    ? 'bg-[#D6B24C] text-[#071A35] font-semibold'
                    : 'bg-[#F7F3EC] text-[#5C5C5C] hover:text-[#071A35]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Horizontal Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#D6B24C]/20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-sans uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#071A35] text-[#D6B24C] border border-[#D6B24C]/50 shadow-md font-semibold'
                  : 'bg-[#FCFBF8] text-[#1A1A1A]/70 hover:text-[#071A35] border border-transparent hover:border-[#D6B24C]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FCFBF8] border border-[#D6B24C]/20">
            <p className="font-serif text-xl text-[#071A35] mb-2">No menu items match your search criteria</p>
            <p className="text-xs text-[#5C5C5C]">Try clearing your search query or tag filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-sans uppercase tracking-widest bg-[#071A35] text-[#D6B24C]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveDetailItem(item)}
                className="group bg-[#FCFBF8] border border-[#D6B24C]/20 hover:border-[#D6B24C] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden bg-[#071A35]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#071A35]/90 text-[#D6B24C] px-3 py-1 text-[10px] font-mono tracking-luxury uppercase border border-[#D6B24C]/30 backdrop-blur-sm">
                    {item.categoryName}
                  </div>

                  {/* Special Tag */}
                  {item.tags && item.tags[0] && (
                    <div className="absolute top-4 right-4 bg-[#D6B24C] text-[#071A35] px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase">
                      {item.tags[0]}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 text-[#F7F3EC] bg-[#071A35]/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl font-normal text-[#071A35] group-hover:text-[#D6B24C] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-base font-semibold text-[#071A35] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#5C5C5C] leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Ingredients preview */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.ingredients.slice(0, 3).map((ing, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-[#1A1A1A]/60 bg-[#F7F3EC] px-2 py-0.5 border border-[#D6B24C]/20">
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-[10px] font-mono text-[#D6B24C]">
                          +{item.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-[#D6B24C]/20 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDetailItem(item);
                      }}
                      className="text-[11px] font-sans tracking-widest text-[#071A35] hover:text-[#D6B24C] uppercase flex items-center gap-1"
                    >
                      <span>Story & Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleAdd(item, e)}
                      className={`px-3 py-1.5 text-xs font-sans font-medium uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                        addedAnimationId === item.id
                          ? 'bg-[#071A35] text-[#D6B24C]'
                          : 'bg-[#D6B24C] text-[#071A35] hover:bg-[#e6c565]'
                      }`}
                    >
                      {addedAnimationId === item.id ? (
                        <>
                          <Check size={12} />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus size={12} />
                          <span>Order</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Dish Detail Modal */}
      {activeDetailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A35]/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#FCFBF8] border border-[#D6B24C]/40 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#1A1A1A] shadow-2xl">
            <button
              onClick={() => setActiveDetailItem(null)}
              className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#D6B24C] transition-colors p-2 text-xl font-mono"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <img
                src={activeDetailItem.image}
                alt={activeDetailItem.name}
                className="w-full h-64 object-cover border border-[#D6B24C]/20"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-1">
                    {activeDetailItem.categoryName}
                  </span>
                  <h3 className="font-serif text-2xl text-[#071A35] font-semibold mb-2">
                    {activeDetailItem.name}
                  </h3>
                  <p className="font-mono text-xl text-[#071A35] font-bold mb-4">
                    ₹{activeDetailItem.price}
                  </p>
                  <p className="text-xs text-[#5C5C5C] leading-relaxed mb-4">
                    {activeDetailItem.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    handleAdd(activeDetailItem, e);
                    setActiveDetailItem(null);
                  }}
                  className="w-full py-3 bg-[#071A35] text-[#D6B24C] text-xs font-sans uppercase tracking-widest hover:bg-[#D6B24C] hover:text-[#071A35] transition-colors border border-[#D6B24C]"
                >
                  Add to Digital Table Order
                </button>
              </div>
            </div>

            {activeDetailItem.shortStory && (
              <div className="mb-6 p-4 bg-[#F7F3EC] border-l-2 border-[#D6B24C]">
                <h4 className="text-xs font-mono tracking-widest text-[#071A35] uppercase mb-1">
                  Culinary Inspiration
                </h4>
                <p className="font-serif text-sm italic text-[#1A1A1A]/80">
                  "{activeDetailItem.shortStory}"
                </p>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xs font-mono tracking-widest text-[#071A35] uppercase mb-2">
                Ingredients & Sourcing
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDetailItem.ingredients.map((ing, i) => (
                  <span key={i} className="text-xs font-sans bg-[#F7F3EC] px-3 py-1 border border-[#D6B24C]/20 text-[#071A35]">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {activeDetailItem.pairingRecommendation && (
              <div className="pt-4 border-t border-[#D6B24C]/20 text-xs font-sans text-[#5C5C5C]">
                <strong className="text-[#071A35] font-semibold">Sommelier / Barista Pairing:</strong> {activeDetailItem.pairingRecommendation}
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
