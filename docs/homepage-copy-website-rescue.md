# Homepage Copy — Website Rescue Positioning
**Status:** Draft for review (copy doc only — not yet in code)
**Page:** `src/pages/index.astro`
**Reasoning notes included throughout, marked 🧠**

---

## Why the page needs restructuring (read first)

The current homepage flow is:

> Hero → Services (Web Design / Branding / SEO / Software) → 3-Step Build Process → $497 Build Offer → SEO Process → Tool Logos → Industries → "Non-Exclusive" → Tour CTA → FAQ

That flow says "we build websites." The new strategy says "we fix websites (and build when needed)." The proposed new flow matches your brief:

> **Hero → Problem ("Your website may need rescue if...") → Services (4 rescue buckets) → Offer section (Free Audit / Full Rescue Audit / Fixes & Rebuild) → Positioning statement + proof → FAQ**

🧠 **Why:** Buyers land on this page already suspecting something is wrong with their site (not indexed, not getting leads, looks generic). If the first thing they see after the hero is a *problem checklist* ("Your website may need rescue if..."), they self-identify in 5 seconds. That's what converts them to the free audit. If the first thing they see is service cards, they have to translate "Web Design" into "that might be my problem" — most won't.

---

## SECTION 1 — Hero (mostly done, minor edits)

**Keep as-is:**
- H1: *Website Rescue, SEO Fixes, and Strategic Website Builds* ✅
- Subheadline ✅
- Supporting line ("If your website looks generic, isn't indexing...") ✅
- Call bar, phone number, hero image, stars, badge images

**Proposed edits:**

1. **Primary hero button — change "Start a Project" → "Get My Free Audit"** (links to `/contact/` or the audit landing page when built).
   🧠 The audit is the lead generator. "Start a Project" assumes they're ready to buy; most visitors aren't. A free audit is the low-commitment first step and matches your CTA decisions.

2. **Secondary hero button — change "View Promotions" → "Explore Services"** (links to `/services/`).
   🧠 Per your brief: de-emphasize View Promotions. Promotions still live in the ticker at the top, so nothing is lost.

3. **Badge text — change "SHELBY, NC WEB DESIGN & LOCAL SEO" → "SHELBY, NC — WEBSITE RESCUE & LOCAL SEO"**
   🧠 Reinforces the core idea one more time before they even read the headline.

4. **The italic pricing line under the hero image** ("$497 to build and deploy + $297/month...") — **remove from hero.** Move pricing to the offer section and the process section, where it already exists.
   🧠 A rescue-minded visitor sees "$497 to build" before they've even been told their problem can be *fixed instead of rebuilt*. It anchors them toward buying a new site — the opposite of the new positioning.

5. **The three italic bullet points under the stars:**
   - ~~Custom websites that convert~~ → *Websites repaired, rescued, and rebuilt — only when a rebuild is truly needed*
   - *Local SEO for Shelby & Cleveland County* (keep)
   - *Free SEO audit so you know exactly what's wrong* (replaces "Custom Business Machines" — software is a separate service, not a hero message)

---

## SECTION 2 — NEW: Problem Section ("Your website may need rescue if...")

**This section doesn't exist yet — it's the biggest addition.** Insert between hero and services.

**Eyebrow / kicker:** `THE WARNING SIGNS`

**H2:** `Your Website May Need Rescue If...`

**Intro line:** `Most website problems are invisible to the owner. You don't see them — your customers (and Google) do. Check any that sound familiar:`

**Checklist cards (2-column grid, 6 items):**

1. **Your site isn't showing up on Google.**
   You can search your business name and still can't find it — or only the homepage appears, never your services.
   *Likely cause: indexing problems, technical SEO, or no sitemap.*

2. **You're not getting calls, forms, or leads from it.**
   The site looks fine to you, but the phone stays quiet and nobody fills out the form.
   *Likely cause: weak calls-to-action, no trust signals, confusing page flow.*

3. **It looks "AI-built" or generic.**
   Cookie-cutter layout, robotic copy, stock everything. Customers notice — and so does Google.
   *Likely cause: AI-generated pages published without review or strategy.*

