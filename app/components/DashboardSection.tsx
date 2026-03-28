import AnimateOnScroll from './AnimateOnScroll';

export default function DashboardSection() {
  return (
    <section id="demonstracao" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #0073e6 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,170,255,0.2)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] inline-block" />
              Sistema em Ação
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-5">
              Veja como fica{' '}
              <span className="gradient-text">sua operação organizada</span>
            </h2>
            <p className="text-[#9ebdd4] text-lg max-w-2xl mx-auto">
              Interface intuitiva, moderna e projetada para o dia a dia de quem atua com película e PPF.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Full dashboard mockup */}
        <AnimateOnScroll direction="up" delay={100}>
          <div
            className="rounded-3xl overflow-hidden border shadow-[0_60px_200px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,170,255,0.12)] mx-auto max-w-5xl"
            style={{
              background: 'rgba(0,8,18,0.97)',
              borderColor: 'rgba(0,170,255,0.15)',
              filter: 'drop-shadow(0 0 60px rgba(0,115,230,0.2))',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-5 py-3.5 border-b"
              style={{ background: 'rgba(0,13,26,1)', borderColor: 'rgba(0,170,255,0.1)' }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div
                  className="flex items-center gap-2 text-xs text-[#4a6a84] px-4 py-1.5 rounded-lg border"
                  style={{ background: 'rgba(0,170,255,0.05)', borderColor: 'rgba(0,170,255,0.1)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  app.filmpro.com.br
                </div>
              </div>
            </div>

            <div className="flex" style={{ minHeight: '520px' }}>
              {/* Sidebar */}
              <div
                className="w-[200px] border-r p-5 flex-shrink-0 flex flex-col hidden md:flex"
                style={{ background: 'rgba(0,10,20,1)', borderColor: 'rgba(0,170,255,0.08)' }}
              >
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0073e6] to-[#00aaff] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h16M4 18h10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#e8f4ff]">Film<span className="text-[#00aaff]">Pro</span></span>
                </div>

                <div className="text-[9px] font-semibold text-[#2a4a60] uppercase tracking-widest mb-3">Principal</div>
                {[
                  { icon: '⊞', label: 'Dashboard', active: true },
                  { icon: '👥', label: 'Clientes' },
                  { icon: '🔧', label: 'Serviços' },
                  { icon: '📋', label: 'Orçamentos' },
                  { icon: '📦', label: 'Estoque' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs mb-1 cursor-pointer transition-all text-[0.8rem] ${
                      item.active
                        ? 'bg-[rgba(0,115,230,0.18)] text-[#00aaff] border border-[rgba(0,170,255,0.18)]'
                        : 'text-[#4a6a84] hover:text-[#9ebdd4] hover:bg-[rgba(0,170,255,0.05)]'
                    }`}
                  >
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}

                <div className="text-[9px] font-semibold text-[#2a4a60] uppercase tracking-widest mt-5 mb-3">Relatórios</div>
                {[
                  { icon: '📊', label: 'Faturamento' },
                  { icon: '📈', label: 'Desempenho' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs mb-1 cursor-pointer text-[#4a6a84] hover:text-[#9ebdd4] hover:bg-[rgba(0,170,255,0.05)] transition-all text-[0.8rem]"
                  >
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}

                <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(0,170,255,0.08)' }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0052cc] to-[#0073e6] flex items-center justify-center text-[10px] font-bold text-white">JS</div>
                    <div>
                      <div className="text-xs text-[#9ebdd4] font-medium">João Silva</div>
                      <div className="text-[9px] text-[#3a5a74]">Administrador</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main */}
              <div className="flex-1 p-6 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-bold text-[#e8f4ff]">Dashboard</h3>
                    <p className="text-xs text-[#4a6a84]">Visão geral da sua operação</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="text-xs text-[#5a7a94] px-3 py-1.5 rounded-lg border cursor-pointer"
                      style={{ background: 'rgba(0,170,255,0.06)', borderColor: 'rgba(0,170,255,0.12)' }}
                    >
                      Março 2026
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
                      style={{ background: 'rgba(0,170,255,0.08)', border: '1px solid rgba(0,170,255,0.15)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Total Clientes', value: '247', sub: '+12 este mês', color: '#00aaff', trend: '+5.1%', icon: '👥' },
                    { label: 'Serviços Abertos', value: '38', sub: '12 finalizados hoje', color: '#22c55e', trend: '+3', icon: '🔧' },
                    { label: 'Receita Mensal', value: 'R$28.4k', sub: 'vs R$24.1k anterior', color: '#a78bfa', trend: '+18%', icon: '💰' },
                    { label: 'Orçamentos', value: '14', sub: '3 aguardando resposta', color: '#f59e0b', trend: '↻', icon: '📋' },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl p-3.5 border transition-all hover:scale-[1.02]"
                      style={{ background: 'rgba(0,17,34,0.9)', borderColor: 'rgba(0,170,255,0.1)' }}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-sm">{kpi.icon}</span>
                        <span
                          className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ color: kpi.color, background: `${kpi.color}15` }}
                        >
                          {kpi.trend}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-[#e8f4ff]">{kpi.value}</div>
                      <div className="text-[9px] text-[#5a7a94] mt-0.5">{kpi.label}</div>
                      <div className="text-[9px] text-[#3a5a74] mt-1">{kpi.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {/* Bar chart */}
                  <div
                    className="col-span-2 rounded-xl p-4 border"
                    style={{ background: 'rgba(0,13,26,0.9)', borderColor: 'rgba(0,170,255,0.08)' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs font-semibold text-[#9ebdd4]">Serviços por Mês</div>
                        <div className="text-[9px] text-[#3a5a74]">Últimos 12 meses</div>
                      </div>
                      <div className="flex gap-3 text-[9px] text-[#3a5a74]">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{ background: 'rgba(0,115,230,0.4)' }}/>2025</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block bg-[#0073e6]"/>2026</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-1" style={{ height: '80px' }}>
                      {[28, 45, 38, 62, 52, 78, 65, 88, 72, 82, 68, 95].map((h, i) => (
                        <div key={i} className="flex flex-col gap-0.5 flex-1">
                          <div
                            className="w-full rounded-sm"
                            style={{ height: `${h * 0.5}%`, background: i === 11 ? 'linear-gradient(to top, #0073e6, #00aaff)' : 'rgba(0,115,230,0.25)' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                        <span key={i} className="text-[7px] text-[#2a4a60] flex-1 text-center">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Donut chart placeholder */}
                  <div
                    className="rounded-xl p-4 border flex flex-col"
                    style={{ background: 'rgba(0,13,26,0.9)', borderColor: 'rgba(0,170,255,0.08)' }}
                  >
                    <div className="text-xs font-semibold text-[#9ebdd4] mb-3">Por Tipo</div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(0,170,255,0.1)" strokeWidth="3"/>
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#0073e6" strokeWidth="3"
                            strokeDasharray="40 60" strokeLinecap="round"/>
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3"
                            strokeDasharray="25 75" strokeDashoffset="-40" strokeLinecap="round"/>
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#a78bfa" strokeWidth="3"
                            strokeDasharray="20 80" strokeDashoffset="-65" strokeLinecap="round"/>
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="3"
                            strokeDasharray="15 85" strokeDashoffset="-85" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2">
                      {[
                        { label: 'PPF', color: '#0073e6', pct: '40%' },
                        { label: 'Película', color: '#22c55e', pct: '25%' },
                        { label: 'Envelop.', color: '#a78bfa', pct: '20%' },
                        { label: 'Adesivo', color: '#f59e0b', pct: '15%' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                          <span className="text-[8px] text-[#5a7a94]">{item.label}</span>
                          <span className="text-[8px] text-[#9ebdd4] ml-auto">{item.pct}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent services table */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ background: 'rgba(0,13,26,0.9)', borderColor: 'rgba(0,170,255,0.08)' }}
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'rgba(0,170,255,0.08)' }}>
                    <div className="text-xs font-semibold text-[#9ebdd4]">Serviços Recentes</div>
                    <button className="text-[9px] text-[#0073e6] hover:text-[#00aaff]">Ver todos →</button>
                  </div>
                  <div>
                    {[
                      { client: 'Carlos Mendes', vehicle: 'BMW X5 2023', service: 'PPF Full', value: 'R$ 4.200', status: 'Em andamento', dot: '#00aaff' },
                      { client: 'Ana Paula Costa', vehicle: 'Tesla Model 3', service: 'Envelopamento', value: 'R$ 3.800', status: 'Finalizado', dot: '#22c55e' },
                      { client: 'Rafael Souza', vehicle: 'Mercedes C300', service: 'Película Solar', value: 'R$ 1.100', status: 'Aguardando', dot: '#f59e0b' },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-5 gap-3 px-4 py-2.5 border-b items-center hover:bg-[rgba(0,170,255,0.03)] transition-colors last:border-0"
                        style={{ borderColor: 'rgba(0,170,255,0.05)' }}
                      >
                        <div className="col-span-2">
                          <div className="text-[10px] font-medium text-[#9ebdd4]">{row.client}</div>
                          <div className="text-[9px] text-[#3a5a74]">{row.vehicle}</div>
                        </div>
                        <div className="text-[10px] text-[#6b8ca4]">{row.service}</div>
                        <div className="text-[10px] font-medium text-[#9ebdd4]">{row.value}</div>
                        <div>
                          <span
                            className="text-[9px] font-medium px-2 py-0.5 rounded-full"
                            style={{ color: row.dot, background: `${row.dot}15` }}
                          >
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Caption */}
        <AnimateOnScroll direction="up" delay={200}>
          <p className="text-center text-[#4a6a84] text-sm mt-8">
            Interface real do FilmPro — simples, organizada e feita para o seu negócio.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
