export default function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[rgba(51,133,255,0.2)] shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(51,133,255,0.1)] float-animation"
      style={{ background: 'rgba(2,9,19,0.97)' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(51,133,255,0.1)]"
        style={{ background: 'rgba(3,13,26,0.95)' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[rgba(51,133,255,0.08)] border border-[rgba(51,133,255,0.12)] rounded-md px-3 py-1 text-xs text-[#4A6E8C] flex items-center gap-2 max-w-[180px] mx-auto">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            app.filmpro.com.br
          </div>
        </div>
      </div>

      <div className="flex" style={{ minHeight: '420px' }}>
        {/* Sidebar */}
        <div className="w-[180px] border-r border-[rgba(51,133,255,0.08)] p-4 flex flex-col gap-1 hidden sm:flex"
          style={{ background: 'rgba(3,10,22,0.85)' }}>
          <div className="text-[10px] font-semibold text-[#2A4A64] uppercase tracking-widest mb-3 px-2">Menu</div>
          {[
            {
              label: 'Dashboard', active: true,
              path: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
            },
            {
              label: 'Clientes', active: false,
              path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
            },
            {
              label: 'Serviços', active: false,
              path: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
            },
            {
              label: 'Orçamentos', active: false,
              path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
            },
            {
              label: 'Estoque', active: false,
              path: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
            },
            {
              label: 'Relatórios', active: false,
              path: 'M18 20V10M12 20V4M6 20v-6',
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                item.active
                  ? 'bg-[rgba(26,86,214,0.22)] text-[#60BAFF] border border-[rgba(51,133,255,0.22)]'
                  : 'text-[#4A6E8C] hover:text-[#94B8D8]'
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.path}/>
              </svg>
              {item.label}
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-[rgba(51,133,255,0.08)]">
            <div className="flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1040B8] to-[#3385FF] flex items-center justify-center text-[9px] font-bold text-white">JS</div>
              <div>
                <div className="text-[10px] text-[#94B8D8] font-medium">João Silva</div>
                <div className="text-[9px] text-[#2A4A64]">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-semibold text-[#EDF4FF]">Dashboard</div>
              <div className="text-[10px] text-[#4A6E8C]">Bem-vindo de volta, João</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[10px] text-[#4A6E8C] bg-[rgba(51,133,255,0.08)] border border-[rgba(51,133,255,0.12)] px-2 py-1 rounded-md">
                Mar 2026
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
            {[
              { label: 'Clientes Ativos', value: '247', change: '+12%', color: '#3385FF' },
              { label: 'Serviços Abertos', value: '38', change: '+5', color: '#22c55e' },
              { label: 'Faturamento', value: 'R$28k', change: '+18%', color: '#a78bfa' },
              { label: 'Orçamentos', value: '14', change: '3 pen.', color: '#f59e0b' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 border border-[rgba(51,133,255,0.1)]"
                style={{ background: 'rgba(5,15,34,0.95)' }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ background: stat.color }} />
                  <span
                    className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                    style={{ color: stat.color, background: `${stat.color}18` }}
                  >
                    {stat.change}
                  </span>
                </div>
                <div className="text-base font-bold text-[#EDF4FF]">{stat.value}</div>
                <div className="text-[9px] text-[#4A6E8C] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart + table row */}
          <div className="grid grid-cols-5 gap-3">
            {/* Mini bar chart */}
            <div
              className="col-span-3 rounded-xl p-3 border border-[rgba(51,133,255,0.1)]"
              style={{ background: 'rgba(5,15,34,0.95)' }}
            >
              <div className="text-[10px] font-semibold text-[#94B8D8] mb-3">Serviços / mês</div>
              <div className="flex items-end justify-between gap-1" style={{ height: '70px' }}>
                {[35, 55, 42, 70, 60, 85, 68, 90, 75, 95, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'linear-gradient(to top, #1040B8, #3385FF)'
                        : 'rgba(26,86,214,0.22)',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'].map((m) => (
                  <span key={m} className="text-[8px] text-[#2A4A64] flex-1 text-center">{m.slice(0,1)}</span>
                ))}
              </div>
            </div>

            {/* Quick list */}
            <div
              className="col-span-2 rounded-xl p-3 border border-[rgba(51,133,255,0.1)]"
              style={{ background: 'rgba(5,15,34,0.95)' }}
            >
              <div className="text-[10px] font-semibold text-[#94B8D8] mb-2">Últimos serviços</div>
              <div className="flex flex-col gap-1.5">
                {[
                  { client: 'Carlos M.', service: 'PPF Total', status: 'Em andamento', dot: '#3385FF' },
                  { client: 'Ana P.', service: 'Envelopamento', status: 'Finalizado', dot: '#22c55e' },
                  { client: 'Rafael S.', service: 'Película Solar', status: 'Aguardando', dot: '#f59e0b' },
                  { client: 'Tech Glass', service: 'PPF Parcial', status: 'Em andamento', dot: '#3385FF' },
                ].map((item) => (
                  <div key={item.client} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-medium text-[#94B8D8] truncate">{item.client}</div>
                      <div className="text-[8px] text-[#2A4A64] truncate">{item.service}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
