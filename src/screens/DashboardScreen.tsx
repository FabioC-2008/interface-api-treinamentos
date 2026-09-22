import { mockDashboard, mockTreinamentos } from "../data/mock";
import StatusBadge from "../components/StatusBadge";

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

interface Props {
  onNavigate: (screen: string, id?: number) => void;
}

export default function DashboardScreen({ onNavigate }: Props) {
  const recent = mockTreinamentos.slice(0, 4);

  const stats = [
    { label: "Treinamentos", value: mockDashboard.quantidadeTreinamentos, icon: "🎓", accent: "#00C896" },
    { label: "Funcionários", value: mockDashboard.quantidadeFuncionarios, icon: "👥", accent: "#3B82F6" },
    { label: "Instrutores",  value: mockDashboard.quantidadeInstrutores, icon: "🏫", accent: "#A78BFA" },
    { label: "Certificados", value: mockDashboard.quantidadeCertificados, icon: "📜", accent: "#F59E0B" },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto fade-in pb-24">
      {/* Top header */}
      <div className="px-5 pt-14 pb-5">
        <p className="text-[#5A7090] text-sm">Bom dia,</p>
        <h1 className="text-xl font-bold text-[#E2EAF4] mt-0.5">Carlos Souza</h1>
      </div>

      {/* Alert banner */}
      <div className="mx-5 mb-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div>
          <p className="text-amber-400 text-xs font-semibold">2 treinamentos pendentes</p>
          <p className="text-[#5A7090] text-xs mt-0.5">Início previsto para outubro</p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="px-5 grid grid-cols-2 gap-3 mb-6">
        {stats.map(s => (
          <div key={s.label} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
            <div className="text-2xl mb-2">{s.icon}</div>
            <p className="text-2xl font-bold" style={{ color: s.accent }}>{s.value}</p>
            <p className="text-[#5A7090] text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="px-5 mb-6">
        <h2 className="text-sm font-semibold text-[#5A7090] uppercase tracking-wider mb-3">Ações Rápidas</h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Novo Treino", icon: "➕", screen: "novo-treinamento" },
            { label: "Certificados", icon: "📜", screen: "certificados" },
            { label: "Auditoria", icon: "🔍", screen: "auditoria" },
          ].map(a => (
            <button
              key={a.label}
              onClick={() => onNavigate(a.screen)}
              className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl py-4 flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <span className="text-xl">{a.icon}</span>
              <span className="text-[#5A7090] text-xs font-medium">{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent trainings */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-[#5A7090] uppercase tracking-wider">Recentes</h2>
          <button onClick={() => onNavigate("treinamentos")} className="text-[#00C896] text-xs font-medium">Ver todos</button>
        </div>
        <div className="flex flex-col gap-2">
          {recent.map(t => (
            <button
              key={t.id}
              onClick={() => onNavigate("treinamento-detalhe", t.id)}
              className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3.5 flex items-center gap-3 active:scale-[0.98] transition-transform text-left w-full"
            >
              <div className="w-10 h-10 rounded-xl bg-[#111E35] flex items-center justify-center shrink-0 text-lg">
                🎓
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#E2EAF4] text-sm font-medium truncate">{t.titulo}</p>
                <p className="text-[#5A7090] text-xs mt-0.5">{fmt(t.dataInicio)} · {t.cargaHoraria}h</p>
              </div>
              <StatusBadge status={t.status as any} size="xs" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
