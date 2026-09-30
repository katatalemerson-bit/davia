'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      href={`#${category.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden hover:border-[#0F384A]/40 transition-all duration-300 hover:shadow-md"
    >
      {/* Category Image Container */}
      <div className="relative aspect-square w-full bg-[#F4EFE6] overflow-hidden">
        <Image
          src={category.image}
          alt={`Categoria de ${category.name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
        />

        {/* Subtle gradient vignette at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating action icon */}
        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0F384A] opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 shadow-xs">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Category Info */}
      <div className="p-3.5 sm:p-4 text-center flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="font-serif text-sm sm:text-base font-medium text-[#0F384A] group-hover:text-[#D4B48B] transition-colors">
            {category.name}
          </h3>
          {category.itemCount && (
            <p className="text-[11px] text-[#6C7A82] mt-0.5">
              {category.itemCount}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
