# Deliverable #4 — Repeatable Audit Template & Website Rescue Report
Two artifacts: (A) the internal working template you fill out for every audit, (B) the client-facing Website Rescue Report structure. The free snapshot is a subset of (A) — same checks, shallower depth, shorter output.

---

## A. Internal Audit Template (free snapshot + paid audit)

**Header block (fill for every client):**
- Business name / contact / website URL / date / auditor
- Audit type: FREE SNAPSHOT or FULL RESCUE AUDIT
- Search Console access? Yes/No (if no → mark Search Console items "estimate, no GSC data")

### 1. Visibility Checks (always)
| Check | Method | Result | Notes |
|---|---|---|---|
| Homepage indexed | `site:domain.com` + manual | ✅/❌ | |
| Brand-name search | Google "business name" + city | ✅/❌ | Position, who outranks |
| Service-keyword search | "city + service" | ✅/❌ | Who appears instead |
| Key pages found | site: check for top 3–5 pages | ✅/❌/partial | |
| Sitemap present & valid | /sitemap.xml | ✅/❌ | Submitted in GSC? |
| Robots.txt present & not blocking | /robots.txt | ✅/❌ | Watch for Disallow: / |

### 2. On-Page Basics (always)
- Title tag: present / unique / length / contains service + location?
- Meta description: present / sensible?
- H1: exactly one, says what they do?
- Clear above-the-fold: what/where/phone?
- Contact info: phone (clickable), email, address/NAP

### 3. Local SEO (always)
- Google Business Profile: claimed? category right? hours? photos? reviews count/tone?
- NAP consistency: site footer vs GBP vs directories
- Local pages: any city/service pages at all?

### 4. Technical (FULL AUDIT — only basics in free)
- Crawl (Screaming Frog/Sitebulb free tier): errors, redirects, orphans, response codes
- Page speed: homepage + 1 key page (PageSpeed Insights), mobile first
- Mobile UX: tap targets, viewport, layout on real phone
- Schema: any structured data? LocalBusiness present?
- HTTPS: valid, no mixed content

### 5. Security/Trust (FULL AUDIT — word carefully)
- Basic vulnerability review only: HTTPS status, outdated CMS/plugins visible in source, obvious risks (exposed admin, form without spam protection, outdated jQuery)
- **Never** write "security audit," "penetration testing," or "secure" — write "basic vulnerability review" / "obvious security risks"

### 6. Content / Trust / Conversion (FULL AUDIT depth)
- AI-slop signals: template sameness, robotic copy, stock-everything
- CTAs: how many, where, competing?
- Forms: do they work? friction level?
- Trust signals: reviews on site, credentials, real photos
- Content gaps: no service pages, thin pages, no answers to buying questions

### Scoring (FULL AUDIT only)
Score each area 1–5 → feeds the report scorecards: **Health, SEO, Trust, Security, Local Visibility** (10 = critical, 50 = excellent).

### Priorities section (both, but deeper for paid)
Top 3 free / top 5–8 paid: issue → why it matters → effort (S/M/L) → impact (H/M/L).

---

## B. The Website Rescue Report (client-facing, paid audit deliverable)

**Format:** 4–6 page PDF, plain English, business-owner tone. Branded cover page. Never SEO-jargon without a one-line explanation.

**Structure:**
1. **Cover:** business name, "Website Rescue Report," date, your contact
2. **The One-Paragraph Verdict:** "Your site has real strengths (X) but three things are keeping it from [visibility/leads/trust]. The most urgent is Y."
3. **Your Scorecards:** the 5 scores with a one-line plain-English explanation each
4. **What's Working:** 3+ genuine positives (credibility before criticism — always)
5. **What's Broken:** findings grouped by the 4 buckets (Visibility / Credibility / Conversion / Technical+Security), each: what we saw → why it matters in business terms → severity
6. **Your First 3 Fixes:** the mini rescue plan — what to do first, expected impact, rough effort. Explicitly note which they can DIY
7. **Where to Go From Here:** one short block — "If you'd like us to handle any of this, here's what implementation looks like," no hard pitch. Free audit upsell path stated once
8. **Method note (small print):** what was checked, tools used, GSC access status, limits (e.g., "site: operator gives a snapshot, not a guaranteed complete index list")

🧠 **Free vs paid output rule:** free = short email/plain summary with verdict + top 3 quick fixes (a half-page). Paid = this full report. The report structure itself is a deliverable worth paying for — don't leak it into the free tier.
