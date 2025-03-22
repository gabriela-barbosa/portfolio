import { TECH_ICONS } from '@/app/constants/icons';
import { FRONTEND_TECHNOLOGIES } from '@/app/constants/frontend';

export default function Pill({ children, filled = false, small = false, accent = false }) {
  let classes = "inline-flex items-center rounded-full transition-all duration-200 ";
  
  if (small) {
    classes += "px-2.5 py-0.5 text-xs ";
  } else {
    classes += "px-3 py-1 text-sm ";
  }
  
  if (filled) {
    classes += accent 
      ? "bg-primary text-background border-primary " 
      : "bg-card-bg text-foreground border-border-color ";
  } else {
    classes += accent 
      ? "bg-transparent text-primary border-primary " 
      : "bg-transparent text-foreground/80 border-border-color hover:border-primary hover:text-primary ";
  }
  
  classes += "border ";
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
} 