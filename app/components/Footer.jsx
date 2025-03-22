import { WaveDecoration } from './decorations';
import { formatCopyright } from '@/app/utils/date';
import Pill from '@/app/components/Pill';

export default function Footer({ copyright, site }) {
  const copyrightText = formatCopyright(copyright);
  
  return (
    <div className="w-full mt-20">
      <footer className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-card-bg">
        {/* Wave decoration */}
        <WaveDecoration className="absolute top-0 left-0 w-full" />
        
        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          {site && (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-primary mb-3">{site.title}</h3>
              <p className="text-sm text-foreground/80 mb-4">{site.content}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {site.technologies.map((tech, index) => (
                  <Pill key={index} text={tech} type="tech" />
                ))}
              </div>
            </div>
          )}
                    
          <p className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative">
            <span className="absolute -top-1 -left-2 text-xs text-primary opacity-70">♥</span>
            {copyrightText}
            <span className="absolute -top-1 -right-2 text-xs text-primary opacity-70">♥</span>
          </p>
        </div>
      </footer>
    </div>
  );
} 