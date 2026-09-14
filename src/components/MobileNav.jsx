import { useEffect, useMemo, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/contact/', label: 'Contact' },
  { href: '/promotions/', label: 'Promotions' },
  { href: '/blog/', label: 'Blog' },
  { href: '/glossary/', label: 'Glossary' },
  { href: 'tel:+17044738188', label: '(704) 473-8188' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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

    if (!needle) return links;

    return links.filter((link) => {
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
            {filteredLinks.length > 0 ? (
              <ul className="divide-y divide-white/10">
                {filteredLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-4 py-4 text-lg font-semibold transition-colors ${
                        link.href.startsWith('tel:')
                          ? 'bg-lime-400/10 text-lime-300 hover:bg-lime-400/15'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-8 text-center text-sm text-white/60">
                No results found.
              </div>
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
