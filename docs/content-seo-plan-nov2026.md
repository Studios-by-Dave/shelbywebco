# Content & SEO Plan — Nov 2026 (from OpenSEO strategy)

**Source:** external OpenSEO/GSC strategy review, Nov 17 2026.
**Goal:** convert existing rankings into sessions+leads before publishing more articles, then add content only where the keyword data supports it.

## What the repo says vs. what the strategy assumes (check these first)

Three of the strategy's premises are already partly handled in code — worth knowing before doing the work:

1. **The "duplicate" URLs are already 301'd.** `vercel.json` redirects
   `/blog/local-seo-shelby-complete-guide/` → `/blog/local-seo-essentials-2026/` and
   `/blog/ai-search-geo-shelby-businesses/` → `/blog/ai-search-2026/` (also the
   `web-designers-near-me-vs-big-agencies` and `professional-web-design-shelby-nc-leads` variants).
   → No consolidation needed. Just confirm GSC shows them as "Page with redirect" and that no
   internal links still point at the old slugs.
2. **`seo-in-gastonia` is `draft: true`.** It is not live today (filtered out of
   `getStaticPaths` in `src/pages/blog/[...slug].astro`). If GSC shows impressions for it, those are
   from an older URL/history. Publishing the already-written draft is a near-zero-effort win.
3. **There is no conversion tracking at all.** `src/layouts/BaseLayout.astro` only has the base
   `gtag('config', ...)`; there are zero `gtag('event', ...)` calls anywhere in `src/`. That is the
   mechanical reason the homepage logged 98 organic sessions and 0 key events. Fixing this is worth
   more than any new article.

---

## Phase 0 — Verify (½ day, no code)

- [ ] GSC → Pages: confirm indexing status for the 12 published blog posts (which are "Crawled – not indexed" vs "Discovered").
- [ ] GSC → Pages → "Page with redirect": confirm the old duplicate slugs are counted there and not as
      "Duplicate, Google chose different canonical".
- [ ] GSC → Performance → filter to `/` — record the 28-day baseline (impressions, clicks, position) for
      homepage, `why-choose-shelby-web-company`, `website-cost-shelby-nc-2026`,
      `local-seo-essentials-2026`, `best-web-designers-near-me`.
- [ ] GA4 → Admin → Events: confirm no `generate_lead` / outbound-click events exist (expected).
- [ ] Weekly Search Console check of queries `seo shelby nc`, `web design shelby nc`, `seo gastonia`,
      `website cost shelby nc` — the local terms the tool can't measure but we can.

---

## Phase 1 — Fix conversion + tracking (highest ROI, do first)

The homepage converts 0 of 98 organic sessions. Nothing else in this plan matters until that moves.

- [ ] **Add GA4 events** (new small script or inline in `BaseLayout.astro`):
  - `generate_lead` — fire on `result.success` in `src/pages/contact.astro` form submit handler (~line 196).
  - `generate_lead` — same for the free-audit form in `src/pages/promotions/free-seo-audit.astro`.
  - `contact_click` — delegated listener for `a[href^="tel:"]` / `a[href^="sms:"]`
    (covers `MobileStickyBar.astro`, `DesktopStickyDock.astro`, `Footer.astro`).
  - `audit_click` — delegated listener for `a[href*="/promotions/free-seo-audit/"]`.
  - Include `page_location` + CTA label so we can see which page/section produced the lead.
- [ ] Mark `generate_lead` as a **key event** in GA4 once it fires.
- [ ] **Fix CTA gaps on traffic pages:**
  - `src/pages/blog/local-seo-essentials-2026.astro` links `/contact/` twice and never links the
    free audit or `/services/seo/` as a CTA → add a mid-article CTA block + end-of-article CTA.
  - `src/pages/blog/why-choose-shelby-web-company.astro` — add one audit CTA above the fold and one at the end.
  - `src/pages/blog/best-web-designers-near-me.astro` — add audit CTA.
  - Homepage (`src/pages/index.astro`) — confirm the =above-the-fold hero CTA is a single, obvious action;
    do not re-litigate the funnel (see `docs/cta-funnel-plan.md`, superseded).

---

## Phase 2 — Optimize what already ranks (2–3 weeks)

### 2.1 Homepage title + meta (most impressions, best position)

Current:
- Title: `Website Rescue, SEO Fixes & New Website Builds | Shelby Web Co.`
- Description: `Website rescue, SEO fixes, and strategic website builds from $497. Month-to-month, cancel anytime. Web design and SEO in Shelby, NC. Call (704) 473-8188.`

Proposed (test one change at a time, keep under limits):
- Title: `Website Rescue & Local SEO in Shelby, NC | Shelby Web Co.` (55 chars)
- Description: `Website not bringing leads? We fix visibility, credibility, and conversion for Shelby-area businesses — new builds from $497. Free SEO audit.` (140)

Rationale: leads with the local query + the rescue offer, drops the vague "strategic".

### 2.2 Publish + optimize the 0-click / near-page-one pages

