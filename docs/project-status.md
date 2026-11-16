# Project Status — Website Rescue Transition
**Last updated:** Nov 11, 2026 · **Branch:** main · **Latest commit:** b086575

## Positioning (decided)
Core idea: **Website Rescue** — fix websites that don't work (visibility, credibility, leads); builds are secondary. Hierarchy: fixes first, design/build second. Full strategy brief lives with Dave; key decisions below.

## Live product ladder (approved)
| Product | Price | Notes |
|---|---|---|
| Free SEO Audit | $0 | Homepage-level snapshot; landing page `/promotions/free-seo-audit/` (copy scaled down to match real offer) |
| Website Rescue Report | $197 | Paid deep diagnostic, every page code-level; **credited toward fixes if fix work within 60 days** |
| Fix packages | from $299–$749 | Visibility $299 / Credibility $299 / Conversion $299 / Full Rescue $749; "from" prices, scoped by audit (Nov 2026: Visibility unified from $349 → $299) |
| Ongoing plans / Rebuild | $149–$297/mo, $497 build | Unchanged |

## Shipped (all pushed)
- **Copy-abbreviation pass, round 1 (Nov 2026)** — homepage + pricing page, visual design preserved, text shortened, prose converted to graphs:
  - Homepage: hero paragraphs merged; warning-signs cards → icon cards + **fix-path chips with legend** (Visibility/Credibility/Conversion/Full Rescue, color-coded); service cards 4 bullets → 3; **ascending price-bar graph** ($0 / $197 / $299+) above the offer ladder; positioning 110 words → 1 line + **Found/Trusted/Hired chip graphic**; industries intro 35 → 18 words. Commit `6726979`
  - Pricing: rescue tiers collapsed 6 → 4; two diagnostic cards → **3-step diagnose strip**; 4 fix-package cards → **comparison matrix table** (Found/Trusted/Hired row groups, ✓/— cells); **removed the duplicated "What a Website Actually Costs" section** (its $497/$149 Website Care table duplicated the standalone card); FAQ schema + `PricingFaqBoard.astro` answers trimmed; **Visibility unified $349 → $299** (contact dropdown, llms.txt, docs updated to match)
  - Pricing hero: h1 bumped to `text-5xl/6xl/7xl`; "Shelby Web" gradient → **white → cyan → electric blue**; "✦ Transparent Pricing" eyebrow → smaller, **gold chrome gradient**
  - Pricing: **Full Rescue ($749) elevated** — highlighted matrix column (Best Value ribbon, blue-tinted cells, glowing checks, larger price) + dedicated Full Rescue banner with `?service=full-rescue` deep link
  - Build plan columns: "Launch" → **"Build/Launch"**; green "Ongoing management" → **"SEO +"**
  - **Chrome/gold reflection** added to the nav CTA + hero CTA via a new global `.cta-chrome` utility in `src/styles/global.css` (static iridescent wash + 6.5s specular sweep, reduced-motion safe)
  - Reviews redistributed: homepage 4 → **2** (Roger P. hero, Willie G. positioning); William S. → pricing CTA; Michelle B. → services index
  - **Slot-4 mismatch fixed + Full Rescue page shipped** (Nov 2026): new `/services/full-rescue/` page (three pillars, savings visual `$299×3 = $897 → $749`, rescue-vs-rebuild comparison, FAQ, audit CTA); homepage 4th service card "Full Rebuilds & New Builds" → **"Full Rescue"** → `/services/full-rescue/`; "untouched for months" symptom chip relinked from `/services/web-design/` to `/services/full-rescue/`; builds still surfaced on homepage via a new line + the Full Rescue page's rebuild column; featured Full Rescue band added to `/services/`; llms.txt updated
