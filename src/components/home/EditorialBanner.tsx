'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const EditorialBanner: React.FC = () => {
  return (
    <section
      aria-label="Manifesto editorial DAVIA"
      className="py-8 sm:py-12 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#0F384A] text-white border border-[#0A2834] shadow-xl">
          {/* Subtle brand watermarked symbol in background */}
          <div
            aria-hidden="true"
            className="absolute -right-12 -bottom-16 w-80 h-80 opacity-5 pointer-events-none"
          >
            <Image
              src="/brand/symbol-champagne.png"
              alt=""
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Editorial Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-5 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-widest uppercase text-[#D4B48B] border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#D4B48B]" />
                <span>Manifesto DAVIA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#FAF7F2] leading-tight">
                Seu ritual. Sua beleza.
              </h2>

              <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
                Acreditamos no poder transformador do autocuidado diário. Texturas sensoriais, pigmentos puros e formulações de alta performance criadas para harmonizar com a sua essência.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#skincare"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4B48B] hover:bg-[#EBD8BE] text-[#0A2834] text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shadow-xs group"
                >
                  <span>Conhecer o ritual</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-[#FAF7F2]/60">
                  Fórmulas limpas e ingredientes botânicos
                </span>
              </div>
            </div>

            {/* Editorial Image */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/banner-ritual.jpg"
                  alt="Ritual de beleza DAVIA com creme restaurador e mármore petroleum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F384A] via-transparent to-transparent opacity-60 lg:opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
