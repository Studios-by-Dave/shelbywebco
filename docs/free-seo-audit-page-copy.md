# Free SEO Audit Landing Page — Copy Doc
**Status:** Draft for review (copy doc only — not yet in code)
**Page:** `src/pages/promotions/free-seo-audit.astro`
**Goal:** Scale the page's promises down to match the actual free offer (high-level diagnostic, NOT consulting), keep the working form, and align tone with Website Rescue positioning.

🧠 **Core rule from strategy:** Free answers "What's wrong?" — Paid answers "Why, how bad, and what first?" Every word on this page must respect that line. If the free page promises deep analysis, the paid audit has nothing left to sell.

---

## SECTION 1 — Hero (rewrite)

**Remove:** "✦ Limited-Time Offer" kicker (the free audit is a permanent lead generator, not a promo — expiring offers on a core funnel page erode trust).

**New kicker:** `FREE FOR LOCAL BUSINESSES`

**H1 (keep):** `Free <span>SEO Audit</span>` ✅

**Subheadline (rewrite):**
> A quick, honest snapshot of your website's health. We'll tell you whether Google can find you, whether your site sends the right signals, and what's most worth fixing first.

**Supporting line (new):**
> No obligation. No sales pitch. Just a clear look at where your website stands.

**Button (keep):** `Request Your Free Audit` → `#audit-form` ✅

**Flyer image:** keep ✅

---

## SECTION 2 — "What's Included in Your Audit" (rewrite — this is the biggest overpromise fix)

**Current:** promises backlink profile review, competitor analysis, keyword research, "comprehensive review" — all beyond scope. **Replace with 6 honest cards:**

**H2:** `What Your Free Audit Covers`
**Sub:** `A focused, high-level check — not a full consulting engagement. Here's exactly what we look at:`

1. **Homepage Visibility Check**
   We run a search for your business and check whether your homepage actually shows up on Google.

2. **Indexing Spot-Check**
   A quick check of whether your key pages are being indexed, plus whether your sitemap.xml and robots.txt are present and working.

3. **Title & Meta Review**
   We review your homepage titles and meta descriptions — the first thing Google and customers see.

4. **On-Page SEO Basics**
   A basic look at headings, page structure, and how clearly your homepage explains what you do and where you do it.

5. **Obvious Local SEO Issues**
   Common local problems: missing location info, unclaimed or inconsistent Google Business Profile signals, no local pages.

6. **2–3 Quick Recommendations**
   You get 2–3 specific, actionable fixes you can make right away — no jargon, no 40-page report.

**🧠 Risk flag removed with the copy:** backlinks, competitor analysis, and keyword research are now *implicit upsell hooks* — the paid audit and fixes tier own those.

**Honesty note (new, small italic line below the cards):**
> *This audit is a high-level diagnostic. If we find deeper issues, we'll tell you — and we offer a paid Website Rescue Report (paid deep diagnostic) for that. But the snapshot is genuinely free, and it's yours either way.*

🧠 **Why this note matters:** It pre-frames the upsell *without a pitch*, which makes the free offer credible. Visitors believe a free thing more when you're honest about its limits.

---

## SECTION 3 — "How the Audit Works" (rewrite)

**H2 (keep):** `How the Audit Works`

**Step 1 — Submit Your Request** (keep, minor reword)
Fill out the short form below with your website URL and basic business info. Tell us what's frustrating you most about your website.

**Step 2 — We Run the Checks** (rewrite — remove "professional tools / deep analysis")
We run the visibility, indexing, and on-page checks by hand — looking at your site the way Google and a first-time customer would.

**Step 3 — Get Your Snapshot** (rewrite — remove "detailed PDF report" → not a full report)
Within a few business days, you'll get a short, plain-English summary of what we found and 2–3 recommended fixes. No 40-page PDF. No jargon.

**Step 4 — What Happens Next (Your Choice)** (rewrite — replaces "Optional Consultation")
If the audit surfaces bigger problems, we'll tell you what a deeper Website Rescue Report (paid deep diagnostic) would cover. Whether you fix things yourself, hire someone else, or ask us to help — you're under no obligation.

---

## SECTION 4 — "Why This Audit is Valuable" (rewrite + retitle)

**H2:** `Why We Give This Away Free`

**Items (rewrite, honest):**
1. **See What Your Customers See**
   Most owners have never searched for their own business the way a customer would. The audit shows you exactly what turns up — or doesn't.

2. **Small Fixes, Real Impact**
   Some of the most common problems — a missing sitemap, a vague page title, no phone number above the fold — take minutes to fix and directly affect visibility.

3. **A Straight Answer**
   If your site is fine, we'll say so. If it needs work, you'll know exactly where to start. Either way, you're better off than before you asked.

4. **No Catch, No Pressure**
   We do these audits because they lead to paid rescue work for some businesses — and because a website that works is good for everyone in our community. You will never be pressured into anything.

---

## SECTION 5 — FAQ (rewrite)

Keep 3, rewrite 3:

1. **Is this audit truly free with no obligation?** (keep as-is ✅ — it's already good)

2. **How long does it take to receive the audit?** (reword)
   You'll receive your snapshot and recommendations within a few business days of your request.

3. **Will I understand it if I'm not an SEO expert?** (keep, minor reword)
   Yes — we write for business owners, not SEO professionals. Everything is in plain English with clear next steps.

4. **What if my website is new or has no traffic yet?** (keep ✅)

5. **What if the audit finds a bigger problem?** (NEW — replaces "Can I implement recommendations myself")
   Then we'll tell you honestly. Some fixes are simple DIY tasks; deeper issues may be worth a paid Website Rescue Report (paid deep diagnostic). We'll explain the difference so you can decide what's right for you — no pressure either way.

6. **Do I need to give you access to anything?** (NEW)
   No. We only need your website URL. For a deeper look later, read-only Google Search Console access helps, but it's never required for the free snapshot.

---

## SECTION 6 — Form (keep working form; small adjustments)

**Form header:**
- H2 (keep): `Get Your Free SEO Audit`
- Sub (reword): `Tell us where to look. We'll take it from there — completely free, no obligation.`

**Field changes (per strategy decisions):**
1. **Add: Business Name** (required) — the strategy specifies it; also helps run brand-name visibility checks.
   Field order becomes: Name → Business Name → Email → Website URL → Phone (optional) → challenge dropdown → message.
2. **Keep:** challenge dropdown ✅ (the options already match rescue framing well)
3. **Keep:** message field ✅
4. **Add (optional, small text under message field):** *"Have Google Search Console access? You can note it here — read-only access helps us verify indexing, but it's never required for the free snapshot."*
5. **Keep hidden fields, botcheck, and the `/api/contact` endpoint exactly as-is** — form plumbing works; we don't touch it.

**Blog links line above the form:** keep — it's good internal linking ✅

**Success message (reword):**
> Thanks! Your Request Is In.
> We've received your free audit request and will reach out within a few business days with your snapshot and recommendations.

**Submit button text:** keep `Request My Free Audit` ✅

---

## Section order on the page
Hero → What Your Free Audit Covers (+ honesty note) → How the Audit Works → Why We Give This Away Free → FAQ → Form. *(Same order as now — just reworded throughout.)*

## What stays untouched
- Form mechanics, hidden fields, fetch/JS, success panel toggle
- PixieDust, flyer image, BaseLayout wrapper
- URL, meta title/description (minor meta tweak optional: update description to "Get a free SEO audit snapshot... homepage visibility, indexing check, and 2–3 quick recommendations" — closer to the real offer, better for SEO truthfulness)
