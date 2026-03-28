import AnimateOnScroll from './AnimateOnScroll';

const pillars = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Todos os clientes reunidos',
    desc: 'Histórico completo de cada cliente: serviços realizados, orçamentos enviados, veículos cadastrados e muito mais.',
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Serviços com status em tempo real',
    desc: 'Acompanhe cada serviço do início ao fim. Saiba exatamente o que está em andamento, aguardando ou finalizado.',
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Orçamentos profissionais em segundos',
    desc: 'Gere orçamentos profissionais rapidamente com preços, materiais e prazos definidos. Sem perder tempo nem oportunidade.',
  },
  {
    number: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Estoque sempre sob controle',
    desc: 'Monitore filmes, adesivos, PPF e insumos. Saiba exatamente o que tem, o que está em falta e o que precisa pedir.',
  },
];

export default function WhySection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.2)] to-transparent" />

      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,10,20,0) 0%, rgba(0,17,34,0.4) 50%, rgba(0,10,20,0) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: text */}
          <div className="lg:w-5/12">
            <AnimateOnScroll direction="left">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] inline-block" />
                A Solução
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
                Tudo que você precisa{' '}
                <span className="gradient-text">em um só lugar</span>
              </h2>
              <p className="text-[#9ebdd4] text-lg leading-relaxed mb-8">
                O FilmPro foi construído especificamente para empresas de película, PPF
                e envelopamento. Não é uma ferramenta genérica adaptada — é um sistema
                pensado de dentro para fora para o seu negócio.
              </p>
              <p className="text-[#9ebdd4] text-base leading-relaxed">
                Com ele, sua equipe trabalha de forma organizada, seus clientes recebem
                um atendimento mais profissional e você tem visibilidade total da sua operação.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span className="flex items-center gap-2">
                    Quero conhecer o FilmPro
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12,5 19,12 12,19"/>
                    </svg>
                  </span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: pillars */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.number} direction="right" delay={i * 100}>
                <div className="card-glass rounded-2xl p-5 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'rgba(0,115,230,0.12)',
                          border: '1px solid rgba(0,170,255,0.2)',
                          color: '#00aaff',
                        }}
                      >
                        {pillar.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#0073e6] tracking-widest mb-1">{pillar.number}</div>
                      <h3 className="text-sm font-semibold text-[#e8f4ff] mb-1.5">{pillar.title}</h3>
                      <p className="text-xs text-[#6b8ca4] leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
