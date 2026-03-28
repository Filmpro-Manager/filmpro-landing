import AnimateOnScroll from './AnimateOnScroll';

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Cadastro de Clientes',
    desc: 'Armazene todos os dados dos seus clientes, histórico de serviços, veículos e contatos em um único perfil organizado.',
    color: '#00aaff',
    badge: 'Essencial',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Controle de Serviços',
    desc: 'Gerencie cada serviço com status em tempo real. Do agendamento à entrega, tudo com visibilidade e prazo definido.',
    color: '#22c55e',
    badge: 'Principal',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Gestão de Estoque',
    desc: 'Controle filmes, PPF, adesivos e insumos com alertas de estoque baixo. Nunca mais seja pego de surpresa.',
    color: '#a78bfa',
    badge: 'Estratégico',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    title: 'Orçamentos Rápidos',
    desc: 'Crie orçamentos profissionais com materiais, valores e prazos. Envie direto pelo sistema e converta mais clientes.',
    color: '#f59e0b',
    badge: 'Conversão',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    title: 'Agenda e Prazos',
    desc: 'Organize sua agenda de serviços com datas e horários. Sua equipe sempre sabe o que fazer e quando.',
    color: '#fb7185',
    badge: 'Organização',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="7,10 12,15 17,10"/>
      </svg>
    ),
    title: 'Dashboard Completo',
    desc: 'Visão geral do negócio com gráficos, métricas e indicadores. Tome decisões baseadas em dados reais da sua operação.',
    color: '#38bdf8',
    badge: 'Visão Geral',
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative py-28 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.2)] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,10,20,0) 0%, rgba(0,17,34,0.5) 50%, rgba(0,10,20,0) 100%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] inline-block" />
              Funcionalidades
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-5">
              Tudo que sua empresa precisa{' '}
              <span className="gradient-text">para crescer</span>
            </h2>
            <p className="text-[#9ebdd4] text-lg max-w-2xl mx-auto">
              Cada funcionalidade foi desenvolvida pensando na rotina real de
              quem trabalha com película, PPF, envelopamento e adesivos.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.title} direction="up" delay={i * 80}>
              <div
                className="group relative rounded-2xl p-6 h-full overflow-hidden transition-all duration-500"
                style={{
                  background: 'rgba(0,13,26,0.8)',
                  border: '1px solid rgba(0,170,255,0.1)',
                }}
              >
                {/* hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}08 0%, transparent 60%)`,
                  }}
                />

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${feature.color}30`,
                  }}
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${feature.color}12`,
                        border: `1px solid ${feature.color}25`,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className="text-[10px] font-semibold py-1 px-2.5 rounded-full tracking-wide"
                      style={{
                        background: `${feature.color}12`,
                        border: `1px solid ${feature.color}20`,
                        color: feature.color,
                      }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#e8f4ff] mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#6b8ca4] leading-relaxed group-hover:text-[#8aadca] transition-colors">
                    {feature.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${feature.color}50, transparent)` }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
