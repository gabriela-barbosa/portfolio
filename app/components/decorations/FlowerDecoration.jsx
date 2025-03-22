export default function FlowerDecoration({ className = "" }) {
  return (
    <div className={`w-10 h-10 opacity-10 pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-secondary transform rotate-45">
        <path d="M50,10 C60,30 70,40 90,50 C70,60 60,70 50,90 C40,70 30,60 10,50 C30,40 40,30 50,10 Z" />
      </svg>
    </div>
  );
} 