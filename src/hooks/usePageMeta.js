import { useEffect } from 'react';

export default function usePageMeta({ title, description, image }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.head.querySelector('meta[' + attr + '="' + key + '"]');
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    if (image) setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
  }, [title, description, image]);
}
