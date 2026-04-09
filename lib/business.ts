export type Business = {
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  whatsapp: string;
  whatsappBooking: string;
  whatsappInfo: string;
  email: string;
  domain: string;
  sector: string;
  postalCode: string;
};

export const business: Business = {
  name: 'Dr. Rafael Cortés',
  address: 'Carrera 28 bis # 49a-21',
  city: 'Bogotá, Colombia',
  hours: 'Lunes a Viernes: 9:00 AM – 5:00 PM',
  phone: '+57 315 786 2547',
  whatsapp: 'https://wa.me/573157862547',
  whatsappBooking: 'https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quiero%20agendar%20una%20consulta',
  whatsappInfo: 'https://wa.me/573157862547?text=Hola%20doctor%20Rafael%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20los%20tratamientos',
  email: 'contacto@rafaelcortes.co',
  domain: 'https://electroterapia.co',
  sector: 'Teusaquillo / Galerías',
  postalCode: '111311',
};
