
import { TECH_ICONS } from '@/app/constants/icons';

export default function SkillCard({ title, items, hoverBorderClass = "hover:border-primary" }) {
  const isFrontend = title.toLowerCase().includes("frontend");
 
  return (
    <div className={`bg-card-bg p-5 rounded-lg border border-border-color ${hoverBorderClass} transition-all duration-300 shadow-sm ${isFrontend ? 'ring-1 ring-primary ring-opacity-50' : ''}`}>
      <h3 className={`font-semibold mb-4 ${isFrontend ? 'text-primary' : 'text-secondary'} border-b border-border-color pb-2`}>{title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index} 
            className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${
              isFrontend 
                ? 'bg-primary/15 text-primary' 
                : 'bg-card-bg/50 text-foreground/75 border border-border-color/40'
            }`}
          >
            {TECH_ICONS[item] && <span className="mr-1">{TECH_ICONS[item]}</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
} 