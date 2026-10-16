import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'The kind of place where one coffee quietly turns into an entire afternoon. The flat white and warm croissant are unmatched.',
      author: 'Sarah M.',
      role: 'PARIS • REGULAR GUEST',
    },
    {
      quote:
        'An oasis of calm in the city. The attention to roast profiles and the tactile beauty of their space is truly inspiring.',
      author: 'Omar K.',
      role: 'LONDON • COFFEE CRITIC',
    },
    {
      quote:
        'Stepping into NOIRÉ feels like rediscovering the lost art of conversation over exceptional espresso.',
      author: 'Lina A.',
      role: 'VIENNA • ARCHITECTURE EDITOR',
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-2">
            PRAISE & REFLECTIONS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] tracking-tight">
            Words From Our Guests
          </h2>
        </div>

        {/* 3 Columns Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col justify-between">
              <div>
                {/* Stylized Quotation Mark */}
                <div className="font-serif text-4xl text-[#B8A89A] leading-none mb-4 select-none">
                  ““
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#2A1D15] leading-relaxed mb-8">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="border-t border-[#EAE2D5] pt-4">
                <div className="font-semibold text-xs tracking-wider uppercase text-[#2A1D15]">
                  {item.author}
                </div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#88786D] mt-0.5">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
