'use client';

import { trackWhatsApp } from '@/app/lib/clarity';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'rgba(51,133,255,0.1)', background: 'rgba(2,9,19,0.98)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* FP logo mark */}
              <img
                src="/logo_fp.png"
                alt="FilmPro"
                width={52}
                height={58}
                style={{ objectFit: 'contain' }}
              />
              <span className="text-xl font-bold tracking-tight" style={{ color: '#EDF4FF', letterSpacing: '-0.02em' }}>
                Film<span style={{ color: '#4D9FFF' }}>Pro</span>
              </span>
            </div>
            <p className="text-[#6b8ca4] text-sm leading-relaxed max-w-sm mb-6">
              O sistema de gestão feito para aplicadores de película, PPF, envelopamento e adesivos.
              Organização e crescimento em um só lugar.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/filmprobr',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.084 23.16a.75.75 0 0 0 .916.916l5.306-1.439A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.97-1.359l-.357-.212-3.692 1.001.977-3.781-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#4A6E8C] hover:text-[#4D9FFF] transition-all duration-200 hover:bg-[rgba(51,133,255,0.08)]"
                  style={{ border: '1px solid rgba(51,133,255,0.12)' }}
                  onClick={() => social.label === 'WhatsApp' && trackWhatsApp()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#2A4A64] uppercase tracking-widest mb-5">Sistema</h4>
            <ul className="space-y-3">
              {['Funcionalidades', 'Dashboard', 'Clientes', 'Serviços', 'Estoque', 'Orçamentos'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-[#4A6E8C] hover:text-[#94B8D8] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#2A4A64] uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[#4A6E8C] hover:text-[#4D9FFF] transition-colors group"
                  onClick={trackWhatsApp}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center group-hover:bg-[rgba(51,133,255,0.1)] transition-colors flex-shrink-0"
                    style={{ border: '1px solid rgba(51,133,255,0.12)' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.084 23.16a.75.75 0 0 0 .916.916l5.306-1.439A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.97-1.359l-.357-.212-3.692 1.001.977-3.781-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                  </div>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#4A6E8C]">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ border: '1px solid rgba(51,133,255,0.12)' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                contato@filmpro.com.br
              </li>
            </ul>

            {/* CTA mini */}
            <div className="mt-6">
              <a
                href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-4 w-full justify-center"
                onClick={trackWhatsApp}
              >
                <span className="flex items-center gap-1.5 justify-center">
                  Começar agora
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12,5 19,12 12,19"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(51,133,255,0.08)' }}
        >
          <p className="text-xs text-[#2A4A64]">
            © {year} FilmPro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#2A4A64] hover:text-[#4A6E8C] transition-colors">Privacidade</a>
            <a href="#" className="text-xs text-[#2A4A64] hover:text-[#4A6E8C] transition-colors">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
