const dictionaries = {
  en: () => import('./en.json').then(module => module.default),
  pt: () => import('./pt.json').then(module => module.default),
  'es-AR': () => import('./es-AR.json').then(module => module.default),
};

export const getDictionary = async (locale) => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Dictionary for locale ${locale} not found:`, error);
    return await dictionaries.pt();
  }
}; 