'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher({ dictionary, lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  
  // Animation for star floating
  useEffect(() => {
    const interval = setInterval(() => {
      setStarPosition({
        x: Math.sin(Date.now() / 1000) * 5,
        y: Math.cos(Date.now() / 1500) * 5
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleChangeLanguage = (e) => {
    const newLang = e.target.value;
    const currentPath = pathname;
    const segments = currentPath.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <div className="fixed top-4 right-4 z-30 flex items-center">
      {/* Animated Star */}
      <div 
        className={`relative mr-2 transition-all duration-300 ${hovered ? 'scale-125 rotate-45' : 'rotate-0'}`}
        style={{ 
          transform: `translate(${starPosition.x}px, ${starPosition.y}px)${hovered ? ' scale(1.25) rotate(45deg)' : ''}`,
          filter: hovered ? 'drop-shadow(0 0 3px var(--primary))' : 'none'
        }}
      >
        <svg 
          className="w-6 h-6 text-primary"
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3L14.5 8.5L20.5 9.5L16 14L17.5 20L12 17L6.5 20L8 14L3.5 9.5L9.5 8.5L12 3Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="relative">
        <select
          onChange={handleChangeLanguage}
          value={lang}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-card-bg text-foreground rounded-md px-3 py-2 text-sm border-2 border-border-color 
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
          hover:border-secondary transition-all duration-300 cursor-pointer appearance-none pr-8"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23bd93f9\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.5rem center',
            backgroundSize: '1.5em 1.5em',
            backdropFilter: 'blur(8px)'
          }}
        >
          <option value="pt" className="bg-card-bg text-foreground">{dictionary.language.pt}</option>
          <option value="en" className="bg-card-bg text-foreground">{dictionary.language.en}</option>
          <option value="es-AR" className="bg-card-bg text-foreground">{dictionary.language['es-AR']}</option>
        </select>
      </div>
    </div>
  );
} 