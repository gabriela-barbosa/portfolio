import '@/styles/globals.css';
import { Inter, Poppins, Fira_Code } from 'next/font/google';
import { locales, defaultLocale } from '@/middleware';
import { getDictionary } from './dictionaries/index';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});
const firaCode = Fira_Code({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code'
});

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  const dictionary = await getDictionary(lang);
  return {
    title: `${dictionary.name} - ${dictionary.title}`,
    description: dictionary.about.content,
  };
}

export default async function RootLayout({ children }) {
  
  return (
    <div className={`${inter.variable} ${poppins.variable} ${firaCode.variable} min-h-screen bg-background`}>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90 z-10"></div>
      <div className="fixed top-0 right-0 w-96 h-96 bg-secondary opacity-5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-primary opacity-5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
      {children}
    </div>
  );
}

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export const htmlAttributes = ({ params }) => {
  return {
    lang: params.lang,
  };
} 