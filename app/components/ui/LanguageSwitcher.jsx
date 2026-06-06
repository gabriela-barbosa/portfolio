'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function LanguageSwitcher({ dictionary }) {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState('');
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [starPosition, setStarPosition] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef(null);

  const options = [
    { value: 'pt', label: dictionary.language.pt },
    { value: 'en', label: dictionary.language.en },
    { value: 'es-AR', label: dictionary.language['es-AR'] },
  ];

  useEffect(() => {
    const segments = pathname.split('/');
    const langCode = segments.length > 1 ? segments[1] : 'pt';
    setLang(langCode);

    const interval = setInterval(() => {
      setStarPosition({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [pathname]);

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
    const segments = pathname.split('/');
    segments[1] = value;
    router.push(segments.join('/'));
  };

  const currentLabel = options.find((o) => o.value === lang)?.label ?? lang;

  return (
    <div className="fixed top-4 right-4 z-[60] flex items-center">
      <div
        className={`relative mr-2 transition-all duration-300 ${hovered ? 'scale-125 rotate-45' : 'rotate-0'}`}
        style={{
          transform: `translate(${starPosition.x}px, ${starPosition.y}px)${hovered ? ' scale(1.25) rotate(45deg)' : ''}`,
          filter: hovered ? 'drop-shadow(0 0 3px var(--primary))' : 'none',
        }}
      >
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14.5 8.5L20.5 9.5L16 14L17.5 20L12 17L6.5 20L8 14L3.5 9.5L9.5 8.5L12 3Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm border-2 border-border-color hover:border-secondary transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}
        >
          <span>{currentLabel}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--secondary)"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ul
            className="absolute right-0 mt-1 w-full rounded-md border-2 border-border-color overflow-hidden"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)' }}
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  onClick={() => handleSelect(opt.value)}
                  className="w-full text-left px-3 py-2 text-sm transition-colors duration-150 hover:opacity-80"
                  style={{
                    backgroundColor: opt.value === lang ? 'var(--border-color)' : 'var(--card-bg)',
                    color: 'var(--foreground)',
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
}
