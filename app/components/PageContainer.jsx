import { DottedPattern } from './decorations';

export default function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 relative overflow-hidden">
      {/* Fundo com padrão decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/30 filter blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/30 filter blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <DottedPattern />
      
      {/* Conteúdo principal */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 