import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found - CAUVERAN',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="flex min-h-[80vh] items-center bg-charcoal px-6 py-32 text-ivory md:px-12">
      <div className="mx-auto w-full max-w-site">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          This page could not be found.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60">
          The link may be outdated, or the page may have moved. Explore our collections
          or get in touch with us directly.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn bg-ivory text-charcoal hover:bg-gold hover:text-ivory">
            Return Home <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
          <Link to="/contact" className="btn border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
