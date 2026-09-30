'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mainNavigation } from '@/data/navigation';
import { X, ChevronDown, User, Heart, HelpCircle, Sparkles } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (label: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de Navegação Mobile"
      className="fixed inset-0 z-50 flex md:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A2834]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="relative w-[85%] max-w-[340px] bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-left duration-300">
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image
                src="/brand/symbol-petroleum.png"
                alt="Símbolo DAVIA"
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
            <span className="font-serif text-lg font-semibold tracking-wider text-[#0F384A]">
              DAVIA
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 text-[#6C7A82] hover:text-[#0F384A] rounded-full hover:bg-[#FAF7F2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Account Header inside Drawer */}
        <div className="p-4 bg-[#F4EFE6] border-b border-[#E8DFD3]">
          <Link
            href="#conta"
            onClick={onClose}
            className="flex items-center gap-3 text-sm text-[#0F384A] font-medium"
          >
            <div className="w-9 h-9 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center text-[#0F384A]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#6C7A82]">Bem-vinda(o) à DAVIA</p>
              <p className="font-semibold text-sm hover:text-[#D4B48B] transition-colors">
                Entre ou Cadastre-se
              </p>
            </div>
          </Link>
        </div>

        {/* Categories List */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold text-[#6C7A82] uppercase tracking-wider">
            Categorias
          </div>
          {mainNavigation.map((item) => {
            const hasSub = item.subcategories && item.subcategories.length > 0;
            const isExpanded = !!expandedCategories[item.label];

            return (
              <div key={item.label} className="border-b border-[#E8DFD3]/40 last:border-b-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg transition-colors ${
                      item.highlight
                        ? 'text-[#B85D3B] font-semibold'
                        : 'text-[#111618] hover:text-[#0F384A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 text-[10px] font-semibold uppercase px-1.5 py-0.5 bg-[#0F384A] text-[#D4B48B] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {hasSub && (
                    <button
                      type="button"
                      onClick={() => toggleCategory(item.label)}
                      aria-label={`Expandir ${item.label}`}
                      className="p-3 text-[#6C7A82] hover:text-[#0F384A]"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#0F384A]' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Subcategories Accordion */}
                {hasSub && isExpanded && (
                  <div className="pl-4 pr-2 pb-2 space-y-1">
                    {item.subcategories?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={onClose}
                        className="block py-1.5 px-3 text-xs text-[#6C7A82] hover:text-[#0F384A] hover:bg-white rounded-md transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer Links */}
        <div className="p-4 border-t border-[#E8DFD3] bg-white space-y-3">
          <Link
            href="#favoritos"
            onClick={onClose}
            className="flex items-center gap-2.5 text-xs text-[#111618] hover:text-[#0F384A]"
          >
            <Heart className="w-4 h-4 text-[#D4B48B]" />
            <span>Meus Favoritos</span>
          </Link>
          <Link
            href="#ajuda"
            onClick={onClose}
            className="flex items-center gap-2.5 text-xs text-[#111618] hover:text-[#0F384A]"
          >
            <HelpCircle className="w-4 h-4 text-[#6C7A82]" />
            <span>Central de Atendimento</span>
          </Link>
          <div className="pt-2 text-[11px] text-[#6C7A82] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4B48B]" />
            <span>DAVIA E-commerce — Versão M01</span>
          </div>
        </div>
      </div>
    </div>
  );
};
