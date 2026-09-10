import { useState, useRef, useEffect } from 'react';

export default function GlossaryTooltip({ term, plain, slug }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <span ref={ref} className="relative inline-flex">
      <button
        type="button"
        aria-describedby={`tip-${slug}`}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) setOpen(true); }}
        onMouseLeave={() => { if (window.matchMedia('(hover: hover)').matches) setOpen(false); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="glossary-term underline decoration-dotted decoration-brand-cyan/60 underline-offset-4 hover:text-brand-cyan cursor-help text-brand-cyan"
      >
        {term}
      </button>
      <span
        role="tooltip"
        id={`tip-${slug}`}
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-darkest border border-brand-blue/20 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.55)] text-sm text-white/90 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {plain}
        <a href={`/glossary/#${slug}`} className="block mt-2 text-brand-cyan text-xs hover:underline">Learn more →</a>
      </span>
    </span>
  );
}
