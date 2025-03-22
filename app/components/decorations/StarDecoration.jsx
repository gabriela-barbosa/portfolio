export default function StarDecoration({ className = "", color = "primary" }) {
  return (
    <div className={`w-8 h-8 opacity-20 pointer-events-none ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-${color}`}>
        <path d="M12 3L14.5 8.5L20.5 9.5L16 14L17.5 20L12 17L6.5 20L8 14L3.5 9.5L9.5 8.5L12 3Z" fill="currentColor"/>
      </svg>
    </div>
  );
} 