import { Link } from 'react-router-dom';
import { collections, navLinks, site } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/70">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <div className="grid gap-12 border-b border-ivory/10 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-4">
            <p className="font-display text-xl leading-none tracking-[0.42em] text-ivory md:text-2xl">
              CAUVERAN
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-gold">
              Indian roots. A global outlook.
            </p>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-ivory/55">
              CAUVERAN is a B2B brass and metalware sourcing brand connecting Indian
              craftsmanship with global business opportunities.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Navigate</h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ivory/70 transition-colors duration-300 hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Collections</h2>
            <ul className="mt-6 space-y-3">
              {collections.map((c) => (
                <li key={c.id}>
                  <Link to="/collections" className="text-sm text-ivory/70 transition-colors duration-300 hover:text-gold">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Business Enquiries</h2>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              <li>
                <a href={'mailto:' + site.email} className="transition-colors duration-300 hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={'tel:' + site.phone.replace(/\s/g, '')} className="transition-colors duration-300 hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <div className="mt-7 flex gap-5 text-[10px] uppercase tracking-[0.24em] text-ivory/40">
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-[10px] uppercase tracking-[0.24em] text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} CAUVERAN. All rights reserved.</p>
          <p>Brass &amp; Metalware Sourcing - India</p>
        </div>
      </div>
    </footer>
  );
}
