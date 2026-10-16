import React from 'react';
import { Coffee, Share2, Disc } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE2D5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#EAE2D5]">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-[#2A1D15]/20 flex items-center justify-center rounded bg-[#F4EFE6]">
                <Coffee className="w-4 h-4 text-[#2A1D15]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-base font-semibold text-[#2A1D15]">
                  NOIRÉ
                </span>
                <span className="text-[8px] tracking-[0.16em] uppercase text-[#7A6D63]">
                  Café & Artisanal Roastery
                </span>
              </div>
            </div>

            <h3 className="font-serif italic text-2xl text-[#2A1D15] mb-2">
              The Art of Coffee
            </h3>

            <p className="text-xs text-[#6A5A4F] leading-relaxed max-w-sm">
              Crafting deliberate roasts and European-inspired hospitality in the heart of the city since 2018.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2A1D15] mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs text-[#65584F]">
              <li>
                <a href="#home" className="hover:text-[#2A1D15] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#2A1D15] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#2A1D15] transition-colors">
                  Tasting Menu
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#2A1D15] transition-colors">
                  The Roast Philosophy
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2A1D15] transition-colors">
                  Visual Journal
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#2A1D15] transition-colors">
                  Visit the Atelier
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Service */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2A1D15] mb-4">
              HOURS OF SERVICE
            </div>
            <div className="space-y-2 text-xs text-[#65584F]">
              <div className="flex justify-between max-w-[200px]">
                <span>Monday - Friday</span>
                <span className="text-[#2A1D15] font-medium">07:00 - 18:00</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Saturday</span>
                <span className="text-[#2A1D15] font-medium">08:00 - 19:00</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="text-[#2A1D15] font-medium">08:30 - 17:00</span>
              </div>
              <p className="font-serif italic text-xs text-[#7A6D63] pt-2">
                Espresso bar & fresh Viennoiserie daily.
              </p>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#2A1D15] mb-4">
              CONNECT
            </div>
            <p className="text-xs text-[#6A5A4F] leading-relaxed mb-4">
              Follow our roasting journal and seasonal bean releases.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#DFD6C8] bg-[#F4EFE6] flex items-center justify-center text-[#4A382D] hover:bg-[#EAE2D5] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#DFD6C8] bg-[#F4EFE6] flex items-center justify-center text-[#4A382D] hover:bg-[#EAE2D5] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#DFD6C8] bg-[#F4EFE6] flex items-center justify-center text-[#4A382D] hover:bg-[#EAE2D5] transition-colors"
                aria-label="Playlist"
              >
                <Disc className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-[10px] tracking-[0.16em] uppercase text-[#7A6D63]">
              14 RUE DES BEAUX-ARTS, PARIS VIᵉ
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#88786D] gap-4">
          <div>
            © 2026 NOIRÉ Café. Concept project.
          </div>
          <div className="tracking-[0.16em] uppercase text-[10px]">
            ARCHIVE EDITION • BATCH NO. 042
          </div>
        </div>

      </div>
    </footer>
  );
}
