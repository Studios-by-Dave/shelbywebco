import { useState, useEffect } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
    setPricingOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 w-12 h-12 flex items-center justify-center relative z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-3' : 'rotate-0 top-0'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100 top-3'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-3' : 'rotate-0 top-6'
            }`}
          />
        </div>
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 bg-brand-darkest z-40 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-6 font-body">
          <nav className="w-full max-w-lg" aria-label="Main navigation">
            <ul className="space-y-1 text-center">
              <li>
                <a
                  href="/"
                  onClick={closeMenu}
                  className="block text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  Home
                </a>
              </li>

              {/* Services Section */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-center w-full text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  Services
                  <svg
                    className={`ml-2 w-6 h-6 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="mt-4 space-y-3 pl-4">
                    <p className="text-brand-blue text-sm uppercase tracking-widest mb-3">Our Services</p>
                    <a
                      href="/services/"
                      onClick={closeMenu}
                      className="block text-brand-cyan text-2xl font-bold py-2 hover:text-white transition-colors"
                    >
                      View All Services →
                    </a>
                    <a
                      href="/services/web-design/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Web Design
                    </a>
                    <a
                      href="/services/branding/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Logo Design & Branding
                    </a>
                    <a
                      href="/services/seo/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      SEO Services
                    </a>
                    <a
                      href="/services/custom-software-saas/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Custom Software & SaaS
                    </a>
                    <a
                      href="/services/case-studies/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Case Studies
                    </a>
                    <a
                      href="/services/portfolio/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Portfolio
                    </a>

                    <div className="mt-6 pt-4 border-t border-brand-blue/20">
                      <p className="text-brand-blue text-sm uppercase tracking-widest mb-3">Service Areas</p>
                      <a
                        href="/web-design-shelby-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Shelby, NC
                      </a>
                      <a
                        href="/web-design-gastonia-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Gastonia, NC
                      </a>
                      <a
                        href="/web-design-forest-city-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Forest City, NC
                      </a>
                      <a
                        href="/web-design-polkville-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Polkville, NC
                      </a>
                      <a
                        href="/web-design-asheville-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Asheville, NC
                      </a>
                      <a
                        href="/web-design-boiling-springs-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Boiling Springs, NC
                      </a>
                      <a
                        href="/web-design-kings-mountain-nc/"
                        onClick={closeMenu}
                        className="block text-white text-xl py-2 hover:text-brand-cyan transition-colors"
                      >
                        Kings Mountain, NC
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* About Section */}
              <li>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-center w-full text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  About
                  <svg
                    className={`ml-2 w-6 h-6 transition-transform duration-300 ${
                      aboutOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {aboutOpen && (
                  <div className="mt-4 space-y-3 pl-4">
                    <a
                      href="/about/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="/about/how-we-work/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      How We Work
                    </a>
                    <a
                      href="/about/awards/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Awards
                    </a>
                  </div>
                )}
              </li>

              {/* Pricing Section */}
              <li>
                <button
                  onClick={() => setPricingOpen(!pricingOpen)}
                  className="flex items-center justify-center w-full text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  Pricing
                  <svg
                    className={`ml-2 w-6 h-6 transition-transform duration-300 ${
                      pricingOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {pricingOpen && (
                  <div className="mt-4 space-y-3 pl-4">
                    <a
                      href="/pricing/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Pricing Page
                    </a>
                    <a
                      href="/promotions/"
                      onClick={closeMenu}
                      className="block text-white text-2xl py-2 hover:text-brand-cyan transition-colors"
                    >
                      Promotions
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="/contact/"
                  onClick={closeMenu}
                  className="block text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/blog/"
                  onClick={closeMenu}
                  className="block font-poofy font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue-dark py-4 transition-colors duration-200"
                  style={{ WebkitTextStroke: '2px white' }}
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/glossary/"
                  onClick={closeMenu}
                  className="block text-white text-4xl md:text-5xl font-bold py-4 hover:text-brand-cyan transition-colors duration-200"
                >
                  Glossary
                </a>
              </li>

              <li>
                <a
                  href="tel:+17044738188"
                  className="block text-brand-cyan text-3xl font-bold py-4 hover:text-brand-cyanLight transition-colors"
                >
                  (704) 473-8188
                </a>
              </li>
            </ul>

            <div className="mt-12 text-center">
              <a
                href="/contact/"
                onClick={closeMenu}
                className="cta-glow-shine inline-block bg-brand-accent text-[#0A0A0A] px-8 py-4 rounded-2xl font-bold text-xl hover:bg-brand-accent-light transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
