import AnimateOnScroll from './AnimateOnScroll';

const segments = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="20" r="1"/>
        <circle cx="20" cy="20" r="1"/>
      </svg>
    ),
    title: 'Aplicadores Automotivos',
    desc: 'Película solar, PPF completo ou parcial, envelopamento de carros e motos. Gerencie clientes, veículos e todo o histórico de cada serviço.',
    tags: ['Película Solar', 'PPF', 'Envelopamento'],
    color: '#00aaff',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Aplicadores Arquitetônicos',
    desc: 'Película de controle solar em residências e comércios, segurança, privacidade e decoração. Controle contratos, ambientes e materiais.',
    tags: ['Controle Solar', 'Segurança', 'Decoração'],
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Especialistas em PPF',
    desc: 'Para quem trabalha com proteção de pintura de alto padrão. Rastreie cada etapa do serviço, materiais usados e histórico por veículo.',
    tags: ['Paint Protection', 'Alto Padrão', 'Detailing'],
    color: '#22c55e',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Adesivos e Comunicação Visual',
    desc: 'Frotas, plotagens, sinalização e comunicação visual. Gerencie projetos, materiais e prazos de entrega com total organização.',
    tags: ['Frotas', 'Plotagem', 'Sinalização'],
    color: '#f59e0b',
  },
];

export default function ForWhoSection() {
  return (
    <section id="para-quem" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.2)] to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #0073e6, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] inline-block" />
              Para Quem É
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-5">
              O FilmPro foi feito{' '}
              <span className="gradient-text">para você</span>
            </h2>
            <p className="text-[#9ebdd4] text-lg max-w-2xl mx-auto">
              Se você trabalha com película, PPF, envelopamento ou adesivos — automotivo ou arquitetônico —
              o FilmPro é o sistema certo para o seu negócio.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {segments.map((seg, i) => (
            <AnimateOnScroll key={seg.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
              <div
                className="group relative rounded-2xl p-7 h-full overflow-hidden transition-all duration-500"
                style={{
                  background: 'rgba(0,13,26,0.85)',
                  border: '1px solid rgba(0,170,255,0.1)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${seg.color}06 0%, transparent 60%)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${seg.color}25` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${seg.color}12`,
                      border: `1px solid ${seg.color}22`,
                      color: seg.color,
                    }}
                  >
                    {seg.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#e8f4ff] mb-3">{seg.title}</h3>
                  <p className="text-[#6b8ca4] leading-relaxed mb-5">{seg.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {seg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          color: seg.color,
                          background: `${seg.color}10`,
                          border: `1px solid ${seg.color}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Universal message */}
        <AnimateOnScroll direction="up" delay={200}>
          <div
            className="mt-12 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6 border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,82,204,0.12), rgba(0,13,26,0.9))',
              borderColor: 'rgba(0,170,255,0.2)',
            }}
          >
            <div>
              <p className="text-lg font-semibold text-[#e8f4ff] mb-1">
                Independente do seu nicho, o FilmPro se adapta.
              </p>
              <p className="text-[#6b8ca4] text-sm">
                Automotivo, arquitetônico, frota, residencial — o sistema cresce com o seu negócio.
              </p>
            </div>
            <a
              href="https://wa.me/5541999145537?text=Ol%C3%A1%2C+tenho+interesse+no+FilmPro%21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                Quero experimentar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
