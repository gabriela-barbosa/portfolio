import Image from 'next/image';

export default function PhotoFrame({ 
  src, 
  alt, 
  width = 192, 
  height = 192, 
  className = "",
  priority = false 
}) {
  return (
    <div className={`relative flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-10 pointer-events-none"></div>
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="object-cover" 
        priority={priority}
        unoptimized={true}
      />
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary/40"></div>
    </div>
  );
} 