import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="absolute top-20 left-0 right-0 bg-brand-darkest border-b border-brand-sky/20 md:hidden">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-white hover:text-brand-glow py-2">Home</a>
            <a href="/services/web-design" className="block text-white hover:text-brand-glow py-2">Services</a>
            <a href="/about" className="block text-white hover:text-brand-glow py-2">About</a>
            <a href="/contact" className="block text-white hover:text-brand-glow py-2">Contact</a>
            <a href="/blog" className="block text-white hover:text-brand-glow py-2">Blog</a>
            <a href="tel:+17044738188" className="block text-brand-cyan hover:text-brand-glow py-2">
              (704) 473-8188
            </a>
            <a
              href="/contact#get-in-touch"
              className="block bg-gradient-to-r from-brand-sky to-brand-cyan text-white px-6 py-2.5 rounded-lg font-medium text-center mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
}
