import { useState, useMemo } from 'react';

export default function GlossarySearch({ terms }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const cats = useMemo(() => ['All', ...Array.from(new Set(terms.map(t => t.category)))], [terms]);
  const filtered = useMemo(() => {
    const needle = q.toLowerCase().trim();
    return terms.filter(t => {
      const catOk = cat === 'All' || t.category === cat;
      if (!catOk) return false;
      if (!needle) return true;
      return (t.term + ' ' + t.plain + ' ' + t.long).toLowerCase().includes(needle);
    });
  }, [q, cat, terms]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search terms — e.g. SEO, canonical, hosting…"
            className="w-full bg-brand-darkest border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">⌕</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {cats.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`px-3 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-colors ${cat === c ? 'bg-brand-cyan text-brand-darkest border-brand-cyan' : 'bg-brand-darkest border-white/10 text-white hover:border-brand-cyan/40'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="text-white/50 text-sm mb-6">{filtered.length} term{filtered.length === 1 ? '' : 's'}{q || cat !== 'All' ? ' — filtered' : ''}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(t => (
          <div key={t.slug} id={t.slug} className="scroll-mt-28 bg-brand-dark border border-white/5 rounded-2xl p-6 hover:border-brand-cyan/30 transition-colors">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-white">{t.term}</h3>
              <span className="shrink-0 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan">{t.category}</span>
            </div>
            <p className="text-brand-cyan text-sm font-medium mb-2">{t.plain}</p>
            <p className="text-white/70 text-sm leading-relaxed">{t.long}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-white/60 text-center py-12">No matches — try a broader search.</p>}
    </div>
  );
}
