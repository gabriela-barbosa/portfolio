import { NextResponse } from 'next/server';

export const locales = ['en', 'pt', 'es'];
export const defaultLocale = 'pt';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => locales.includes(lang) || locales.some(locale => locale.startsWith(lang)));
    
    if (preferredLocale) {
      const matchedLocale = locales.find(locale => 
        locale === preferredLocale || locale.startsWith(preferredLocale)
      );
      if (matchedLocale) return matchedLocale;
    }
  }
  
  return defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/_next/') || 
      pathname.includes('/api/') ||
      pathname.endsWith('.ico') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.gif')) {
    return;
  }
  
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`, request.url)
    );
  }
}

export const matcher = [
  '/((?!_next|api|.*\\..*).*)' 
]; 