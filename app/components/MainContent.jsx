import { BorderLines } from './decorations';

export default function MainContent({ children }) {
  return (
    <main className="max-w-4xl mx-auto relative z-10">
      <BorderLines className="hidden md:block" />
      
      <div className="relative">
        {children}
      </div>
    </main>
  );
} 