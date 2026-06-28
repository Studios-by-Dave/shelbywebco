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
    <div className="hidden md:flex items-center space-x-8">
      <a href="/" className="text-white font-medium hover:text-brand-blue transition-colors">Home</a>
      
      {/* Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="text-white font-medium hover:text-brand-blue transition-colors flex items-center"
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
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2">Our Services</p>
                <div className="space-y-1">
                  <a href="/services/web-design" className="block text-white hover:text-brand-cyan transition-colors py-1">Web Design & Development</a>
                  <a href="/services/branding" className="block text-white hover:text-brand-cyan transition-colors py-1">Logo Design & Branding</a>
                  <a href="/services/seo" className="block text-white hover:text-brand-cyan transition-colors py-1">SEO Services</a>
                  <a href="/services/media-packs" className="block text-white hover:text-brand-cyan transition-colors py-1">Custom Media Packs</a>
                  <a href="/services/audio-branding" className="block text-white hover:text-brand-cyan transition-colors py-1">Audio Branding</a>
                  <a href="/services/case-studies" className="block text-white hover:text-brand-cyan transition-colors py-1">Case Studies</a>
                  <a href="/services/portfolio" className="block text-white hover:text-brand-cyan transition-colors py-1">Portfolio</a>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="border-t border-brand-blue/20 pt-4">
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2">Service Areas</p>
                <div className="grid grid-cols-2 gap-1">
                  <a href="/web-design-shelby-nc" className="block text-white hover:text-brand-cyan transition-colors py-1">Shelby, NC</a>
                  <a href="/web-design-charlotte-nc" className="block text-white hover:text-brand-cyan transition-colors py-1">Charlotte, NC</a>
                  <a href="/web-design-gastonia-nc" className="block text-white hover:text-brand-cyan transition-colors py-1">Gastonia, NC</a>
                  <a href="/web-design-spartanburg-sc" className="block text-white hover:text-brand-cyan transition-colors py-1">Spartanburg, SC</a>
                  <a href="/web-design-asheville-nc" className="block text-white hover:text-brand-cyan transition-colors py-1">Asheville, NC</a>
                  <a href="/web-design-raleigh-nc" className="block text-white hover:text-brand-cyan transition-colors py-1">Raleigh, NC</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <a href="/about" className="text-white font-medium hover:text-brand-blue transition-colors">About</a>
      <a href="/pricing" className="text-white font-medium hover:text-brand-blue transition-colors">Pricing</a>
      <a href="/contact" className="text-white font-medium hover:text-brand-blue transition-colors">Contact</a>
      <a href="/blog" className="text-white font-medium hover:text-brand-blue transition-colors">Blog</a>
    </div>
  );
}
