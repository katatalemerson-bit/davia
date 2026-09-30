'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Rodapé institucional DAVIA"
      className="bg-[#0A2834] text-[#FAF7F2] border-t border-[#0F384A]"
    >
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: DAVIA Brand */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="relative block h-8 w-32 focus:outline-none">
              <Image
                src="/brand/logo-champagne.png"
                alt="DAVIA - Cosméticos e Beleza"
                fill
                sizes="128px"
                className="object-contain object-left"
              />
            </Link>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed max-w-sm">
              E-commerce de cosméticos, maquiagem e cuidados essenciais. Beleza contemporânea, fórmulas de alta performance e experiência sofisticada acessível.
            </p>

            {/* Social media links */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-[#D4B48B] mb-2.5">
                Acompanhe a DAVIA
              </p>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="#instagram"
                  aria-label="Instagram da DAVIA"
                  className="w-8 h-8 rounded-full bg-[#0F384A] hover:bg-[#D4B48B] hover:text-[#0A2834] transition-colors flex items-center justify-center text-[#FAF7F2]"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#youtube"
                  aria-label="YouTube da DAVIA"
                  className="w-8 h-8 rounded-full bg-[#0F384A] hover:bg-[#D4B48B] hover:text-[#0A2834] transition-colors flex items-center justify-center text-[#FAF7F2]"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="#pinterest"
                  aria-label="Pinterest da DAVIA"
                  className="w-8 h-8 rounded-full bg-[#0F384A] hover:bg-[#D4B48B] hover:text-[#0A2834] transition-colors flex items-center justify-center text-[#FAF7F2]"
                >
                  <span className="text-xs font-serif font-bold">P</span>
                </a>
                {/* TikTok */}
                <a
                  href="#tiktok"
                  aria-label="TikTok da DAVIA"
                  className="w-8 h-8 rounded-full bg-[#0F384A] hover:bg-[#D4B48B] hover:text-[#0A2834] transition-colors flex items-center justify-center text-[#FAF7F2]"
                >
                  <span className="text-xs font-serif font-bold">T</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Atendimento */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-sm font-medium text-[#D4B48B] tracking-wide">
              Atendimento
            </h3>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75">
              <li>
                <Link href="#ajuda" className="hover:text-[#D4B48B] transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#D4B48B] transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="#whatsapp" className="hover:text-[#D4B48B] transition-colors">
                  WhatsApp Oficial
                </Link>
              </li>
              <li className="pt-1 text-[11px] text-[#FAF7F2]/50">
                Segunda a Sexta
                <br />09:00 às 18:00
              </li>
            </ul>
          </div>

          {/* Column 3: Institucional */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-sm font-medium text-[#D4B48B] tracking-wide">
              Institucional
            </h3>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75">
              <li>
                <Link href="#sobre" className="hover:text-[#D4B48B] transition-colors">
                  Sobre a DAVIA
                </Link>
              </li>
              <li>
                <Link href="#manifesto" className="hover:text-[#D4B48B] transition-colors">
                  Nosso Manifesto
                </Link>
              </li>
              <li>
                <Link href="#formulas" className="hover:text-[#D4B48B] transition-colors">
                  Fórmulas & Cruelty-Free
                </Link>
              </li>
              <li>
                <Link href="#sustentabilidade" className="hover:text-[#D4B48B] transition-colors">
                  Sustentabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Ajuda & Políticas */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-sm font-medium text-[#D4B48B] tracking-wide">
              Ajuda
            </h3>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75">
              <li>
                <Link href="#faq" className="hover:text-[#D4B48B] transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#entregas" className="hover:text-[#D4B48B] transition-colors">
                  Envios & Entregas
                </Link>
              </li>
              <li>
                <Link href="#trocas" className="hover:text-[#D4B48B] transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="#privacidade" className="hover:text-[#D4B48B] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Minha Conta */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-sm font-medium text-[#D4B48B] tracking-wide">
              Minha Conta
            </h3>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/75">
              <li>
                <Link href="#login" className="hover:text-[#D4B48B] transition-colors">
                  Acessar Conta
                </Link>
              </li>
              <li>
                <Link href="#pedidos" className="hover:text-[#D4B48B] transition-colors">
                  Meus Pedidos
                </Link>
              </li>
              <li>
                <Link href="#favoritos" className="hover:text-[#D4B48B] transition-colors">
                  Lista de Desejos
                </Link>
              </li>
              <li>
                <Link href="#enderecos" className="hover:text-[#D4B48B] transition-colors">
                  Endereços Salvos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods and Security Badges */}
        <div className="mt-12 pt-8 border-t border-[#0F384A] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment Methods (Mocked UI) */}
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4B48B]">
              Formas de Pagamento
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-1 rounded bg-[#0F384A] text-[10.5px] font-semibold text-[#FAF7F2] border border-[#164E66]">
                PIX 5% OFF
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0F384A] text-[10.5px] font-semibold text-[#FAF7F2] border border-[#164E66]">
                Cartão de Crédito
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0F384A] text-[10.5px] font-semibold text-[#FAF7F2] border border-[#164E66]">
                Boleto Bancário
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0F384A] text-[10.5px] font-semibold text-[#FAF7F2] border border-[#164E66]">
                Até 6x Sem Juros
              </span>
            </div>
          </div>

          {/* Security & Badges */}
          <div className="space-y-2 text-center md:text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4B48B]">
              Segurança & Certificação
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xs text-[#FAF7F2]/80">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0F384A] rounded border border-[#164E66]">
                <ShieldCheck className="w-4 h-4 text-[#D4B48B]" />
                <span className="text-[11px]">Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0F384A] rounded border border-[#164E66]">
                <Lock className="w-3.5 h-3.5 text-[#D4B48B]" />
                <span className="text-[11px]">SSL 256-Bit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Area */}
        <div className="mt-8 pt-6 border-t border-[#0F384A]/60 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#FAF7F2]/50 text-center md:text-left">
          <p>
            © 2026 DAVIA Cosméticos. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2 text-[#D4B48B]/70">
              [Placeholder: CNPJ e dados cadastrais em definição comercial para o próximo milestone]
            </span>
          </p>

          <div className="flex items-center gap-1 text-[11px] text-[#D4B48B]/80">
            <Sparkles className="w-3 h-3 text-[#D4B48B]" />
            <span>Beauty Store Contemporânea</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
