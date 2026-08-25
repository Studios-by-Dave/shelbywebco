# CTA Funnel Strategy — Homepage & Site-Wide

> Saved planning doc for the "better marketing / CTA system" initiative on shelbywebco.com.
> Resume by opening a new session and saying: *"Read docs/cta-funnel-plan.md and implement the CTA funnel."*

## Goal
Replace the current flat set of 5 near-identical "contact us" CTAs with a **3-tier CTA funnel** that guides visitors by intent and matches promise → destination.

## Current problem (audit)
- Hero H1 brand line is strong, but hero buttons are generic ("Get Started Today", "Learn About Our Story").
- 5 different CTA labels all point to the same generic `/contact/` page:
  - Nav "Get Started" → /contact/
  - Hero "Get Started Today" → /contact/
  - Mid-page "Start Your Project" → /contact/
  - Testimonials "Book Your Free Strategy Call" → /contact/
  - Footer "Get Your Free Quote" → /contact/
- No CTA hierarchy; strongest CTA (24/7 call/text) is visually secondary.
- No low-commitment off-ramp for browsers (everyone funneled to "contact us").
- Offer ticker (Free Logo, $100 Referral, Free SEO Audit) is not reflected in any CTA.

## 3-Tier Funnel Spec

### Tier 1 — Call / Text (instant action)
- **For:** ready-now visitors, mobile, local business owners who trust a phone call.
- **Placement:** persistent — already implemented as mobile sticky bar + desktop dock (Call/Text buttons → `tel:`/`sms:`).
- **Action:** elevate visually to equal-weight with Tier 2 (not a secondary line).
- **Destination:** `tel:` / `sms:` — zero friction.

### Tier 2 — Free Audit / Quote (named micro-conversion)
- **For:** interested but not ready to talk; wants specific value first.
- **Chosen wording (DECISION NEEDED — pick one and use everywhere):** "Get My Free SEO Audit" (recommended — specific, less salesy, real lead magnet already offered).
- **Destination:** a dedicated short-form page, NOT generic /contact/.
  - **Already exists:** `src/pages/promotions/free-seo-audit.astro` (verify its form fields match spec below; may need to standardize copy).
  - Proposed form fields: Business name · Website URL (or "I don't have one yet") · Phone or email · Optional "biggest challenge" dropdown (not ranking / outdated site / no leads / other) · Submit: "Send My Free Audit".
- **Placement:** hero primary, mid-page (after hand-coded trust section), footer.

### Tier 3 — Low-commitment browse (NEW — currently missing)
- **For:** early-stage visitors comparing agencies; not ready to give contact info.
- **Copy:** "See Our Work" (portfolio) or "See Pricing" (DECISION NEEDED — lead with whichever has stronger content; if portfolio is thin, lead with Pricing).
- **Destination:** portfolio page or pricing page.

### Book a Strategy Call (Tier 2b — parallel)
- Keep in testimonials section, but it must hit a real calendar embed (Calendly/Cal.com), NOT fall through to the same generic contact form. Otherwise rename to match the audit offer.
- **DECISION NEEDED:** set up Calendly/Cal.com embed.

## Resulting CTA Map (proposed)
| Location | Old copy | New copy | Destination |
|---|---|---|---|
| Nav | Get Started | Free Audit | /free-audit/ |
| Hero primary | Get Started Today | Get My Free SEO Audit | /free-audit/ |
| Hero secondary | Learn About Our Story | See Our Work | /portfolio/ (or /about/) |
| Hero phone | (kept, elevate) | Call or Text 24/7 | tel: |
| Mid-page | Start Your Project | Get My Free SEO Audit | /free-audit/ |
| Testimonials | Book Your Free Strategy Call | Book a Strategy Call | Calendly embed |
| Footer | Get Your Free Quote | Get My Free SEO Audit | /free-audit/ |

## Additional recommendations
- **Social proof next to CTAs:** add star rating + "100+ local businesses" directly under/beside the primary hero CTA (not just in testimonials section).
- **Make offer ticker actionable:** surface the strongest offer (Free SEO Audit) as the literal hero CTA text/destination.

## Files likely to edit
- `src/pages/index.astro` — hero CTAs, mid-page CTA, footer CTA, social-proof micro-block.
- `src/components/Navbar.astro` — nav CTA label.
- `src/pages/promotions/free-seo-audit.astro` — verify/standardize form + copy (Tier 2 destination).
- Calendar embed (Calendly/Cal.com) for testimonials "Book a Strategy Call".
- Possibly a Pricing page tweak if Tier 3 leads there.

## Open decisions before implementing
1. Tier 2 wording: "Free SEO Audit" vs "Free Quote" (recommend Audit).
2. Tier 3 destination: Portfolio vs Pricing (recommend based on stronger content).
3. Calendar tool for strategy-call booking (Calendly/Cal.com) + embed.

## Status
- Sticky bars (Tier 1 desktop + mobile) already built and pushed (see prior session).
- This funnel work is NOT yet implemented — pending the 3 open decisions.
