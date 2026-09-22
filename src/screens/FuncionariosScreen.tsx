import { useState } from "react";
import { mockFuncionarios } from "../data/mock";

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

const COLORS = ["#00C896", "#3B82F6", "#A78BFA", "#F59E0B", "#EF4444", "#10B981", "#EC4899", "#14B8A6"];

export default function FuncionariosScreen() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = mockFuncionarios.filter(f =>
    f.nome.toLowerCase().includes(search.toLowerCase()) ||
    f.setor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <h1 className="text-xl font-bold text-[#E2EAF4]">Funcionários</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockFuncionarios.length} cadastrados</p>
      </div>

      <div className="px-5 mb-4">
        <div className="bg-[#0D1528] border border-[#1A2A44] rounded-xl flex items-center gap-3 px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por nome ou setor..."
            className="bg-transparent text-sm text-[#E2EAF4] placeholder:text-[#2A3A54] flex-1"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-28 flex flex-col gap-2">
        {filtered.map((f, i) => (
          <div key={f.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ backgroundColor: COLORS[i % COLORS.length] + "20", color: COLORS[i % COLORS.length] }}
            >
              {initials(f.nome)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#E2EAF4] text-sm font-medium truncate">{f.nome}</p>
              <p className="text-[#5A7090] text-xs mt-0.5">{f.cargo}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-[#111E35] text-[#5A7090] text-[10px] px-1.5 py-0.5 rounded-md font-medium">{f.setor}</span>
                <span className="text-[#2A3A54] text-xs">{f.matricula}</span>
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg bg-[#111E35] flex items-center justify-center active:opacity-70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="absolute bottom-24 right-5 w-14 h-14 bg-[#00C896] rounded-2xl flex items-center justify-center shadow-[0_4px_24px_#00C89660] active:scale-95 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#070C18" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>

      {showForm && (
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end z-50" onClick={() => setShowForm(false)}>
          <div className="bg-[#0D1528] rounded-t-3xl p-6 slide-up" onClick={e => e.stopPropagation()}>
            <div className="w-10 h-1 bg-[#1A2A44] rounded-full mx-auto mb-6" />
            <h2 className="text-[#E2EAF4] font-bold text-lg mb-5">Novo Funcionário</h2>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { label: "Nome Completo", placeholder: "Maria Oliveira" },
                { label: "Matrícula", placeholder: "F009" },
                { label: "Cargo", placeholder: "Técnico de Segurança" },
                { label: "Setor", placeholder: "Operações" },
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
              Cadastrar Funcionário
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
