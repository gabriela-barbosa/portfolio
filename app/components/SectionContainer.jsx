import { CornerBorders } from './decorations';

export default function SectionContainer({ children, className = "" }) {
  return (
    <section className={`mb-12 bg-card-bg p-6 rounded-lg border border-border-color shadow-sm backdrop-blur-sm relative overflow-hidden ${className}`}>
      <CornerBorders />
      
      {/* Conteúdo da seção */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
} 