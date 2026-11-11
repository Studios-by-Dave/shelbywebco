# Project Status — Website Rescue Transition
**Last updated:** Nov 11, 2026 · **Branch:** main · **Latest commit:** b086575

## Positioning (decided)
Core idea: **Website Rescue** — fix websites that don't work (visibility, credibility, leads); builds are secondary. Hierarchy: fixes first, design/build second. Full strategy brief lives with Dave; key decisions below.

## Live product ladder (approved)
| Product | Price | Notes |
|---|---|---|
| Free SEO Audit | $0 | Homepage-level snapshot; landing page `/promotions/free-seo-audit/` (copy scaled down to match real offer) |
| Website Rescue Report | $197 | Paid deep diagnostic, every page code-level; **credited toward fixes if fix work within 60 days** |
| Fix packages | from $299–$749 | Visibility $349 / Credibility $299 / Conversion $299 / Full Rescue $749; "from" prices, scoped by audit |
| Ongoing plans / Rebuild | $149–$297/mo, $497 build | Unchanged |

## Shipped (all pushed)
- **Homepage** (`src/pages/index.astro`): rescue hero CTAs, problem section ("Your Website May Need Rescue If..."), 4 rescue service cards (+ full-services one-liner for branding/software), 3-tier offer ladder, positioning section, industries reword, rescue FAQ, tool logo wall removed, referral bonus removed from ticker, pricing chart section removed
- **Navbar**: top-right CTA "Free SEO Audit / Includes Website Health Check" (rounded-2xl)
- **Audit landing page** (`src/pages/promotions/free-seo-audit.astro`): honest offer copy, homepage-style FAQ accordion, Business Name field + Search Console note in form (plumbing untouched)
- **Pricing page** (`src/pages/pricing.astro`): rescue pricing section at top, divider, "Website Build Packages — With or Without SEO" header, FAQ board 4-across incl. new Website Rescue group; removed "Understanding the Range" + ROI Calculator
- Promo card for $100 Referral Bonus removed from `/promotions/` (page already gone)

## Next up
1. **Build the checklist page** — content ready in `docs/website-rescue-checklist.md` ("The 5-Minute Website Audit Checklist"). Recommended: visible page, no email gate. Location TBD (suggest `/website-rescue-checklist/`)
2. **Link it**: homepage small banner/link, audit landing page, blog footers
3. **Start lead-gen actions** per `docs/lead-generation-plan.md` (warm-contact audits, "I searched for you" screenshot outreach)
4. Optional: relocate the pricing chart section to `/services/seo/` or keep on pricing page (currently still on pricing page, fine)
5. Later: `/services/ai-cleanup/` and `/services/conversion/` pages (homepage cards currently point to these — they 404)

## Docs map
- `docs/homepage-copy-website-rescue.md` — homepage copy decisions
- `docs/free-seo-audit-page-copy.md` — audit landing page copy (implemented)
- `docs/website-rescue-checklist.md` — lead magnet content (NOT yet a page)
- `docs/audit-template-and-rescue-report.md` — internal audit template + client report structure (operational tool, not site code)
- `docs/service-menu-pricing.md` — pricing rationale (implemented on pricing page)
- `docs/lead-generation-plan.md` — client acquisition plan (actions, not code)

## Process rules (from AGENTS.md)
- **No build/push without explicit user authorization.** One page at a time; pause after each page for review.
- When staging commits, exclude unrelated untracked assets (see AGENTS.md list).

## Tech notes
- Astro static site, deploys via git push → Vercel auto-deploy. Build: `npm run build`. Check: `npx astro check --no-sync`.
- Design system: Tailwind, dark bg (`#08090f`-ish), brand accent lime (`brand-accent`), `font-heading`, CTA style `cta-glow-shine` + lime gradient pill. Reuse existing section patterns when adding pages.
- FAQ pattern: homepage uses `FaqSection.astro` (items array + JSON schema); pricing uses `PricingFaqBoard.astro` (grouped accordions, 4-across).
