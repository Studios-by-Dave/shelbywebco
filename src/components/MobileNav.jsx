import { useEffect, useMemo, useState } from 'react';

const topLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
  { href: '/blog/', label: 'Blog' },
];

const phoneLink = { href: 'tel:+17044738188', label: '(704) 473-8188' };

const serviceLinks = [
  { href: '/services/', label: 'All Services' },
  { href: '/services/web-design/', label: 'Web Design' },
  { href: '/services/branding/', label: 'Logo Design & Branding' },
  { href: '/services/seo/', label: 'SEO Services' },
  { href: '/services/custom-software-saas/', label: 'Custom Software & SaaS' },
  { href: '/services/case-studies/', label: 'Case Studies' },
  { href: '/services/portfolio/', label: 'Portfolio' },
];

const serviceAreaLinks = [
  { href: '/web-design-shelby-nc/', label: 'Shelby, NC' },
  { href: '/web-design-kings-mountain-nc/', label: 'Kings Mountain, NC' },
  { href: '/web-design-boiling-springs-nc/', label: 'Boiling Springs, NC' },
  { href: '/web-design-cleveland-county-nc/', label: 'Cleveland County, NC' },
  { href: '/web-design-gastonia-nc/', label: 'Gastonia, NC' },
  { href: '/web-design-forest-city-nc/', label: 'Forest City, NC' },
  { href: '/web-design-polkville-nc/', label: 'Polkville, NC' },
  { href: '/web-design-western-nc/', label: 'Western NC' },
];

const industryLinks = [
  { href: '/web-design-for-home-remodelers-shelby-nc/', label: 'Home Remodelers' },
  { href: '/web-design-for-construction-shelby-nc/', label: 'Construction Trades' },
  { href: '/web-design-for-landscapers-shelby-nc/', label: 'Landscapers' },
  { href: '/web-design-for-tree-specialists-shelby-nc/', label: 'Tree Specialists' },
  { href: '/web-design-for-roofers-shelby-nc/', label: 'Roofers' },
];

const aboutLinks = [
  { href: '/about/how-we-work/', label: 'How We Work' },
  { href: '/about/awards/', label: 'Awards' },
  { href: '/about/causes-we-support/', label: 'Causes We Support' },
];

const promotionLinks = [
  { href: '/promotions/free-seo-audit/', label: 'Free SEO Audit' },
  { href: '/promotions/free-logo-design/', label: 'Free Logo Design' },
  { href: '/promotions/referral-bonus/', label: 'Referral Bonus' },
  { href: '/promotions/the-golden-ticket/', label: 'The Golden Ticket', gold: true },
];

