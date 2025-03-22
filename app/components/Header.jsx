export default function Header({ dictionary }) {
  return (
    <header className="mb-12 text-center relative">
      {/* Elemento decorativo - borda curvilínea */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
      
      <h1 className="text-5xl font-bold mb-4 text-primary relative inline-block">
        {dictionary.name}
        {/* Underline decorativo */}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-secondary/50 via-primary/80 to-secondary/50 rounded-full"></span>
      </h1>
      
      <p className="text-xl text-secondary mb-4 font-light">{dictionary.title}</p>
      
      <div className="flex justify-center items-center gap-5 mb-4">
        <a
          href="https://www.linkedin.com/in/gabriela-barbosa-f"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 relative interactive"
          title="LinkedIn Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {dictionary.links.linkedin}
        </a>
        <a
          href="mailto:gabrielabarbfreitas@gmail.com"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 relative interactive"
          title="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          {dictionary.links.email}
        </a>
      </div>
      
      <p className="text-sm text-foreground opacity-80 max-w-2xl mx-auto relative">
        Frontend Software Engineer com experiência em desenvolvimento web, especializada em React, Next.js, TypeScript e Material-UI. Atuação em projetos para empresas como Mercado Livre, Loggi, Lend, OLX e M4U.
        {/* Elemento decorativo - pequenos pontos */}
        <span className="absolute -left-2 -top-2 w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
        <span className="absolute -right-2 -bottom-2 w-1.5 h-1.5 bg-secondary/40 rounded-full"></span>
      </p>
    </header>
  );
} 