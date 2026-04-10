import { business } from '@/lib/business';

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div data-reveal className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">Contacto y Ubicación</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Encuéntranos en Bogotá</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Médico</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{business.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Dirección</p>
              <p className="text-gray-700 dark:text-gray-300">{business.address}</p>
              <p className="text-gray-700 dark:text-gray-300">Sector {business.sector}, Bogotá</p>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Ver ubicación en Google Maps
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Horario de atención</p>
              <p className="text-gray-700 dark:text-gray-300">{business.hours}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Teléfono / WhatsApp</p>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors"
              >
                {business.phone}
              </a>
            </div>
            <a
              href={business.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Agenda tu Cita por WhatsApp
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              La atención es únicamente con cita previa para garantizar una dedicación completa a cada paciente.
            </p>
          </div>

          {/* Map – invert+hue-rotate makes Google Maps readable in dark mode */}
          <div className="rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <iframe
              title="Ubicación del consultorio Dr. Rafael Cortés"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.5466674720002!2d-74.07819023949948!3d4.639217834845287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1750536927146!5m2!1sen!2sco"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:[filter:invert(90%)_hue-rotate(180deg)] dark:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
