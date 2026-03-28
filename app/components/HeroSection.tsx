import DashboardMockup from './DashboardMockup';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #1A56D6 0%, #071530 60%, transparent 100%)',
            top: '-200px',
            left: '-100px',
            animation: 'blob-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.1] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #3385FF 0%, #071030 60%, transparent 100%)',
            bottom: '-150px',
            right: '-100px',
            animation: 'blob-2 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #60BAFF 0%, transparent 70%)',
            top: '50%',
            right: '30%',
            animation: 'blob-1 15s ease-in-out infinite 5s',
          }}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(51,133,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(51,133,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Horizontal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(51,133,255,0.4)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="hero-headline-animate">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3385FF] inline-block" />
                Sistema de Gestão para Película & PPF
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-sub-animate text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mt-4 mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Gerenciar sua{' '}
              <span className="gradient-text">operação</span>
              {' '}não deveria ser<br className="hidden sm:block" />
              {' '}tão complicado.
            </h1>

            {/* Subheadline */}
            <p
              className="hero-cta-animate text-lg text-[#94B8D8] leading-relaxed max-w-xl mb-10"
              style={{ animationDelay: '0.4s' }}
            >
              O FilmPro ajuda aplicadores de película, PPF, envelopamento e adesivos a
              controlarem clientes, serviços, orçamentos e estoque em um só lugar —
              com a organização que sua empresa merece.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-animate flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-7"
              >
                <span className="flex items-center gap-2.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.084 23.16a.75.75 0 0 0 .916.916l5.306-1.439A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.97-1.359l-.357-.212-3.692 1.001.977-3.781-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Falar no WhatsApp
                </span>
              </a>
              <a href="#demonstracao" className="btn-secondary text-base py-4 px-7">
                <span className="flex items-center gap-2.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
                  </svg>
                  Ver demonstração
                </span>
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="hero-cta-animate mt-10 flex flex-wrap items-center gap-6 text-sm text-[#4A6E8C]"
              style={{ animationDelay: '0.8s' }}
            >
              {[
                { icon: '✦', text: 'Sem instalação' },
                { icon: '✦', text: 'Fácil de usar' },
                { icon: '✦', text: 'Suporte dedicado' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5">
                  <span className="text-[#3385FF] text-xs">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: mockup */}
          <div className="flex-1 w-full max-w-2xl hero-mockup-animate overflow-hidden">
            <div className="relative">
              {/* Glow behind mockup */}
              <div
                className="absolute inset-0 rounded-2xl opacity-40 blur-[60px]"
                style={{ background: 'linear-gradient(135deg, #1040B8, #3385FF)' }}
              />
              <div className="relative">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020913] to-transparent pointer-events-none" />
    </section>
  );
}
