import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MenuSection() {
  const hotCoffee = [
    {
      name: 'Espresso Classico',
      price: '€3.80',
      description: 'Double ristretto, notes of raw cacao nibs and orange blossom.',
    },
    {
      name: 'Americano Métier',
      price: '€4.20',
      description: 'Extended mountain extraction, crisp washed Ethiopian beans.',
    },
    {
      name: 'Cappuccino Crème',
      price: '€4.80',
      description: 'Velveteen steamed microfoam, dusting of heirloom Dutch cocoa.',
    },
    {
      name: 'Café Latte',
      price: '€5.20',
      description: 'Whole alpine dairy or cold-pressed oat milk infusion.',
    },
    {
      name: 'Flat White Artisan',
      price: '€5.00',
      description: 'Short microfoam, intense double shot, sweet milk balance.',
    },
  ];

  const coldCoffee = [
    {
      name: 'Iced Latte Royale',
      price: '€5.50',
      description: 'Poured over hand-carved ice sphere, silky sweetness.',
    },
    {
      name: 'Kyoto Cold Brew',
      price: '€5.20',
      description: '18-hour slow drip extraction with notes of dark plum and cedar.',
    },
    {
      name: 'Iced Mocha Noir',
      price: '€6.00',
      description: 'Valrhona 70% Guanaja chocolate ganache shaken over ice.',
    },
    {
      name: 'Iced Americano Tonic',
      price: '€4.60',
      description: 'Botanical Mediterranean tonic, double espresso float, candied lemon.',
    },
  ];

  const teaAndOther = [
    {
      name: 'Estate Darjeeling Classic',
      price: '€4.50',
      description: 'First flush whole leaf, fragrant muscatel aroma.',
    },
    {
      name: 'Shizuoka Sencha Green',
      price: '€4.50',
      description: 'Steamed spring harvest, vegetal sweetness and clean finish.',
    },
    {
      name: 'Ceremonial Uji Matcha',
      price: '€6.20',
      description: 'Stone-ground first grade matcha whisked with oat or farm dairy.',
    },
    {
      name: 'House Hot Chocolate',
      price: '€5.80',
      description: 'Thick melted dark couverture, Madagascar vanilla chantilly.',
    },
  ];

  const patisserie = [
    {
      name: 'Croissant au Beurre AOP',
      price: '€3.80',
      description: '36-hour slow fermentation, Charentes-Poitou pure butter.',
    },
    {
      name: 'Tiramisù della Casa',
      price: '€7.50',
      description: 'Savoiardi drenched in NOIRÉ espresso, whipped mascarpone.',
    },
    {
      name: 'Basque Burnt Cheesecake',
      price: '€7.00',
      description: 'Caramelized exterior, molten cream center, sea salt flakes.',
    },
    {
      name: 'Valrhona Chocolate Tart',
      price: '€7.80',
      description: 'Sablé crust, rich ganache, gold leaf, and fresh raspberries.',
    },
    {
      name: 'Espresso Fudge Brownie',
      price: '€5.20',
      description: 'Decadent dense chocolate crumb with roasted walnut crunch.',
    },
  ];

  const renderCategory = (title, badge, items) => (
    <div className="mb-10 last:mb-0">
      {/* Category Header */}
      <div className="flex items-center justify-between border-b border-[#DFD6C8] pb-2.5 mb-5">
        <h3 className="font-serif italic text-2xl text-[#2A1D15]">
          {title}
        </h3>
        {badge && (
          <span className="text-[9px] tracking-[0.16em] uppercase font-semibold px-2.5 py-0.5 rounded bg-[#E8E0D2] text-[#5A4B40]">
            {badge}
          </span>
        )}
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="group">
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-base text-[#2A1D15] font-medium group-hover:text-[#4A382D] transition-colors">
                {item.name}
              </span>
              <span className="font-sans text-xs font-semibold text-[#2A1D15] tracking-wide ml-4">
                {item.price}
              </span>
            </div>
            <p className="text-[11px] text-[#74665C] leading-relaxed mt-0.5 max-w-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-2">
            THE DEGUSTATION
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] tracking-tight">
            Our Menu
          </h2>
          <p className="font-serif italic text-lg text-[#65584F] mt-2">
            Simple ingredients. Thoughtful craft.
          </p>
        </div>

        {/* Large Rounded Menu Card */}
        <div className="bg-[#F4EFE6] border border-[#E3D9CC] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
          
          {/* Menu Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Left Column: Hot & Cold Coffee */}
            <div>
              {renderCategory('Hot Coffee', 'MICRO-ROASTED', hotCoffee)}
              {renderCategory('Cold Coffee', 'SLOW STEEPED', coldCoffee)}
            </div>

            {/* Right Column: Tea & Patisserie */}
            <div>
              {/* Optional Top Right Badge */}
              <div className="flex justify-end mb-4">
                <span className="text-[9px] tracking-[0.16em] uppercase font-semibold text-[#7A6D63]">
                  DIRECT TRADE • ORGANIC DAIRY
                </span>
              </div>
              {renderCategory('Tea & Other', 'BOTANICAL', teaAndOther)}
              {renderCategory('Pâtisserie', 'BAKED AT DAWN', patisserie)}
            </div>

          </div>

          {/* Seasonal Guest Feature Strip */}
          <div className="mt-12 bg-[#EDE5D8]/80 border border-[#DCD1C2] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E0D5C5] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <Sparkles className="w-4 h-4 text-[#4A382D]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-medium text-[#2A1D15]">
                  Seasonal Guest Lot: Colombia El Paraíso
                </div>
                <div className="text-[11px] text-[#6E6056] mt-0.5">
                  Anaerobic double fermentation with notes of strawberry jam and pink guava.
                </div>
              </div>
            </div>

            <button className="shrink-0 px-4 py-1.5 rounded border border-[#B3A394] hover:bg-[#E0D5C5] text-[#2A1D15] text-[10px] tracking-[0.14em] font-semibold uppercase transition-colors">
              +€0.80 UPGRADE
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
