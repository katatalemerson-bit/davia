'use client';

import React from 'react';
import { topBarMessage } from '@/data/navigation';
import { Sparkles } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside
      aria-label="Avisos e promoções"
      className="bg-[#0A2834] text-[#F5EFEB] text-xs py-2 px-4 border-b border-[#0F384A]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Placeholder disclaimer badge for development clarity */}
        <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] text-[#D4B48B]/90 tracking-wider uppercase font-medium">
          <Sparkles className="w-3 h-3 text-[#D4B48B]" aria-hidden="true" />
          <span>DAVIA Beauty Official</span>
        </span>

        {/* Central message */}
        <div className="flex-1 text-center font-normal tracking-wide text-[11.5px] sm:text-xs">
          <span>{topBarMessage.text}</span>
          <span className="mx-2 text-[#D4B48B] font-semibold">|</span>
          <span className="text-[#D4B48B] font-medium">{topBarMessage.highlightText}</span>
          <span className="hidden sm:inline">
            <span className="mx-2 text-[#D4B48B] font-semibold">|</span>
            <span>{topBarMessage.secondaryText}</span>
          </span>
        </div>

        {/* Commercial rule placeholder indicator */}
        <div className="hidden lg:flex items-center gap-3 text-[11px] text-[#F5EFEB]/70">
          <span className="hover:text-[#D4B48B] transition-colors cursor-pointer" title="Regra comercial em definição">
            Regras de Frete
          </span>
          <span className="text-white/20">|</span>
          <span className="hover:text-[#D4B48B] transition-colors cursor-pointer">
            Ajuda
          </span>
        </div>
      </div>
    </aside>
  );
};
