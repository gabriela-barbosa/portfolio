export default function ButterflyDecoration({ className = "", color = "accent", animationDuration = "3s" }) {
  return (
    <div 
      className={`w-16 h-16 pointer-events-none animate-bounce opacity-10 ${className}`} 
      style={{ animationDuration }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`text-${color}`}>
        <path d="M50,30 C60,10 90,20 90,40 C90,60 60,50 50,70 C40,50 10,60 10,40 C10,20 40,10 50,30 Z" />
        <path d="M50,30 L50,70" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
} 