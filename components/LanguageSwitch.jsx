'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitch = ({ dictionary }) => {
  const [hovered, setHovered] = useState(false);
  const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentLang = pathname.split('/')[1];
    setHovered(false);
    setStarPosition({ x: 0, y: 0 });
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarPosition({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    const pathParts = pathname.split('/');
    pathParts[1] = newLang;
    const newPath = pathParts.join('/');
    router.push(newPath);
  };

  const currentLang = pathname.split('/')[1];

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="w-5 h-5 text-[#64ffda] transition-all duration-300 mr-4"
        style={{
          transform: `translate(${starPosition.x}px, ${starPosition.y}px) ${hovered ? 'scale(1.2) rotate(45deg)' : ''}`,
          filter: hovered ? 'drop-shadow(0 0 5px #64ffda)' : 'none'
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="bg-transparent text-[#f5f5f5] border border-[#333333] rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent cursor-pointer appearance-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364ffda\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1.5em 1.5em',
          WebkitAppearance: 'none',
          MozAppearance: 'none'
        }}
      >
        <option value="en">{dictionary.language.en}</option>
        <option value="pt">{dictionary.language.pt}</option>
        <option value="es">{dictionary.language.es}</option>
      </select>
    </div>
  );
};

export default LanguageSwitch; 