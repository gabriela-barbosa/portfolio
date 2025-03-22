import { getDictionary } from './dictionaries/index';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import AboutSection from '@/app/components/AboutSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import SkillsSection from '@/app/components/SkillsSection';
import EducationSection from '@/app/components/EducationSection';
import DecorativeElements from '@/app/components/DecorativeElements';
import PageContainer from '@/app/components/PageContainer';
import MainContent from '@/app/components/MainContent';

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  return (
    <PageContainer>
      <LanguageSwitcher dictionary={dictionary} lang={lang} />
      
      {/* Decorative elements */}
      <DecorativeElements />
      
      <MainContent>
        {/* Header Section */}
        <Header dictionary={dictionary} />

        {/* About Section */}
        <AboutSection dictionary={dictionary} />

        {/* Experience Section */}
        <ExperienceSection dictionary={dictionary} />

        {/* Skills Section */}
        <SkillsSection dictionary={dictionary} />

        {/* Education Section */}
        <EducationSection dictionary={dictionary} />
      </MainContent>

      {/* Footer */}
      <Footer 
        copyright={dictionary.footer.copyright} 
        site={dictionary.site}
      />
    </PageContainer>
  );
} 