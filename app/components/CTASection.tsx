import AnimateOnScroll from './AnimateOnScroll';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(51,133,255,0.28)] to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,64,184,0.14) 0%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Corner glows */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.1] blur-[80px]"
          style={{
            background: '#1A56D6',
            top: '-100px',
            left: '-100px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.1] blur-[80px]"
          style={{
            background: '#1A56D6',
            bottom: '-100px',
            right: '-100px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll direction="up">
          <span className="section-label mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D9FFF] inline-block" />
            Próximo Passo
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={100}>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-6 leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            Sua empresa já evoluiu.
            <br />
            <span className="gradient-text">Sua gestão também precisa.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={200}>
          <p className="text-lg text-[#94B8D8] leading-relaxed mb-10 max-w-2xl mx-auto">
            Não espere mais uma venda perdida, mais um cliente esquecido ou mais um mês
            de caos para tomar uma decisão. O FilmPro está pronto para transformar
            a gestão da sua operação hoje.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8"
              style={{ boxShadow: '0 0 40px rgba(0,115,230,0.3)' }}
            >
              <span className="flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.084 23.16a.75.75 0 0 0 .916.916l5.306-1.439A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.97-1.359l-.357-.212-3.692 1.001.977-3.781-.232-.369A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Falar com um especialista
              </span>
            </a>
            <a href="#demonstracao" className="btn-secondary text-base py-4 px-8">
              <span className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
                </svg>
                Ver o sistema funcionando
              </span>
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="fade" delay={400}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-[#4a6a84]">
            {[
              {
                text: 'Dados seguros',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              },
              {
                text: 'Configuração rápida',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>,
              },
              {
                text: 'Suporte humano',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                text: 'Feito para o nicho',
                icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
              },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-[#3385FF]">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
