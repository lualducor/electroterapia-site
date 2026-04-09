import { business } from '@/lib/business';
import { homepageFaqs as faqs } from '@/lib/faqs';

export default function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">Preguntas Frecuentes</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Lo que nuestros pacientes preguntan</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={business.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-sm hover:shadow-md transition-all duration-200 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Agenda tu cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
