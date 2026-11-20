import Reveal from './Reveal';

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="bg-charcoal px-6 pb-20 pt-36 text-ivory md:px-12 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-site">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <Reveal delay={90}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={180}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/60 md:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
