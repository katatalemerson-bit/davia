'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartButtonProps {
  count?: number;
  onClick?: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({
  count = 2, // Mocked initial count to show visual feedback
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Sacola de compras, ${count} itens`}
      className="relative flex items-center justify-center p-2 text-[#0F384A] hover:text-[#D4B48B] transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F384A]/20"
    >
      <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-white bg-[#0F384A] rounded-full border-2 border-[#FAF7F2]"
        >
          {count}
        </span>
      )}
    </button>
  );
};
