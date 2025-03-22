export default function SectionHeader({ title }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
        {title}
        <div className="absolute -bottom-1 left-0 h-1 w-12 bg-primary rounded-full"></div>
      </h2>
    </div>
  );
} 