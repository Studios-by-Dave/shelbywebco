import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-brand-darkest border-b border-brand-blue/20 md:hidden font-nav">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-white font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue py-2">Home</a>
            
            {/* Services Section */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-white font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue py-2"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
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
                <div className="pl-4 space-y-2 mt-2">
                  {/* Our Services */}
                  <div>
                    <p className="text-brand-blue text-xs uppercase tracking-widest mb-2">Our Services</p>
                    <a href="/services/web-design" className="block text-white hover:text-brand-cyan py-1">Web Design</a>
                    <a href="/services/branding" className="block text-white hover:text-brand-cyan py-1">Logo Design & Branding</a>
                    <a href="/services/seo" className="block text-white hover:text-brand-cyan py-1">SEO Services</a>
                    <a href="/services/media-packs" className="block text-white hover:text-brand-cyan py-1">Media Packs</a>
                    <a href="/services/audio-branding" className="block text-white hover:text-brand-cyan py-1">Audio Branding</a>
                    <a href="/services/case-studies" className="block text-white hover:text-brand-cyan py-1">Case Studies</a>
                    <a href="/services/portfolio" className="block text-white hover:text-brand-cyan py-1">Portfolio</a>
                  </div>
                  
                  {/* Service Areas */}
                  <div className="mt-4 pt-4 border-t border-brand-blue/20">
                    <p className="text-brand-blue text-xs uppercase tracking-widest mb-2">Service Areas</p>
                    <a href="/web-design-shelby-nc" className="block text-white hover:text-brand-cyan py-1">Shelby, NC</a>
                    <a href="/web-design-gastonia-nc" className="block text-white hover:text-brand-cyan py-1">Gastonia, NC</a>
                    <a href="/web-design-forest-city-nc" className="block text-white hover:text-brand-cyan py-1">Forest City, NC</a>
                    <a href="/web-design-polkville-nc" className="block text-white hover:text-brand-cyan py-1">Polkville, NC</a>
                    <a href="/web-design-asheville-nc" className="block text-white hover:text-brand-cyan py-1">Asheville, NC</a>
                    <a href="/web-design-boiling-springs-nc" className="block text-white hover:text-brand-cyan py-1">Boiling Springs, NC</a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/about" className="block text-white font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue py-2">About Us</a>
            <a href="/pricing" className="block text-white font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue py-2">Pricing</a>
            <a href="/contact" className="block text-white font-normal drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue py-2">Contact</a>
            <a href="/blog" className="block text-orange-500 font-heading font-black text-xl hover:text-white py-2" style={{ WebkitTextStroke: '1px #67e8f9' }}>Blog</a>
            <a href="tel:+17044738188" className="block text-brand-cyan hover:text-brand-cyanLight py-2">
              (704) 473-8188
            </a>
            <a
              href="/contact"
              className="block bg-brand-accent text-[#0A0A0A] px-6 py-2.5 rounded-lg font-medium text-center mt-4 hover:bg-brand-accent-light transition-all duration-300 shadow-[0_0_15px_rgba(132,204,22,0.3)]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
