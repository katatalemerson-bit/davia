import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DAVIA | Beleza Contemporânea & E-commerce',
  description:
    'Descubra maquiagem, skincare e cosméticos sofisticados. Experiência premium acessível em beleza com formulações excepcionais e estética atemporal.',
  keywords: [
    'DAVIA',
    'maquiagem',
    'skincare',
    'cosméticos',
    'beleza contemporânea',
    'batom',
    'sérum',
    'produtos de beleza',
  ],
  authors: [{ name: 'DAVIA' }],
  icons: {
    icon: '/brand/symbol-petroleum.png',
    apple: '/brand/symbol-petroleum.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F384A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#111618] font-sans antialiased selection:bg-[#D4B48B]/30 selection:text-[#0F384A] flex flex-col">
        {children}
      </body>
    </html>
  );
}