- **Homepage** (`src/pages/index.astro`): rescue hero CTAs, problem section ("Your Website May Need Rescue If..."), 4 rescue service cards (+ full-services one-liner for branding/software), 3-tier offer ladder, positioning section, industries reword, rescue FAQ, tool logo wall removed, referral bonus removed from ticker, pricing chart section removed
- **Navbar**: top-right CTA "Free SEO Audit / Includes Website Health Check" (rounded-2xl)
- **Audit landing page** (`src/pages/promotions/free-seo-audit.astro`): honest offer copy, homepage-style FAQ accordion, Business Name field + Search Console note in form (plumbing untouched)
- **Pricing page** (`src/pages/pricing.astro`): rescue pricing section at top, divider, "Website Build Packages — With or Without SEO" header, FAQ board 4-across incl. new Website Rescue group; removed "Understanding the Range" + ROI Calculator
- Promo card for $100 Referral Bonus removed from `/promotions/` (page already gone)
- **Checklist page** (`src/pages/website-rescue-checklist.astro`): live at `/website-rescue-checklist/`, no email gate, 15 items in 4 parts, CTAs to free audit
- **Checklist links wired**: homepage banner (after positioning section), audit landing page "While you're here" paragraph, `BlogPostLayout.astro` aside on all collection posts, footer Company column (covers standalone blog posts too). Navbar deliberately left unchanged.

- **Rescue service pages live**: `/services/ai-cleanup/` (credibility fixes) and `/services/conversion/` created — homepage cards no longer 404. Both follow the audit-landing pattern: "May Need Rescue If..." signs, what we fix, audit-first process, FAQ, free-audit CTA, `?service=` preselect
- **Contact form updated**: rescue products first in the dropdown (Rescue Report default, Free Audit, Visibility/Credibility/Conversion/Full Rescue from $299–$749) — `?service=website-rescue-audit` preselect now works (was silently falling back to "Website + SEO")
- **Website Rescue Report page** (`src/pages/services/website-rescue-report.astro`): what's inside (verdict, 5 scorecards, what's working/broken, first 3 fixes), $197 → 60-day credit block, process, FAQ. "Get the Rescue Report →" CTAs on homepage + pricing now point here instead of straight to contact
- **Footer tagline** → "Website not working? We rescue it — get your business found, trusted, and hired."
- **llms.txt**: rescue-first tagline/overview, rescue products in Core Services, rescue pricing added, checklist + ai-cleanup + conversion + rescue-report pages in Key Pages

## Next up
1. **Start lead-gen actions** — execution tracker now lives in `docs/lead-gen-tracker.md` (warm-contact audits, "I searched for you" screenshot outreach)
2. Optional: relocate the pricing chart section to `/services/seo/` or keep on pricing page (currently still on pricing page, fine)
3. Content pages still build-first: `/services/` index, `/about/`, `/about/how-we-work/` — rewrite toward rescue-first framing
4. Optional: print/PDF version of the checklist page

## Docs map
- `docs/homepage-copy-website-rescue.md` — homepage copy decisions
- `docs/free-seo-audit-page-copy.md` — audit landing page copy (implemented)
- `docs/website-rescue-checklist.md` — lead magnet content (NOT yet a page)
- `docs/audit-template-and-rescue-report.md` — internal audit template + client report structure (operational tool, not site code)
- `docs/service-menu-pricing.md` — pricing rationale (implemented on pricing page)
- `docs/lead-generation-plan.md` — client acquisition plan (strategy, not code)
- `docs/lead-gen-tracker.md` — lead-gen execution tracker (checkboxes, weekly rhythm, outreach log)

## Process rules (from AGENTS.md)
- **No build/push without explicit user authorization.** One page at a time; pause after each page for review.
- When staging commits, exclude unrelated untracked assets (see AGENTS.md list).

## Tech notes
- Astro static site, deploys via git push → Vercel auto-deploy. Build: `npm run build`. Check: `npx astro check --no-sync`.
- Design system: Tailwind, dark bg (`#08090f`-ish), brand accent lime (`brand-accent`), `font-heading`, CTA style `cta-glow-shine` + lime gradient pill. Reuse existing section patterns when adding pages.
- FAQ pattern: homepage uses `FaqSection.astro` (items array + JSON schema); pricing uses `PricingFaqBoard.astro` (grouped accordions, 4-across).
