export default function SectionHeader({ title, className = "" }) {
  return (
    <div className="relative">
      <h2 className={`text-2xl font-semibold mb-4 text-secondary pb-2 ${className}`}>
        {title}
        <span className="absolute -bottom-0.5 left-0 w-16 h-0.5 bg-primary rounded-full"></span>
        <span className="absolute -bottom-0.5 left-16 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
      </h2>
      <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-primary/20"></div>
    </div>
  );
} 