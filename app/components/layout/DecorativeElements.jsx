import { ButterflyDecoration, FlowerDecoration } from '@/decorations';

export default function DecorativeElements() {
  return (
    <>
      {/* Partículas e pequenos pontos */}
      <div className="absolute top-40 left-10 w-3 h-3 bg-primary rounded-full opacity-75 hidden md:block animate-pulse z-20"></div>
      <div className="absolute top-60 right-20 w-2 h-2 bg-secondary rounded-full opacity-75 hidden md:block animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full opacity-75 hidden md:block animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
      
      {/* Círculos decorativos com animação */}
      <div className="fixed top-24 right-12 w-16 h-16 border-2 border-primary/20 rounded-full hidden lg:block z-20"></div>
      <div className="fixed top-28 right-16 w-8 h-8 border border-secondary/20 rounded-full hidden lg:block z-20"></div>
      
      {/* Elementos florais */}
      <FlowerDecoration className="fixed top-1/3 left-4 w-32 h-32 hidden lg:block z-20" />
      
      <FlowerDecoration className="fixed bottom-1/4 right-4 w-24 h-24 hidden lg:block text-secondary z-20" />
      
      {/* Borboleta decorativa com animação */}
      <ButterflyDecoration className="fixed bottom-20 left-10 hidden lg:block z-20" />
    </>
  );
} 