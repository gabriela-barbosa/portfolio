export default function Header({ dictionary }) {
  // Função auxiliar para processar marcação especial e aplicar estilos
  function renderHighlights(text) {
    if (!text) return '';
    
    return text.split(/(\*\*\|.*?\|\*\*|\*\*\#.*?\#\*\*)/g).map((part, i) => {
      if (part.startsWith('**|') && part.endsWith('|**')) {
        const content = part.slice(3, -3);
        return <span key={i} className="text-primary">{content}</span>;
      }
      if (part.startsWith('**#') && part.endsWith('#**')) {
        const content = part.slice(3, -3);
        return <span key={i} className="text-primary font-medium">{content}</span>;
      }
      return part;
    });
  }

  return (
    <header className="relative pt-10">
      {/* Name and title with cursor effect */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 inline-block cursor-effect">
        {dictionary.name}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-primary mb-8 font-normal tracking-tight">
        {dictionary.title}
      </h2>
      
      {/* Social links */}
      <div className="flex flex-wrap items-center gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/gabriela-barbosa-f"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>{dictionary.links.linkedin}</span>
        </a>
        <a
          href="mailto:gabrielabarbfreitas@gmail.com"
          className="underline-hover flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>{dictionary.links.email}</span>
        </a>
      </div>
      
      {/* Bio with improved style */}
      <div className="max-w-2xl">
        <div className="relative border-l-2 border-primary pl-6 py-2">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {renderHighlights(dictionary.description)}
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            {renderHighlights(dictionary.experience_summary)}
          </p>
        </div>
      </div>
    </header>
  );
} 