'use client';

import React from 'react';
import { brandBenefits } from '@/data/benefits';
import { ShieldCheck, Truck, CreditCard, HeartHandshake } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#0F384A]" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-[#0F384A]" />;
      case 'credit-card':
        return <CreditCard className="w-5 h-5 text-[#0F384A]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#0F384A]" />;
    }
  };

  return (
    <section
      aria-label="Benefícios e diferenciais DAVIA"
      className="py-10 sm:py-12 bg-[#F4EFE6] border-y border-[#E8DFD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brandBenefits.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-3 rounded-xl transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8DFD3] flex items-center justify-center flex-shrink-0 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-sm sm:text-base font-medium text-[#0F384A]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6C7A82] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
