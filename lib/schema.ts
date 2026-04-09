import { business } from './business';

export type JsonLd = Record<string, unknown>;

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Physician'],
    '@id': business.domain,
    name: business.name,
    url: business.domain,
    telephone: business.phone.replace(/\s/g, ''),
    email: business.email,
    image: `${business.domain}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: 'Bogotá',
      postalCode: business.postalCode,
      addressCountry: 'CO',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bogotá',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 4.6392,
      longitude: -74.0782,
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    medicalSpecialty: 'PhysicalMedicine',
    hasMap: business.maps,
    sameAs: [
      business.maps,
      'https://www.doctoralia.co/franco-rafael-francisco-cortes/medico-general/bogota',
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.domain}/#website`,
    url: business.domain,
    name: 'Dr. Rafael Cortés – Electroterapia Bogotá',
    inLanguage: 'es-CO',
    publisher: { '@id': business.domain },
  };
}

export function personSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${business.domain}/#doctor`,
    name: 'Dr. Rafael Cortés',
    jobTitle: 'Médico Cirujano – Medicina Física y Rehabilitación',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad Nacional de Colombia',
    },
    knowsAbout: [
      'Electroterapia',
      'Medicina Física y Rehabilitación',
      'Manejo del dolor crónico',
      'Rehabilitación músculo-esquelética',
      'Estimulación neuromuscular',
    ],
    worksFor: { '@id': business.domain },
    url: business.domain,
    sameAs: [
      'https://www.doctoralia.co/franco-rafael-francisco-cortes/medico-general/bogota',
    ],
  };
}
