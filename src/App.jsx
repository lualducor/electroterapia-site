import React from 'react';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth" id="inicio">
      <header className="py-6 px-4 md:px-20 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">Dr. Rafael Cortés</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li><a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400">Inicio</a></li>
          <li><a href="#galeria" className="hover:text-blue-600 dark:hover:text-blue-400">Galería</a></li>
          <li><a href="#ubicacion" className="hover:text-blue-600 dark:hover:text-blue-400">Ubicación</a></li>
        </ul>
      </header>

      <main>
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Sitio en construcción</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Próximamente encontrarás aquí toda la información sobre nuestros servicios de electroterapia.</p>
        </section>

        
      <section id="ubicacion" className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">¿Dónde nos encontramos?</h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300 text-lg">
          El consultorio del Dr. Rafael Cortés está ubicado en Bogotá, Colombia.<br />
          <span className="font-semibold text-red-600 dark:text-red-400">Se atiende únicamente con cita previa.</span>
        </p>
        <div className="flex justify-center">
          <iframe
            title="Ubicación del consultorio"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d497.09331669067194!2d-74.07822106623846!3d4.639243761881468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sco!4v1750535213861!5m2!1sen!2sco"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          ></iframe>
        </div>
      </section>

        
      <section id="galeria" className="bg-gray-50 dark:bg-gray-800 py-16 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">Nuestro Consultorio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="/consultorio1.jpg" alt="Consultorio 1" className="rounded-lg shadow-md" />
          <img src="/consultorio2.jpg" alt="Consultorio 2" className="rounded-lg shadow-md" />
          <img src="/consultorio3.jpg" alt="Consultorio 3" className="rounded-lg shadow-md" />
        </div>
      </section>

        
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="#inicio" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition-colors duration-300">
          ↑
        </a>
        <a href="#galeria" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition-colors duration-300">
          ↓
        </a>
      </div>

      </main>

      
      <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Dr. Rafael Cortés. Todos los derechos reservados.
      </footer>

    </div>
  );
}

export default App;