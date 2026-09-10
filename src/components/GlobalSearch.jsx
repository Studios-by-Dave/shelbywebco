import { useState, useEffect, useMemo } from 'react';
import glossary from '../data/glossary.json';

const PAGES = [
  { title: 'Web Design Services', href: '/services/web-design/', desc: 'High-performance sites' },
  { title: 'SEO Services', href: '/services/seo/', desc: 'Rank higher, get more leads' },
  { title: 'Branding & Logo Design', href: '/services/branding/', desc: 'Logos and brand identity' },
  { title: 'Custom Software & SaaS', href: '/services/custom-software-saas/', desc: 'STRAT and custom builds' },
  { title: 'Portfolio', href: '/services/portfolio/', desc: 'Recent work' },
  { title: 'Pricing', href: '/pricing/', desc: 'Packages and pricing' },
  { title: 'About Us', href: '/about/', desc: 'Meet the team' },
  { title: 'Contact', href: '/contact/', desc: 'Get a free quote' },
  { title: 'Blog', href: '/blog/', desc: 'Articles and spotlights' },
  { title: 'Glossary', href: '/glossary/', desc: 'Plain-English web terms' },
];

const GLOSSARY_ITEMS = glossary.map(g => ({ title: g.term, href: `/glossary/#${g.slug}`, desc: g.plain, cat: g.category }));

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(v => !v); }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const all = [...PAGES, ...GLOSSARY_ITEMS];
    if (!needle) return all.slice(0, 8);
    return all.filter(r => (r.title + ' ' + r.desc).toLowerCase().includes(needle)).slice(0, 10);
  }, [q]);

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        title="Search (Ctrl+K)"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100001] flex items-start justify-center pt-[10vh] p-4">
          <button type="button" aria-label="Close search" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative w-full max-w-xl bg-brand-darkest border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                autoFocus
                type="search"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search pages, blog, glossary…"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-[15px]"
              />
              <button type="button" onClick={() => setOpen(false)} className="text-white/40 hover:text-white text-sm px-2 py-1 rounded hover:bg-white/10">Esc</button>
            </div>
            <div className="max-h-[50vh] overflow-auto p-2">
              {results.length === 0 ? (
                <p className="text-white/50 text-sm text-center py-8">No matches</p>
              ) : (
                <ul className="space-y-1">
                  {results.map(r => (
                    <li key={r.href}>
                      <a href={r.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                        <div>
                          <p className="text-white text-sm font-semibold">{r.title}</p>
                          <p className="text-white/50 text-xs">{r.desc}</p>
                        </div>
                        <span className="text-white/20 text-xs shrink-0">{r.href.includes('/glossary/#') ? r.cat || 'Glossary' : 'Page'}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="px-4 py-2 border-t border-white/5 text-[11px] text-white/30">Press Ctrl+K to toggle · Enter to open</div>
          </div>
        </div>
      )}
    </>
  );
}
