import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className={
        'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center border border-charcoal/20 bg-ivory/90 text-charcoal backdrop-blur transition-all duration-500 ease-lux hover:border-gold hover:bg-charcoal hover:text-ivory md:bottom-10 md:right-10 ' +
        (show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0')
      }
    >
      <ArrowUp size={16} strokeWidth={1.5} />
    </button>
  );
}
