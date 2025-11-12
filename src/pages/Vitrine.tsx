import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Remove scroll da página principal
    document.body.style.overflow = "hidden";
    
    return () => {
      // Restaura scroll ao sair da página
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header fixo - 80px de altura */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>
      
      {/* Iframe - altura calculada: 100vh - 80px (header) - 63px (badge) */}
      <div className="flex-1 w-full" style={{ height: "calc(100vh - 143px)" }}>
        <iframe
          src="https://dias-ferr.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
