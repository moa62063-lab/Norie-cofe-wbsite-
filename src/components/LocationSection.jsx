import React from 'react';
import { MapPin, Clock, Mail, Compass, Coffee } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#7A6D63] font-medium mb-2">
              SALON & ATELIER
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#2A1D15] tracking-tight mb-4">
              Come Find Us
            </h2>

            <p className="text-[#65584F] text-base leading-relaxed mb-10 max-w-lg">
              We look forward to welcoming you for your morning cup, an afternoon reading session, or beans to take home.
            </p>

            {/* 2x2 Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#EAE2D5] pt-8">
              
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-semibold text-[#2A1D15] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#5A473A]" />
                  ADDRESS
                </div>
                <div className="text-xs sm:text-[13px] text-[#65584F] space-y-0.5">
                  <p>14 Rue des Beaux-Arts</p>
                  <p>75006 Paris, France</p>
                  <p className="text-[#88786D] text-[11px] mt-1">Métro: Saint-Germain-des-Prés</p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-semibold text-[#2A1D15] mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#5A473A]" />
                  HOURS OF SERVICE
                </div>
                <div className="text-xs sm:text-[13px] text-[#65584F] space-y-0.5">
                  <p>Mon – Fri: 07:30 – 19:00</p>
                  <p>Sat – Sun: 08:30 – 20:00</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-semibold text-[#2A1D15] mb-2">
                  <Mail className="w-3.5 h-3.5 text-[#5A473A]" />
                  CONTACT
                </div>
                <div className="text-xs sm:text-[13px] text-[#65584F] space-y-0.5">
                  <p>+33 (0)1 42 68 55 00</p>
                  <p>bonjour@noirecafe.com</p>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-semibold text-[#2A1D15] mb-2">
                  <Compass className="w-3.5 h-3.5 text-[#5A473A]" />
                  FOLLOW US
                </div>
                <div className="text-xs sm:text-[13px] text-[#65584F] space-y-0.5">
                  <p>Instagram · Facebook · TikTok</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=14+Rue+des+Beaux-Arts+75006+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#332218] hover:bg-[#20150F] text-[#FAF7F2] px-7 py-3.5 rounded text-xs font-medium tracking-[0.16em] uppercase inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow"
              >
                Get Directions <Compass className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Paris Map Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-[#E0D5C6] shadow-xl relative aspect-[4/3] bg-[#F2ECE1]">
              <img
                src="/images/paris-map.jpg"
                alt="Map of Paris 6th Arrondissement Saint-Germain-des-Prés"
                className="w-full h-full object-cover"
              />

              {/* Centered Map Information Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-md border border-[#E5DDD1] rounded-2xl p-5 shadow-2xl max-w-sm w-full mx-auto text-center transform hover:scale-[1.02] transition-transform">
                  
                  {/* Shop Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#332218] flex items-center justify-center mx-auto mb-3 shadow">
                    <Coffee className="w-5 h-5 text-[#FAF7F2]" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#2A1D15]">
                    NOIRÉ Café & Roastery
                  </h3>

                  <p className="text-xs text-[#6A5A4F] mt-1 mb-4">
                    14 Rue des Beaux-Arts, 6th Arrondissement
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#EAE2D5]">
                    <span className="bg-[#EFE7DC] text-[#332218] text-[10px] tracking-[0.14em] font-semibold px-2.5 py-1 rounded-full uppercase">
                      STATUS: OPEN NOW
                    </span>
                    <span className="text-[10px] tracking-wide text-[#7A6D63]">
                      Closes 19:00
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
