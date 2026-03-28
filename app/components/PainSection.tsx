import AnimateOnScroll from './AnimateOnScroll';

const pains = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
    title: 'Orçamentos perdidos',
    desc: 'Você mandou por WhatsApp, anotou no caderno e esqueceu. Quando o cliente volta, não sabe mais o que foi cotado.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Clientes que desaparecem',
    desc: 'Sem histórico, sem acompanhamento. Você não sabe quando o cliente fez o último serviço ou quando pode entrar em contato.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    title: 'Estoque no escuro',
    desc: 'Você só sabe que acabou o material quando já está no meio do serviço. O controle de estoque é feito na base do chute.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Bagunça no dia a dia',
    desc: 'Agendamentos perdidos, serviços sem prazo, equipe sem organização. A operação cresce mas o caos também.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
    title: 'Serviços sem rastreamento',
    desc: 'Qual é o status do serviço do carro do João? Está pronto ou ainda em andamento? Ninguém sabe responder na hora.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Empresa crescendo sem controle',
    desc: 'Mais clientes, mais serviços, mais material — mas a gestão ainda é a mesma de quando você era só você.',
  },
];

export default function PainSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #ff3b30, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] inline-block" />
              Realidade do Mercado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-5">
              Se a sua operação depende de{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff8a80, #ff5252)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                memória e caderno
              </span>
              ,<br className="hidden sm:block" />
              você já está perdendo dinheiro.
            </h2>
            <p className="text-[#9ebdd4] text-lg max-w-2xl mx-auto">
              Essas são as dores que os aplicadores mais reclamam — e que o FilmPro resolve de vez.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <AnimateOnScroll key={pain.title} direction="up" delay={i * 80}>
              <div className="card-glass rounded-2xl p-6 h-full group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,80,80,0.08)',
                    border: '1px solid rgba(255,80,80,0.15)',
                    color: '#ff8a80',
                  }}
                >
                  {pain.icon}
                </div>
                <h3 className="text-base font-semibold text-[#e8f4ff] mb-2">{pain.title}</h3>
                <p className="text-sm text-[#6b8ca4] leading-relaxed">{pain.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Callout */}
        <AnimateOnScroll direction="up" delay={200}>
          <div
            className="mt-14 rounded-2xl p-8 text-center border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,82,204,0.12) 0%, rgba(0,17,34,0.8) 100%)',
              borderColor: 'rgba(0,170,255,0.2)',
              boxShadow: '0 0 60px rgba(0,82,204,0.12)',
            }}
          >
            <p className="text-xl sm:text-2xl font-semibold text-[#e8f4ff] leading-relaxed">
              &ldquo;Cada orçamento perdido, cada cliente esquecido e cada material
              comprado em excesso é dinheiro que saiu do seu bolso.&rdquo;
            </p>
            <p className="text-[#5a7a94] mt-4 text-sm">É hora de mudar isso.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
