import SectionContainer from '@/app/components/SectionContainer';
import SectionHeader from '@/app/components/SectionHeader';
import { StarDecoration } from '@/app/components/decorations';

export default function SkillsSection({ dictionary }) {
  const { skills } = dictionary;
  
  return (
    <SectionContainer className="relative">
      <SectionHeader title={skills.title} />
      
      <StarDecoration className="absolute top-4 right-4" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {Object.entries(skills.categories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="relative overflow-hidden group">
            <h3 className="text-lg font-medium mb-3 text-primary border-b border-primary/20 pb-2 relative">
              {category.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </h3>
            
            <ul className="space-y-2">
              {category.items.map((skill, index) => (
                <li 
                  key={index} 
                  className="flex items-center transition-all duration-200 hover:translate-x-1"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary/70 mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
} 