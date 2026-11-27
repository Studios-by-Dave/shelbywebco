# Project Rules

## Session Startup
- **Read `docs/project-status.md` first** — it's the handoff note tracking the Website Rescue repositioning project: what's shipped, what's next, and where all strategy/copy docs live.

## Build & Push Authorization
- **DO NOT run any builds (`npm run build`, `astro build`, etc.) or push to ANY repo (`git commit`, `git push`, or any other remote) unless the user explicitly says to.**
- Make code edits freely, but hold off on building and pushing until the user gives the go-ahead (e.g. "build it", "push to the repo", "commit this").
- When the user does authorize a push, stage only the intended source/config files and omit unrelated untracked assets (currently: `assets/20260421_225858.mp4`, `assets/Elderly couple climbing in fierce weather.png`, `assets/NewBadges25.png`, `assets/fountain_1.jpg`, top-level `assets/logo_35.jpg`, and any replacement bus-card image the user supplies later).
- Before committing: `npx astro check --no-sync` (expect 0 errors) and `npx eslint <changed files>`. ESLint has 14 pre-existing errors elsewhere — don't chase them.

## Current State (Nov 26, 2026 — pricing restructure, pushed)
**The ladder:** Free SEO Audit **$0** → Website Rescue Report **$197** (credited toward fixes within 60 days) → **Setup** → monthly **Core $297 / Plus $597 / Ultra $797**, month-to-month, cancel with 30 days' written notice.

Three tiers of pricing live on the site, and their names/prices do **not** all match yet:
- **Rescue steps (top of `/pricing/`)** — Free SEO Audit / Website Rescue Report / **Core Setup**. Step 3's price module is `$597` + "one time setup fee" + **AND/OR** + the cyan `$297/month · SEO +` link.
- **Website build columns** (`tiers` in `GrowthPlanPricingSection.astro`, used on `/pricing/` and build sections) — **Core $597 · Plus $998–$1,498 · Ultra $1,798–$2,498** (one-time setup; high end renders as a centered sub-line). Monthly unchanged.
- **SEO columns** (`seoTiers`, used only on `/services/seo/`) — renamed to **Found $297 · Trusted $597 (Most Popular) · Hired $797** per month, still a flat $597 setup.

**Known inconsistencies deliberately left open (ask before "fixing"):**
1. `/pricing/` FAQ schema, side-by-side table, and payment-terms block still say **every plan is a flat $597 setup** — now wrong for Plus/Ultra. Not yet synced to the ranges.
2. `/services/seo/` FAQ *"What are your SEO pricing tiers?"* says "$597 setup one time" (prices/names updated, setup wording not).
3. `/services/seo/` has a stray `<h3>Built for Core</h3>` under the STRAT section — means core SEO work, not a plan.

**Design conventions for pricing UI (match these when editing pricing surfaces):**
- Card shell: `bg-white/[0.04] backdrop-blur-xl border-white/15 rounded-2xl p-6` + `shadow-[inset_0_1px_1px_rgba(255,255,255,0.10),_0_20px_40px_rgba(8,9,15,0.45)]`. Featured/ribbon card: `border-[#f3db70]/50 bg-white/[0.07] z-10` + gold ribbon at `-top-3`.
- Titles: shine heading — `bg-[linear-gradient(110deg,#e8e8e8,45%,#ffffff,55%,#d0d0d0)] bg-[length:200%_auto] animate-shine bg-clip-text text-transparent` (inner `<a>` needs `text-inherit`).
- Gold price: `font-nav` + `bg-[linear-gradient(110deg,#f3db70,45%,#fff,55%,#9b7b2a)] bg-clip-text`, size **`text-[3rem] md:text-[3.6rem]`**. Range/unit text goes on its own `block text-center text-lg md:text-xl` line — inline overflows between 768–1024px.
- Primary CTA: `cta-glow-shine` + `bg-gradient-to-b from-[#a3e635] via-brand-accent to-[#65a30d] text-black`.

## Working Style
- One page/section at a time; pause after each for the user's review before moving on.
- The user often iterates in short bursts ("make the numbers bigger", "change this label") — make the smallest change that satisfies it, then report what changed and where.
- When a pricing/name change could ripple (FAQs, llms.txt, comparison tables, other pages), flag the affected copy instead of silently rewriting it.
