# Build Prompt 1 — Pricing, remodeler positioning and site copy

Paste this entire file into your coding agent. Run before Prompt 2.

## ROLE
You are a senior Astro/front-end developer and conversion copywriter working inside the Shelby Web Company repo (shelbywebco.com). Inspect the repo first, then make a short written plan, then implement. Do not deploy and do not delete any existing pages.

## GOAL
(1) Simplify pricing so a visitor sees far fewer numbers. (2) Shift positioning toward kitchen and bath remodelers and home remodeling contractors while keeping the other industry pages live as secondary pages. Keep the existing voice: plain-spoken, honest, "Total Transparency", "Technology That Fills The Gaps", Found -> Trusted -> Hired.

## DECISIONS (defaults; edit before running)
- Setup fee model: $597 for existing-site rescue and Core website builds; Plus website setup is $998–$1,498; Ultra website setup is $1,798–$2,498. SEO-only plans have a flat $597 setup at all levels.
- Rescue offer: no separate fix packages or Full Rescue bundle. Existing-site rescue setup is $597; scope is confirmed after the audit. Do not sell obsolete fix packages as headline products on the main pricing page.
- Other industry pages (roofers, landscapers, trees, trucking, construction): keep live, move to secondary placement. Remodelers become the primary homepage focus.
- Prompt-2 tool: the Lead Leak Score is the primary lead magnet and should be linked from the hero.

## CURRENT PRICING (verified on the live pricing page; use as source of truth for what exists today)
- Free SEO Audit $0 (homepage snapshot). Website Rescue Report $197 one-time, credited toward the $597 rescue setup within 60 days.
- Existing-site rescue setup: $597.
- Website builds: Core $597 setup + $297/mo; Plus $998–$1,498 setup + $597/mo; Ultra $1,798–$2,498 setup + $797/mo.
- SEO-only setup: $597 one time at all levels; monthly levels are Found $297, Trusted $597, Hired $797.
- Website Care Plan: $597 build + $149/mo (no SEO).
- Extra pages $75-$150 each. Pay-upfront discount $50 off (build + first month in one payment). Golden Ticket promo waives the $597 build fee for 3 local businesses.
- Terms: month-to-month, cancel with 30 days' written notice, domain and content always the client's, milestone audit every 90 days.

## TARGET PRICING STRUCTURE
Show one ladder, in this order:
1. Free audit $0
2. Deep audit (Rescue Report) $197, credited toward setup within 60 days
3. Existing-site rescue setup is $597. New website setup is Core $597, Plus $998–$1,498, or Ultra $1,798–$2,498.
4. Monthly plan: Core $297/mo, Plus $597/mo, Ultra $797/mo. SEO-only levels share a flat $597 setup.
5. Site-only Care Plan $149/mo as a small footnote under the cards, not a fourth card.
Keep the $50 upfront discount, extra-page pricing and Golden Ticket as small secondary notes.

## PRICING COPY RULES
- "$597" appears as setup and as a monthly price. Always label the context ("Core setup $597", "rescue setup $597", "Plus $597/month", or "SEO-only setup $597"); never use a bare "$597" where it could be ambiguous. Visually separate one-time fees from monthly fees.
- Replace the claim that Full Rescue saves "about $200". Three fixes at $349 total $1,047 vs $749 = about $298. Remove the claim entirely if Full Rescue is folded into Setup.
- Resolve the contradiction "month-to-month after your initial term" vs "no minimum term". Use one consistent line site-wide: "Month-to-month. Cancel any time with 30 days' written notice."
- Search the whole repo (pages, blog, schema/JSON-LD, llms.txt, meta descriptions, OG text) for stale prices, "$497", and old Full Rescue or fix pricing. List every place changed in your summary.
- Update meta titles/descriptions, FAQ answers, schema.org Offer data, and llms.txt to match.

## REMODELER POSITIONING
Audience: small and mid-size kitchen/bath remodelers and remodeling contractors who are priced out of $1,500+/mo agencies. Differentiators to feature: month-to-month with no lock-in, you own your site/domain/Google profile, honest 90-day milestone audits (no endless retainer), local Shelby NC credibility, 5.0 Google rating.
- Rewrite the homepage hero and the home-remodelers page around remodelers. Suggested headline direction: "Websites for remodelers that get found, trusted, and called. $597 setup. Month-to-month." Adjust wording to fit the voice.
- Use both words "contractor" and "remodeling" in titles and headings (keyword data: "contractor seo" ~590 searches/mo vs "remodeling seo" ~110; "contractor website design" ~1,000; "remodeling leads" ~170; "google business profile for contractors" ~480; US monthly searches from OpenSEO, national, directional only).
- Create or expand pages for "Kitchen remodelers" and "Bathroom remodelers" if the site structure supports it, each with its own title, H1, and unique copy (do not duplicate text across pages).
- Keep non-remodeler industry pages; move them below remodelers in nav/footer ordering.

## PAIN POINTS TO ADDRESS IN COPY (from research on what remodelers ask; confidence: medium, synthesized from agency and trade sources, not scraped owner posts)
1. Why isn't my website getting leads? 2. Why am I not in the Google map results? 3. How do I get more Google reviews? 4. Is SEO worth it vs paid leads? 5. How do I know if my marketing is working? 6. Should I put prices on my site? 7. How do I stop paying for shared leads? 8. How do I handle leads when I'm on a job site (missed calls)? 9. Do I need separate kitchen and bath pages? 10. Who owns my site and Google profile if I leave an agency?
Add a remodeler FAQ section answering these honestly. Answer #4 candidly: paid leads are faster but cost more and skew price-shopper; SEO typically takes about 3-6 months (practitioner estimate, say so). Answer #10 with your ownership policy.

## CLAIMS AND COMPLIANCE
- Never guarantee rankings or lead counts. No fabricated testimonials, numbers, case studies or logos.
- Any statistic you use must be worded as "studies suggest" or "industry sources report", and must come only from this list: healthy close rate is 25-35% on qualified leads (good confidence); home-service businesses often miss roughly a quarter of inbound calls (medium); most home-service leads are not answered within an hour (medium, vendor-sourced). Do NOT use the "respond in 5 minutes = 9x/21x/100x more likely to convert" claims; sources disagree.
- Do not invent a price for anything not listed above.

## BRAND AND CODE RULES
- Reuse existing components, layout, tokens and utility classes. Do not introduce a new CSS framework.
- Keep accessibility (the site has an accessibility page): semantic headings, contrast, focus states, alt text.
- Keep schema/JSON-LD valid. Keep canonical URLs and sitemap correct; add 301s if you rename any slug.

## DELIVERABLES
1. A short plan before coding (files you will touch).
2. The implementation.
3. A summary: every changed file, every price/term inconsistency found and fixed, anything you were unsure about, and anything left for me to decide.
4. Run the build and any lint/tests; report results. (Do not deploy.)
