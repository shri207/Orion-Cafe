import React, { useState } from 'react';
import { Compass, Check, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#071A35] text-[#F7F3EC] pt-20 pb-12 border-t border-[#D6B24C]/30 relative overflow-hidden">
      
      {/* Celestial Background Pattern */}
      <div className="absolute inset-0 celestial-subtle opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D6B24C]/20">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="flex flex-col items-start group">
              <span className="font-serif text-3xl font-semibold text-[#F7F3EC] tracking-widest uppercase group-hover:text-[#D6B24C] transition-colors">
                ORION
              </span>
              <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase -mt-1">
                CAFE & SOCIAL HUB
              </span>
            </a>

            <p className="font-sans text-xs text-[#F7F3EC]/70 leading-relaxed max-w-sm">
              An architectural coffee haven, European dining room, and evening lounge located in Banjara Hills, Hyderabad. Dedicated to quiet luxury and timeless hospitality.
            </p>

            <div className="text-[11px] font-mono text-[#D6B24C]">
              17°25′24″N 78°25′54″E • ROAD NO. 12, BANJARA HILLS
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#D6B24C] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F7F3EC]/80 uppercase tracking-wider">
              <li><a href="#story" className="hover:text-[#D6B24C] transition-colors">01 — The Story</a></li>
              <li><a href="#menu" className="hover:text-[#D6B24C] transition-colors">02 — Signature Menu</a></li>
              <li><a href="#coffee" className="hover:text-[#D6B24C] transition-colors">03 — Coffee Culture</a></li>
              <li><a href="#social" className="hover:text-[#D6B24C] transition-colors">04 — Social Lounge</a></li>
              <li><a href="#gallery" className="hover:text-[#D6B24C] transition-colors">05 — Visual Gallery</a></li>
              <li><a href="#visit" className="hover:text-[#D6B24C] transition-colors">06 — Hours & Visit</a></li>
            </ul>
          </div>

          {/* Col 3: Secret Tasting Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#D6B24C] uppercase">
              The Orion Dispatch
            </h4>
            <p className="text-xs text-[#F7F3EC]/70 leading-relaxed">
              Receive invitations to private chef tasting dinners, secret coffee micro-roast releases, and intimate acoustic lounge evenings.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border-b border-[#D6B24C]/50 focus-within:border-[#D6B24C]">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 bg-transparent text-xs text-[#F7F3EC] placeholder-[#F7F3EC]/40 outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="text-[#D6B24C] hover:text-[#e6c565] transition-colors px-2"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-3 bg-[#D6B24C]/10 border border-[#D6B24C]/40 text-xs font-mono text-[#D6B24C] flex items-center gap-2">
                <Check size={14} />
                <span>You have been added to the private guest list.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F7F3EC]/50 gap-4">
          <p>© {new Date().getFullYear()} Orion Cafe & Social Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6B24C] transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6B24C] transition-colors">Facebook</a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6B24C] transition-colors">Spotify Lounge Playlist</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
