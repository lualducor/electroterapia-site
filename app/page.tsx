import type { Metadata } from 'next';
import Link from 'next/link';
import { localBusinessSchema, websiteSchema, personSchema } from '@/lib/schema';
import { homepageFaqs } from '@/lib/faqs';
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFaqs.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answer,
              },
            })),
          }),
        }}
      />
      <main>
        <Hero />
        <TrustBlock />
        <Experience />
        <Specialties />
        {/* About the Doctor */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 dark:bg-gray-800" aria-labelledby="about-heading">
          <div data-reveal className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Médico especialista
              </p>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
              >
                Acerca del Dr. Rafael Cortés
              </h2>
            </div>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                El <strong className="text-slate-800 dark:text-slate-200">Dr. Rafael Cortés</strong> es Médico Cirujano
                egresado de la <strong className="text-slate-800 dark:text-slate-200">Universidad Nacional de Colombia</strong>,
                con más de <strong className="text-slate-800 dark:text-slate-200">30 años de experiencia clínica</strong> en
                electroterapia, medicina física y rehabilitación.
              </p>
              <p>
                Su consulta está especializada en el manejo del dolor crónico y agudo, la rehabilitación
                músculo-esquelética y la recuperación funcional de pacientes que no han encontrado alivio suficiente
                con otros tratamientos. Aplica corrientes de baja y media frecuencia con protocolos personalizados
                y respaldados por evidencia científica.
              </p>
              <p>
                El consultorio está ubicado en el sector de{' '}
                <strong className="text-slate-800 dark:text-slate-200">Teusaquillo / Galerías</strong>, en el centro
                de Bogotá. La atención es exclusivamente particular (medicina privada) y solo con cita previa,
                lo que permite dedicar tiempo completo a cada paciente desde la primera valoración.
              </p>
              {/* TODO: Add tarjeta profesional / RETHUS number once available */}
            </div>
          </div>
        </section>

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
