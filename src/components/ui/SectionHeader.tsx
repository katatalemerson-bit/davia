'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  actionText,
  actionHref,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 ${
        centered ? 'text-center md:text-center justify-center' : ''
      } ${className}`}
    >
      <div className={`space-y-1.5 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
        {eyebrow && (
          <p className="text-xs font-semibold tracking-widest uppercase text-[#B99364]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#0F384A]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#6C7A82] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <div className={`flex-shrink-0 ${centered ? 'mt-2' : ''}`}>
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F384A] hover:text-[#D4B48B] group transition-colors"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};
