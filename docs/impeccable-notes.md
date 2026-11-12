# Impeccable — experiment notes (handoff)
**Last updated:** Nov 11, 2026 · **Status:** installed (via `link`), baseline captured, P0 fixes in progress

## What it is
[Impeccable](https://impeccable.style) (github.com/pbakaus/impeccable) — a design skill for AI coding agents: steers output with commands (`bolder`, `quieter`, `distill`, `polish`), reviews with `critique`/`audit`, and ships a deterministic anti-pattern "slop detector" (62 rules, no LLM/API key).

## Vetting verdict: legit, worth experimenting
- 108k+ GitHub stars, 6.4k forks, 2.7k commits, pushed same day, Apache-2.0, author Paul Bakaus (ex-Mozilla/Google)
- Directly relevant to the Website Rescue repositioning — its whole pitch is fixing generic AI-built pages; **live mode supports Astro**; works with OpenCode
- **npm audit (3 moderate) = non-issue — do NOT run `npm audit fix --force`.** Single root cause (minimatch DoS, GHSA-g3hv-75wg-m249) in impeccable's own *dev* tooling: `archiver@8 → readdir-glob → minimatch@10`. It's build-script-only, DoS-only, no untrusted input path. `--force` would downgrade archiver to v7, which **lacks the `ZipArchive` export** that `scripts/lib/zip.js` imports → build breaks. Optional clean fix if the warning bothers us: add `"overrides": { "minimatch": "^11.0.1" }` to the *impeccable* repo's package.json (not ours).
- This has **zero effect on shelbywebco.com** — our own `npm audit` is clean (0 vulns).

## Where things live
- Cloned source: `/home/dave123/Downloads/Websites/Repo-Impeccable/impeccable` (no longer inspection-only — **it is the install source**, see below)

## Install: `npx impeccable install` is BROKEN on this machine (use `link` instead)
- `impeccable install` (and `impeccable help`) **crash with `Illegal instruction` (SIGILL)** here. Root cause: the npm package is a shim that execs a native engine binary (`@impeccable/cli-linux-x64`), and its download/extract path is compiled for AVX/AVX2 — this box is a **Pentium Silver N5030 (Goldmont Plus), SSE4.2 only, no AVX**, so that code path faults.
- Commands that do *not* touch download/extract work fine: `detect`, `check`, `telemetry`, `--help`, `--version`.
- **Working install** (symlinks the skill from the local clone — no download, no crash):
  ```bash
  BIN=~/.npm/_npx/1a4eb60c8f6b0f89/node_modules/@impeccable/cli-linux-x64/bin/impeccable
  "$BIN" link --source=/home/dave123/Downloads/Websites/Repo-Impeccable/impeccable -y --project
  ```
  Result: `.opencode/skills/impeccable -> ../../../../Repo-Impeccable/impeccable/.opencode/skills/impeccable` plus `.opencode/commands/impeccable.md`. OpenCode picks the skill up immediately.
- Caveat: the symlink means the skill tracks the clone. If the clone is deleted/moved, re-run `link`. Re-running `install` will still crash — ignore it.
- The npx cache path (`~/.npm/_npx/1a4eb60c8f6b0f89/...`) is content-addressed and **will change if the package is re-fetched** — locate the binary with `find ~/.npm/_npx -name impeccable -path '*cli-linux*' -type f` if it moves.

## How to use it on this project
```bash
# dev server (detector needs it for element-level rules)
npm run dev     # → http://localhost:4321 ; stop with `astro dev stop`

# read-only scan (no LLM, no writes)
"$BIN" detect http://localhost:4321/            # full page
"$BIN" detect http://localhost:4321/ --no-advisory
"$BIN" detect src/pages/index.astro             # regex-only, undercounts — prefer the URL form
```
`.astro` files only get regex rules unless you add to `.impeccable/config.json`:
`{ "ext": ".astro", "engine": "html" }` (element rules + line numbers, trades away regex rules).

In-agent (not yet run): `/impeccable init` once (writes `PRODUCT.md`), `/impeccable document` (writes `DESIGN.md`).

## First step (start narrow — NOT a full redesign) — DONE, see Baseline below
```
/impeccable critique the hero section
```
or the no-LLM detector against the dev server (read-only, changes nothing):
```bash
npx impeccable detect http://localhost:4321
```
Goal: a ranked P0–P3 baseline of what's wrong with the current design before touching anything.

## Baseline (Nov 11, 2026) — `detect http://localhost:4321/` → 37 anti-patterns + 8 advisory
Saved full output: `/tmp/opencode/detect-home.txt` (tmp — re-run the command to regenerate; it's deterministic).

**Ranked P0–P3:**

| Pri | Count | Rule | Where |
|---|---|---|---|
| **P0** | 1 | `low-contrast` **3.8:1** (need 4.5:1) `#6b737b` on `#091523` | `Footer.astro:24` — `text-white/40` founder quote (white @40% composited over `bgVariant="blue"` = `#091523`) |
| **P0** | 1 | `low-contrast` **1.8:1** (need 4.5:1) `#ffffff` on `#22d3ee` | `Footer.astro:113` — "Get My Free SEO Audit" CTA, `text-white` on `from-brand-blue via-brand-cyan to-brand-blue` (white on the cyan stop) |
| **P0** | 1 | `undersized-ui-text` 10px (< 11px floor) | `Navbar.astro:55` — "Includes Website Health Check" span |
| P1 | 12 | `icon-tile-stack` 56×56 icon tile above h3 | 4 rescue service cards + 8 industry cards (repeated pattern — one fix clears all 12) |
| P1 | 12 | `dark-glow` zero-offset box/text-shadow `#84cc16`/`#f4c95d` | brand CTA style (`cta-glow-shine`, lime glow) — **taste call, competes with brand identity** |
| P1 | 3 | `kicker-above-heading` (rule bans outright) | homepage "THE WARNING SIGNS", "HOW WE WORK", "See Why We're Different!" |
| P2 | 2 | `line-length` ~109–113 chars (aim <80) | needs `max-width: 65–75ch` on body copy |
| P2 | 1 each | `gradient-text`, `radial-halo`, `marquee` (promo ticker), `pulsing-dot`, `overused-font` (Inter 77%) | |
| adv | 6 | `straggler` orphan last words | fix with `text-wrap: pretty` |
| adv | 1 | `em-dash-overuse` 26 em-dashes | saturation only |
| adv | 1 | `codex-grid-background` two-axis grid gradient | |

**Deliberately NOT auto-fixed:** `dark-glow` ×12 is the lime CTA glow — the site's signature element, and the detector is opinionated by design. Decide deliberately, don't let the tool strip the brand.

### Fix log (one section at a time, pause for review after each)
- [x] Footer quote (`Footer.astro:24`) — `text-white/40` → `/50`, 3.8:1 → ~5.3:1. **Visually near-invisible** (correct for a contrast fix); user confirmed "a little more crisper, brighter".
- [ ] **Footer CTA (`Footer.astro:113`)** — P0 still OPEN. White on cyan gradient = 1.8:1. Needs a design decision (darken cyan stop / dark text / lime CTA style), not a mechanical fix.
- [ ] Navbar — 10px sublabel (`Navbar.astro:55`)
- [ ] Kickers ×3 → fold into headings
- [ ] icon-tile-stack ×12 → side-by-side icon+heading
- [ ] line-length, marquee, gradient-text/radial-halo (P2)

## Caveats
- **Opinionated by design** — it commits to a direction; that's the point for a rescue project, but it's not a neutral assistant.
- **It edits the project** — writes `PRODUCT.md`, `DESIGN.md`, and installs an optional design hook that scans UI files. All reversible.
- **Avoid live mode's "Apply" casually** — that feature can shell out to `codex`/`claude` CLI with sandbox/approval bypass. Core commands (`critique`, `audit`, `polish`) don't do this.
- Start with one section; narrow targets get better results than whole-page reviews.
