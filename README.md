# Portfolio

This is a personal portfolio project developed with [Next.js](https://nextjs.org), optimized for multiple languages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

- **Multiple Languages**: Full internationalization support
- **Modern Design**: Clean and responsive interface
- **Customizable Sections**: 
  - About
  - Experience
  - Skills
  - Education
- **Font Optimization**: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font) font
- **Analytics**: Integration with Vercel Analytics

## Project Structure

The project follows the Next.js App Router structure:

- `app/[lang]/page.jsx`: Main page with multilingual support
- `app/components/`: Reusable interface components
- `app/dictionaries/`: Translation files for different languages
- `app/utils/`: Utility functions
- `app/constants/`: Constants used in the project

## Deployment

This portfolio is currently deployed on Vercel and is accessible at:

- [https://gabriela-barbosa-portfolio.vercel.app/pt](https://gabriela-barbosa-portfolio.vercel.app/pt) (Portuguese)
- [https://gabriela-barbosa-portfolio.vercel.app/en](https://gabriela-barbosa-portfolio.vercel.app/en) (English)
- [https://gabriela-barbosa-portfolio.vercel.app/es](https://gabriela-barbosa-portfolio.vercel.app/es) (Spanish)

