import { NavigationItem } from '@/types';

/**
 * TopBar message (Provisional / Placeholder)
 * Fácil substituição quando as regras comerciais forem definidas
 */
export const topBarMessage = {
  text: 'Frete grátis para todo o Brasil em compras selecionadas*',
  highlightText: '5% OFF no Pix',
  secondaryText: 'Até 6x sem juros no cartão',
  placeholderDisclaimer: '*Regra comercial provisória / MOCK para validação de layout',
};

/**
 * Categorias principais de navegação (Desktop e Mobile)
 * Centralizadas para fácil alteração
 */
export const mainNavigation: NavigationItem[] = [
  {
    label: 'Novidades',
    href: '#novidades',
    badge: 'Novo',
    subcategories: [
      { label: 'Todos os Lançamentos', href: '#novidades' },
      { label: 'Linha Glow Infusion', href: '#novidades' },
      { label: 'Coleção Outono / Inverno', href: '#novidades' },
      { label: 'Edições Limitadas', href: '#novidades' },
    ],
  },
  {
    label: 'Maquiagem',
    href: '#categorias',
    subcategories: [
      { label: 'Bases & Corretivos', href: '#categorias' },
      { label: 'Pós & Iluminadores', href: '#categorias' },
      { label: 'Blushes & Contornos', href: '#categorias' },
      { label: 'Batom & Gloss', href: '#categorias' },
      { label: 'Máscaras & Delineadores', href: '#categorias' },
    ],
  },
  {
    label: 'Rosto',
    href: '#categorias',
    subcategories: [
      { label: 'Bases Líquidas', href: '#categorias' },
      { label: 'Corretivos Alta Cobertura', href: '#categorias' },
      { label: 'Pó Compacto Translúcido', href: '#categorias' },
      { label: 'Primers Fixadores', href: '#categorias' },
    ],
  },
  {
    label: 'Olhos',
    href: '#categorias',
    subcategories: [
      { label: 'Paletas de Sombras', href: '#categorias' },
      { label: 'Máscaras de Cílios', href: '#categorias' },
      { label: 'Delineadores de Precisão', href: '#categorias' },
      { label: 'Lápis e Sobrancelhas', href: '#categorias' },
    ],
  },
  {
    label: 'Lábios',
    href: '#categorias',
    subcategories: [
      { label: 'Batons Velvet Matte', href: '#categorias' },
      { label: 'Lip Oils Hidratantes', href: '#categorias' },
      { label: 'Gloss Labial Brilho Vinil', href: '#categorias' },
      { label: 'Lápis de Contorno Labial', href: '#categorias' },
    ],
  },
  {
    label: 'Skincare',
    href: '#categorias',
    subcategories: [
      { label: 'Séruns Concentrados', href: '#categorias' },
      { label: 'Hidratantes Faciais', href: '#categorias' },
      { label: 'Limpeza & Esfoliação', href: '#categorias' },
      { label: 'Brumas & Tônicos', href: '#categorias' },
    ],
  },
  {
    label: 'Acessórios',
    href: '#categorias',
    subcategories: [
      { label: 'Kits de Pincéis Profissionais', href: '#categorias' },
      { label: 'Esponjas Beauty Blend', href: '#categorias' },
      { label: 'Nécessaires & Estojos', href: '#categorias' },
      { label: 'Espelhos com Led', href: '#categorias' },
    ],
  },
  {
    label: 'Marcas',
    href: '#marcas',
    subcategories: [
      { label: 'DAVIA Signature', href: '#marcas' },
      { label: 'DAVIA Studio', href: '#marcas' },
      { label: 'DAVIA Pure Botanicals', href: '#marcas' },
      { label: 'Linhas Exclusivas', href: '#marcas' },
    ],
  },
  {
    label: 'Ofertas',
    href: '#ofertas',
    highlight: true,
    subcategories: [
      { label: 'Seleção da Semana', href: '#ofertas' },
      { label: 'Kits com Desconto', href: '#ofertas' },
      { label: 'Últimas Unidades', href: '#ofertas' },
    ],
  },
];
