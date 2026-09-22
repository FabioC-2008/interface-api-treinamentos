import { useState } from "react";
import { mockTreinamentos, mockParticipantes, mockInstrutores, mockEvidencias } from "../data/mock";
import StatusBadge from "../components/StatusBadge";

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

interface Props {
  id: number;
  onBack: () => void;
}

const TABS = ["Informações", "Participantes", "Instrutores", "Evidências"];

export default function TreinamentoDetalheScreen({ id, onBack }: Props) {
  const [tab, setTab] = useState(0);
  const treinamento = mockTreinamentos.find(t => t.id === id) ?? mockTreinamentos[0];
  const participantes = mockParticipantes.filter(p => p.treinamentoId === treinamento.id);
  const instrutoresTreino = mockInstrutores.slice(0, 2);
  const evidencias = mockEvidencias.filter(e => e.treinamentoId === treinamento.id);

  const tipoIcon: Record<string, string> = { foto: "📷", video: "🎬", documento: "📄" };

  return (
    <div className="flex flex-col h-full fade-in">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <button onClick={onBack} className="flex items-center gap-2 text-[#5A7090] mb-4 active:opacity-70">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m0 0l7 7m-7-7 7-7"/></svg>
          <span className="text-sm">Treinamentos</span>
        </button>
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-lg font-bold text-[#E2EAF4] leading-snug flex-1">{treinamento.titulo}</h1>
          <StatusBadge status={treinamento.status as any} />
        </div>
        <p className="text-[#5A7090] text-xs mt-2 flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          {treinamento.cargaHoraria}h · {new Date(treinamento.dataInicio).toLocaleDateString("pt-BR")}
        </p>
      </div>

      {/* Tabs */}
      <div className="px-5 mb-4 overflow-x-auto">
        <div className="flex gap-1 pb-1">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`shrink-0 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                tab === i ? "bg-[#00C896] text-[#070C18]" : "bg-[#0D1528] text-[#5A7090] border border-[#1A2A44]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto px-5 pb-10">

        {tab === 0 && (
          <div className="flex flex-col gap-3">
            <div className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#5A7090] uppercase tracking-wider mb-2">Descrição</p>
              <p className="text-[#E2EAF4] text-sm leading-relaxed">{treinamento.descricao}</p>
            </div>
            {[
              { label: "Início", value: fmt(treinamento.dataInicio) },
              { label: "Fim", value: fmt(treinamento.dataFim) },
              { label: "Carga Horária", value: `${treinamento.cargaHoraria} horas` },
              { label: "Status", value: treinamento.status },
            ].map(item => (
              <div key={item.label} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3 flex justify-between items-center">
                <span className="text-[#5A7090] text-sm">{item.label}</span>
                {item.label === "Status" ? (
                  <StatusBadge status={item.value as any} />
                ) : (
                  <span className="text-[#E2EAF4] text-sm font-medium">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="flex flex-col gap-3">
            {participantes.length === 0 && (
              <div className="text-center py-12 text-[#5A7090]">
                <p className="text-4xl mb-2">👥</p>
                <p className="text-sm">Nenhum participante inscrito</p>
              </div>
            )}
            {participantes.map(p => (
              <div key={p.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111E35] flex items-center justify-center text-[#00C896] text-xs font-bold shrink-0">
                  {initials(p.nome)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#E2EAF4] text-sm font-medium truncate">{p.nome}</p>
                  <p className="text-[#5A7090] text-xs mt-0.5">Inscrito em {new Date(p.inscritoEm).toLocaleDateString("pt-BR")}</p>
                </div>
                <StatusBadge status={p.status as any} size="xs" />
              </div>
            ))}
            <button className="border border-dashed border-[#1A2A44] rounded-2xl py-4 text-[#5A7090] text-sm flex items-center justify-center gap-2 active:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Inscrever Participante
            </button>
          </div>
        )}

        {tab === 2 && (
          <div className="flex flex-col gap-3">
            {instrutoresTreino.map(inst => (
              <div key={inst.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#111E35] flex items-center justify-center text-[#A78BFA] text-xs font-bold shrink-0">
                    {initials(inst.nome)}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#E2EAF4] text-sm font-semibold">{inst.nome}</p>
                    <p className="text-[#5A7090] text-xs">{inst.especialidade}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${inst.interno ? "bg-blue-500/15 text-blue-400" : "bg-purple-500/15 text-purple-400"}`}>
                    {inst.interno ? "Interno" : "Externo"}
                  </span>
                </div>
                <div className="border-t border-[#1A2A44] pt-3 flex flex-col gap-1.5">
                  <p className="text-xs text-[#5A7090] flex items-center gap-2"><span className="w-4">📋</span> {inst.registro}</p>
                  <p className="text-xs text-[#5A7090] flex items-center gap-2"><span className="w-4">✉️</span> {inst.email}</p>
                </div>
              </div>
            ))}
            <button className="border border-dashed border-[#1A2A44] rounded-2xl py-4 text-[#5A7090] text-sm flex items-center justify-center gap-2 active:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Vincular Instrutor
            </button>
          </div>
        )}

        {tab === 3 && (
          <div className="flex flex-col gap-3">
            {evidencias.length === 0 && (
              <div className="text-center py-12 text-[#5A7090]">
                <p className="text-4xl mb-2">📁</p>
                <p className="text-sm">Nenhuma evidência registrada</p>
              </div>
            )}
            {evidencias.map(ev => (
              <div key={ev.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#111E35] flex items-center justify-center text-xl shrink-0">
                  {tipoIcon[ev.tipo] ?? "📎"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#E2EAF4] text-sm font-medium truncate">{ev.descricao}</p>
                  <p className="text-[#5A7090] text-xs mt-0.5">{ev.arquivo}</p>
                  <p className="text-[#5A7090] text-xs">{new Date(ev.registradoEm).toLocaleDateString("pt-BR")}</p>
                </div>
                <button className="text-[#00C896] p-2 active:opacity-70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              </div>
            ))}
            <button className="border border-dashed border-[#1A2A44] rounded-2xl py-4 text-[#5A7090] text-sm flex items-center justify-center gap-2 active:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Adicionar Evidência
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
