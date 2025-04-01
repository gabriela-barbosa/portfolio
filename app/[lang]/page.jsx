import { getDictionary } from './dictionaries/index';
import LanguageSwitcher from '@/ui/LanguageSwitcher';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import Projects from '@/components/Projects';
import DecorativeElements from '@/layout/DecorativeElements';
import PageContainer from '@/layout/PageContainer';
import MainContent from '@/layout/MainContent';

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  return (
    <PageContainer>
      <LanguageSwitcher dictionary={dictionary} lang={lang} />
      
      <DecorativeElements />
      
      <MainContent>
        <Header dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        <Projects dictionary={dictionary} />
        <SkillsSection dictionary={dictionary} />
        <EducationSection dictionary={dictionary} />
      </MainContent>

      <Footer 
        copyright={dictionary.footer.copyright} 
        site={dictionary.site}
      />
    </PageContainer>
  );
} 