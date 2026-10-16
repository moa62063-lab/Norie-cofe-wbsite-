import React, { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'MENU', href: '#menu' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'VISIT US', href: '#visit' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE2D5] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-[#2A1D15]/20 flex items-center justify-center rounded bg-[#F4EFE6] group-hover:border-[#2A1D15] transition-colors">
              <Coffee className="w-4 h-4 text-[#2A1D15]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg font-semibold text-[#2A1D15]">
                NOIRÉ
              </span>
              <span className="text-[9px] tracking-[0.16em] uppercase text-[#7A6D63] font-medium">
                Café & Artisanal Roastery
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] text-[#55473E] hover:text-[#2A1D15] transition-colors uppercase py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2A1D15] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href="#menu"
              className="bg-[#2A1D15] text-[#FAF7F2] hover:bg-[#3D291D] px-6 py-2.5 rounded text-xs font-medium tracking-[0.15em] transition-all duration-200 shadow-sm hover:shadow"
            >
              VIEW MENU
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#2A1D15] hover:bg-[#EAE2D5] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF7F2] border-b border-[#EAE2D5] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-[0.18em] text-[#55473E] hover:text-[#2A1D15] transition-colors uppercase py-1 border-b border-[#EAE2D5]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#2A1D15] text-[#FAF7F2] py-3 rounded text-xs font-medium tracking-[0.15em]"
              >
                VIEW MENU
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
