import { business } from '@/lib/business';

const navLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/#especialidades', label: 'Especialidades' },
  { href: '/#galeria', label: 'Galería' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{business.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">Consulta privada y confiable de electroterapia en Bogotá.</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Explorar</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Contacto</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>Teléfono: <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-cyan-600 transition-colors">{business.phone}</a></li>
            <li>WhatsApp: <a href={business.whatsappBooking} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors">Agendar cita</a></li>
            <li>Email: {business.email}</li>
            <li>{business.address}, {business.city}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-900 py-4 px-6 text-center text-xs text-gray-600 dark:text-gray-400 space-y-1">
        <p className="italic">
          La información de este sitio es de carácter informativo y no reemplaza la consulta médica presencial.
        </p>
        <p>
          Copyright © {new Date().getFullYear()} Rafael Cortés. Todos los derechos reservados.{' '}
          <a href="/privacidad" className="underline hover:text-cyan-600 transition-colors">
            Política de Privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}
