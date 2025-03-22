'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher({ dictionary, lang }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChangeLanguage = (e) => {
    const newLang = e.target.value;
    const currentPath = pathname;
    const segments = currentPath.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <div className="fixed top-4 right-4 z-20">
      <select
        onChange={handleChangeLanguage}
        value={lang}
        className="bg-card-bg text-foreground rounded-md px-3 py-2 text-sm border-2 border-border-color 
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
        hover:border-secondary transition-all duration-300 cursor-pointer appearance-none pr-8"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23bd93f9\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1.5em 1.5em'
        }}
      >
        <option value="pt">{dictionary.language.pt}</option>
        <option value="en">{dictionary.language.en}</option>
        <option value="es-AR">{dictionary.language['es-AR']}</option>
      </select>
    </div>
  );
} 