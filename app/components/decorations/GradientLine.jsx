export default function GradientLine({ className = "", color = "primary" }) {
  return (
    <div 
      className={`w-16 h-1 bg-gradient-to-r rounded-full mx-auto my-6 ${className}`}
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(var(--${color}), 0), rgba(var(--${color}), 0.5), rgba(var(--${color}), 0))`
      }}
    ></div>
  );
} 