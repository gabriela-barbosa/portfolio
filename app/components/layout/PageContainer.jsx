import { DottedPattern } from '@/decorations';

export default function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 relative overflow-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-primary/5 filter blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-secondary/5 filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/10 filter blur-[100px]"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMSIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik01OSA1OXYxSDYwdi0xaC0xem0wLTU4VjBINjB2MWgtMXptLTU4IDU4SDBoMXYxSDF2LTF6TTEgMWgxVjBIMXYxeiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto relative z-10">
        <div className="container-medium">
          {children}
        </div>
      </div>
    </div>
  );
} 