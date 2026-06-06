'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitch = ({ dictionary }) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const currentLang = pathname.split('/')[1];

  const options = [
    { value: 'en', label: dictionary.language.en },
    { value: 'pt', label: dictionary.language.pt },
    { value: 'es', label: dictionary.language.es },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStarPosition({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setOpen(false);
    const pathParts = pathname.split('/');
    pathParts[1] = value;
    router.push(pathParts.join('/'));
  };

  const currentLabel = options.find((o) => o.value === currentLang)?.label ?? currentLang;

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={dropdownRef}
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

      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-md pl-3 pr-3 py-1.5 text-sm border focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent cursor-pointer"
          style={{ backgroundColor: '#191919', color: '#f5f5f5', borderColor: '#333333' }}
        >
          <span>{currentLabel}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#64ffda"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ul
            className="absolute right-0 mt-1 w-full rounded-md border overflow-hidden z-50"
            style={{ backgroundColor: '#191919', borderColor: '#333333' }}
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  onClick={() => handleSelect(opt.value)}
                  className="w-full text-left px-3 py-2 text-sm transition-colors duration-150 hover:opacity-80"
                  style={{
                    backgroundColor: opt.value === currentLang ? '#333333' : '#191919',
                    color: '#f5f5f5',
                  }}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitch;
