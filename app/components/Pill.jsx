import { TECH_ICONS } from '@/app/constants/icons';
import { FRONTEND_TECHNOLOGIES } from '@/app/constants/frontend';

export default function Pill({ text, type }) {
  const isTech = type === 'tech';
  const icon = isTech ? TECH_ICONS[text] || '•' : null;
  const isFrontendTech = isTech && FRONTEND_TECHNOLOGIES.includes(text);
  
  return (
    <span 
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 
        ${isFrontendTech 
          ? 'bg-primary/15 text-primary hover:bg-primary/25' 
          : 'bg-card-bg/50 text-foreground/75 border border-border-color/40 hover:text-foreground'
        }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
} 