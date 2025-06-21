import './index.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="font-sans text-gray-800 bg-white dark:text-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 px-6 md:px-20 py-4 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">Doctor Rafael Cortés</h1>
        <ul className="flex space-x-6 text-sm dark:text-gray-300">
          <li><a href="#inicio" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Inicio</a></li>
          <li><a href="#especialidades" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Especialidades</a></li>
          <li><a href="#experiencia" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Experiencia</a></li>
          <li><a href="#galeria" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Galería</a></li>
          <li><a href="#ubicacion" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Ubicación</a></li>
          <li><a href="#contacto" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Contacto</a></li>
          <li>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="flex items-center space-x-1 text-sm hover:text-blue-600 dark:hover:text-blue-400"
            >
              {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
            </button>
          </li>
        </ul>
      </nav>

      
      {/* Hero */}
      <section id="inicio" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-20 pt-28 md:pt-32 pb-12 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block sm:inline">Consulta Médica</span><br />
            <span className="block sm:inline text-blue-600 dark:text-blue-400">
              Especializada en <span className="whitespace-nowrap">Electroterapia!</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-300">
            El Dr. Rafael Cortés brinda atención personalizada para aliviar el dolor, mejorar la movilidad y recuperar tu bienestar.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quiero%20agendar%20una%20consulta"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img src="/doctor_main.jpg" alt="Doctor Rafael Cortés" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <img src="/portrait2.jpg" alt="Doctor en consultorio" className="rounded-lg w-full shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">Experiencia</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Atención Médica Preventiva, Curativa y Personalizada con Experiencia Quirúrgica
          </h2>
          <p className="text-lg leading-relaxed dark:text-gray-300">
            El Dr. Rafael Cortés es médico cirujano egresado de la Universidad Nacional de Colombia, con amplia experiencia en atención integral y tratamientos especializados en electroterapia.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="min-h-screen bg-blue-50 dark:bg-gray-800 py-20 px-6 md:px-20 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center">
          <div className="grid grid-cols-2 gap-6 md:w-1/2 mb-12 md:mb-0">
            <img src="/electro1.jpg" className="rounded-xl shadow-lg" alt="Tratamiento 1" />
            <img src="/electro2.jpg" className="rounded-xl shadow-lg" alt="Tratamiento 2" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">Especialidades</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Electroterapia</h2>
            <p className="text-lg leading-relaxed mb-8 dark:text-gray-300">
              La electroterapia es una técnica médica no invasiva utilizada para aliviar dolores, estimular músculos, reducir inflamaciones y mejorar la movilidad.
              <br /><br />
              El Dr. Rafael Cortés aplica tratamientos personalizados que se adaptan a las necesidades de cada paciente, combinando tecnología moderna con experiencia clínica para promover una recuperación segura y eficaz.
            </p>
            <a
              href="https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quiero%20agendar%20una%20consulta"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reserva tu cita
            </a>
          </div>
        </div>
      </section>

      {
      {/* Ubicación */}
      <section id="ubicacion" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">¿Dónde nos encontramos?</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300 text-lg">
          El consultorio del Dr. Rafael Cortés está ubicado en Bogotá, Colombia.<br />
          <span className="font-semibold text-red-600 dark:text-red-400">Se atiende únicamente con cita previa.</span>
        </p>
        <div className="flex justify-center">
          <iframe
            title="Ubicación del consultorio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8703533960253!2d-74.06282748573706!3d4.655451596642057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3df1d8d6e3%3A0xf083c8a6f0890d82!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1718660000000"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          ></iframe>
        </div>
      </section>


      {/* Galería */}
      <section id="galeria" className="bg-gray-50 dark:bg-gray-800 py-20 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Nuestro Consultorio</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
          Nuestro espacio está diseñado para brindar comodidad, privacidad y atención de calidad. Cada detalle ha sido pensado para ofrecer una experiencia médica profesional y cercana.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="/consultorio1.jpg" alt="Consultorio 1" className="rounded-lg shadow-md" />
          <img src="/consultorio2.jpg" alt="Consultorio 2" className="rounded-lg shadow-md" />
          <img src="/consultorio3.jpg" alt="Consultorio 3" className="rounded-lg shadow-md" />
        </div>
      </section>


      /* Footer */}
      <footer id="contacto" className="bg-blue-900 text-white px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Doctor Rafael Cortés</h3>
            <p className="text-blue-100">Consulta privada y confiable desde Bogotá.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Explorar</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-300 transition-colors duration-300">Inicio</a></li>
              <li><a href="#especialidades" className="hover:text-blue-300 transition-colors duration-300">Especialidades</a></li>
              <li><a href="#experiencia" className="hover:text-blue-300 transition-colors duration-300">Experiencia</a></li>
              <li><a href="#galeria" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Galería</a></li>
          <li><a href="#ubicacion" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Ubicación</a></li>
          <li><a href="#contacto" className="hover:text-blue-300 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <p className="text-blue-100">WhatsApp: +57 315 7862547</p>
            <p className="text-blue-100">Email: contacto@rafaelcortes.co</p>
            <p className="text-blue-100">Bogotá, Colombia</p>
          </div>
        </div>
        <div className="text-center text-sm mt-12 text-blue-200">
          Copyright © 2025 Rafael Cortés. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