4. **It hasn't been touched in months (or years).**
   Broken links, outdated info, slow load times, features that stopped working.

5. **You built it yourself, with a tool, or with AI — and it never really launched.**
   It went live, but never got indexed, never ranked, and never produced business.

6. **It fails on a phone.**
   Half your customers are on mobile. If buttons are tiny, text is cramped, or pages crawl, they leave.

**Closing CTA line (centered):**
> Sound familiar? You don't need a new website — you need a rescue.
>
> **[Get My Free SEO Audit →]**

🧠 **Why this works:** Each symptom pairs a *feeling the owner has* ("phone stays quiet") with a *cause we fix* ("indexing problems"). That's the diagnosis-to-treatment framing your whole ladder depends on: the free audit confirms the cause, the paid audit explains it, the fixes treat it.

🧠 **Risk flag:** Don't say "Google penalizes AI content" — that's not accurate or provable. "Customers notice, and so does Google" is as far as I'd go.

---

## SECTION 3 — Services (rewrite of the current 4-card grid)

**Replace the current cards (Web Design / Branding / SEO / Custom Software) with your 4 rescue buckets.** Web Design/Branding/Software still exist as service pages and stay reachable via "Explore Services" — but the homepage should lead with fixes.

**Section header (replaces the marble banner text):**

**H2:** `Website Rescue Services`
**Sub:** `Four ways we make your website work — visibility, credibility, conversion, and a clean rebuild when it's time.`

### Card 1 — Google Visibility Fixes
*(icon: magnifying glass — reuse current SEO icon)*
- Indexing and crawlability repairs (sitemap, robots, Search Console)
- Technical SEO cleanup and page speed fixes
- Schema markup so Google understands your pages
- Local SEO foundation: Google Business Profile, local pages, citations

**Link:** Learn About Visibility Fixes → `/services/seo/`

### Card 2 — AI Cleanup & Credibility Fixes
*(icon: sparkle/eraser)*
- Remove generic "AI-built" styling and layouts
- Rewrite robotic, AI-generated copy into real human copy
- Fix mobile UX problems that make sites feel cheap
- Make the site look custom, current, and trustworthy

**Link:** Learn About Credibility Fixes → `/services/ai-cleanup/` *(new page — build later)*

### Card 3 — Conversion Fixes
*(icon: trending-up / target)*
- Clearer calls-to-action and lead forms that people actually fill out
- Service pages structured around what customers search for
- Trust signals: reviews, credentials, real photos, guarantees
- Phone and contact optimization + local landing pages

**Link:** Learn About Conversion Fixes → `/services/conversion/` *(new page — build later)*

### Card 4 — Full Rebuilds & New Builds
*(icon: hammer/blueprint — reuse current Web Design icon)*
- Strategic rebuilds when repair isn't the right answer
- New builds with SEO foundations from day one
- Design and copy that fits your actual business, not a template
- Built to be found: indexing, speed, and local SEO included

**Link:** Learn About Rebuilds → `/services/web-design/`

**Below the cards — replace "Get Your Free Quote" / "View All Services" row:**
- Primary: **[Get My Free SEO Audit →]**
- Secondary link: `Explore all services →` (to `/services/`)

🧠 **Why the order matters:** The four cards in this order mirror the sales ladder and the diagnosis flow — visibility (are you findable) → credibility (do you look legit) → conversion (do you close) → rebuild (last resort). "Full Rebuild" listed *last* is deliberate: it visually says we don't default to rebuilding.

---

## SECTION 4 — Offer Section (replaces the "$497 + $297" recommended offer + the 3-step process section)

