export default function DottedPattern({ 
  className = "", 
  color = "primary", 
  size = "30px", 
  opacity = "0.05" 
}) {
  return (
    <div 
      className={`absolute inset-0 bg-repeat pointer-events-none ${className}`} 
      style={{
        backgroundImage: `radial-gradient(circle, var(--${color}) 1px, transparent 1px)`,
        backgroundSize: `${size} ${size}`,
        opacity
      }}
    ></div>
  );
} 