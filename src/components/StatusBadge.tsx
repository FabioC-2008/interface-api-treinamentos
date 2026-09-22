type TrainingStatus = "pendente" | "em_andamento" | "concluido" | "cancelado";
type CertStatus = "valido" | "expirado" | "cancelado";
type ParticipantStatus = "pendente" | "aprovado" | "reprovado";

type Status = TrainingStatus | CertStatus | ParticipantStatus;

const config: Record<string, { label: string; cls: string }> = {
  pendente:     { label: "Pendente",      cls: "bg-amber-500/15 text-amber-400 border border-amber-500/25" },
  em_andamento: { label: "Em Andamento",  cls: "bg-blue-500/15 text-blue-400 border border-blue-500/25" },
  concluido:    { label: "Concluído",     cls: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  cancelado:    { label: "Cancelado",     cls: "bg-red-500/15 text-red-400 border border-red-500/25" },
  valido:       { label: "Válido",        cls: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  expirado:     { label: "Expirado",      cls: "bg-amber-500/15 text-amber-400 border border-amber-500/25" },
  aprovado:     { label: "Aprovado",      cls: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" },
  reprovado:    { label: "Reprovado",     cls: "bg-red-500/15 text-red-400 border border-red-500/25" },
};

export default function StatusBadge({ status, size = "sm" }: { status: Status; size?: "xs" | "sm" }) {
  const c = config[status] ?? { label: status, cls: "bg-[#1A2A44] text-[#5A7090]" };
  const sizeClass = size === "xs" ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-0.5";
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${sizeClass} ${c.cls}`}>
      {c.label}
    </span>
  );
}
