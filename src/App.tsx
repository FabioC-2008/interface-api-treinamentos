import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import TreinamentosScreen from "./screens/TreinamentosScreen";
import TreinamentoDetalheScreen from "./screens/TreinamentoDetalheScreen";
import FuncionariosScreen from "./screens/FuncionariosScreen";
import CertificadosScreen from "./screens/CertificadosScreen";
import MaisScreen from "./screens/MaisScreen";
import BottomNav from "./components/BottomNav";

type Tab = "dashboard" | "treinamentos" | "funcionarios" | "certificados" | "mais";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [detailId, setDetailId] = useState<number | null>(null);

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  function handleNavigate(screen: string, id?: number) {
    if (screen === "treinamento-detalhe" && id !== undefined) {
      setDetailId(id);
    } else if (screen === "treinamentos") {
      setTab("treinamentos");
      setDetailId(null);
    } else if (screen === "certificados") {
      setTab("certificados");
    } else if (screen === "auditoria") {
      setTab("mais");
    }
  }

  return (
    <div className="relative w-full h-full max-w-[430px] mx-auto bg-[#070C18] overflow-hidden">
      {/* Screen area */}
      <div className="absolute inset-0 bottom-0">
        {detailId !== null ? (
          <TreinamentoDetalheScreen
            id={detailId}
            onBack={() => setDetailId(null)}
          />
        ) : tab === "dashboard" ? (
          <DashboardScreen onNavigate={handleNavigate} />
        ) : tab === "treinamentos" ? (
          <TreinamentosScreen onNavigate={handleNavigate} />
        ) : tab === "funcionarios" ? (
          <FuncionariosScreen />
        ) : tab === "certificados" ? (
          <CertificadosScreen />
        ) : (
          <MaisScreen />
        )}
      </div>

      {/* Bottom nav — hidden in detail view */}
      {detailId === null && (
        <BottomNav
          active={tab}
          onChange={t => { setTab(t); setDetailId(null); }}
        />
      )}
    </div>
  );
}
