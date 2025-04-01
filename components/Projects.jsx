import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '@/ui/SectionContainer';
import SectionHeader from '@/ui/SectionHeader';
import { CornerBorders } from '@/decorations';

function ProjectImage({ src, alt, title }) {
  return (
    <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden bg-background">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: 'transparent' }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        </div>
      )}
    </div>
  );
}

export default function Projects({ dictionary }) {
  const { projects } = dictionary;
  
  return (
    <SectionContainer id="projects">
      <SectionHeader title={projects.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.items.map((project, index) => (
          <div
            key={index}
            className="relative group"
          >
            <CornerBorders className="absolute inset-0" />
            
            <div className="relative bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden p-6">
              <ProjectImage 
                src={project.image} 
                alt={project.title}
                title={project.title}
              />
              
              <h3 className="text-xl font-semibold mb-3 font-poppins">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                {projects.viewProject}
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
} 