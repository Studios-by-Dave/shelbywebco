import { useState, useEffect } from 'react';

const WEB3FORMS_KEY = '6c43f496-301c-46c2-afe8-743b55e17bb6';
const SESSION_KEY = 'sweb_project_popup_seen';

export default function ProjectPopup() {
  const [visible, setVisible] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    service: '',
    businessType: '',
    website: '',
    name: '',
    email: '',
    phone: '',
    challenge: '',
  });

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const close = () => {
    setVisible(false);
    setOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Start My Project — Website Intake',
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        alert('Something went wrong. Please try again or email us directly.');
        setSubmitting(false);
      }
    } catch {
      alert('Something went wrong. Please try again or email us directly.');
      setSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      {(!acknowledged || open) && (
        <div
          className="absolute inset-0 bg-brand-darkest/60 backdrop-blur-sm"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Card */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-brand-darkest to-brand-dark border border-brand-blue/30 rounded-2xl shadow-2xl overflow-hidden animate-pop">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-accent/10 blur-3xl" />

        {acknowledged && !open ? (
          /* Acknowledged micro-panel */
          <div className="relative p-6">
            <p className="text-brand-sky/80 text-sm leading-relaxed">
              No problem! If you change your mind, just hit the button below anytime.
            </p>
            <button
              onClick={() => { setAcknowledged(false); setVisible(true); }}
              className="mt-4 w-full text-center bg-white/10 border border-white/20 text-white text-lg font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Start My Project
            </button>
          </div>
        ) : done ? (
          /* Success */
          <div className="relative p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-lime-500 rounded-full flex items-center justify-center text-brand-darkest">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">Thanks! We'll be in touch.</h3>
            <p className="text-brand-sky/70 mb-6">Your project info is on its way to the Shelby Web Company team.</p>
            <button
              onClick={close}
              className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-light text-[#0A0A0A] text-lg font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header row */}
            {!acknowledged && (
              <div className="relative flex items-start justify-between p-6 pb-2">
                <span className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/40 text-brand-accent-light text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  Free Project Starter
                </span>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="text-white/50 hover:text-white text-2xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>
            )}

            {!acknowledged ? (
              /* Welcome prompt */
              <div className="relative p-6 pt-2">
                <p className="text-white text-sm leading-relaxed mb-4">
                  No worries, no <span className="text-red-500 font-semibold">SPaM</span> here — we just thought we'd point you in the right direction, to save you a little time and headache.
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to start your project today?
                </h3>
                <p className="text-brand-sky/80 text-lg leading-relaxed mb-6">
                  Start your website, SEO, branding or Custom SaaS project in under a minute.
                </p>
                <button
                  onClick={() => { setAcknowledged(true); setOpen(true); }}
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-light text-[#0A0A0A] text-lg font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all mb-3"
                >
                  Start My Project
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+17044738188"
                    className="text-center bg-white/10 border border-white/20 text-white text-base font-bold px-4 py-3 rounded-xl hover:bg-white/20 transition-all"
                  >
                    Text Us Instead
                  </a>
                  <button
                    onClick={() => setAcknowledged(true)}
                    className="text-center bg-transparent border border-white/25 text-white/90 text-base font-medium px-4 py-3 rounded-xl hover:border-white/50 hover:text-white transition-all"
                  >
                    I'm Just Browsing
                  </button>
                </div>
              </div>
            ) : (
              /* Multi-step intake */
              <form onSubmit={submit} className="relative p-6">
                {/* Progress dots */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-brand-sky/60 text-sm">Step {step} of 4</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((s) => (
                      <span
                        key={s}
                        className={`h-1.5 rounded-full transition-all ${s <= step ? 'w-6 bg-brand-accent' : 'w-2 bg-white/15'}`}
                      />
                    ))}
                  </div>
                </div>

                {step === 1 && (
                  <div className="pb-4">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">Which one of our services would be of service to you and your business?</h3>
                    <p className="text-brand-sky/70 mb-5">Pick the closest match — you can change it later.</p>
                    {[
                      { value: 'Website design', label: 'Website design' },
                      { value: 'SEO / Google Business Profile', label: 'SEO / Google Business Profile' },
                      { value: 'Logo / branding', label: 'Logo / branding' },
                      { value: 'Custom SaaS project', label: 'Custom SaaS project (Business Machines)' },
                      { value: 'Full digital presence', label: 'Full digital presence' },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`block border rounded-xl px-4 py-3 mb-2 cursor-pointer transition-all ${
                          form.service === opt.value
                            ? 'border-brand-accent bg-brand-accent/10 text-white'
                            : 'border-white/15 bg-white/5 text-white/80 hover:border-white/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={opt.value}
                          checked={form.service === opt.value}
                          onChange={(e) => update('service', e.target.value)}
                          className="sr-only"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="pb-4">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">What type of business do you run?</h3>
                    <p className="text-brand-sky/70 mb-5">This helps us tailor our recommendation to you.</p>
                    <input
                      type="text"
                      value={form.businessType}
                      onChange={(e) => update('businessType', e.target.value)}
                      placeholder="e.g. Plumbing company, salon, law firm"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="pb-4">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">Do you have a website?</h3>
                    <p className="text-brand-sky/70 mb-5">Optional, but it helps us assess your current presence.</p>
                    <input
                      type="text"
                      value={form.website}
                      onChange={(e) => update('website', e.target.value)}
                      placeholder="e.g. www.yourbusiness.com"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="pb-4 space-y-4">
                    <h3 className="font-heading text-2xl font-bold text-white mb-1">Your contact info</h3>
                    <p className="text-brand-sky/70">We'll send a personalized recommendation.</p>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Full name"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="Email address"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="Phone number (optional)"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                    <textarea
                      value={form.challenge}
                      onChange={(e) => update('challenge', e.target.value)}
                      placeholder="What is your biggest online marketing challenge? (optional)"
                      rows={2}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-base focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                )}

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => (step === 1 ? close() : setStep(step - 1))}
                    className="text-center bg-transparent border border-white/15 text-white/70 font-semibold px-4 py-3 rounded-xl hover:border-white/30 transition-all"
                  >
                    {step === 1 ? 'Cancel' : 'Back'}
                  </button>
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={step === 1 && !form.service}
                      className="bg-gradient-to-r from-brand-accent to-brand-accent-light text-[#0A0A0A] font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-gradient-to-r from-brand-accent to-brand-accent-light text-[#0A0A0A] font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-60"
                    >
                      {submitting ? 'Sending…' : 'Send My Project'}
                    </button>
                  )}
                </div>
              </form>
            )}
          </>
        )}
      </div>

      <style>{`
        .animate-pop {
          animation: pop-in 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes pop-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}