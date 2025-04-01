import SectionContainer from '@/ui/SectionContainer';
import SectionHeader from '@/ui/SectionHeader';
import { FlowerDecoration, PhotoFrame } from '@/decorations';

export default function AboutSection({ dictionary }) {
  return (
    <SectionContainer id="about" className="relative">
      <SectionHeader title={dictionary.about.title} />
      
      <FlowerDecoration className="absolute top-4 right-4 hidden md:block" />
      
      <div className="relative flex flex-col md:flex-row items-center gap-8">
        <PhotoFrame 
          src="/foto.jpg" 
          alt="Gabriela Barbosa" 
          className="mb-4 md:mb-0"
          priority
        />
        
        <div className="flex-1 flex flex-col justify-center h-full">
          <p className="text-lg leading-relaxed mb-4">
            {dictionary.about.content}
          </p>
        
        </div>
      </div>
    </SectionContainer>
  );
} 