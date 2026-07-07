import { useState, useRef, useEffect } from 'react';

export default function DesktopNav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-8 font-nav">
      <a href="/" className="text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">Home</a>
      
      {/* Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors flex items-center"
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
                  <a href="/services/web-design" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Web Design</a>
                  <a href="/services/branding" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Logo Design & Branding</a>
                  <a href="/services/seo" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">SEO Services</a>
                  <a href="/services/media-packs" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Media Packs</a>
                  <a href="/services/audio-branding" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Audio Branding</a>
                  <a href="/services/case-studies" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Case Studies</a>
                  <a href="/services/portfolio" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Portfolio</a>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="border-t border-brand-blue/20 pt-4">
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2 font-bold">Service Areas</p>
                <div className="grid grid-cols-2 gap-1">
                  <a href="/web-design-shelby-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Shelby, NC</a>
                  <a href="/web-design-gastonia-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Gastonia, NC</a>
                  <a href="/web-design-forest-city-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Forest City, NC</a>
                  <a href="/web-design-polkville-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Polkville, NC</a>
                  <a href="/web-design-asheville-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Asheville, NC</a>
                  <a href="/web-design-boiling-springs-nc" className="block text-white hover:text-brand-cyan transition-colors py-1 font-medium">Boiling Springs, NC</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <a href="/about" className="text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">About Us</a>
      <a href="/pricing" className="text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">Pricing</a>
      <a href="/contact" className="text-white font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-brand-blue transition-colors">Contact</a>
      <a href="/blog" className="text-orange-500 font-heading font-black text-xl hover:text-white transition-colors" style={{ WebkitTextStroke: '1px #67e8f9' }}>Blog</a>
    </div>
  );
}
