import SectionContainer from '@/ui/SectionContainer';
import SectionHeader from '@/ui/SectionHeader';

export default function EducationSection({ dictionary }) {
  return (
    <SectionContainer id="education" className="relative">
      <SectionHeader title={dictionary.education.title} />
      
      <div className="absolute top-4 right-4 w-8 h-8 opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
          <path d="M12 3L22 9V11H2V9L12 3Z" fill="currentColor"/>
          <path d="M5 11V16C5 16 5 19 12 19C19 19 19 16 19 16V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M12 19V22M19 16L22 18M2 18L5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      
      <div className="space-y-8 mt-6 relative">
        {dictionary.education.items.map((edu, index) => (
          <div key={index} className="relative group">
            {index < dictionary.education.items.length - 1 && (
              <div className="absolute left-4 top-12 bottom-0 w-px bg-gradient-to-b from-secondary/50 to-transparent"></div>
            )}
            
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-secondary/40 flex items-center justify-center group-hover:border-secondary transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-medium text-secondary group-hover:text-secondary/90 transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <div className="text-foreground/90 mt-1">
                  <span className="font-medium">{edu.school}</span>
                </div>
                
                {edu.description && (
                  <p className="mt-2 text-foreground/80 text-sm">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
} 