import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then(module => module.default),
  pt: () => import('./pt.json').then(module => module.default),
  'es-AR': () => import('./es-AR.json').then(module => module.default),
};

export const getDictionary = async (locale) => {
  const validLocale = locale in dictionaries ? locale : 'pt';
  return dictionaries[validLocale]();
}; 