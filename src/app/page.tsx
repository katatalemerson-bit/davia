import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { EditorialBanner } from '@/components/home/EditorialBanner';
import { BenefitsBar } from '@/components/home/BenefitsBar';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/layout/Footer';
import { bestSellerProducts, newArrivalProducts } from '@/data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* 1. Complete Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Visual Categories Section */}
        <CategoryGrid />

        {/* 4. Best Sellers Showcase */}
        <ProductShowcase
          id="queridinhos"
          eyebrow="Mais Vendidos"
          title="Os queridinhos da DAVIA"
          subtitle="Os produtos favoritos das nossas clientes, escolhidos pelo sensorial luxuoso e resultados visíveis."
          actionText="Ver todos os queridinhos"
          actionHref="#mais-vendidos"
          products={bestSellerProducts}
        />

        {/* 5. Editorial Banner Pause */}
        <EditorialBanner />

        {/* 6. New Arrivals Showcase */}
        <ProductShowcase
          id="novidades"
          eyebrow="Lançamentos Recentes"
          title="Novidades"
          subtitle="Conheça as últimas criações do universo DAVIA, com novas texturas e cores para enriquecer sua rotina."
          actionText="Ver todos os lançamentos"
          actionHref="#lancamentos"
          products={newArrivalProducts}
        />

        {/* 7. Benefits Bar */}
        <BenefitsBar />

        {/* 8. Newsletter Section */}
        <Newsletter />
      </main>

      {/* 9. Complete Footer */}
      <Footer />
    </div>
  );
}
