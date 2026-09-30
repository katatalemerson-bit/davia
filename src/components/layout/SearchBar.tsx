'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  isMobileFull?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = '',
  isMobileFull = false,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const trendingSearches = [
    'Sérum Glow Infusion',
    'Batom Velvet Matte',
    'Base Sérum FPS 30',
    'Paleta Neutros Essenciais',
    'Máscara de Cílios',
    'Óleo Labial Reparador',
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isMobileFull ? 'max-w-none' : ''} ${className}`}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}
        className="relative flex items-center w-full"
      >
        <label htmlFor="search-input" className="sr-only">
          Buscar produtos, categorias ou marcas
        </label>
        <div className="relative w-full">
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="O que você está procurando hoje?"
            autoComplete="off"
            className="w-full h-11 pl-11 pr-10 text-sm bg-white border border-[#E4DAC4] rounded-full text-[#111618] placeholder-[#8A959B] transition-all duration-200 focus:outline-none focus:border-[#0F384A] focus:ring-1 focus:ring-[#0F384A] shadow-xs"
          />

          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F384A]/70 pointer-events-none"
            aria-hidden="true"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#8A959B] hover:text-[#0F384A] rounded-full transition-colors"
              aria-label="Limpar busca"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </form>

      {/* Search dropdown suggestions (interactive mock for UX validation) */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#E8DFD3] rounded-2xl shadow-xl z-50 p-4 transition-all">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F384A] uppercase tracking-wider mb-2.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4B48B]" />
            <span>Termos mais buscados</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  setIsOpen(false);
                }}
                className="text-xs px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[#0F384A] border border-[#E8DFD3] hover:border-[#D4B48B] hover:bg-[#F5EFEB] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#E8DFD3]/60 flex items-center justify-between text-[11px] text-[#6C7A82]">
            <span>Pressione Enter para ver todos os resultados</span>
            <span className="text-[#D4B48B] font-medium">DAVIA Beauty Search</span>
          </div>
        </div>
      )}
    </div>
  );
};
