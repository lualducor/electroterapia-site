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
    sameAs: [business.maps],
  };
}
