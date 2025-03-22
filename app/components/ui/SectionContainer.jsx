import { CornerBorders } from '@/decorations';

export default function SectionContainer({ id, children }) {
  return (
    <section id={id} className="py-10 scroll-mt-16">
      {children}
    </section>
  );
} 