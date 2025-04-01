'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitch from './LanguageSwitch';

const Navigation = ({ dictionary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: dictionary.nav.about, href: '#about' },
    { name: dictionary.nav.experience, href: '#experience' },
    { name: dictionary.nav.projects, href: '#projects' },
    { name: dictionary.nav.skills, href: '#skills' },
    { name: dictionary.nav.education, href: '#education' },
  ];

  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        document.documentElement.style.scrollBehavior = 'smooth';
        document.documentElement.style.scrollTimeline = 'scroll 2s ease-in-out';

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
          document.documentElement.style.scrollTimeline = '';
        }, 2000);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0f0f0f]/80 backdrop-blur-sm border-b border-[#333333] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-[#64ffda] hover:text-[#c084fc] transition-colors cursor-pointer">
                GB
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={handleClick}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[#f5f5f5] hover:text-[#64ffda] transition-colors cursor-pointer"
                  href={item.href}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LanguageSwitch dictionary={dictionary} />
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#f5f5f5] hover:text-[#64ffda] hover:bg-[#191919] focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-[#0f0f0f] border-b border-[#333333]">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={handleClick}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium text-[#f5f5f5] hover:text-[#64ffda] hover:bg-[#191919] hover:border-[#64ffda] transition-colors cursor-pointer"
                href={item.href}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-[#333333]">
            <div className="px-4">
              <LanguageSwitch dictionary={dictionary} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 