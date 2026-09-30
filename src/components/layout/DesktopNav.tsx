'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { ChevronDown } from 'lucide-react';

export const DesktopNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav
      aria-label="Navegação principal por categorias"
      className="hidden md:block border-t border-[#E8DFD3]/70 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-between text-sm tracking-wide font-medium">
          {mainNavigation.map((item) => {
            const hasSubcategories = item.subcategories && item.subcategories.length > 0;
            const isHovered = activeCategory === item.label;

            return (
              <li
                key={item.label}
                className="relative group py-3"
                onMouseEnter={() => setActiveCategory(item.label)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 transition-all duration-200 py-1 border-b-2 ${
                    isHovered
                      ? 'border-[#0F384A] text-[#0F384A]'
                      : item.highlight
                      ? 'border-transparent text-[#B85D3B] hover:text-[#0F384A] font-semibold'
                      : 'border-transparent text-[#111618] hover:text-[#0F384A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.2 bg-[#0F384A] text-[#D4B48B] rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {hasSubcategories && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#6C7A82] transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#0F384A]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Subcategory dropdown preview (Mega Menu ready) */}
                {hasSubcategories && isHovered && (
                  <div
                    role="region"
                    aria-label={`Subcategorias de ${item.label}`}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-1 z-40 min-w-[220px]"
                  >
                    <div className="bg-white border border-[#E8DFD3] rounded-xl shadow-lg p-3 space-y-1">
                      <div className="px-3 py-1 text-[11px] font-semibold tracking-wider text-[#6C7A82] uppercase border-b border-[#FAF7F2]">
                        {item.label}
                      </div>
                      {item.subcategories?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-3 py-2 text-xs text-[#111618] hover:bg-[#FAF7F2] hover:text-[#0F384A] rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