**This is the sales ladder, presented as three options.** It replaces the current "Recommended Approach" block and absorbs the 3-step process cards (the process can live on the How We Work page instead — it's build-framed).

**H2:** `Know What's Wrong. Fix It Right.`
**Sub:** `Start free. Go deeper when you're ready. We only sell fixes you actually need.`

### Tier 1 — Free SEO Audit (the lead generator)
> **Free SEO Audit**
> A high-level snapshot of your website's health, free for local businesses.
>
> ✅ Homepage visibility check — is Google finding you?
> ✅ Basic on-page SEO and title/meta review
> ✅ Quick indexing spot-check
> ✅ Obvious local SEO issues
> ✅ 2–3 quick recommendations you can act on today
>
> *A diagnostic, not consulting — but it tells you if there's a problem worth fixing.*
>
> **[Get My Free Audit →]**

### Tier 2 — Website Rescue Report (paid deep diagnostic) (paid, first revenue step)
> **Website Rescue Report (paid deep diagnostic)**
> The complete diagnostic. Every issue found, ranked by what to fix first.
>
> ✅ Full indexing review + Google Search Console analysis
> ✅ Crawlability, sitemap, and robots review
> ✅ Deeper technical SEO and code-level concerns
> ✅ Basic vulnerability review and obvious security risks
> ✅ Content, trust, and conversion blockers
> ✅ Your **Website Rescue Report** — a prioritized fix plan with health scorecards
>
> *Free answers "What's wrong?" This answers "Why, how bad, and what first?"*
>
> **[Request a Rescue Audit →]** *(price TBD — pricing task #5)*

### Tier 3 — Fixes, Rescue & Rebuild (main revenue)
> **Fixes & Rebuilds**
> We implement the rescue plan — in the order that matters.
>
> ✅ Google visibility fixes and technical SEO
> ✅ AI cleanup and credibility repairs
> ✅ Conversion and lead-generation improvements
> ✅ Full rebuilds when a fresh start makes sense
> ✅ Optional ongoing care and SEO support
>
> Month-to-month, cancel any time. No lock-in contracts.
>
> **[Start With a Free Audit →]**

🧠 **Why three tiers side by side:** It makes the ladder visible. The free tier is the obvious entry point (it's highlighted), the paid audit looks reasonable next to it, and "fixes" shows where the relationship goes. Each CTA funnels to the free audit anyway — even "Request a Rescue Audit" visitors should get the free snapshot first, because they haven't earned trust yet. That's your funnel doing its job silently.

🧠 **Security wording:** "Basic vulnerability review and obvious security risks" — deliberately hedged, per your brief. Never imply pen-testing.

🧠 **What to do with the current $497/$297 pricing block:** Move it *below* the ladder as a smaller band: "Planning a new build instead? Website + ongoing local SEO from $497 + $297/month. See pricing →". Builds are still offered — they're just not the headline anymore. FAQ answers reference those prices, so keep the pages consistent.

---

## SECTION 5 — Positioning Statement + Proof (replaces "Non-Exclusive Agency" section)

**H2:** `Not Every Website Needs to Be Replaced.`
**Accent line (large, below H2):** `Some just need to be fixed the right way.`

**Body:**
> Most agencies want to sell you a new website — it's the bigger ticket. We'd rather tell you the truth first. If your site can be rescued, we rescue it. If it can be improved, we improve it. And if a rebuild really is the right call, we'll show you exactly why before you spend a dollar.
>
> Every engagement starts with a free audit, so you know what's wrong before you decide what to do about it.

**Proof strip (replaces the "tool logos" section framing):**
`Certified (CompTIA A+) · 5.0 on Google · Local to Shelby & Cleveland County · Month-to-month, no lock-in`

**CTA:** **[Get My Free SEO Audit →]**

🧠 **Why this replaces the non-exclusive section:** "We welcome anyone" is not persuasive — it's a description. The same slot works harder as a trust/anti-pitch section, because it directly answers the visitor's fear: *"Are they going to tell me my site is broken just to sell me a new one?"* That's the exact objection your positioning creates, and this is where you kill it.

🧠 **Tool logos section:** **DECIDED — remove the tool logo wall from the homepage entirely.** It conflicts with the cleanup-AI-issues message. The logos can live on the About page later if ever needed.

---

## SECTION 6 — Industries Section (keep, light rewording)

Keep the industry cards (trucking, construction, roofers, etc.) — local SEO relevance is valuable. Change only the header copy:

**H2:** ~~We're Here to Understand Your Business~~ →
`We Rescue Websites for Local Businesses Like Yours`

**Body:** `From trucking companies to tree services, we help Cleveland County businesses get found, look credible, and turn their website into a source of calls and customers. Not just a website — a website that works.`

(Cut the "online business machine" phrasing — **DECIDED: removed** — it's internal language that customers don't search for or think in.)

---

## SECTION 7 — FAQ (reword for rescue framing)

The current four FAQs are all about *cancellation terms and SEO subscriptions* — they answer a question almost no first-time visitor has yet, and they read like contract fine print at the bottom of the homepage. Recommended: keep 1–2 of them and add rescue-framed questions:

1. **Q: How do I know if my website has a problem?**
   A: Start with our free SEO audit. It checks whether your homepage is visible on Google, reviews your titles and meta descriptions, spot-checks indexing, and flags obvious local SEO issues — with 2–3 quick recommendations. It's a diagnostic, not consulting, and it's free for local businesses.

2. **Q: Can AI-built websites be fixed, or do I need a new one?**
   A: It depends on the foundation. Many AI-generated sites have fixable problems — missing indexing setup, generic copy, weak structure. We diagnose first, then tell you honestly whether a rescue or a rebuild is the better investment.

3. **Q: My website isn't showing up on Google at all. What does that usually mean?**
   A: Usually one of three things: the site isn't being indexed, basic technical SEO is missing, or the content doesn't match what local customers actually search for. The free audit identifies which of these applies to you.

4. **Q: Do you offer ongoing support after the fixes?**
   A: Yes. Website care and ongoing local SEO plans are month-to-month with no minimum term. You can cancel any time with 30 days' written notice. *(This absorbs the current cancellation FAQ.)*

🧠 **Why:** FAQs should capture people who *just read the page* and have a hesitation — "is my site fixable?", "how do I start?", "is there a contract?" The current ones jump straight to cancellation logistics, which subtly signals "this is a subscription to escape from."

---

## CTA Consistency Checklist (apply site-wide on this page)

| Location | Current | New |
|---|---|---|
| Hero primary | Start a Project | **Get My Free Audit** |
| Hero secondary | View Promotions | **Explore Services** |
| Services bottom | Get Your Free Quote | **Get My Free SEO Audit** |
| Ladder (3 tiers) | — | Get My Free Audit / Request a Rescue Audit / Start With a Free Audit |
| Positioning section | Book a Free Chat | **Get My Free SEO Audit** |
| Process section CTAs | Get Started With Website + SEO | *(section absorbed into offer section)* |

🧠 One primary CTA repeated everywhere ("free audit") is stronger than five different CTAs. Every different CTA label makes the visitor re-decide; the same one becomes a habit.

---

## Summary of what changes in code

**New/modified sections:**
1. Hero — button + badge text edits, remove pricing line ✏️ small
2. **NEW Problem section** ("Your website may need rescue if...") 🆕
3. Services — 4 rescue bucket cards replacing current cards ✏️ medium
4. Offer section — 3-tier ladder replacing recommended-offer + process sections ✏️ large
5. Positioning + proof section replacing non-exclusive section ✏️ medium
6. Industries — header/body rewording ✏️ small
7. FAQ — reworded question set ✏️ medium
8. Tool logo wall — **DECIDED: remove section entirely** (incl. unused logo imports); ticker, mascot/tour section — unchanged
9. **CTA target — decided:** All "free audit" CTAs point to the existing **`/promotions/free-seo-audit/`** landing page (it's live with a working form). No new page needed.

**⚠️ Follow-up found during review:** the existing audit landing page (`src/pages/promotions/free-seo-audit.astro`) overpromises vs. the free offer definition. It currently advertises backlink profile review, competitor analysis, keyword research, "deep analysis," a "comprehensive PDF report," and an optional consultation — but the free audit per strategy is a high-level diagnostic (homepage visibility, basic on-page, quick indexing spot-check, title/meta review, obvious local issues, 2–3 quick recommendations). The page copy needs to be scaled down to match the "What's wrong?" tier, or the free audit erodes the paid Full Rescue Audit's value. Also: remove "Limited-Time Offer" framing. **This is a separate copy pass (deliverable #2 territory) — do after homepage.**

**Not in this pass:** audit landing page copy rewrite (deliverable #2), pricing for the paid audit (task #5), checklist (task #3), audit template (task #4), lead gen (task #6).
