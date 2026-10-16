import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D8CEBF] bg-[#F4EFE6]/80 text-[#6B5A4E] text-[11px] tracking-[0.16em] uppercase font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D291D]"></span>
              SINGLE-ORIGIN ROASTERY & SALON
              <span className="text-[#A49486]">•</span>
              EST. 1928
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.06] text-[#2A1D15] tracking-tight mb-6">
              Where Timeless Craft Meets <span className="italic font-normal">Modern Coffee.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#65584F] text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              A warm corner for carefully crafted coffee, delicate pastries, and slow moments worth remembering in the Parisian heart.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#menu"
                className="bg-[#332218] hover:bg-[#20150F] text-[#FAF7F2] px-7 py-3.5 rounded text-xs font-medium tracking-[0.16em] uppercase inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow"
              >
                EXPLORE THE MENU <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#visit"
                className="bg-[#EBE3D7] hover:bg-[#DFD6C8] text-[#2A1D15] px-7 py-3.5 rounded text-xs font-medium tracking-[0.16em] uppercase transition-all"
              >
                VISIT THE ATELIER
              </a>
            </div>

            {/* Stats / Roastery Highlights */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-[#EAE2D5] pt-8 w-full max-w-lg">
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#2A1D15] font-medium">100%</div>
                <div className="text-[10px] tracking-[0.16em] text-[#7C6C60] uppercase mt-1">Arabica Traceable</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#2A1D15] font-medium">48 hr</div>
                <div className="text-[10px] tracking-[0.16em] text-[#7C6C60] uppercase mt-1">Cold Extraction</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-[#2A1D15] font-medium">Daily</div>
                <div className="text-[10px] tracking-[0.16em] text-[#7C6C60] uppercase mt-1">Bespoke Viennoiserie</div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Archival Card Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Background Card Offset for depth */}
            <div className="absolute top-4 -right-2 sm:right-2 w-[85%] sm:w-[380px] h-[480px] bg-[#EAE2D5] rounded-2xl rotate-3 border border-[#DFD6C8] -z-10 hidden sm:block opacity-70"></div>

            {/* Main Foreground Card */}
            <div className="w-full max-w-[420px] bg-white rounded-2xl p-4 shadow-2xl border border-[#E8E0D5] relative group">
              
              {/* Photo Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] bg-[#F4EFE6]">
                <img
                  src="/images/hero-latte.jpg"
                  alt="Barista pouring artisanal flat white latte art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Top overlay badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#1C130D]/85 backdrop-blur-md text-[#FAF7F2] text-[10px] tracking-[0.16em] font-medium px-3 py-1 rounded-full border border-white/10 uppercase">
                  • NO. 01 • EST. 1928
                </div>
              </div>

              {/* Card Caption Footer */}
              <div className="pt-4 pb-1">
                <div className="flex items-center justify-between text-[10px] tracking-[0.16em] uppercase text-[#88786D] mb-1 font-medium">
                  <span>PLATE NO. 01 — SIGNATURE EXTRACTION</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-serif text-lg text-[#2A1D15] font-medium">
                    Velvet Flat White & Double Ristretto
                  </h3>
                  <span className="font-sans text-base font-semibold text-[#2A1D15] ml-2">
                    €5.00
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
