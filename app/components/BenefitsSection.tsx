import AnimateOnScroll from './AnimateOnScroll';

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    number: '01',
    title: 'Operação 100% organizada',
    desc: 'Chega de informação espalhada em cadernos, WhatsApp e memória. Tudo centralizado, acessível de qualquer lugar.',
    result: 'Zero bagunça',
    color: '#00aaff',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
      </svg>
    ),
    number: '02',
    title: 'Mais profissionalismo',
    desc: 'Orçamentos formatados, atendimento padronizado, histórico organizado. Seu cliente percebe a diferença desde o primeiro contato.',
    result: 'Imagem premium',
    color: '#22c55e',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    number: '03',
    title: 'Mais agilidade',
    desc: 'Menos tempo procurando informação, mais tempo executando. Sua equipe trabalha mais rápido com processos claros e organizados.',
    result: '3x mais rápido',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    number: '04',
    title: 'Mais lucro',
    desc: 'Com controle de estoque, você para de comprar no excesso. Com orçamentos claros, você para de perder vendas por falta de acompanhamento.',
    result: 'Reduz desperdício',
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    number: '05',
    title: 'Clientes mais satisfeitos',
    desc: 'Quando o atendimento é organizado, o cliente percebe. Respostas rápidas, prazo cumprido, histórico acessível. Fidelização na prática.',
    result: 'Retenção maior',
    color: '#fb7185',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
        <polyline points="17,6 23,6 23,12"/>
      </svg>
    ),
    number: '06',
    title: 'Crescimento sustentável',
    desc: 'Com a operação organizada, você consegue escalar com segurança. Mais serviços, mais clientes, sem perder o controle.',
    result: 'Escala com tranquilidade',
    color: '#38bdf8',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.2)] to-transparent" />

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,10,20,0) 0%, rgba(0,17,34,0.6) 40%, rgba(0,17,34,0.6) 60%, rgba(0,10,20,0) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] inline-block" />
              Resultados Reais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-5">
              O que muda quando você{' '}
              <span className="gradient-text">usa o FilmPro</span>
            </h2>
            <p className="text-[#9ebdd4] text-lg max-w-2xl mx-auto">
              Não estamos vendendo software. Estamos vendendo o resultado que ele entrega para o seu negócio.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={b.number} direction="up" delay={i * 80}>
              <div
                className="group relative rounded-2xl p-6 h-full transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0,13,26,0.85)',
                  border: '1px solid rgba(0,170,255,0.1)',
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${b.color}07 0%, transparent 70%)` }}
                />

                <div className="relative z-10">
                  {/* Number + result badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl font-black tracking-tighter"
                      style={{
                        background: `linear-gradient(135deg, ${b.color}30, ${b.color}15)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {b.number}
                    </div>
                    <span
                      className="text-[9px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: b.color, background: `${b.color}12`, border: `1px solid ${b.color}20` }}
                    >
                      {b.result}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${b.color}12`, border: `1px solid ${b.color}22`, color: b.color }}
                  >
                    {b.icon}
                  </div>

                  <h3 className="text-base font-semibold text-[#e8f4ff] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#6b8ca4] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Stats bar */}
        <AnimateOnScroll direction="up" delay={200}>
          <div
            className="mt-16 rounded-2xl p-5 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,82,204,0.1) 0%, rgba(0,13,26,0.9) 50%, rgba(0,82,204,0.1) 100%)',
              borderColor: 'rgba(0,170,255,0.18)',
              boxShadow: '0 0 80px rgba(0,82,204,0.1)',
            }}
          >
            {[
              { value: '2x', label: 'Mais agilidade', sub: 'no atendimento' },
              { value: '100%', label: 'Visibilidade', sub: 'da sua operação' },
              { value: 'Zero', label: 'Orçamentos', sub: 'perdidos' },
              { value: '1 lugar', label: 'Tudo em', sub: 'centralizado' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[#e8f4ff]">{stat.label}</div>
                <div className="text-xs text-[#4a6a84] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
