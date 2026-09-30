'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { Heart, ShoppingBag, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <article
      aria-label={`${product.name} da ${product.brand}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden hover:border-[#0F384A]/30 hover:shadow-md transition-all duration-300"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full bg-[#F4EFE6] overflow-hidden">
        <Link href={`#produto-${product.id}`} className="block w-full h-full relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 280px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-semibold tracking-wider uppercase bg-[#0F384A] text-[#D4B48B] shadow-2xs">
              {product.badge}
            </span>
          )}
          {discountPercent && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#B85D3B] border border-[#E8DFD3]">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Favorite Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0F384A] hover:text-[#B85D3B] transition-colors shadow-xs z-10 focus:outline-none focus:ring-2 focus:ring-[#0F384A]/30"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isFavorite ? 'fill-[#B85D3B] text-[#B85D3B]' : 'text-[#0F384A]'
            }`}
          />
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-1.5">
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] text-[#6C7A82] tracking-wider uppercase">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-sans text-sm font-medium text-[#0F384A] line-clamp-2 leading-snug group-hover:text-[#D4B48B] transition-colors">
            <Link href={`#produto-${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-[#6C7A82] pt-0.5">
            <div className="flex items-center text-[#D4B48B]" aria-label={`Avaliação ${product.rating} de 5 estrelas`}>
              <Star className="w-3.5 h-3.5 fill-current text-[#D4B48B]" />
              <span className="ml-1 text-xs font-semibold text-[#0F384A]">{product.rating}</span>
            </div>
            <span className="text-[#E8DFD3]">·</span>
            <span className="text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-2 border-t border-[#FAF7F2] space-y-2.5">
          <div>
            {product.originalPrice && (
              <span className="block text-xs text-[#8A959B] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <div className="text-base sm:text-lg font-semibold text-[#0F384A] tracking-tight">
              {formatPrice(product.price)}
            </div>
            <p className="text-[11px] text-[#6C7A82]">
              {product.installments}
            </p>
          </div>

          {/* Add to Cart CTA Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Comprar ${product.name}`}
            className={`w-full h-10 px-3 flex items-center justify-center gap-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F384A]/30 ${
              isAdded
                ? 'bg-[#1DBE4C] text-white'
                : 'bg-[#FAF7F2] hover:bg-[#0F384A] text-[#0F384A] hover:text-white border border-[#E8DFD3] hover:border-[#0F384A]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Adicionado à sacola</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Comprar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
