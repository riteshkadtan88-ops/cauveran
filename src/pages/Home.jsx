import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import usePageMeta from '../hooks/usePageMeta';
import { collections, capabilities, processSteps, whyPoints, images } from '../data/content';

const collectionGrid = [
  'md:col-span-7',
  'md:col-span-5 md:mt-24',
  'md:col-span-5 md:col-start-1',
  'md:col-span-7 md:col-start-6 md:mt-16',
  'md:col-span-6 md:col-start-1 md:mt-8',
  'md:col-span-6 md:col-start-7 md:mt-24',
];

function CollectionCard({ item, index }) {
  return (
    <Link to="/collections" className="group block">
      <div className={'relative overflow-hidden bg-sand ' + item.aspect}>
        <SmartImage
          src={item.image}
          alt={item.alt}
          className="h-full w-full"
          imgClassName="transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-lux group-hover:opacity-100"
        />
        <span className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-ivory/80">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6 border-t border-charcoal/10 pt-5">
        <div>
          <h3 className="font-display text-2xl leading-tight md:text-[1.7rem]">{item.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-brown">{item.blurb}</p>
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.25}
          aria-hidden="true"
          className="mt-1 shrink-0 text-gold transition-transform duration-500 ease-lux group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function Home() {
  usePageMeta({
    title: 'CAUVERAN - Indian Roots. A Global Outlook.',
    description:
      'CAUVERAN is a B2B brass and metalware sourcing brand connecting Indian craftsmanship with global business opportunities.',
    image: images.hero,
  });

  return (
    <>
      <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-charcoal">
        <SmartImage
          src={images.hero}
          alt="Handcrafted Indian brass vessels arranged in warm studio light"
          priority
          className="absolute inset-0 h-full w-full"
          imgClassName="animate-slow-zoom"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-charcoal/45" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/70" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-site flex-col justify-end px-6 pb-16 pt-36 md:px-12 md:pb-24">
          <p className="eyebrow animate-rise" style={{ animationDelay: '120ms' }}>
            Indian roots. A global outlook.
          </p>
          <h1 className="mt-8 max-w-5xl font-display text-[2.55rem] leading-[1.02] text-ivory sm:text-6xl lg:text-7xl xl:text-[5rem]">
            <span className="block animate-rise" style={{ animationDelay: '240ms' }}>
              The Art of Indian Craftsmanship.
            </span>
            <span className="block animate-rise italic text-stone" style={{ animationDelay: '380ms' }}>
              Sourced for the World.
            </span>
          </h1>
          <p
            className="mt-8 max-w-xl animate-rise text-sm leading-relaxed text-ivory/70 md:text-base"
            style={{ animationDelay: '520ms' }}
          >
            Connecting exceptional Indian metal craftsmanship with businesses across the globe.
          </p>
          <div
            className="mt-10 flex animate-rise flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: '660ms' }}
          >
            <Link to="/collections" className="btn bg-ivory text-charcoal hover:bg-gold hover:text-ivory">
              Explore Our Collections <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link to="/about" className="btn border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal">
              Discover Cauveran
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-site items-center gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative">
                <SmartImage
                  src={images.philosophy}
                  alt="Artisan hands shaping a handcrafted metal vessel in a workshop"
                  className="aspect-[4/5] w-full"
                />
                <div aria-hidden="true" className="absolute -bottom-5 -right-5 hidden h-40 w-40 border border-gold/40 md:block" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal><p className="eyebrow">Our Philosophy</p></Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-4xl leading-[1.06] md:text-6xl">
                Rooted in Craft.<br />Driven by Possibility.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 h-px w-16 bg-gold/60" aria-hidden="true" />
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-brown md:text-[1.05rem]">
                CAUVERAN brings together the richness of Indian craftsmanship and the
                evolving needs of global businesses. We aim to create meaningful sourcing
                connections through thoughtful product discovery, trusted manufacturing
                relationships and a commitment to quality.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link to="/about" className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-charcoal transition-colors duration-300 hover:text-gold">
                Our Story
                <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal><p className="eyebrow">Collections</p></Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 font-display text-4xl leading-[1.06] md:text-6xl">
                  Discover Our Collections
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link to="/collections" className="group inline-flex items-center gap-3 border-b border-charcoal/25 pb-2 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 hover:border-gold hover:text-gold">
                View Full Catalogue
                <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
            {collections.map((item, i) => (
              <Reveal key={item.id} delay={60} className={collectionGrid[i]}>
                <CollectionCard item={item} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal><p className="eyebrow">Capabilities</p></Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 font-display text-4xl leading-[1.06] md:text-6xl">
                  From Craft<br />to Commerce.
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-brown md:text-base">
                  A coordinated sourcing service built around the realities of
                  international buying - clear requirements, defined checkpoints and
                  consistent communication.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                {capabilities.map((cap, i) => (
                  <Reveal key={cap.id} delay={i * 60}>
                    <li className="group flex gap-6 py-7">
                      <span className="mt-1 font-display text-sm tracking-[0.24em] text-gold/80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl transition-colors duration-300 group-hover:text-gold md:text-[1.6rem]">
                          {cap.title}
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-brown">{cap.short}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={120}>
                <Link to="/capabilities" className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 hover:text-gold">
                  Explore Capabilities
                  <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <Reveal><p className="eyebrow">Why Cauveran</p></Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.06] md:text-6xl">
              More Than Sourcing.<br />
              <span className="italic text-brown">A Partnership in Possibility.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-charcoal/15 pt-12 md:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 70}>
                <div>
                  <span className="font-display text-sm tracking-[0.24em] text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-snug md:text-[1.4rem]">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brown">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal><p className="eyebrow">Our Process</p></Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 font-display text-4xl leading-[1.06] md:text-6xl">
                  A Considered Path<br />from Brief to Delivery.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <p className="max-w-sm text-sm leading-relaxed text-brown">
                Five coordinated stages that keep requirements, samples, quality and logistics
                aligned from the first conversation.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-1 border-t border-charcoal/15 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="border-b border-charcoal/15 py-9 md:border-b-0 md:border-r md:py-12 md:pr-6 md:last:border-r-0">
                  <p className="font-display text-4xl text-gold/70 md:text-5xl">{step.number}</p>
                  <h3 className="mt-6 text-[11px] uppercase tracking-[0.3em]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brown">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory md:px-12 md:py-32">
        <div className="mx-auto max-w-site">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal><p className="eyebrow">International Buyers</p></Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 font-display text-4xl leading-[1.06] md:text-6xl">
                  Looking for the Right Sourcing Partner in India?
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/60">
                  Let&rsquo;s explore how CAUVERAN can support your next product requirement.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Reveal delay={240}>
                <Link to="/contact" className="btn group border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal">
                  Start a Conversation
                  <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
