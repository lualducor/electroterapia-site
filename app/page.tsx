import type { Metadata } from 'next';
import Link from 'next/link';
import { localBusinessSchema } from '@/lib/schema';
import Hero from '@/components/sections/Hero';
import TrustBlock from '@/components/sections/TrustBlock';
import Experience from '@/components/sections/Experience';
import Specialties from '@/components/sections/Specialties';
import Gallery from '@/components/sections/Gallery';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Electroterapia en Bogotá | Dr. Rafael Cortés – 30 años de experiencia',
  description:
    'Médico especialista en electroterapia para el manejo del dolor y recuperación funcional. Dr. Rafael Cortés, más de 30 años de experiencia en Bogotá. Agenda tu cita.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Electroterapia en Bogotá | Dr. Rafael Cortés – 30 años de experiencia',
    description:
      'Médico especialista en electroterapia para el manejo del dolor y recuperación funcional. Consulta privada en Bogotá. Agenda tu cita.',
    url: 'https://electroterapia.co',
    siteName: 'Dr. Rafael Cortés – Electroterapia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Rafael Cortés – Electroterapia en Bogotá',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electroterapia en Bogotá | Dr. Rafael Cortés – 30 años de experiencia',
    description:
      'Médico especialista en electroterapia para el manejo del dolor y recuperación funcional. Consulta privada en Bogotá.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <main>
        <Hero />
        <TrustBlock />
        <Experience />
        <Specialties />
        <div className="bg-white dark:bg-gray-900 text-center py-4 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/electroterapia-bogota"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            Electroterapia en Bogotá
          </Link>
        </div>
        <Gallery />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
