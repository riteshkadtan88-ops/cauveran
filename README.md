# CAUVERAN

**Indian roots. A global outlook.**

Premium B2B website for CAUVERAN - an Indian brass and metalware sourcing brand.
Built with React + Vite + Tailwind CSS + Lucide icons. Fully static. Deployable on Cloudflare Pages.

## Local development

    npm install
    npm run dev
    npm run build

## Deployment (Cloudflare Pages)

- Build command: npm run build
- Build output directory: dist
- Framework preset: Vite

The included public/_redirects file enables SPA routing fallback.

## Contact form

By default, the form opens a pre-filled email draft (mailto:).
To connect a free form service (Web3Forms, Formspree), set:

    VITE_ENQUIRY_ENDPOINT=https://api.web3forms.com/submit

See src/pages/Contact.jsx for details.
