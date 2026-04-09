import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/lib/business';
import { serviceFaqs as faqs } from '@/lib/faqs';
import TrustBlock from '@/components/sections/TrustBlock';

export const metadata: Metadata = {
  title: { absolute: 'Electroterapia en Bogotá | Tratamiento del dolor – Dr. Rafael Cortés' },
  description:
    'Consulta médica en electroterapia en Bogotá para el manejo del dolor lumbar, cervical, muscular y rehabilitación funcional. Agenda tu cita con el Dr. Rafael Cortés.',
  alternates: {
    canonical: '/electroterapia-bogota',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const conditions = [
  {
    name: 'Dolor lumbar (lumbalgia)',
    description: 'Alivio de tensiones, hernias y contracturas en la zona baja de la espalda.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: 'Dolor cervical',
    description: 'Reducción de tensión en cuello y hombros para recuperar la movilidad.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    name: 'Ciática',
    description: 'Tratamiento de la inflamación del nervio ciático para eliminar el dolor irradiado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: 'Tendinitis',
    description: 'Manejo de inflamaciones en tendones por sobreesfuerzo o lesiones deportivas.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    name: 'Lesiones musculares',
    description: 'Aceleración de la recuperación en desgarros, contracturas y distensiones.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    name: 'Recuperación postoperatoria',
    description: 'Rehabilitación funcional tras cirugías ortopédicas o procedimientos médicos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    name: 'Parálisis facial',
    description: 'Estimulación neuromuscular para recuperar la simetría y función facial.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    name: 'Síndrome del túnel carpiano',
    description: 'Control del dolor y mejora de la función nerviosa en la muñeca y mano.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m0 0 3.096-3.096m-3.096 3.096 3.096 3.096" />
      </svg>
    ),
  },
];


const steps = [
  {
    number: '01',
    title: 'Valoración Inicial',
    description:
      'Evaluación médica completa para diagnosticar el origen del dolor, revisar su historial y descartar contraindicaciones antes de iniciar cualquier tratamiento.',
  },
  {
    number: '02',
    title: 'Plan de Tratamiento',
    description:
      'Diseño de un ciclo de sesiones personalizado, ajustando frecuencias, intensidades y modalidades de electroterapia según su condición específica.',
  },
  {
    number: '03',
    title: 'Seguimiento Continuo',
    description:
      'Control constante de la evolución para ajustar el tratamiento en tiempo real y garantizar que los objetivos de recuperación se cumplan de forma segura.',
  },
];

// ─── WhatsApp CTA Button ─────────────────────────────────────────────────────

function WhatsAppCTA({
  href,
  label,
  size = 'md',
}: {
  href: string;
  label: string;
  size?: 'md' | 'lg';
}) {
  const base =
    'inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2';
  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes[size]}`}>
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      {label}
    </a>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ElectroterapiaBogota() {
  return (
    <>
      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ question, answer }) => ({
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
      {/* Physician schema with geo for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Physician',
            '@id': `${business.domain}/electroterapia-bogota`,
            name: business.name,
            url: `${business.domain}/electroterapia-bogota`,
            telephone: business.phone.replace(/\s/g, ''),
            address: {
              '@type': 'PostalAddress',
              streetAddress: business.address,
              addressLocality: 'Bogotá',
              postalCode: business.postalCode,
              addressCountry: 'CO',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 4.6392,
              longitude: -74.0782,
            },
            medicalSpecialty: 'PhysicalMedicine',
            areaServed: { '@type': 'City', name: 'Bogotá' },
          }),
        }}
      />
      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: business.domain,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Electroterapia en Bogotá',
                item: `${business.domain}/electroterapia-bogota`,
              },
            ],
          }),
        }}
      />

      <div className="flex flex-col w-full">

        {/* ── A. HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-800 text-white"
          aria-labelledby="hero-heading"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          {/* Radial glow */}
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #0891B2 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-cyan-300/70">
                  <li><Link href="/" className="hover:text-cyan-200 transition-colors">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-cyan-200 font-medium">Electroterapia en Bogotá</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm text-cyan-200 font-medium mb-6">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Médico Cirujano · Universidad Nacional de Colombia
              </div>

              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              >
                Especialista en Electroterapia{' '}
                <br className="hidden md:block" />
                <span className="text-cyan-400">Tratamiento del Dolor en Bogotá</span>
              </h1>
              <p className="text-lg md:text-xl text-cyan-50 max-w-2xl mb-8 leading-relaxed">
                Manejo clínico del dolor crónico y rehabilitación funcional con el{' '}
                <strong>Dr. Rafael Cortés</strong>. Médico Cirujano (UNAL) con atención
                personalizada en <strong>Teusaquillo / Galerías</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <WhatsAppCTA
                  href={business.whatsappBooking}
                  label="Solicitar Valoración Médica"
                  size="lg"
                />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                  {business.phone}
                </a>
              </div>

              {/* Micro trust signals */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Atención con cita previa
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Tratamiento no invasivo
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Respaldado por evidencia científica
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:flex justify-end">
              <div className="relative w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/doctor_main.webp"
                  alt="Dr. Rafael Cortés, especialista en electroterapia en Bogotá"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Card overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Dr. Rafael Cortés</p>
                  <p className="text-cyan-300 text-sm">Médico Cirujano – UNAL · +30 años de experiencia</p>
                </div>
              </div>
              {/* Floating stat badge */}
              <div className="absolute -left-6 top-12 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl">
                <p className="text-3xl font-extrabold text-cyan-600">+30</p>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">años de<br />experiencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
        <TrustBlock />

        {/* ── B. INTRO / VALUE PROP ────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900" aria-label="Propuesta de valor">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Consulta especializada en Bogotá
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Recupere su movilidad y diga adiós al dolor crónico
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Esta consulta está diseñada para pacientes con dolor persistente, limitaciones funcionales o en proceso de
              rehabilitación que no han encontrado alivio suficiente con otros tratamientos. Combinamos tecnología médica
              moderna con décadas de experiencia clínica para ofrecer tratamientos{' '}
              <strong className="text-slate-800 dark:text-slate-200">no invasivos, seguros y personalizados</strong>.
            </p>
          </div>
        </section>

        {/* ── C. CONDITIONS TREATED ────────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-slate-50 dark:bg-gray-800"
          aria-labelledby="conditions-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Patologías tratadas
              </p>
              <h2
                id="conditions-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
              >
                Afecciones que tratamos con electroterapia en Bogotá
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Soluciones clínicas para patologías del sistema músculo-esquelético y nervioso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {conditions.map((c) => (
                <article
                  key={c.name}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-slate-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200">
                    {c.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">{c.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{c.description}</p>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <WhatsAppCTA href={business.whatsappInfo} label="Consulte por su condición específica" size="md" />
            </div>
          </div>
        </section>

        {/* ── D. WHAT IS ELECTROTHERAPY ────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900"
          aria-labelledby="what-heading"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-2xl order-last md:order-first">
              <Image
                src="/electro1.webp"
                alt="Paciente recibiendo tratamiento de electroterapia en Bogotá"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-transparent" />
            </div>

            <div>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                ¿Cómo funciona?
              </p>
              <h2
                id="what-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
              >
                ¿Qué es la electroterapia y cómo alivia el dolor?
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                <p>
                  La electroterapia es una disciplina de la medicina física que utiliza corrientes eléctricas de baja y
                  media frecuencia para generar efectos{' '}
                  <strong className="text-slate-800 dark:text-slate-200">analgésicos y antiinflamatorios</strong> en los
                  tejidos sin cirugía ni medicamentos.
                </p>
                <p>Entre sus mecanismos clínicamente comprobados se encuentran:</p>
                <ul className="space-y-2.5">
                  {[
                    'Bloquear las señales de dolor que viajan hacia el cerebro.',
                    'Estimular la producción de endorfinas naturales del organismo.',
                    'Mejorar el flujo sanguíneo y la oxigenación en los tejidos afectados.',
                    'Reeducar y fortalecer músculos debilitados tras periodos de inactividad.',
                    'Reducir la inflamación en estructuras articulares y periarticulares.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 pl-4 py-2 text-cyan-800 dark:text-cyan-200 text-sm font-medium rounded-r-lg">
                  Es un tratamiento respaldado por evidencia científica, seguro cuando es supervisado por un médico
                  con formación y experiencia clínica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── E. HOW TREATMENT WORKS ───────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-800 dark:to-gray-900"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Proceso de atención
              </p>
              <h2
                id="process-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
              >
                Así funciona su tratamiento
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent dark:via-cyan-700 pointer-events-none" aria-hidden="true" />

              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-black text-cyan-100 dark:text-cyan-900/60 leading-none select-none" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── F. TRUST SECTION ─────────────────────────────────────────────── */}
        {/* Reused TrustBlock already above the fold; here we add an E-A-T detail block */}
        <section
          className="py-16 px-6 md:px-20 bg-cyan-600 text-white"
          aria-label="Credenciales del médico"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '+30 años', label: 'de experiencia clínica en electroterapia' },
              { stat: 'UNAL', label: 'Médico Cirujano – Universidad Nacional de Colombia' },
              { stat: 'Cita previa', label: 'Atención personalizada y dedicada a cada paciente' },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex flex-col items-center gap-2">
                <p className="text-4xl font-extrabold tracking-tight">{stat}</p>
                <p className="text-cyan-100 text-sm leading-relaxed max-w-[220px]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── G. LOCAL SECTION ─────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900"
          aria-labelledby="local-heading"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Ubicación
              </p>
              <h2
                id="local-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6"
              >
                Atención médica en Teusaquillo / Galerías, Bogotá
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Nuestro consultorio está ubicado en una zona central y accesible de Bogotá, en el sector de{' '}
                <strong className="text-slate-800 dark:text-slate-200">Teusaquillo / Galerías</strong>, facilitando el
                acceso desde distintas localidades de la ciudad.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: 'Dirección',
                    value: `${business.address}, ${business.city}`,
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Horario',
                    value: business.hours,
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Teléfono / WhatsApp',
                    value: business.phone,
                    href: `tel:${business.phone.replace(/\s/g, '')}`,
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                      </svg>
                    ),
                  },
                ].map(({ label, value, icon, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-gray-700 h-[380px]">
                <iframe
                  title="Ubicación Dr. Rafael Cortés – Teusaquillo / Galerías, Bogotá"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.5466674720002!2d-74.07819023949948!3d4.639217834845287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1750536927146!5m2!1sen!2sco"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-200 border border-cyan-200 dark:border-cyan-800 rounded-xl px-4 py-2.5 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Ver ubicación en Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ── H. WHY DR. CORTÉS ────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900"
          aria-labelledby="why-heading"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Su elección importa
              </p>
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
              >
                ¿Por qué elegir al Dr. Cortés?
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                Con más de <strong className="text-slate-800 dark:text-slate-200">30 años de experiencia clínica</strong> en
                medicina física y rehabilitación, el Dr. Rafael Cortés ofrece un enfoque médico riguroso que va más
                allá de la aplicación de equipos. Cada tratamiento comienza con una valoración diagnóstica completa
                para identificar el origen del dolor y descartar contraindicaciones.
              </p>
              <p>
                Su formación como <strong className="text-slate-800 dark:text-slate-200">Médico Cirujano de la Universidad
                Nacional de Colombia</strong> —la universidad pública de mayor prestigio del país— respalda un ejercicio
                clínico basado en evidencia científica actualizada. Los tratamientos no son invasivos, no generan
                dependencia y se adaptan a la condición específica de cada paciente.
              </p>
              <p>
                El consultorio está ubicado en el sector de{' '}
                <strong className="text-slate-800 dark:text-slate-200">Teusaquillo / Galerías</strong>, una zona central
                y de fácil acceso en Bogotá. La atención es{' '}
                <strong className="text-slate-800 dark:text-slate-200">exclusivamente particular (medicina privada)</strong>{' '}
                y solo con cita previa, lo que garantiza dedicación completa durante cada consulta.
              </p>
              <p>
                Si usted lleva meses conviviendo con el dolor, ha probado medicamentos sin resultados definitivos o
                está en proceso de rehabilitación tras una cirugía, esta consulta está diseñada para usted.
                La electroterapia no sustituye el diagnóstico médico: lo complementa con tecnología clínica de precisión.
              </p>
            </div>
          </div>
        </section>

        {/* ── I. FAQ ───────────────────────────────────────────────────────── */}
        <section
          className="py-20 px-6 md:px-20 bg-slate-50 dark:bg-gray-800"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Preguntas frecuentes
              </p>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
              >
                Lo que nuestros pacientes preguntan
              </h2>
            </div>

            <div className="space-y-5">
              {faqs.map(({ question, answer }) => (
                <div
                  key={question}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-slate-200 dark:border-gray-700 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      ?
                    </span>
                    {question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-9">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <WhatsAppCTA href={business.whatsappInfo} label="Tengo más preguntas" size="md" />
            </div>
          </div>
        </section>

        {/* ── J. FINAL CTA ──────────────────────────────────────────────────── */}
        <section
          className="py-24 px-6 md:px-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-800 text-white text-center relative overflow-hidden"
          aria-label="Llamada a la acción final"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, #0891B2 0%, transparent 60%), radial-gradient(circle at 70% 50%, #164E63 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
              Comience su recuperación hoy
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              No permita que el dolor dicte su ritmo de vida
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
              Solicite su valoración médica con el Dr. Rafael Cortés. La atención es{' '}
              <strong className="text-white">únicamente con cita previa</strong> para garantizar dedicación completa
              a cada paciente en Bogotá.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <WhatsAppCTA href={business.whatsappBooking} label="Agenda tu cita por WhatsApp" size="lg" />
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                O llama al {business.phone}
              </a>
            </div>
            <p className="text-slate-500 text-xs">
              {business.address} · Teusaquillo / Galerías · Bogotá, Colombia
            </p>
          </div>
        </section>

        {/* Back to home */}
        <div className="bg-white dark:bg-gray-900 py-6 px-6 border-t border-slate-100 dark:border-gray-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
            ← Volver a la página principal
          </Link>
        </div>

      </div>
    </>
  );
}
