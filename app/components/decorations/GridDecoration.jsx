export default function GridDecoration({ className = "", color = "primary", opacity = "0.03" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--${color}) 1px, transparent 1px),
          linear-gradient(to bottom, var(--${color}) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity
      }}
    ></div>
  );
} 