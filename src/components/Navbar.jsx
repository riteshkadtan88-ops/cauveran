import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  const solid = scrolled || pathname !== '/' || open;

  return (
    <>
      <header
        className={
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-lux ' +
          (solid
            ? 'border-b border-charcoal/10 bg-ivory/95 text-charcoal backdrop-blur-md'
            : 'border-b border-transparent bg-transparent text-ivory')
        }
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-20 max-w-site items-center justify-between px-6 md:h-24 md:px-12"
        >
          <Link
            to="/"
            aria-label="CAUVERAN - home"
            className="font-display text-[0.95rem] leading-none tracking-[0.42em] md:text-lg"
          >
            CAUVERAN
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={
                  'text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:text-gold ' +
                  (pathname === l.to ? 'text-gold' : '')
                }
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden border border-current px-6 py-3 text-[10px] uppercase tracking-[0.28em] transition-all duration-500 ease-lux hover:bg-gold hover:text-ivory lg:inline-flex"
            >
              Let&rsquo;s Connect
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center border border-current/30 lg:hidden"
            >
              {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={
          'fixed inset-0 z-40 bg-ivory transition-all duration-500 ease-lux lg:hidden ' +
          (open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
        }
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-12 pt-28">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? 120 + i * 60 + 'ms' : '0ms' }}
                className={
                  'border-b border-charcoal/10 py-5 font-display text-3xl text-charcoal transition-all duration-500 ease-lux ' +
                  (open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0') +
                  ' ' +
                  (pathname === l.to ? 'text-gold' : '')
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div
            style={{ transitionDelay: open ? '440ms' : '0ms' }}
            className={
              'transition-all duration-500 ease-lux ' +
              (open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0')
            }
          >
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn w-full bg-charcoal text-ivory hover:bg-gold"
            >
              Let&rsquo;s Connect
            </Link>
            <p className="mt-8 font-display text-sm tracking-[0.32em] text-brown">
              INDIAN ROOTS. A GLOBAL OUTLOOK.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
