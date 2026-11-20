import { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import usePageMeta from '../hooks/usePageMeta';
import { collections, site } from '../data/content';

const initial = { fullName: '', company: '', email: '', phone: '', country: '', category: '', quantity: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.company.trim()) errors.company = 'Please enter your company name.';
  if (!values.email.trim()) errors.email = 'Please enter your business email.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.country.trim()) errors.country = 'Please enter your country.';
  if (!values.category) errors.category = 'Please select a product category.';
  if (!values.message.trim()) errors.message = 'Please tell us about your requirement.';
  else if (values.message.trim().length < 15) errors.message = 'Please provide at least 15 characters.';
  return errors;
}

function buildMailto(values) {
  const subject = 'Business enquiry - ' + (values.company || values.fullName);
  const body = [
    'Full name: ' + values.fullName,
    'Company: ' + values.company,
    'Business email: ' + values.email,
    'Phone: ' + (values.phone || '-'),
    'Country: ' + values.country,
    'Product category: ' + values.category,
    'Quantity / requirements: ' + (values.quantity || '-'),
    '',
    'Message:',
    values.message,
  ].join('\n');
  return 'mailto:' + site.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

export default function Contact() {
  usePageMeta({
    title: 'Contact - CAUVERAN',
    description: 'Send a business enquiry to CAUVERAN. Share your product category, quantities and requirements and we will respond with next steps.',
  });

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setStatus('sending');
    if (!ENDPOINT) {
      window.location.href = buildMailto(values);
      setStatus('fallback');
      return;
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed with status ' + res.status);
      setStatus('success');
      setValues(initial);
    } catch (err) {
      setStatus('error');
    }
  };

  const fieldError = (name) =>
    errors[name] ? (
      <p id={name + '-error'} role="alert" className="mt-2 text-[11px] tracking-wide text-[#8a2f22]">
        {errors[name]}
      </p>
    ) : null;

  const aria = (name) => ({
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? name + '-error' : undefined,
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let&rsquo;s start a conversation."
        intro="Tell us about your product requirement, quantities and timelines. We will respond with a considered view of how CAUVERAN can support it."
      />

      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-site gap-16 md:grid-cols-12 md:gap-20">
          <aside className="md:col-span-4">
            <Reveal><p className="eyebrow">Business Enquiries</p></Reveal>
            <Reveal delay={90}>
              <p className="mt-6 text-sm leading-relaxed text-brown">
                We work with importers, retailers, hospitality suppliers, interior studios
                and corporate gifting programmes.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <dl className="mt-10 space-y-6 border-t border-charcoal/15 pt-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-brown/70">Email</dt>
                  <dd className="mt-2">
                    <a href={'mailto:' + site.email} className="transition-colors hover:text-gold">{site.email}</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-brown/70">Phone</dt>
                  <dd className="mt-2">
                    <a href={'tel:' + site.phone.replace(/\s/g, '')} className="transition-colors hover:text-gold">{site.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-brown/70">Based In</dt>
                  <dd className="mt-2">{site.location}</dd>
                </div>
              </dl>
            </Reveal>
            {!ENDPOINT && (
              <Reveal delay={220}>
                <div className="mt-10 border border-gold/40 bg-paper p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
                    Form delivery not configured
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-brown">
                    Submitting the form will open a pre-filled email in your mail client.
                    To connect a free service, set VITE_ENQUIRY_ENDPOINT - see README.md.
                  </p>
                </div>
              </Reveal>
            )}
          </aside>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              {status === 'success' && (
                <div role="status" className="mb-10 flex items-start gap-4 border border-gold/50 bg-paper p-6">
                  <Check size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="font-display text-xl">Thank you - your enquiry has been sent.</p>
                    <p className="mt-2 text-sm leading-relaxed text-brown">We will review your requirement and respond with next steps.</p>
                  </div>
                </div>
              )}
              {status === 'fallback' && (
                <div role="status" className="mb-10 flex items-start gap-4 border border-gold/50 bg-paper p-6">
                  <Check size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="font-display text-xl">Your email draft is ready.</p>
                    <p className="mt-2 text-sm leading-relaxed text-brown">
                      Your mail client should have opened with your enquiry pre-filled.
                      If it did not, please email <a href={'mailto:' + site.email} className="underline hover:text-gold">{site.email}</a> directly.
                    </p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div role="alert" className="mb-10 flex items-start gap-4 border border-[#8a2f22]/40 bg-[#8a2f22]/5 p-6">
                  <AlertCircle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#8a2f22]" />
                  <div>
                    <p className="font-display text-xl text-[#8a2f22]">We couldn&rsquo;t send your enquiry.</p>
                    <p className="mt-2 text-sm leading-relaxed text-brown">
                      Please try again, or email <a href={'mailto:' + site.email} className="underline hover:text-gold">{site.email}</a> directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="field-label">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" autoComplete="name" className="field" placeholder="Your name" value={values.fullName} onChange={update('fullName')} {...aria('fullName')} />
                    {fieldError('fullName')}
                  </div>
                  <div>
                    <label htmlFor="company" className="field-label">Company *</label>
                    <input id="company" name="company" type="text" autoComplete="organization" className="field" placeholder="Company name" value={values.company} onChange={update('company')} {...aria('company')} />
                    {fieldError('company')}
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">Business Email *</label>
                    <input id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@company.com" value={values.email} onChange={update('email')} {...aria('email')} />
                    {fieldError('email')}
                  </div>
                  <div>
                    <label htmlFor="phone" className="field-label">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="+00 000 000 0000" value={values.phone} onChange={update('phone')} />
                  </div>
                  <div>
                    <label htmlFor="country" className="field-label">Country *</label>
                    <input id="country" name="country" type="text" autoComplete="country-name" className="field" placeholder="Country" value={values.country} onChange={update('country')} {...aria('country')} />
                    {fieldError('country')}
                  </div>
                  <div>
                    <label htmlFor="category" className="field-label">Product Category *</label>
                    <select id="category" name="category" className="field appearance-none" value={values.category} onChange={update('category')} {...aria('category')}>
                      <option value="">Select a category</option>
                      {collections.map((c) => (<option key={c.id} value={c.title}>{c.title}</option>))}
                      <option value="Multiple / Other">Multiple / Other</option>
                    </select>
                    {fieldError('category')}
                  </div>
                </div>
                <div>
                  <label htmlFor="quantity" className="field-label">Quantity / Requirements</label>
                  <input id="quantity" name="quantity" type="text" className="field" placeholder="e.g. 500 units per style, first order" value={values.quantity} onChange={update('quantity')} />
                </div>
                <div>
                  <label htmlFor="message" className="field-label">Message *</label>
                  <textarea id="message" name="message" rows={5} className="field resize-none" placeholder="Tell us about the product, finish, target market and timeline." value={values.message} onChange={update('message')} {...aria('message')} />
                  {fieldError('message')}
                </div>
                <div className="flex flex-col gap-4 border-t border-charcoal/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] leading-relaxed text-brown/70">Fields marked * are required.</p>
                  <button type="submit" disabled={status === 'sending'} className="btn group bg-charcoal text-ivory hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60">
                    {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
                    <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
