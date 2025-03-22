import SectionHeader from '@/ui/SectionHeader';
import SectionContainer from '@/ui/SectionContainer';
import Pill from '@/ui/Pill';

export default function ExperienceSection({ dictionary }) {
  const { experience } = dictionary;

  return (
    <SectionContainer id="experience">
      <SectionHeader title={experience.title} />
      
      <div className="space-y-12">
        {experience.jobs.map((job, index) => (
          <div key={index} className="relative">
            {/* Experience Timeline */}
            {index < experience.jobs.length - 1 && (
              <div className="absolute top-16 bottom-0 left-4 md:left-8 w-px bg-border-color" aria-hidden="true"></div>
            )}
            
            <div className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Company Logo/Initial */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-full border border-border-color bg-card-bg text-primary text-xl md:text-3xl font-bold">
                  {job.company.charAt(0)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="card hover:accent-glow">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <h3 className="text-xl font-semibold mb-1 md:mb-0">{job.title}</h3>
                    <span className="text-sm text-foreground/60 order-first md:order-last mb-2 md:mb-0">
                      {job.period}
                    </span>
                  </div>
                  
                  <p className="mb-4 text-foreground/80">{job.company}</p>
                  
                  {job.responsibilities && (
                    <ul className="mb-4 space-y-1.5 text-sm text-foreground/70">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {job.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.technologies.map((tech, i) => (
                        <Pill key={i} small filled={false}>
                          {tech}
                        </Pill>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}