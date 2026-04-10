'use client';

import { useState, useEffect } from 'react';
import { business } from '@/lib/business';

const navLinks = [
  { href: '/#experiencia',   label: 'Experiencia',   id: 'experiencia' },
  { href: '/#especialidades', label: 'Especialidades', id: 'especialidades' },
  { href: '/#galeria',       label: 'Galería',        id: 'galeria' },
  { href: '/#contacto',      label: 'Contacto',       id: 'contacto' },
];

export default function Header() {
  // Lazy initializer reads from the DOM — the blocking inline script in
  // <head> already set the `dark` class before React hydrates, so this
  // is always correct on first render with no extra effect needed.
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // ── Active section scroll-spy ────────────────────────────────────
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleDark = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('darkMode', String(next));
      return next;
    });
  };

  const linkClass = (id: string) =>
    `transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded ${
      activeSection === id
        ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
        : 'hover:text-cyan-600 dark:hover:text-cyan-400'
    }`;

  return (
    <header className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50 px-6 md:px-20 py-4 flex justify-between items-center transition-colors duration-300">
      <span className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400">
        Dr. Rafael Cortés
      </span>

      <div className="flex items-center gap-3">
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map(({ href, label, id }) => (
            <a key={href} href={href} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href={business.whatsappBooking}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          Solicitar cita
        </a>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          className="flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {darkMode ? (
            <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col space-y-4 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 md:hidden">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={linkClass(id)}
            >
              {label}
            </a>
          ))}
          <a
            href={business.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-fit"
          >
            Solicitar cita
          </a>
        </nav>
      )}
    </header>
  );
}
