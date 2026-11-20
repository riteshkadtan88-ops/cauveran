import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import usePageMeta from '../hooks/usePageMeta';
import { images } from '../data/content';

export default function About() {
  usePageMeta({
    title: 'Our Story - CAUVERAN',
    description:
      'The story, vision and philosophy behind CAUVERAN - an Indian brass and metalware sourcing brand built around craftsmanship and international business.',
    image: images.craft,
  });

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A bridge between Indian craft and global commerce."
        intro="CAUVERAN exists to make the depth of Indian metal craftsmanship accessible, understandable and dependable for businesses buying internationally."
      />

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-site gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal><p className="eyebrow">Introduction</p></Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl leading-[1.1] md:text-5xl">
                Craft has always been India&rsquo;s quiet advantage.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-brown md:text-[1.05rem]">
                Across the country, metalworking traditions have been passed down through
                generations - in the shaping of a bowl, the weight of a vessel, the finish of
                a surface. These are skills that cannot be replicated quickly, and they remain
                deeply relevant to buyers looking for character rather than uniformity.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base leading-relaxed text-brown md:text-[1.05rem]">
                CAUVERAN was created to sit between that craft and the expectations of
                international business. That means translating a product brief into something
                a workshop can make, and translating a workshop&rsquo;s reality back into
                something a buyer can plan around.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-site items-center gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal>
              <SmartImage
                src={images.workshop}
                alt="Metal artisan working on a handcrafted brass piece in an Indian workshop"
                className="aspect-[4/5] w-full"
              />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal><p className="eyebrow">Vision</p></Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl leading-[1.1] md:text-5xl">
                To be a trusted reference point for Indian metalware sourcing.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 text-base leading-relaxed text-brown">
                We want buyers to think of CAUVERAN when they need Indian metalware that is
                well-chosen, well-made and well-coordinated - whether that is a catalogue
                collection, a custom development project or a repeat order.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <Link to="/capabilities" className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 hover:text-gold">
                How We Work
                <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-site">
          <Reveal><p className="eyebrow">Philosophy</p></Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.06] md:text-6xl">
              Rooted in Craft.<br />Driven by Possibility.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-charcoal/15 pt-12 md:grid-cols-3">
            {[
              { title: 'Respect for the Maker', body: 'Craft is not a constraint to be engineered out. We work with the grain of the tradition, not against it.' },
              { title: 'Clarity for the Buyer', body: 'Clear requirements, honest timelines and factual updates. No promises we cannot substantiate.' },
              { title: 'Quality as a Process', body: 'Consistency comes from defined checkpoints, not luck. We build those checkpoints into every order.' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div>
                  <span className="font-display text-sm tracking-[0.24em] text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brown">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory md:px-12 md:py-28">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-[1.1] md:text-5xl">
              Let&rsquo;s explore what Indian craft can do for your range.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="btn group border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal">
              Start a Conversation
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
