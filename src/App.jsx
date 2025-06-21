import './index.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans text-gray-800 bg-white dark:text-white dark:bg-gray-900 scroll-smooth transition-colors duration-300">
      <header className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50 px-6 md:px-20 py-4 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">Doctor Rafael Cortés</h1>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#experiencia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiencia</a>
            <a href="#especialidades" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Especialidades</a>
            <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-1 text-sm p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-20 pt-16 pb-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block">Consulta Médica</span>
              <span className="block text-blue-600 dark:text-blue-400">Especializada en Electroterapia</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Alivio del dolor, mejora de la movilidad y recuperación de tu bienestar con atención personalizada.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quiero%20agendar%20una%20consulta"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Agenda tu Cita
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img src="/doctor_main.jpg" alt="Doctor Rafael Cortés" className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl" />
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <img src="/portrait2.jpg" alt="Doctor en consultorio" className="rounded-lg w-full shadow-xl" />
            </div>
            <div className="md:pl-8">
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Experiencia</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Atención Médica Integral con Experiencia Quirúrgica
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                El Dr. Rafael Cortés es médico cirujano de la Universidad Nacional de Colombia, con amplia trayectoria en atención preventiva, curativa y tratamientos especializados en electroterapia para un manejo del dolor efectivo.
              </p>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Especialidades</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Electroterapia Avanzada</h2>
              <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                Técnicas no invasivas para aliviar dolores, estimular músculos y reducir inflamaciones, adaptadas a las necesidades de cada paciente para una recuperación segura.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-2 gap-6">
                <img src="/electro1.jpg" className="rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" alt="Tratamiento 1" />
                <img src="/electro2.jpg" className="rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" alt="Tratamiento 2" />
              </div>
              <div className="md:pl-8">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  El Dr. Rafael Cortés combina tecnología moderna con su profunda experiencia clínica para diseñar tratamientos personalizados que promueven una recuperación eficaz y duradera.
                </p>
                <a
                  href="https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20los%20tratamientos"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Saber Más
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Galería & Ubicación */}
        <section id="contacto" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Consultorio</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Un Espacio Cómodo y Profesional</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <img src="/consultorio1.jpg" alt="Consultorio 1" className="rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300" />
                <img src="/consultorio2.jpg" alt="Consultorio 2" className="rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300" />
                <img src="/consultorio3.jpg" alt="Consultorio 3" className="rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300" />
              </div>
            </div>
            <div>
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Ubicación</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Encuéntranos en Bogotá</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El consultorio está convenientemente ubicado en Bogotá. <span className="font-semibold text-red-600 dark:text-red-400">La atención es únicamente con cita previa</span> para garantizar una dedicación completa a cada paciente.
              </p>
              <div className="rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  title="Ubicación del consultorio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8703533960253!2d-74.06282748573706!3d4.655451596642057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3df1d8d6e3%3A0xf083c8a6f0890d82!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1718660000000"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Doctor Rafael Cortés</h3>
            <p className="text-gray-600 dark:text-gray-300">Consulta privada y confiable de electroterapia en Bogotá.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Explorar</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#experiencia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiencia</a></li>
              <li><a href="#especialidades" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Especialidades</a></li>
              <li><a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Contacto</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>WhatsApp: +57 315 7862547</li>
              <li>Email: contacto@rafaelcortes.co</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Rafael Cortés. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
