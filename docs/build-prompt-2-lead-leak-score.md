# Build Prompt 2 — Lead Leak Score (quiz + calculator tool)

Run after Prompt 1. Paste this entire file into your coding agent.

## ROLE
You are a senior Astro/front-end developer. Inspect the repo, write a short plan, then implement. Do not deploy.

## GOAL
Build a free tool for remodeling and contractor business owners called the "Remodeler Lead Leak Score": a 12-question self-assessment followed by a 4-input revenue calculator. It gives value up front (score + dollar estimate, no gate), then offers an emailed full breakdown in exchange for contact details, and routes the owner into Shelby Web Co.'s paid steps.

## BRAND MATCH (critical)
First inspect the repo and extract the real design tokens: fonts, type scale, spacing, border radius, shadows, button styles, card styles, form styles. Known: theme colors #0EA5E9 (homepage) and #1d4ed8 (pricing page); logo and mascot assets under the site's image folder; "5.0 on Google" and CompTIA A+ badges; Found -> Trusted -> Hired framework; voice is plain-spoken and honest. Reuse existing layout, header, footer, buttons and components so the tool looks native. Build it as an Astro page plus a self-contained client-side component (vanilla JS or the framework already in the repo; do not add a heavy dependency). Mobile-first; most owners will take it on a phone between jobs.

## LEAD CAPTURE BACKEND
Use Web3Forms (https://web3forms.com) as the default. Form POSTs JSON with an access key (read from an env var / placeholder constant clearly marked TODO). Do NOT hardcode a real key; leave a clearly-labeled placeholder so the owner can populate it. GA4 is not yet confirmed wired — leave analytics hooks as commented placeholders (event names: lead_leak_score_start, lead_leak_score_complete, lead_leak_score_submit). Auto-email of results is NOT required for v1; the owner will follow up manually after reviewing the submitted website URL.

## PAGE
- Route: /free-tools/remodeler-lead-leak-score/ (follow existing URL conventions).
- Title direction: "Free Lead Leak Score for Remodelers & Contractors | Shelby Web Co." H1 about finding where a remodeling business leaks leads. Use both "contractor" and "remodeling" in title and headings.
- Short intro (what it is, 3 minutes, no email needed to see results), the tool, a short "how this is scored" section, FAQ (see below), and links to the free SEO audit and pricing.
- Add the tool to nav/footer under a tools or resources link, link it from the homepage hero as a secondary CTA, and add it to sitemap and llms.txt. Add valid JSON-LD (WebPage + FAQPage).

## THE QUIZ: 12 questions, scored 0/1/2 (2 = best). One question per screen with a progress bar, back button, keyboard accessible. Questions map to researched owner pain points and to our three pillars.

FOUND (pains: no leads from website, not in map pack, no separate pages, don't know if indexed)
Q1. Is your Google Business Profile claimed and set with the right categories (e.g. Kitchen Remodeler, Bathroom Remodeler)? Yes, accurate / Claimed but unsure about categories / Not claimed or not sure.
Q2. Search "kitchen remodeler + your city". Do you show up in the map results? Yes / Sometimes / No or haven't checked.
Q3. Does your website have a separate page for each service (kitchens, baths, etc.) and each main city you serve? Yes both / Services only / One services page or neither.
Q4. Do you know whether Google has indexed your website (Search Console)? Yes, I check it / I think so / No idea.

TRUSTED (pains: reviews, trust, pricing content, who owns my stuff)
Q5. Google reviews: do you have 25+ and at least one in the last 60 days? Yes both / One of the two / Neither.
Q6. Do you reply to your Google reviews, including bad ones? Always / Sometimes / Rarely or never.
Q7. Does your site show your own before-and-after project photos? Yes, many / A few / Mostly stock or none.
Q8. Does your site give homeowners price ranges, a typical timeline or your process? Yes / Some / None.

HIRED (pains: missed calls, slow follow-up, tracking what works, shared leads)
Q9. On your phone, can someone tap-to-call from your mobile site without scrolling? Yes / With scrolling / No.
Q10. How fast do you usually respond to a new lead? Under 5 minutes / Under an hour / Same day / Longer.
Q11. Do you have missed-call text-back or an automatic reply to form submissions? Yes / Partial / No.
Q12. Do you know where your last 10 jobs came from? Yes, tracked / Roughly / No.

## THE CALCULATOR: 4 inputs
Inputs: leads per month, average job size, % of leads answered within an hour, close rate (default 30%, labeled as a typical 25-35% range from trade sources).
Recoverable revenue/year = leads x (1 - % answered fast) x recapture rate x close rate x average job x 12.
Recapture rate defaults to 15%, labeled "your estimate" and adjustable. Result shows a low/high range rather than a single figure.

## RESULTS SCREEN
- Score for each pillar (Found / Trusted / Hired) and an overall number.
- Their top 3 weakest areas, in plain English.
- The dollar estimate, with the assumptions shown.
- A single next step matched to their weakest pillar:
  - Found: free SEO audit
  - Trusted: credibility fixes
  - Hired: lead-response and conversion fixes
- Beneath that, the ladder: free audit -> $197 report (credited) -> $597 setup -> monthly plan.

## LEAD CAPTURE (gating)
Show the score and dollar estimate first, for free, with no gate. Then ask for name, email and website URL to send the full breakdown. Collecting the website URL lets the owner run the audit before following up. Phone number optional. Use Web3Forms. Do NOT use browser storage for answers; everything stays in the page until submit.

## FAQ (on the tool page)
Include questions: Is this really free? How is the score calculated? Is my data shared? How long does it take? What happens after I submit? Do I need to be a remodeler? Plus the remodeler pain-point FAQs carried over where relevant.

## CLAIMS AND COMPLIANCE
- Frame the score as a self-assessment; the free audit is the real verification.
- "Studies suggest" wording for any stat. Do NOT use the response-time multipliers (9x/21x/100x).
- No fabricated testimonials, numbers, case studies or logos.

## DELIVERABLES
1. A short plan before coding (files you will touch).
2. The implementation.
3. A summary: every changed file, anything you were unsure about, and anything left for the owner to decide (Web3Forms key, GA4 wiring).
4. Run the build and any lint/tests; report results. (Do not deploy.)
