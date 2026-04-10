import Image from 'next/image';

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div data-reveal className="max-w-5xl mx-auto text-center">
        <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-2">Consultorio</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Un Espacio Cómodo y Profesional</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Nuestro espacio está diseñado para brindar comodidad, privacidad y atención de calidad, asegurando una experiencia médica profesional y cercana.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="rounded-lg overflow-hidden shadow-xl group aspect-[4/3]">
            <Image
              src="/consultorio2.webp"
              alt="Sala de tratamiento con camilla y equipo de electroterapia – Dr. Rafael Cortés"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 560px"
              className="w-full h-full object-cover motion-safe:group-hover:scale-[1.03] motion-safe:transition-transform motion-safe:duration-500"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl group aspect-[4/3]">
            <Image
              src="/consultorio1.webp"
              alt="Área de consulta médica del Dr. Rafael Cortés en Bogotá"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 560px"
              className="w-full h-full object-cover motion-safe:group-hover:scale-[1.03] motion-safe:transition-transform motion-safe:duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
