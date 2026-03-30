'use client';

import { useEffect, useState } from 'react';
import { trackWhatsApp } from '@/app/lib/clarity';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Para quem', href: '#para-quem' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(2,9,19,0.94)] backdrop-blur-xl border-b border-[rgba(51,133,255,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo_fp.png"
            alt="FilmPro"
            width={52}
            height={58}
            className="transition-transform duration-300 group-hover:scale-105"
            style={{ objectFit: 'contain' }}
          />
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: '#EDF4FF', letterSpacing: '-0.02em' }}
          >
            Film<span style={{ color: '#4D9FFF' }}>Pro</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.875rem] font-medium text-[#94B8D8] hover:text-[#EDF4FF] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA — desktop only */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            onClick={trackWhatsApp}
          >
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.084 23.16a.75.75 0 0 0 .916.916l5.306-1.439A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.97-1.359l-.357-.212-3.692 1.001.977-3.781-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#94B8D8] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(2,9,19,0.98)] backdrop-blur-xl border-b border-[rgba(51,133,255,0.12)] px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-4 mb-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.9rem] font-medium text-[#94B8D8] hover:text-[#EDF4FF] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full justify-center"
            onClick={trackWhatsApp}
          >
            <span className="flex items-center gap-2 justify-center">Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
