import { useState } from "react";
import { mockCertificados } from "../data/mock";
import StatusBadge from "../components/StatusBadge";

const FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "valido", label: "Válido" },
  { key: "expirado", label: "Expirado" },
  { key: "cancelado", label: "Cancelado" },
];

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR");
}

export default function CertificadosScreen() {
  const [filter, setFilter] = useState("todos");
  const [search, setSearch] = useState("");

  const filtered = mockCertificados.filter(c => {
    const matchStatus = filter === "todos" || c.status === filter;
    const matchSearch =
      c.funcionario.toLowerCase().includes(search.toLowerCase()) ||
      c.treinamento.toLowerCase().includes(search.toLowerCase()) ||
      c.numero.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#E2EAF4]">Certificados</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockCertificados.length} emitidos</p>
      </div>

      <div className="px-5 mb-3">
        <div className="bg-[#0D1528] border border-[#1A2A44] rounded-xl flex items-center gap-3 px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar certificado..."
            className="bg-transparent text-sm text-[#E2EAF4] placeholder:text-[#2A3A54] flex-1"
          />
        </div>
      </div>

      <div className="px-5 mb-4 overflow-x-auto">
        <div className="flex gap-2 pb-1">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f.key ? "bg-[#00C896] text-[#070C18]" : "bg-[#0D1528] text-[#5A7090] border border-[#1A2A44]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-28 flex flex-col gap-3">
        {filtered.map(c => (
          <div key={c.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 text-base">
                  📜
                </div>
                <div>
                  <p className="text-[#00C896] text-xs font-mono font-semibold">{c.numero}</p>
                  <p className="text-[#E2EAF4] text-sm font-medium">{c.funcionario}</p>
                </div>
              </div>
              <StatusBadge status={c.status as any} size="xs" />
            </div>
            <p className="text-[#5A7090] text-xs leading-relaxed mb-3 line-clamp-1">{c.treinamento}</p>
            <div className="border-t border-[#1A2A44] pt-3 flex items-center justify-between text-xs text-[#5A7090]">
              <span>Emissão: <span className="text-[#E2EAF4]">{fmt(c.dataEmissao)}</span></span>
              <span>Validade: <span className={c.status === "expirado" ? "text-red-400" : "text-[#E2EAF4]"}>{fmt(c.dataValidade)}</span></span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#5A7090]">
            <p className="text-4xl mb-3">📜</p>
            <p className="text-sm">Nenhum certificado encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
