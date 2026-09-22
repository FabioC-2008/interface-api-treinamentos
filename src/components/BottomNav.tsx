import React from "react";

type Tab = "dashboard" | "treinamentos" | "funcionarios" | "certificados" | "mais";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const items: { key: Tab; label: string; icon: (active: boolean) => React.ReactElement }[] = [
  {
    key: "dashboard",
    label: "Início",
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={a ? "#00C896" : "none"} stroke={a ? "#00C896" : "#5A7090"} strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    key: "treinamentos",
    label: "Treinos",
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a ? "#00C896" : "#5A7090"} strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    key: "funcionarios",
    label: "Equipe",
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a ? "#00C896" : "#5A7090"} strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    key: "certificados",
    label: "Certifs.",
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a ? "#00C896" : "#5A7090"} strokeWidth="1.8">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    key: "mais",
    label: "Mais",
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a ? "#00C896" : "#5A7090"} strokeWidth="1.8">
        <circle cx="12" cy="12" r="1"/>
        <circle cx="12" cy="5" r="1"/>
        <circle cx="12" cy="19" r="1"/>
      </svg>
    ),
  },
];

export default function BottomNav({ active, onChange }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#0D1528] border-t border-[#1A2A44] flex items-center px-2 pb-safe pt-2">
      {items.map(item => (
        <button
          key={item.key}
          onClick={() => onChange(item.key)}
          className="flex-1 flex flex-col items-center gap-1 py-2 active:scale-95 transition-transform"
        >
          {item.icon(active === item.key)}
          <span className={`text-[10px] font-medium ${active === item.key ? "text-[#00C896]" : "text-[#5A7090]"}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
