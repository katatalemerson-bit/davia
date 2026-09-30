'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Conteúdo do Hero facilmente editável
 */
export const heroContent = {
  badge: 'Coleção Signature 2026',
  headline: 'Beleza que combina com você.',
  description:
    'Descubra maquiagem, skincare e os produtos que fazem parte da sua rotina diária com sofisticação acessível e sensorial impecável.',
  ctaText: 'Descobrir agora',
  ctaHref: '#queridinhos',
  secondaryCtaText: 'Conhecer Linha Skincare',
  secondaryCtaHref: '#categorias',
  imageSrc: '/images/hero-campaign.jpg',
  imageAlt: 'Campanha de beleza DAVIA com pele radiante e maquiagem natural sofisticada',
};

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Destaque principal"
      className="relative bg-[#F4EFE6] border-b border-[#E8DFD3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E8DFD3] text-xs font-semibold tracking-wider uppercase text-[#0F384A] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4B48B]" />
              <span>{heroContent.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0F384A] leading-[1.15]">
              {heroContent.headline}
            </h1>

            {/* Short text */}
            <p className="text-sm sm:text-base text-[#4F5D65] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {heroContent.description}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href={heroContent.ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0F384A] text-white text-sm font-semibold rounded-full hover:bg-[#164E66] transition-all duration-200 shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#0F384A]/30"
              >
                <span>{heroContent.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={heroContent.secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/70 hover:bg-white text-[#0F384A] text-sm font-semibold rounded-full border border-[#E8DFD3] hover:border-[#D4B48B] transition-all duration-200"
              >
                {heroContent.secondaryCtaText}
              </Link>
            </div>

            {/* Discreet credibility notes */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-5 text-xs text-[#6C7A82]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B48B]" />
                Cruelty-free & Vegano
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B48B]" />
                Fórmulas Dermatológicas
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-2xl overflow-hidden shadow-md border border-[#E8DFD3]/80 bg-[#FAF7F2]">
              <Image
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                className="object-cover object-center hover:scale-103 transition-transform duration-700"
              />

              {/* Floating aesthetic label card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/92 backdrop-blur-xs p-3 sm:p-4 rounded-xl border border-[#E8DFD3] shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F384A] flex items-center justify-center text-white flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[#D4B48B]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4B48B]">
                    Assinatura DAVIA
                  </p>
                  <p className="text-xs font-medium text-[#0F384A]">
                    Acabamento natural e sensorial sublime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
