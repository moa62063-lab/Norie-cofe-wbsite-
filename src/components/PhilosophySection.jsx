import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PhilosophySection() {
  const cards = [
    {
      num: '01',
      title: 'Crafted With Care',
      text: 'Single-origin beans hand-selected across ethical micro-lots and roasted in 5kg batches to protect every delicate terpene profile.',
      linkText: 'DIRECT TRADE',
    },
    {
      num: '02',
      title: 'A Place to Stay',
      text: 'Intentionally unhurried salons with reading nooks, warm amber lamps, quiet acoustics, and an absolute absence of rushed tables.',
      linkText: 'SANCTUARY',
    },
    {
      num: '03',
      title: 'Pure Ingredients',
      text: 'AOP French butter, unbleached stoneground flours, biodynamic pasture milk, and untreated cane sugars selected for pure flavor.',
      linkText: 'HEIRLOOM SOURCED',
    },
    {
      num: '04',
      title: 'Timeless Atmosphere',
      text: 'An authentic homage to 1920s Parisian literary cafes where writers and artists congregated, reimagined with modern barista precision.',
      linkText: 'LIVING HERITAGE',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-2">
            OUR PHILOSOPHY
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] tracking-tight mb-4">
            Why NOIRÉ?
          </h2>
          <p className="text-[#65584F] text-base sm:text-lg leading-relaxed">
            We believe that remarkable coffee requires quiet patience, uncompromising ingredients, and spaces designed for reverie.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-[#F4EFE6]/60 border border-[#E5DDD1] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-[#F2ECE1] transition-all duration-300 group shadow-sm hover:shadow"
            >
              <div>
                <div className="font-serif italic text-2xl text-[#8A796D] group-hover:text-[#4A382D] transition-colors">
                  {card.num}
                </div>
                <h3 className="font-serif text-xl text-[#2A1D15] font-medium mt-3 mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6A5A4F] leading-relaxed">
                  {card.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DDD1]/70">
                <a
                  href="#story"
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase font-semibold text-[#3D291D] hover:text-[#1C130D] group-hover:translate-x-0.5 transition-all"
                >
                  {card.linkText} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
