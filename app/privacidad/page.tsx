import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Política de Privacidad – Dr. Rafael Cortés | Electroterapia Bogotá' },
  description:
    'Política de privacidad y tratamiento de datos personales del consultorio del Dr. Rafael Cortés. Cumplimiento de la Ley 1581 de 2012 (Colombia).',
  alternates: {
    canonical: '/privacidad',
  },
  robots: { index: true, follow: false },
};

export default function Privacidad() {
  return (
    <main className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-cyan-600">
        <h1>Política de Privacidad y Tratamiento de Datos Personales</h1>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Última actualización: abril de 2026
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recolectados a través de este sitio
          web es el <strong>Dr. Rafael Cortés</strong>, médico cirujano, con consultorio ubicado en{' '}
          <strong>Carrera 28 bis # 49a-21, sector Teusaquillo / Galerías, Bogotá, Colombia</strong>.
        </p>
        <p>
          Contacto: <a href="mailto:contacto@rafaelcortes.co">contacto@rafaelcortes.co</a>
          {/* TODO: Agregar número de tarjeta profesional / RETHUS una vez disponible */}
        </p>

        <h2>2. Marco legal</h2>
        <p>
          Esta política se rige por la{' '}
          <strong>Ley 1581 de 2012</strong> (Protección de Datos Personales de Colombia), el{' '}
          <strong>Decreto 1377 de 2013</strong> y las demás normas que las complementen o modifiquen.
        </p>

        <h2>3. Datos recolectados</h2>
        <p>Este sitio web puede recolectar los siguientes datos personales:</p>
        <ul>
          <li>
            <strong>Datos de contacto</strong>: nombre, número de teléfono y/o WhatsApp, cuando el
            usuario inicia una conversación o solicita información a través de los enlaces de
            WhatsApp o teléfono publicados en el sitio.
          </li>
          <li>
            <strong>Datos de navegación</strong>: información técnica anónima (dirección IP,
            navegador, páginas visitadas) recolectada automáticamente por el servidor de hosting
            (Vercel) con fines de rendimiento y seguridad. Estos datos no permiten identificar
            directamente al usuario.
          </li>
        </ul>
        <p>
          Este sitio <strong>no cuenta con formularios de contacto</strong> ni sistemas de
          registro de usuarios. La comunicación directa se realiza a través de WhatsApp o llamada
          telefónica, plataformas con sus propias políticas de privacidad.
        </p>

        <h2>4. Finalidad del tratamiento</h2>
        <p>Los datos personales recolectados se utilizan exclusivamente para:</p>
        <ul>
          <li>Responder consultas y solicitudes de cita médica.</li>
          <li>Brindar información sobre los servicios médicos ofrecidos.</li>
          <li>Cumplir con obligaciones legales aplicables al ejercicio médico en Colombia.</li>
        </ul>
        <p>
          Los datos <strong>no se comparten con terceros</strong> con fines comerciales ni
          publicitarios, ni se utilizan para elaborar perfiles de comportamiento.
        </p>

        <h2>5. Tiempo de conservación</h2>
        <p>
          Los datos de contacto se conservan únicamente durante el tiempo necesario para atender
          la solicitud del paciente. Una vez finalizada la relación médico-paciente, los datos se
          tratan conforme a las obligaciones de custodia de historia clínica establecidas por la
          normatividad colombiana vigente.
        </p>

        <h2>6. Derechos del titular</h2>
        <p>
          En virtud de la Ley 1581 de 2012, usted tiene derecho a:
        </p>
        <ul>
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>
            Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.
          </li>
          <li>
            Ser informado sobre el uso que se ha dado a sus datos personales.
          </li>
          <li>
            Revocar la autorización y/o solicitar la supresión de sus datos, siempre que no
            exista un deber legal o contractual que impida hacerlo.
          </li>
          <li>
            Presentar quejas ante la{' '}
            <strong>Superintendencia de Industria y Comercio (SIC)</strong> por infracciones a
            la normativa de protección de datos.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, comuníquese al correo{' '}
          <a href="mailto:contacto@rafaelcortes.co">contacto@rafaelcortes.co</a>.
        </p>

        <h2>7. Cookies y tecnologías de rastreo</h2>
        <p>
          Este sitio web <strong>no utiliza cookies de rastreo</strong> ni píxeles de seguimiento
          de terceros (Meta Pixel, Google Analytics, etc.). No se recopila información de
          comportamiento con fines publicitarios.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          El sitio opera exclusivamente bajo protocolo <strong>HTTPS</strong> con certificado
          SSL/TLS. Se implementan encabezados de seguridad HTTP para proteger la integridad y
          confidencialidad de la comunicación entre el usuario y el servidor.
        </p>

        <h2>9. Modificaciones</h2>
        <p>
          Esta política puede ser actualizada en cualquier momento. Los cambios serán publicados
          en esta misma página con la fecha de actualización correspondiente. Se recomienda
          revisarla periódicamente.
        </p>

        <hr className="my-8" />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Dr. Rafael Cortés – Electroterapia Bogotá.
          Carrera 28 bis # 49a-21, Teusaquillo / Galerías, Bogotá, Colombia.
        </p>
      </div>
    </main>
  );
}
