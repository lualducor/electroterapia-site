import type { Metadata } from 'next';
import { Figtree, Noto_Sans } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import Footer from '@/components/layout/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://electroterapia.co'),
  title: {
    default: 'Dr. Rafael Cortés – Consulta Médica en Electroterapia | Bogotá',
    template: '%s | Dr. Rafael Cortés – Electroterapia Bogotá',
  },
  description: 'Consulta médica especializada en electroterapia con el Dr. Rafael Cortés. Atención profesional para aliviar el dolor, mejorar la movilidad y recuperar tu bienestar. Bogotá, Colombia.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${figtree.variable} ${notoSans.variable}`}>
      <body className="antialiased">
        <AppShell>
          {children}
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
