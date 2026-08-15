import { useState, useRef, useEffect } from 'react';

export default function DesktopNav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const dropdownRef = useRef(null);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
      if (pricingRef.current && !pricingRef.current.contains(event.target)) {
        setPricingOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-8 font-nav">
      <a href="/" className="text-white text-[1.1rem] leading-relaxed font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">Home</a>
      
      {/* Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="text-white text-[1.05rem] font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors flex items-center"
        >
          Services
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        {servicesOpen && (
          <div className="absolute left-0 mt-2 w-96 bg-brand-darkest border border-brand-blue/20 rounded-lg shadow-xl z-50">
            <div className="p-4">
              {/* Service Pages */}
              <div className="mb-4">
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2 font-bold">Our Services</p>
                <div className="space-y-1">
                  <a href="/services/web-design" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Web Design</a>
                  <a href="/services/branding" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Logo Design & Branding</a>
                  <a href="/services/seo" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">SEO Services</a>
                  <a href="/services/media-packs" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Media Packs</a>
                  <a href="/services/audio-branding" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Audio Branding</a>
                  <a href="/services/case-studies" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Case Studies</a>
                  <a href="/services/portfolio" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Portfolio</a>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="border-t border-brand-blue/20 pt-4">
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2 font-bold">Service Areas</p>
                <div className="grid grid-cols-2 gap-1">
                  <a href="/web-design-shelby-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Shelby, NC</a>
                  <a href="/web-design-gastonia-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Gastonia, NC</a>
                  <a href="/web-design-forest-city-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Forest City, NC</a>
                  <a href="/web-design-polkville-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Polkville, NC</a>
                  <a href="/web-design-asheville-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Asheville, NC</a>
                  <a href="/web-design-boiling-springs-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Boiling Springs, NC</a>
                  <a href="/web-design-kings-mountain-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-semibold">Kings Mountain, NC</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* About Dropdown */}
      <div className="relative" ref={aboutRef}>
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="text-white text-[1.05rem] font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors flex items-center"
        >
          About Us
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {aboutOpen && (
          <div className="absolute left-0 mt-2 w-52 bg-brand-darkest border border-brand-blue/20 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-1">
              <a href="/about" onClick={() => setAboutOpen(false)} className="block text-white hover:text-brand-cyan transition-colors py-2 font-semibold">About Us</a>
              <a href="/about/awards" onClick={() => setAboutOpen(false)} className="block text-white hover:text-brand-cyan transition-colors py-2 font-semibold">Awards</a>
            </div>
          </div>
        )}
      </div>
      
      {/* Pricing Dropdown */}
      <div className="relative" ref={pricingRef}>
        <button
          onClick={() => setPricingOpen(!pricingOpen)}
          className="text-white text-[1.05rem] font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors flex items-center"
        >
          Pricing
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${pricingOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Pricing Dropdown Menu */}
        {pricingOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-brand-darkest border border-brand-blue/20 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-1">
              <a href="/pricing" onClick={() => setPricingOpen(false)} className="block text-white hover:text-brand-cyan transition-colors py-2 font-semibold">Pricing Page</a>
              <a href="/promotions" onClick={() => setPricingOpen(false)} className="block text-white hover:text-brand-cyan transition-colors py-2 font-semibold">Promotions</a>
            </div>
          </div>
        )}
      </div>
      
      <a href="/contact" className="text-white text-[1.1rem] leading-relaxed font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">Contact</a>
      <a href="/blog" className="font-poofy font-bold text-2xl animate-color-cycle-blue drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-colors" style={{ WebkitTextStroke: '1px white' }}>Blog</a>
    </div>
  );
}
