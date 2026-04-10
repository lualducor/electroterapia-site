import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/lib/business';

const conditions = [
  {
    name: 'Ciática',
    description: 'El dolor que baja por la pierna puede tratarse sin cirugía. La electroterapia descomprime el nervio y reduce la inflamación.',
  },
  {
    name: 'Lumbalgia',
    description: 'Dolor crónico o agudo en la zona baja de la espalda. Restablecemos la función muscular y eliminamos la tensión acumulada.',
  },
  {
    name: 'Dolor cervical',
    description: 'Rigidez, dolor y hormigueo en cuello y hombros. Recupere la movilidad con estimulación dirigida.',
  },
  {
    name: 'Tendinitis',
    description: 'Inflamación de tendones por esfuerzo repetitivo o lesión. Aceleramos la recuperación sin inmovilización prolongada.',
  },
  {
    name: 'Lesiones musculares',
    description: 'Desgarros y contracturas tratadas con corrientes que regeneran el tejido y alivian el dolor desde la primera sesión.',
  },
  {
    name: 'Recuperación postoperatoria',
    description: 'Rehabilitación estructurada tras cirugías ortopédicas para recuperar fuerza, movilidad y autonomía.',
  },
];

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div data-reveal className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">Especialidades</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Condiciones que tratamos</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Técnicas no invasivas para aliviar dolores, estimular músculos y reducir inflamaciones, adaptadas a las necesidades de cada paciente para una recuperación segura.
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Image
            src="/electro1.webp"
            alt="Tratamiento de electroterapia para dolor muscular en Bogotá"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto hover:shadow-xl transition-shadow duration-300"
          />
          <Image
            src="/electro2.webp"
            alt="Sesión de electroestimulación neuromuscular"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Condition semantic blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {conditions.map((c) => (
            <div
              key={c.name}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border-l-4 border-cyan-500 dark:border-cyan-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{c.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        {/* CTA bridge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-cyan-600 dark:bg-cyan-700 rounded-2xl px-8 py-6">
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            El Dr. Rafael Cortés diseña un plan personalizado para cada paciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={business.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-600"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Solicitar valoración médica
            </a>
            <Link
              href="/electroterapia-bogota"
              className="inline-flex items-center gap-1.5 text-cyan-100 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              Ver todos los tratamientos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
