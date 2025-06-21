import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth" id="inicio">
      <header className="sticky top-0 z-50 py-4 px-6 md:px-20 flex justify-between items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">Dr. Rafael Cortés</h1>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li><a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Inicio</a></li>
            <li><a href="#galeria" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Galería</a></li>
            <li><a href="#ubicacion" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Ubicación</a></li>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Sitio en Construcción</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Próximamente encontrarás aquí toda la información sobre nuestros servicios de electroterapia.
          </p>
          <a href="#ubicacion" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
              Conoce nuestra ubicación
          </a>
        </section>

        <section id="ubicacion" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">¿Dónde nos encontramos?</h2>
          <p className="text-center mb-10 text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            El consultorio del Dr. Rafael Cortés está ubicado en Bogotá, Colombia.
            Para garantizar una atención personalizada y de calidad, <span className="font-semibold text-red-600 dark:text-red-400">se atiende únicamente con cita previa.</span>
          </p>
          <div className="flex justify-center">
            <iframe
              title="Ubicación del consultorio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8703533960253!2d-74.06282748573706!3d4.655451596642057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3df1d8d6e3%3A0xf083c8a6f0890d82!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1718660000000"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl"
            ></iframe>
          </div>
        </section>

        <section id="galeria" className="bg-gray-50 dark:bg-gray-800 py-20 px-6 md:px-20 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Nuestro Consultorio</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Nuestro espacio está diseñado para brindar comodidad, privacidad y atención de calidad. Cada detalle ha sido pensado para ofrecer una experiencia médica profesional y cercana.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <img src="/consultorio1.jpg" alt="Consultorio 1" className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" />
            <img src="/consultorio2.jpg" alt="Consultorio 2" className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" />
            <img src="/consultorio3.jpg" alt="Consultorio 3" className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" />
          </div>
        </section>

        {showScroll && (
          <button onClick={scrollTop} className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Dr. Rafael Cortés. Todos los derechos reservados. <br/> Bogotá, Colombia.
      </footer>
    </div>
  );
}

export default App;