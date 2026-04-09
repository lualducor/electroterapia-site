export type Faq = {
  question: string;
  answer: string;
};

/** Used by: components/sections/FAQ.tsx (homepage) */
export const homepageFaqs: Faq[] = [
  {
    question: '¿Qué es la electroterapia?',
    answer:
      'La electroterapia es un conjunto de tratamientos médicos que utilizan corrientes eléctricas de baja o media frecuencia para estimular tejidos, aliviar el dolor y mejorar la función muscular. Es un procedimiento no invasivo utilizado en medicina física y rehabilitación.',
  },
  {
    question: '¿Duele la electroterapia?',
    answer:
      'En general no es dolorosa. La mayoría de los pacientes sienten una leve vibración o cosquilleo durante el tratamiento. La intensidad se ajusta según la tolerancia de cada persona para garantizar una experiencia cómoda y segura.',
  },
  {
    question: '¿Cuántas sesiones necesito?',
    answer:
      'El número de sesiones depende de la condición de cada paciente y del tipo de tratamiento. El Dr. Rafael Cortés evalúa cada caso de forma individual y diseña un plan personalizado durante la consulta inicial.',
  },
  {
    question: '¿Es segura la electroterapia?',
    answer:
      'Sí. Cuando es aplicada por un médico con experiencia clínica, la electroterapia es un procedimiento seguro y respaldado por evidencia médica. Antes de iniciar cualquier tratamiento, el Dr. Cortés realiza una evaluación completa de cada paciente.',
  },
  {
    question: '¿Sirve la electroterapia para dolores musculares y espasmos?',
    answer:
      'Sí. La electroterapia es muy efectiva para tratar contracturas musculares, espasmos y tensión acumulada en espalda, cuello, hombros y piernas. Las corrientes eléctricas relajan el músculo, reducen la inflamación y alivian el dolor de forma no invasiva.',
  },
  {
    question: '¿Puedo recibir tratamiento si me torcí un tobillo o tengo un esguince?',
    answer:
      'Sí. Los esguinces y torceduras responden bien a la electroterapia en la fase de recuperación. El tratamiento ayuda a reducir la inflamación, controlar el dolor y acelerar la cicatrización del tejido lesionado. El Dr. Cortés evalúa el estado de la lesión antes de iniciar.',
  },
  {
    question: '¿La electroterapia ayuda en la rehabilitación después de una cirugía?',
    answer:
      'Sí. La rehabilitación postoperatoria es una de las indicaciones más frecuentes. Después de cirugías ortopédicas, de rodilla, cadera, columna u otras intervenciones, la electroterapia acelera la recuperación funcional, reduce el dolor postquirúrgico y fortalece los músculos debilitados por el reposo.',
  },
  {
    question: '¿Puedo tratar el dolor muscular después de entrenar o ir al gimnasio?',
    answer:
      'Sí. El dolor muscular post-entrenamiento —agujetas, sobrecarga y micro-desgarros— responde muy bien a la electroterapia. El tratamiento reduce la inflamación, relaja la musculatura y acelera la recuperación para que pueda retomar su actividad física antes.',
  },
];

/**
 * Used by: app/electroterapia-bogota/page.tsx
 * – FAQ UI section (visible content)
 * – FAQPage JSON-LD schema (structured data)
 * Both always read from this single source.
 */
export const serviceFaqs: Faq[] = [
  {
    question: '¿Duele la electroterapia?',
    answer:
      'No. La mayoría de los pacientes sienten una leve vibración o cosquilleo durante la sesión. La intensidad se ajusta individualmente para garantizar comodidad en todo momento.',
  },
  {
    question: '¿Cuántas sesiones necesito?',
    answer:
      'Depende de la condición y la evolución de cada paciente. El Dr. Rafael Cortés evalúa cada caso en la consulta inicial y define un plan personalizado con la cantidad y frecuencia de sesiones necesarias.',
  },
  {
    question: '¿Es segura la electroterapia?',
    answer:
      'Sí. Cuando es aplicada por un médico cirujano con experiencia clínica, la electroterapia es segura y respaldada por evidencia científica. Antes de iniciar, se realiza una evaluación completa para descartar contraindicaciones.',
  },
  {
    question: '¿Cuándo se recomienda la electroterapia?',
    answer:
      'Se recomienda para el manejo del dolor crónico o agudo, recuperación de lesiones músculo-esqueléticas, rehabilitación postoperatoria, y en casos donde los medicamentos no han sido suficientes. El médico determina si es indicada según cada diagnóstico.',
  },
  {
    question: '¿Sirve para dolores musculares, espasmos y contracturas?',
    answer:
      'Sí. Las contracturas, espasmos musculares y tensión crónica en espalda, cuello, hombros y pantorrillas son condiciones que responden muy bien a la electroterapia. El tratamiento relaja la musculatura, mejora la circulación local y reduce el dolor sin medicamentos.',
  },
  {
    question: '¿Puedo atenderme si tengo un esguince o una torcedura reciente?',
    answer:
      'Sí, los esguinces son una indicación frecuente. La electroterapia ayuda a bajar la inflamación, controlar el dolor y recuperar la movilidad articular más rápido. El Dr. Cortés evalúa la fase de la lesión para definir el protocolo más adecuado.',
  },
  {
    question: '¿La electroterapia hace parte de la rehabilitación post-cirugía?',
    answer:
      'Sí. Es ampliamente usada en recuperación postoperatoria de rodilla, cadera, columna y hombro. Ayuda a recuperar fuerza muscular, reducir el dolor postquirúrgico y volver a la actividad cotidiana de forma segura y progresiva.',
  },
  {
    question: '¿Sirve para el dolor muscular después del ejercicio o del gimnasio?',
    answer:
      'Sí. El dolor muscular post-entrenamiento —agujetas, sobrecarga muscular y micro-desgarros— es una de las condiciones que trata el Dr. Cortés. La electroterapia acelera la recuperación muscular, reduce la inflamación y alivia el dolor sin necesidad de medicamentos, ayudando a retomar la actividad física más rápido.',
  },
];
