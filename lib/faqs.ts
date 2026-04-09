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
];
