import Image from 'next/image';
import { business } from '@/lib/business';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-20 pt-16 pb-20 bg-gradient-to-br from-slate-50 to-cyan-50/40 dark:from-gray-950 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        {/* Trust credentials — above the fold */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <span className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            +30 años de experiencia
          </span>
          <span className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Médico Cirujano – UNAL
          </span>
          <span className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Teusaquillo / Galerías, Bogotá
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="block">Consulta Médica</span>
          <span className="block text-cyan-600 dark:text-cyan-400">Especializada en Electroterapia</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Tratamiento del dolor, mejora de movilidad y rehabilitación funcional. Atención personalizada en Bogotá con el <strong className="text-gray-900 dark:text-white">Dr. Rafael Cortés</strong>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <a
            href={business.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Solicitar valoración médica
          </a>
          <a
            href={`tel:${business.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
            </svg>
            Llamar ahora
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
        <Image
          src="/doctor_main.webp"
          alt="Dr. Rafael Cortés, médico especialista en electroterapia en Bogotá"
          width={500}
          height={600}
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
