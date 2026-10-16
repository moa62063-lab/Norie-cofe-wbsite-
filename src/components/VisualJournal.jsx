import React from 'react';

export default function VisualJournal() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-2">
              VISUAL JOURNAL
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] tracking-tight">
              A Glimpse Inside
            </h2>
          </div>

          <p className="font-serif italic text-[#65584F] text-sm sm:text-base max-w-md">
            Photographic plates from our roasting room, our mornings by the bay window, and our confectioners' table.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Left Card: The Reading Corner */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8E0D5] flex-1 flex flex-col group">
              <div className="rounded-xl overflow-hidden flex-1 aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[440px] bg-[#F4EFE6]">
                <img
                  src="/images/reading-corner.jpg"
                  alt="Cozy reading corner by the window with book and coffee"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Caption */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#6A5A4F]">
                <span className="text-[10px] tracking-[0.16em] uppercase font-medium text-[#2A1D15]">
                  THE READING CORNER • SALONS DE PARIS
                </span>
                <span className="font-serif italic text-xs text-[#7A6D63]">
                  Plate No. 01 — 16:40 CET
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Top Card: Viennoiserie Table */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8E0D5] group">
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-[#F4EFE6]">
                <img
                  src="/images/viennoiserie.jpg"
                  alt="Freshly baked artisanal French croissants and pastries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Caption */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#6A5A4F]">
                <span className="text-[10px] tracking-[0.16em] uppercase font-medium text-[#2A1D15]">
                  VIENNOISERIE TABLE
                </span>
                <span className="font-serif italic text-xs text-[#7A6D63]">
                  Plate No. 02 — Daily Bake
                </span>
              </div>
            </div>

            {/* Bottom Card: Artisan Extraction */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8E0D5] group">
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-[#F4EFE6]">
                <img
                  src="/images/extraction.jpg"
                  alt="Artisanal espresso extraction with rich golden crema"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Caption */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#6A5A4F]">
                <span className="text-[10px] tracking-[0.16em] uppercase font-medium text-[#2A1D15]">
                  ARTISAN EXTRACTION
                </span>
                <span className="font-serif italic text-xs text-[#7A6D63]">
                  Plate No. 03 — Golden Crema
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
