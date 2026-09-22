import { useState } from "react";
import { mockTreinamentos } from "../data/mock";
import StatusBadge from "../components/StatusBadge";

const FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "pendente", label: "Pendente" },
  { key: "em_andamento", label: "Em Andamento" },
  { key: "concluido", label: "Concluído" },
  { key: "cancelado", label: "Cancelado" },
];

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

interface Props {
  onNavigate: (screen: string, id?: number) => void;
}

export default function TreinamentosScreen({ onNavigate }: Props) {
  const [filter, setFilter] = useState("todos");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = mockTreinamentos.filter(t => {
    const matchStatus = filter === "todos" || t.status === filter;
    const matchSearch = t.titulo.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="flex flex-col h-full fade-in">
      {/* Header */}
      <div className="px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#E2EAF4]">Treinamentos</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockTreinamentos.length} registros</p>
      </div>

      {/* Search */}
      <div className="px-5 mb-3">
        <div className="bg-[#0D1528] border border-[#1A2A44] rounded-xl flex items-center gap-3 px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar treinamento..."
            className="bg-transparent text-sm text-[#E2EAF4] placeholder:text-[#2A3A54] flex-1"
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-5 mb-4 overflow-x-auto">
        <div className="flex gap-2 pb-1">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f.key
                  ? "bg-[#00C896] text-[#070C18]"
                  : "bg-[#0D1528] text-[#5A7090] border border-[#1A2A44]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-5 pb-28 flex flex-col gap-3">
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-[#5A7090]">
            <span className="text-4xl mb-3">🔍</span>
            <p className="text-sm">Nenhum treinamento encontrado</p>
          </div>
        )}
        {filtered.map(t => (
          <button
            key={t.id}
            onClick={() => onNavigate("treinamento-detalhe", t.id)}
            className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4 text-left active:scale-[0.98] transition-transform w-full"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-[#E2EAF4] text-sm font-semibold leading-snug flex-1">{t.titulo}</p>
              <StatusBadge status={t.status as any} size="xs" />
            </div>
            <p className="text-[#5A7090] text-xs leading-relaxed line-clamp-2 mb-3">{t.descricao}</p>
            <div className="flex items-center gap-4 text-xs text-[#5A7090]">
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {fmt(t.dataInicio)}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                {t.cargaHoraria}h
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button
        onClick={() => setShowForm(true)}
        className="absolute bottom-24 right-5 w-14 h-14 bg-[#00C896] rounded-2xl flex items-center justify-center shadow-[0_4px_24px_#00C89660] active:scale-95 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#070C18" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>

      {/* New training modal */}
      {showForm && (
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end z-50" onClick={() => setShowForm(false)}>
          <div className="bg-[#0D1528] rounded-t-3xl p-6 slide-up" onClick={e => e.stopPropagation()}>
            <div className="w-10 h-1 bg-[#1A2A44] rounded-full mx-auto mb-6" />
            <h2 className="text-[#E2EAF4] font-bold text-lg mb-5">Novo Treinamento</h2>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { label: "Título", placeholder: "NR-35 – Trabalho em Altura" },
                { label: "Carga Horária (h)", placeholder: "8" },
                { label: "Data de Início", placeholder: "01/10/2026" },
              ].map(f => (
                <div key={f.label}>
                  <label className="text-xs font-medium text-[#5A7090] uppercase tracking-wider mb-1.5 block">{f.label}</label>
                  <input
                    className="w-full bg-[#111E35] border border-[#1A2A44] rounded-xl px-4 py-3 text-[#E2EAF4] text-sm placeholder:text-[#2A3A54]"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="w-full bg-[#00C896] text-[#070C18] font-semibold rounded-xl py-3.5 text-sm"
            >
              Criar Treinamento
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
