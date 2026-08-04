import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  orderCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation, onOpenOrder, orderCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'Social Hub', href: '#social' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#071A35] py-4 border-b border-[#D6B24C]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#071A35]/90 via-[#071A35]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F7F3EC] hover:text-[#D6B24C] transition-colors p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand / Logo Centered or Left */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex flex-col items-start sm:items-center">
            <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F3EC] tracking-widest uppercase group-hover:text-[#D6B24C] transition-colors">
              ORION
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-luxury text-[#D6B24C] uppercase -mt-1">
              CAFE & SOCIAL HUB
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-sans tracking-widest text-[#F7F3EC]/80 hover:text-[#D6B24C] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D6B24C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenOrder}
            className="relative p-2 text-[#F7F3EC] hover:text-[#D6B24C] transition-colors"
            title="Digital Table Order"
          >
            <ShoppingBag size={20} />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D6B24C] text-[#071A35] font-mono font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-widest text-[#D6B24C] border border-[#D6B24C]/60 hover:bg-[#D6B24C] hover:text-[#071A35] transition-all duration-300 bg-[#071A35]/40 backdrop-blur-sm"
          >
            <Calendar size={14} />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A35] border-b border-[#D6B24C]/20 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans tracking-widest text-[#F7F3EC] hover:text-[#D6B24C] uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#D6B24C]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full text-center py-3 text-xs font-sans font-medium uppercase tracking-widest text-[#071A35] bg-[#D6B24C] hover:bg-[#e6c565] transition-colors"
            >
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
