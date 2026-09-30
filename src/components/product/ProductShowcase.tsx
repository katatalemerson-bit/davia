'use client';

import React, { useRef } from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductShowcaseProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  products: Product[];
  viewMode?: 'grid' | 'carousel';
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  actionText,
  actionHref,
  products,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            actionText={actionText}
            actionHref={actionHref}
            className="mb-0 flex-1"
          />

          {/* Navigation arrow buttons for horizontal scroll controls (visible on tablets/small desktops) */}
          <div className="hidden sm:flex md:hidden lg:flex items-center gap-2 pl-4">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Rolar produtos para a esquerda"
              className="w-9 h-9 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-[#0F384A] hover:bg-[#FAF7F2] hover:border-[#0F384A] transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Rolar produtos para a direita"
              className="w-9 h-9 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-[#0F384A] hover:bg-[#FAF7F2] hover:border-[#0F384A] transition-colors shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop: 4 columns grid. Mobile: Horizontal snap scroll carousel */}
        <div
          ref={scrollContainerRef}
          className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[70vw] sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
