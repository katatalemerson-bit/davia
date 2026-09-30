'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TopBar } from './TopBar';
import { SearchBar } from './SearchBar';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { CartButton } from './CartButton';
import { Menu, User, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [favoritesCount] = useState(3); // Mocked favorites count for visual validation
  const [cartCount] = useState(2); // Mocked cart count for visual validation

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Header Bar */}
      <div className="border-b border-[#E8DFD3]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6 lg:gap-8">
            {/* Mobile Hamburger Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menu de categorias"
                className="p-2 text-[#0F384A] hover:text-[#D4B48B] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F384A]/20"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo DAVIA (Using extracted approved identity asset) */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="relative block h-7 sm:h-9 w-28 sm:w-36 focus:outline-none focus:ring-2 focus:ring-[#0F384A]/20 rounded-sm"
                aria-label="DAVIA - Página Inicial"
              >
                <Image
                  src="/brand/logo-petroleum.png"
                  alt="DAVIA - E-commerce de Maquiagem & Cosméticos"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain object-left"
                />
              </Link>
            </div>

            {/* Broad Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-auto px-2">
              <SearchBar />
            </div>

            {/* Actions: Account, Wishlist, Cart */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Account (Desktop) */}
              <Link
                href="#conta"
                className="hidden lg:flex items-center gap-2 p-2 text-xs text-[#0F384A] hover:text-[#D4B48B] transition-colors rounded-lg group"
                aria-label="Minha Conta"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center group-hover:border-[#D4B48B] transition-colors">
                  <User className="w-4 h-4 text-[#0F384A]" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[11px] text-[#6C7A82]">Olá, visitante</span>
                  <span className="font-semibold text-xs text-[#0F384A]">Minha Conta</span>
                </div>
              </Link>

              {/* Wishlist */}
              <Link
                href="#favoritos"
                className="relative p-2 text-[#0F384A] hover:text-[#D4B48B] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F384A]/20"
                aria-label={`Meus Favoritos, ${favoritesCount} itens salvos`}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                {favoritesCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 flex items-center justify-center text-[10px] font-bold text-white bg-[#D4B48B] rounded-full border-2 border-white">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Button */}
              <CartButton count={cartCount} />
            </div>
          </div>

          {/* Mobile Dedicated Search Bar (Visible on mobile screens) */}
          <div className="pb-3 md:hidden">
            <SearchBar isMobileFull />
          </div>
        </div>
      </div>

      {/* 3. Category Navigation (Desktop) */}
      <DesktopNav />

      {/* 4. Mobile Slide-Over Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
