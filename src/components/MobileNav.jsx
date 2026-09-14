import { useEffect, useState } from 'react';

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

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="relative z-[80] flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative block h-5 w-6">
          <span
            className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
            }`}
          />
          <span
            className={`absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
            }`}
          />
        </span>
      </button>

      <div
        className={`md:hidden ${
          isOpen ? 'pointer-events-auto fixed inset-0 z-[70] opacity-100' : 'pointer-events-none fixed inset-0 z-[70] opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close mobile navigation"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/90 transition-opacity duration-200 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`relative z-10 h-full overflow-hidden bg-[#070d16]/95 px-5 pb-8 pt-6 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-sm pt-4">
            <ul className="grid grid-cols-2 gap-x-4">
              {links.map((link) => (
                <li key={link.href} className={link.href.startsWith('tel:') ? 'col-span-2' : ''}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block border-b border-white/10 py-2.5 text-lg font-semibold transition-colors duration-200 hover:text-brand-cyan ${
                      link.href.startsWith('tel:')
                        ? 'bg-gradient-to-r from-brand-blue-light via-brand-cyan to-brand-blue-light bg-clip-text text-transparent'
                        : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 text-center">
              <a
                href="/contact/"
                onClick={closeMenu}
                className="mx-auto inline-flex w-2/3 max-w-xs items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-base font-bold text-[#09111c] transition-colors duration-200 hover:bg-brand-accent-light"
              >
                Start a Project
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
