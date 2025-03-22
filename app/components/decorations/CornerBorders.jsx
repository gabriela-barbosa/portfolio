export default function CornerBorders({ className = "", color = "primary" }) {
  return (
    <>
      <div className={`absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-${color}/20 rounded-tr-xl ${className}`}></div>
      <div className={`absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-${color}/20 rounded-bl-xl ${className}`}></div>
    </>
  );
} 