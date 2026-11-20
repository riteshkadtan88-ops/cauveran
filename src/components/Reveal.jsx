import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -70px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={'reveal ' + (visible ? 'is-visible ' : '') + className}
      style={{ transitionDelay: delay + 'ms', '--reveal-y': y + 'px' }}
    >
      {children}
    </div>
  );
}
