import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState("carlos.souza@empresa.com");
  const [senha, setSenha] = useState("senhaSegura123");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 900);
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070C18] px-6 py-10 fade-in">
      {/* Header */}
      <div className="flex flex-col items-center pt-12">
        <div className="w-16 h-16 rounded-2xl bg-[#00C896] flex items-center justify-center mb-6 shadow-[0_0_40px_#00C89650]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L6 9v7c0 6.1 4.2 11.8 10 13.2C21.8 27.8 26 22.1 26 16V9L16 4Z" fill="white" fillOpacity="0.2"/>
            <path d="M16 4L6 9v7c0 6.1 4.2 11.8 10 13.2C21.8 27.8 26 22.1 26 16V9L16 4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M11 16l3.5 3.5L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#E2EAF4] tracking-tight">TrainSync</h1>
        <p className="text-[#5A7090] text-sm mt-1">Gestão de Treinamentos</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto">
        <div>
          <label className="text-xs font-medium text-[#5A7090] uppercase tracking-wider mb-1.5 block">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#0D1528] border border-[#1A2A44] rounded-xl px-4 py-3.5 text-[#E2EAF4] text-sm placeholder:text-[#2A3A54] focus:border-[#00C896] transition-colors"
            placeholder="seu@empresa.com"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-[#5A7090] uppercase tracking-wider mb-1.5 block">Senha</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="w-full bg-[#0D1528] border border-[#1A2A44] rounded-xl px-4 py-3.5 text-[#E2EAF4] text-sm placeholder:text-[#2A3A54] focus:border-[#00C896] transition-colors pr-12"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPass(v => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A7090] p-1"
            >
              {showPass ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full bg-[#00C896] text-[#070C18] font-semibold rounded-xl py-3.5 text-sm transition-all active:scale-95 disabled:opacity-60 shadow-[0_4px_20px_#00C89640]"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
              Entrando...
            </span>
          ) : "Entrar"}
        </button>
      </form>

      <p className="text-center text-xs text-[#2A3A54]">v1.0.0 · TrainSync Enterprise</p>
    </div>
  );
}
