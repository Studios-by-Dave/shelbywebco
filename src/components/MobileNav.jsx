import { useEffect, useMemo, useState } from 'react';

const topLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
  { href: '/blog/', label: 'Blog' },
  { href: '/glossary/', label: 'Glossary' },
  { href: 'tel:+17044738188', label: '(704) 473-8188' },
];

const serviceLinks = [
  { href: '/services/web-design/', label: 'Web Design' },
  { href: '/services/branding/', label: 'Logo Design & Branding' },
  { href: '/services/seo/', label: 'SEO Services' },
  { href: '/services/custom-software-saas/', label: 'Custom Software & SaaS' },
  { href: '/services/case-studies/', label: 'Case Studies' },
  { href: '/services/portfolio/', label: 'Portfolio' },
];

const serviceAreaLinks = [
  { href: '/web-design-shelby-nc/', label: 'Service Area: Shelby, NC' },
  { href: '/web-design-gastonia-nc/', label: 'Service Area: Gastonia, NC' },
  { href: '/web-design-forest-city-nc/', label: 'Service Area: Forest City, NC' },
  { href: '/web-design-polkville-nc/', label: 'Service Area: Polkville, NC' },
  { href: '/web-design-asheville-nc/', label: 'Service Area: Asheville, NC' },
  { href: '/web-design-boiling-springs-nc/', label: 'Service Area: Boiling Springs, NC' },
  { href: '/web-design-kings-mountain-nc/', label: 'Service Area: Kings Mountain, NC' },
];

const aboutLinks = [
  { href: '/about/how-we-work/', label: 'How We Work' },
  { href: '/about/awards/', label: 'Awards' },
];

const promotionLinks = [
  { href: '/promotions/', label: 'Promotions' },
  { href: '/promotions/free-seo-audit/', label: 'Free SEO Audit' },
  { href: '/promotions/free-logo-design/', label: 'Free Logo Design' },
  { href: '/promotions/referral-bonus/', label: 'Referral Bonus' },
];

const allLinks = [...topLinks, ...serviceLinks, ...serviceAreaLinks, ...aboutLinks, ...promotionLinks];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [promotionsOpen, setPromotionsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const filteredLinks = useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) return allLinks;

    return allLinks.filter((link) => {
      return (
        link.label.toLowerCase().includes(needle) ||
        link.href.toLowerCase().includes(needle)
      );
    });
  }, [query]);

  const closeMenu = () => {
    setIsOpen(false);
    setQuery('');
  };

  const renderLink = (link, nested = false) => (
    <a
      href={link.href}
      onClick={closeMenu}
      className={`block px-4 py-3 text-lg font-semibold transition-colors ${
        nested ? 'pl-10 text-white/85 hover:bg-white/5' : 'text-white hover:bg-white/5'
      } ${link.href.startsWith('tel:') ? 'bg-lime-400/10 text-lime-300 hover:bg-lime-400/15' : ''}`}
    >
      {link.label}
    </a>
  );

  const renderDisclosure = (label, open, setOpen, children) => (
    <li>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/5"
      >
        {label}
        <svg className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <ul className="border-t border-white/10">{children}</ul>}
    </li>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className={`relative z-[100] flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-200 md:hidden ${
          isOpen
            ? 'border-slate-300 bg-slate-100 text-slate-900'
            : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
        }`}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6">
          <span
            className={`absolute left-0 block h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? 'top-2 rotate-45 bg-slate-900' : 'top-0 rotate-0 bg-current'
            }`}
          />
          <span
            className={`absolute left-0 top-2 block h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0 bg-slate-900' : 'opacity-100 bg-current'
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-6 rounded-full transition-all duration-300 ${
              isOpen ? 'top-2 -rotate-45 bg-slate-900' : 'top-4 rotate-0 bg-current'
            }`}
          />
        </span>
      </button>

      <div
        className={`md:hidden fixed inset-0 z-[90] transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,24,36,0.78),_rgba(2,4,9,0.96)_40%,_rgba(0,0,0,1)_100%)] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute inset-0 h-full w-full overflow-y-auto bg-[#07121f] text-white transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close mobile navigation"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-md text-xl text-white transition-colors hover:bg-white/5"
            >
              ×
            </button>
          </div>

          <div className="px-4 pt-4">
            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
              <svg
                className="h-5 w-5 shrink-0 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search topics and more"
                aria-label="Search site"
                className="w-full border-0 bg-transparent text-[15px] text-white placeholder:text-white/50 outline-none"
              />
            </label>
          </div>

          <nav aria-label="Mobile navigation" className="mt-3">
            {query.trim() ? (
              filteredLinks.length > 0 ? (
              <ul className="divide-y divide-white/10">
                {filteredLinks.map((link) => (
                  <li key={link.href}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
              ) : (
              <div className="px-4 py-8 text-center text-sm text-white/60">
                No results found.
              </div>
              )
            ) : (
              <ul className="divide-y divide-white/10">
                {topLinks.slice(0, 1).map((link) => <li key={link.href}>{renderLink(link)}</li>)}
                {renderDisclosure('Services', servicesOpen, setServicesOpen, <>
                  <li>{renderLink({ href: '/services/', label: 'All Services' }, true)}</li>
                  {serviceLinks.map((link) => <li key={link.href}>{renderLink(link, true)}</li>)}
                  {renderDisclosure('Service Areas', serviceAreasOpen, setServiceAreasOpen, serviceAreaLinks.map((link) => <li key={link.href}>{renderLink(link, true)}</li>))}
                </>)}
                {renderDisclosure('About', aboutOpen, setAboutOpen, <>
                  <li>{renderLink({ href: '/about/', label: 'About Us' }, true)}</li>
                  {aboutLinks.map((link) => <li key={link.href}>{renderLink(link, true)}</li>)}
                </>)}
                {renderDisclosure('Pricing', pricingOpen, setPricingOpen, <>
                  {renderLink({ href: '/pricing/', label: 'Pricing Page' }, true)}
                  {renderDisclosure('Promotions', promotionsOpen, setPromotionsOpen, promotionLinks.map((link) => <li key={link.href}>{renderLink(link, true)}</li>))}
                </>)}
                {topLinks.slice(3).map((link) => <li key={link.href}>{renderLink(link)}</li>)}
              </ul>
            )}
          </nav>

          <div className="border-t border-white/10 px-4 py-5">
            <div className="mx-auto max-w-[220px]">
              <a
                href="/contact/"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-xl border border-lime-400 bg-[#09111c] px-4 py-3 text-base font-bold text-lime-300 transition-colors hover:border-lime-300 hover:text-lime-200"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