| Page | Status | Action |
|---|---|---|
| `seo-in-gastonia-gaston-county-checklist.md` | **draft** | Flip `draft: false`, set `dateModified` today, add `seoTitle: "SEO in Gastonia, NC: 90-Day Checklist"`, then request indexing |
| `why-choose-shelby-web-company.astro` | live, pos 6.5, 0 clicks | Rewrite title to include location + differentiator; tighten meta to a benefit + proof |
| `best-web-designers-near-me.astro` | live, pos 16.3 | **Title says "Cleveland, NC"** — mismatch with slug/intent. Retitle to `How to Choose a Web Designer (Shelby & Cleveland County)`; add comparison table + audit CTA |
| `website-cost-shelby-nc-2026.astro` | live, pos 10.4 | Add price-comparison table near top + FAQ schema; link to pricing page |
| `ai-search-2026.md` | hub, good position | Do not rewrite; bump `dateModified`, add 2–3 answer-first snippets for "how to rank in ChatGPT" queries |
| `local-seo-essentials-2026.astro` | hub, pos 13.5 / 79 impressions | See 2.3 |

### 2.3 Push the local SEO hub onto page one (`local-seo-essentials-2026.astro`)

- [ ] Add a **FAQ block with `FAQPage` schema** (currently the page has zero schema and one passing
      mention of FAQ). Pattern: reuse `src/components/FaqSection.astro`, or `faqs` array if converted to a collection post.
- [ ] **Inbound internal links from four spokes** (edit each file's related/pillar section or inline body):
  - `google-business-profile-shelby-contractors.md`
  - `google-business-profile-posts-2026.md`
  - `service-pages-that-rank-cleveland-county.md`
  - `structured-data-basics-local-business.md`
- [ ] Add a "next step" block linking `/services/seo/`, `/promotions/free-seo-audit/`, `/pricing/`.
- [ ] Refresh: update `dateModified` and rewrite the intro's "Don't Get Left Behind in AI Search"
      subtitle into a keyword-bearing promise.
- [ ] Repeat the same hub→spoke pattern on `ai-search-2026.md` and `website-cost-shelby-nc-2026.astro`.

### 2.4 Internal links from hubs/spokes → money pages

Every cluster hub and every spoke should end with the same 3-link block:
`/services/seo/` · `/services/web-design/` (or `/services/full-rescue/`) · `/promotions/free-seo-audit/`.
Currently posts use a single `serviceLink`; extend `BlogPostLayout.astro` so the footer CTA row renders
pillar + service + audit consistently (one change, all collection posts benefit).

---

## Phase 3 — New content (only after Phase 1–2 ship)

Realistic targets (national head terms are out of reach — "local seo" KD 72, "web designer near me" KD 55).

| Priority | Keyword | Vol | KD | Slug | Cluster | Notes |
|---|---|---|---|---|---|---|
| 1 | local seo for contractors | 480 | 0 | `/blog/local-seo-for-contractors/` | local-seo | Avenue SEO has a Shelby trades page — differentiate with rescue framing + real GBP examples |
| 2 | how to rank in chatgpt | 140 | 1 | refresh `get-recommended-by-chatgpt-...` | ai-search | Check current coverage first; likely an answer-first section, not a new page |
| 3 | local seo checklist | 170 | 21 | `/blog/local-seo-checklist/` | local-seo | Downloadable version can reuse `website-rescue-checklist` pattern |
| 4 | small business website cost | 210 | 23 | extend `website-cost-shelby-nc-2026` | website-cost | Add a national-range section rather than a new page (avoid cannibalizing) |
| 5 | local seo for small business | 1,000 | 26 | `/blog/local-seo-for-small-business/` | local-seo | Strong volume; make it the hub's top spoke |
| 6 | ai search optimization | 1,300 | 32 | already covered by `ai-search-2026` | ai-search | Optimize existing, do not duplicate |
| 7 | how much does local SEO cost in Shelby/NC | n/a | n/a | `/blog/local-seo-cost-shelby-nc/` | local-seo | Local gap: SERP is all Charlotte pricing pages. Strong conversion intent — link pricing page |
| 8 | seo davie county / seo kings mountain / seo gastonia | low | low | `/seo-kings-mountain-nc/`, `/seo-gastonia-nc/`, `/seo-davie-county-nc/` | — | Only web-design location pages exist. Extend the existing location-page template with an SEO section rather than fresh pages |

Rules for new posts: add to `src/content/blog/` as `.md` with `cluster`, `pillar`, `serviceLink`,
`related`, and `faqs` — the layout auto-wires schema and cards. Do **not** create hand-written
`.astro` blog posts; those need manual hub registration in `src/pages/blog/topics/[cluster].astro`.

---

## Phase 4 — Measure (weekly, 10 minutes)

- GSC: homepage CTR, local-seo hub position, newly published Gastonia page impressions.
- GA4: `generate_lead` count by landing page; `contact_click` count.
- Log in `docs/lead-gen-tracker.md` (existing tracker) alongside outreach.

## Competitors to sanity-check when writing location pages

Transformed Design, Maiden Web Design, Image Adjusters, Avenue SEO, Epitome Digital,
Public Connection Website Designs. (Directional only — each SERP was read 3× and some appeared once.)
