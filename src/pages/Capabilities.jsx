import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import usePageMeta from '../hooks/usePageMeta';
import { capabilities, processSteps, images } from '../data/content';

export default function Capabilities() {
  usePageMeta({
    title: 'Capabilities - CAUVERAN',
    description:
      'Sourcing, manufacturing coordination, custom product development, quality assurance, order coordination and export support for international buyers of Indian metalware.',
    image: images.detail,
  });

  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="From Craft to Commerce."
        intro="A coordinated sourcing service built around the practical realities of buying from India - clear requirements, defined checkpoints and consistent communication."
      />

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-site">
          <div className="space-y-16 md:space-y-20">
            {capabilities.map((cap, i) => (
              <article key={cap.id} className="border-t border-charcoal/15 pt-10 md:pt-12">
                <div className="grid gap-6 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-1">
                    <Reveal>
                      <span className="font-display text-2xl text-gold/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </Reveal>
                  </div>
                  <div className="md:col-span-4">
                    <Reveal delay={60}>
                      <h2 className="font-display text-3xl leading-tight md:text-4xl">{cap.title}</h2>
                    </Reveal>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <Reveal delay={120}>
                      <p className="text-sm leading-relaxed text-brown md:text-base">{cap.long}</p>
                    </Reveal>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-site">
          <Reveal><p className="eyebrow">Our Process</p></Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.06] md:text-6xl">
              Five stages, one point of contact.
            </h2>
          </Reveal>
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

      <section className="bg-ivory px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-site">
          <Reveal>
            <SmartImage
              src={images.craft}
              alt="Close detail of hand-finished metalwork in a brass workshop"
              className="aspect-[21/9] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory md:px-12 md:py-28">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-[1.1] md:text-5xl">
              Ready to discuss a requirement?
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