const allLinks = [...topLinks, ...serviceLinks, ...serviceAreaLinks, ...industryLinks, ...aboutLinks, ...promotionLinks];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
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
    setServicesOpen(false);
    setAreasOpen(false);
    setIndustriesOpen(false);
    setPromotionsOpen(false);
    setQuery('');
  };

  const groupButtonClass =
    'flex w-full items-center justify-center gap-2 px-4 py-3 text-3xl font-bold mobile-nav-subtle-italic text-white transition-colors hover:bg-white/5 hover:text-brand-cyan';

  const subLinkClass =
    'block px-8 py-2 text-left text-lg font-semibold text-white transition-colors hover:bg-white/5 hover:text-brand-cyan';

  const subListClass = 'border-y border-white/10 bg-white/5 py-2';

  const renderLink = (link) => {
    const isBlog = link.label === 'Blog';
    const isTel = link.href.startsWith('tel:');
    const isGold = 'gold' in link && link.gold;
    const topLevel = isTel
      ? 'py-3 text-2xl font-bold text-lime-300 bg-lime-400/10 hover:bg-lime-400/15'
      : isBlog
        ? 'py-3 animate-blog-stream font-poofy text-3xl text-white hover:text-brand-cyan hover:bg-white/5'
        : isGold
          ? 'py-3 text-3xl font-bold text-[#fbbf24] hover:text-[#f8d66d] bg-[#fbbf24]/5 hover:bg-[#fbbf24]/10'
          : 'py-3 text-3xl font-bold text-white hover:text-brand-cyan hover:bg-white/5';
    return (
      <a
        href={link.href}
        onClick={closeMenu}
        className={`block px-4 text-center mobile-nav-subtle-italic transition-colors ${topLevel} ${isGold ? 'animate-mobile-golden-ticket-glow' : ''}`}
        style={isBlog ? { WebkitTextStroke: '0.6px white' } : undefined}
      >
        {link.label}
      </a>
    );
  };

  const Chevron = ({ open }) => (
    <svg
      className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
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
          className={`absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,12,17,0.78),_rgba(2,3,6,0.96)_40%,_rgba(0,0,0,1)_100%)] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute inset-0 h-full w-full overflow-y-auto bg-[#101319] text-white transition-transform duration-300 ${
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
                  strokeWidth={2}
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
              <ul className="py-2">
                <li>
                  <a
                    href="/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-center text-3xl font-bold mobile-nav-subtle-italic text-white transition-colors hover:bg-white/5 hover:text-brand-cyan"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOpen((open) => !open);
                      setAreasOpen(false);
                    }}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-service-links"
                    className={groupButtonClass}
                  >
                    Services
                    <Chevron open={servicesOpen} />
                  </button>
                  {servicesOpen && (
                    <div id="mobile-service-links">
                      <ul className={subListClass}>
                        {serviceLinks.map((service) => (
                          <li key={service.href}>
                            <a href={service.href} onClick={closeMenu} className={subLinkClass}>
                              {service.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => setAreasOpen((open) => !open)}
                        aria-expanded={areasOpen}
                        aria-controls="mobile-service-area-links"
                        className="flex w-full items-center justify-between gap-2 px-8 py-2.5 text-left text-lg font-bold text-white/85 transition-colors hover:bg-white/5 hover:text-brand-cyan"
                      >
                        Service Areas
                        <Chevron open={areasOpen} />
                      </button>
                      {areasOpen && (
                        <ul id="mobile-service-area-links" className="bg-white/5 py-2">
                          {serviceAreaLinks.map((area) => (
                            <li key={area.href}>
                              <a
                                href={area.href}
                                onClick={closeMenu}
                                className="block py-2 pl-14 pr-8 text-left text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-brand-cyan"
                              >
                                {area.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIndustriesOpen((open) => !open)}
                    aria-expanded={industriesOpen}
                    aria-controls="mobile-industry-links"
                    className={groupButtonClass}
                  >
                    Industries
                    <Chevron open={industriesOpen} />
                  </button>
                  {industriesOpen && (
                    <ul id="mobile-industry-links" className={subListClass}>
                      {industryLinks.map((industry) => (
                        <li key={industry.href}>
                          <a href={industry.href} onClick={closeMenu} className={subLinkClass}>
                            {industry.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="/about/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-center text-3xl font-bold mobile-nav-subtle-italic text-white transition-colors hover:bg-white/5 hover:text-brand-cyan"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-center text-3xl font-bold mobile-nav-subtle-italic text-white transition-colors hover:bg-white/5 hover:text-brand-cyan"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-center text-3xl font-bold mobile-nav-subtle-italic text-white transition-colors hover:bg-white/5 hover:text-brand-cyan"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  {renderLink(phoneLink)}
                </li>
                <li>
                  <a
                    href="/blog/"
                    onClick={closeMenu}
                    className="block px-4 py-3 animate-blog-stream text-center font-poofy text-3xl text-white transition-colors hover:bg-white/5 hover:text-brand-cyan"
                    style={{ WebkitTextStroke: '0.6px white' }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setPromotionsOpen((open) => !open)}
                    aria-expanded={promotionsOpen}
                    aria-controls="mobile-promotion-links"
                    className={groupButtonClass}
                  >
                    Promotions
                    <Chevron open={promotionsOpen} />
                  </button>
                  {promotionsOpen && (
                    <ul id="mobile-promotion-links" className={subListClass}>
                      {promotionLinks.map((promotion) => (
                        <li key={promotion.href}>
                          <a
                            href={promotion.href}
                            onClick={closeMenu}
                            className={`block px-8 py-2 text-left text-lg font-semibold transition-colors hover:bg-white/5 ${promotion.gold ? 'text-[#fbbf24] hover:text-[#f8d66d] animate-mobile-golden-ticket-glow' : 'text-white hover:text-brand-cyan'}`}
                          >
                            {promotion.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </nav>

          <div className="border-t border-white/10 px-4 py-5">
            <div className="mx-auto max-w-[220px]">
              <a
                href="/contact/"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-xl border border-lime-400 bg-[#161b23] px-4 py-3 text-base font-bold text-lime-300 transition-colors hover:border-lime-300 hover:text-lime-200"
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
