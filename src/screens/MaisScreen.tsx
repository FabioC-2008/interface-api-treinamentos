import { useState } from "react";
import { mockInstrutores, mockUsuarios, mockPerfis, mockAuditorias } from "../data/mock";
import StatusBadge from "../components/StatusBadge";

type Section = "menu" | "instrutores" | "usuarios" | "perfis" | "auditoria";

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days > 30) return new Date(iso).toLocaleDateString("pt-BR");
  if (days > 0) return `${days}d atrás`;
  const hours = Math.floor(diff / 3600000);
  if (hours > 0) return `${hours}h atrás`;
  return "agora";
}

const actionColor: Record<string, string> = {
  criacao: "text-emerald-400 bg-emerald-500/15",
  atualizacao: "text-blue-400 bg-blue-500/15",
  exclusao: "text-red-400 bg-red-500/15",
};
const actionLabel: Record<string, string> = {
  criacao: "Criação",
  atualizacao: "Atualização",
  exclusao: "Exclusão",
};

export default function MaisScreen() {
  const [section, setSection] = useState<Section>("menu");

  if (section === "instrutores") return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => setSection("menu")} className="flex items-center gap-2 text-[#5A7090] mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m0 0l7 7m-7-7 7-7"/></svg>
          <span className="text-sm">Mais</span>
        </button>
        <h1 className="text-xl font-bold text-[#E2EAF4]">Instrutores</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockInstrutores.length} cadastrados</p>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-24 flex flex-col gap-3">
        {mockInstrutores.map(inst => (
          <div key={inst.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold shrink-0">
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
            <div className="border-t border-[#1A2A44] pt-3 grid grid-cols-2 gap-2">
              <div>
                <p className="text-[#5A7090] text-xs">Registro</p>
                <p className="text-[#E2EAF4] text-xs mt-0.5 font-mono">{inst.registro}</p>
              </div>
              <div>
                <p className="text-[#5A7090] text-xs">E-mail</p>
                <p className="text-[#E2EAF4] text-xs mt-0.5 truncate">{inst.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (section === "usuarios") return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => setSection("menu")} className="flex items-center gap-2 text-[#5A7090] mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m0 0l7 7m-7-7 7-7"/></svg>
          <span className="text-sm">Mais</span>
        </button>
        <h1 className="text-xl font-bold text-[#E2EAF4]">Usuários</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockUsuarios.length} usuários</p>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-24 flex flex-col gap-3">
        {mockUsuarios.map(u => (
          <div key={u.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111E35] flex items-center justify-center text-[#00C896] text-xs font-bold shrink-0">
              {initials(u.nome)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#E2EAF4] text-sm font-medium truncate">{u.nome}</p>
              <p className="text-[#5A7090] text-xs truncate">{u.email}</p>
              <span className="text-[10px] text-[#5A7090] bg-[#111E35] px-1.5 py-0.5 rounded-md mt-1 inline-block">{u.perfil}</span>
            </div>
            <div className={`w-2 h-2 rounded-full ${u.ativo ? "bg-emerald-400" : "bg-[#2A3A54]"}`} />
          </div>
        ))}
      </div>
    </div>
  );

  if (section === "perfis") return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => setSection("menu")} className="flex items-center gap-2 text-[#5A7090] mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m0 0l7 7m-7-7 7-7"/></svg>
          <span className="text-sm">Mais</span>
        </button>
        <h1 className="text-xl font-bold text-[#E2EAF4]">Perfis de Acesso</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockPerfis.length} perfis</p>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-24 flex flex-col gap-3">
        {mockPerfis.map(p => (
          <div key={p.id} className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="text-[#E2EAF4] text-sm font-semibold">{p.nome}</p>
              <span className="text-[#5A7090] text-xs bg-[#111E35] px-2 py-0.5 rounded-md">{p.permissoes} permissões</span>
            </div>
            <p className="text-[#5A7090] text-xs">{p.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (section === "auditoria") return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => setSection("menu")} className="flex items-center gap-2 text-[#5A7090] mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m0 0l7 7m-7-7 7-7"/></svg>
          <span className="text-sm">Mais</span>
        </button>
        <h1 className="text-xl font-bold text-[#E2EAF4]">Log de Auditoria</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">{mockAuditorias.length} registros</p>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-24">
        <div className="relative flex flex-col gap-0">
          {mockAuditorias.map((a, i) => (
            <div key={a.id} className="flex gap-4 pb-5">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${actionColor[a.acao] ?? "text-[#5A7090] bg-[#111E35]"}`}>
                  {a.acao === "criacao" ? "+" : a.acao === "atualizacao" ? "✎" : "✕"}
                </div>
                {i < mockAuditorias.length - 1 && <div className="w-px flex-1 bg-[#1A2A44] mt-1" />}
              </div>
              <div className="flex-1 pt-1 pb-1">
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${actionColor[a.acao] ?? ""}`}>
                    {actionLabel[a.acao] ?? a.acao}
                  </span>
                  <span className="text-[10px] text-[#5A7090]">{timeAgo(a.realizadoEm)}</span>
                </div>
                <p className="text-[#E2EAF4] text-sm font-medium mt-1.5">{a.detalhe}</p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-[#5A7090]">
                  <span className="bg-[#111E35] px-1.5 py-0.5 rounded text-[10px]">{a.entidade}</span>
                  <span>por <span className="text-[#E2EAF4]">{a.usuario}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const menuItems = [
    { key: "instrutores", icon: "🏫", label: "Instrutores", count: mockInstrutores.length, sub: "Gestão de instrutores" },
    { key: "usuarios", icon: "👤", label: "Usuários", count: mockUsuarios.length, sub: "Contas do sistema" },
    { key: "perfis", icon: "🔐", label: "Perfis", count: mockPerfis.length, sub: "Controle de acesso" },
    { key: "auditoria", icon: "🔍", label: "Auditoria", count: mockAuditorias.length, sub: "Log de atividades" },
  ];

  return (
    <div className="flex flex-col h-full fade-in">
      <div className="px-5 pt-14 pb-6">
        <h1 className="text-xl font-bold text-[#E2EAF4]">Administração</h1>
        <p className="text-[#5A7090] text-sm mt-0.5">Gestão avançada do sistema</p>
      </div>

      {/* Profile card */}
      <div className="mx-5 mb-6 bg-[#0D1528] border border-[#1A2A44] rounded-2xl p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#00C896]/20 flex items-center justify-center text-[#00C896] font-bold text-sm shrink-0">
          CS
        </div>
        <div className="flex-1">
          <p className="text-[#E2EAF4] font-semibold text-sm">Carlos Souza</p>
          <p className="text-[#5A7090] text-xs">carlos.souza@empresa.com</p>
          <span className="text-[10px] text-[#00C896] bg-[#00C896]/10 px-1.5 py-0.5 rounded-md mt-1 inline-block font-semibold">Administrador</span>
        </div>
        <button className="w-8 h-8 rounded-lg bg-[#111E35] flex items-center justify-center text-[#5A7090] active:opacity-70">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
      </div>

      <div className="px-5">
        <p className="text-xs font-semibold text-[#5A7090] uppercase tracking-wider mb-3">Módulos</p>
        <div className="flex flex-col gap-2">
          {menuItems.map(item => (
            <button
              key={item.key}
              onClick={() => setSection(item.key as Section)}
              className="bg-[#0D1528] border border-[#1A2A44] rounded-2xl px-4 py-3.5 flex items-center gap-3 active:scale-[0.98] transition-transform w-full text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-[#111E35] flex items-center justify-center text-xl shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-[#E2EAF4] text-sm font-semibold">{item.label}</p>
                <p className="text-[#5A7090] text-xs mt-0.5">{item.sub}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#5A7090] text-xs bg-[#111E35] px-2 py-0.5 rounded-md">{item.count}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
