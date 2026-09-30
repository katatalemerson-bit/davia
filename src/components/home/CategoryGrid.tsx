'use client';

import React from 'react';
import { visualCategories } from '@/data/categories';
import { CategoryCard } from './CategoryCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const CategoryGrid: React.FC = () => {
  return (
    <section
      id="categorias"
      aria-label="Categorias em destaque"
      className="py-12 sm:py-16 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Explorar por Categoria"
          title="Encontre o que você procura"
          subtitle="Navegue pelas principais categorias e descubra fórmulas formuladas para realçar sua rotina diária."
          actionText="Ver catálogo completo"
          actionHref="#catalogo"
        />

        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {visualCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
