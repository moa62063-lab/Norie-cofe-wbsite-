import React from 'react';
import { Feather } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-3">
              CHAPTER I — THE ROASTERY JOURNAL
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] leading-[1.12] mb-7">
              Our Story & The Art of Unhurried Conversation
            </h2>

            {/* Bold Lead */}
            <p className="text-[#2A1D15] font-semibold text-base sm:text-lg leading-relaxed mb-5">
              NOIRÉ was imagined as a sanctuary where coffee is treated as an intentional craft and time is allowed to gently slow down.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#65584F] text-sm sm:text-base leading-relaxed mb-4">
              Founded within the historic alleys of the Parisian Latin Quarter, our atelier unites micro-batch Nordic-style roasting discipline with the sensory grace of an antique literary salon. We gently coax nuance from elevation-grown varietals while honoring timeless Viennoiserie laminations made with Normandy AOP butter.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#65584F] text-sm sm:text-base leading-relaxed mb-10">
              No hurried glances at wristwatches. Only walnut tabletops, warm amber lamplight, worn poetry editions, and porcelain cups that hold notes of dried stone fruit, bergamot, and roasted hazelnuts.
            </p>

            {/* Signature & Founder Block */}
            <div className="pt-6 border-t border-[#EAE2D5] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded border border-[#DFD5C6] bg-[#F4EFE6] flex items-center justify-center">
                  <Feather className="w-4 h-4 text-[#4A382D]" />
                </div>
                <div>
                  <div className="font-serif italic text-lg text-[#2A1D15]">
                    Julien & Clara Mercier
                  </div>
                  <div className="text-[9px] tracking-[0.18em] uppercase text-[#7A6D63] font-medium">
                    Master Roaster & Pâtissière
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#2A1D15] font-medium">
                  Atelier Latin
                </div>
                <div className="text-[10px] tracking-[0.14em] text-[#7A6D63]">
                  Paris VIᵉ
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Archival Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[540px] bg-white rounded-2xl p-4 shadow-xl border border-[#E8E0D5] group">
              
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#F4EFE6]">
                <img
                  src="/images/salon-interior.jpg"
                  alt="Atmospheric Parisian salon interior with bookshelves and patrons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Caption Footer */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#6A5A4F]">
                <span className="text-[10px] tracking-[0.16em] uppercase font-medium text-[#2A1D15]">
                  NOIRÉ SALON • 14 RUE DES BEAUX-ARTS
                </span>
                <span className="font-serif italic text-xs text-[#7A6D63]">
                  Automne Archive • Paris VIᵉ
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
