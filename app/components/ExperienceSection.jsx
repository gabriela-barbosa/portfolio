import SectionContainer from '@/app/components/SectionContainer';
import SectionHeader from '@/app/components/SectionHeader';
import Image from 'next/image';
import { StarDecoration } from '@/app/components/decorations';
import Pill from '@/app/components/Pill';
import { TECH_ICONS } from '@/app/constants/icons';

export default function ExperienceSection({ dictionary }) {
  return (
    <SectionContainer className="relative">
      <SectionHeader title={dictionary.experience.title} />
      
      <StarDecoration className="absolute top-4 right-4 opacity-15 hidden md:block" />
      
      <div className="space-y-8 mt-6 relative">
        {dictionary.experience.jobs.map((job, index) => (
          <div key={index} className="relative group">
            {/* Linha vertical conectando as experiências */}
            {index < dictionary.experience.jobs.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
            )}
            
            <div className="flex items-start gap-4">
              {/* Logo da empresa */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-card-bg shadow-sm group-hover:border-primary/50 transition-all duration-300">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={job.company}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-medium">
                    {job.company.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-medium text-primary">
                    {job.title}
                  </h3>
                  <span className="text-sm text-foreground/70 mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-foreground/90 mt-1">
                  <span className="font-medium">{job.company}</span>
                  {job.location && <span className="text-sm text-foreground/70 ml-2">· {job.location}</span>}
                </div>
                
                <ul className="mt-3 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary/70 mt-1.5"></span>
                      <span className="text-foreground/90">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                
                {job.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {TECH_ICONS[tech] && <span className="mr-1">{TECH_ICONS[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}