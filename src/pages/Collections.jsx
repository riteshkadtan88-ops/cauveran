import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import usePageMeta from '../hooks/usePageMeta';
import { collections, images } from '../data/content';

export default function Collections() {
  usePageMeta({
    title: 'Collections - CAUVERAN',
    description:
      'Explore CAUVERAN collections: brass home decor, brass tableware, decorative metalware, lighting and accessories, custom metal products and handcrafted giftware.',
    image: images.interior,
  });

  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="A catalogue shaped by craft and by market."
        intro="Six categories of Indian brass and metalware, developed for interiors, tabletop, lighting and gift programmes. Each can be adapted in finish, dimension and detailing."
      />

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-site space-y-24 md:space-y-32">
          {collections.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={item.id} id={item.id} className="scroll-mt-32">
                <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
                  <div className={'md:col-span-7 ' + (reversed ? 'md:col-start-6 md:order-2' : '')}>
                    <Reveal>
                      <div className="group relative overflow-hidden bg-sand">
                        <SmartImage
                          src={item.image}
                          alt={item.alt}
                          className="aspect-[16/11] w-full"
                          imgClassName="transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.05]"
                        />
                      </div>
                    </Reveal>
                  </div>
                  <div className={'md:col-span-4 ' + (reversed ? 'md:col-start-1 md:order-1' : 'md:col-start-9')}>
                    <Reveal delay={90}>
                      <span className="font-display text-sm tracking-[0.24em] text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </Reveal>
                    <Reveal delay={140}>
                      <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{item.title}</h2>
                    </Reveal>
                    <Reveal delay={200}>
                      <p className="mt-5 text-sm leading-relaxed text-brown md:text-base">{item.description}</p>
                    </Reveal>
                    <Reveal delay={260}>
                      <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 hover:text-gold">
                        Enquire About This Collection
                        <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory md:px-12 md:py-28">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-[1.1] md:text-5xl">
              Need something that isn&rsquo;t in the catalogue?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/capabilities" className="btn border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal">
              Custom Development
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
