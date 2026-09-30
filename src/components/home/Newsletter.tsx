'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      aria-label="Inscrição na newsletter DAVIA"
      className="py-14 sm:py-20 bg-[#FAF7F2]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#B99364]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4B48B]" />
          <span>Comunidade Exclusiva</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#0F384A]">
          Entre para o universo DAVIA
        </h2>

        {/* Short text */}
        <p className="text-sm sm:text-base text-[#6C7A82] max-w-lg mx-auto leading-relaxed">
          Receba em primeira mão convites para novos lançamentos, tendências de maquiagem editorial e benefícios pensados para a sua rotina.
        </p>

        {/* Form or Success State */}
        {isSubscribed ? (
          <div
            role="status"
            className="p-5 rounded-2xl bg-white border border-[#D4B48B]/50 shadow-xs max-w-md mx-auto flex items-center justify-center gap-3 text-[#0F384A]"
          >
            <CheckCircle className="w-5 h-5 text-[#1DBE4C] flex-shrink-0" />
            <p className="text-sm font-medium">
              Bem-vinda(o) à DAVIA! Enviamos uma confirmação para seu e-mail.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 pt-2"
          >
            <div className="relative flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Seu melhor e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail"
                className="w-full h-12 pl-11 pr-4 text-sm bg-white border border-[#E8DFD3] rounded-full text-[#111618] placeholder-[#8A959B] focus:outline-none focus:border-[#0F384A] focus:ring-1 focus:ring-[#0F384A] transition-all shadow-xs"
              />
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C7A82] pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <button
              type="submit"
              className="h-12 px-7 bg-[#0F384A] hover:bg-[#164E66] text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F384A]/30 flex-shrink-0"
            >
              Cadastrar
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#8A959B]">
          Sem spam. Você poderá cancelar sua inscrição a qualquer momento.
        </p>
      </div>
    </section>
  );
};
