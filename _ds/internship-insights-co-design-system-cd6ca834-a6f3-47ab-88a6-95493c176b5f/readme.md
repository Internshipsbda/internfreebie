# Internship Insights Co. — Design System

> Bermuda's only internship transformation firm.
> *Unlocking potential through experience.*

Internship Insights Co. exists to fix what it calls a broken internship system, improving outcomes for the three groups it serves: **students**, **employers**, and **managers**. Rather than treating internships as informal summer experiences, the brand frames them as a system to be **designed, measured, and improved** — through audits, data, and structured preparation.

The brand's voice is bold, corrective, and practical ("Bermuda's Internship System Is Broken. We're Fixing It."), but always followed by a low-friction next step: a free assessment, a free diagnostic, or a free guide. Founder **Sydney West** has lived the internship journey as intern, co-op student, and full-time professional — credibility grounded in lived experience.

This design system captures the brand's colors, type, voice, logo assets, reusable UI primitives, and high-fidelity recreations of its two live lead-magnet apps.

- **Website:** https://www.internshipinsightsco.com/
- **Market:** Bermuda · English
- **Categories:** Internship consulting · Workforce development · Career training
- **Target audiences:** managers supervising interns/young professionals · students preparing for internships or first professional roles · organizations considering internships for the first time · employers building or improving internship programs

---

## Sources

This system was reverse-engineered from the company's production code and brand assets. If you have access, explore them to build with higher fidelity:

- **GitHub — `Internshipsbda/studentfreebie`** (private): the *FRTF Competency Self-Assessment* (TanStack Start + React 19 + Tailwind 4). Source of truth for the student tool, colors, and type.
  https://github.com/Internshipsbda/studentfreebie
- **GitHub — `Internshipsbda/employerfreebie`** (private): the *Kind-or-Wicked Environment Diagnostic*. Source of truth for the employer tool.
  https://github.com/Internshipsbda/employerfreebie
- Related repos in the org: `Internshipsbda/freebies`, `Internshipsbda/jobboard`, `Internshipsbda/Internship-Job-Board`, `Internshipsbda/internshipsbda-job-board` — explore these for the job board and additional freebies.
- **Logo artwork**: provided by the user (stacked black wordmark + lightbulb-person mark). Stored in `assets/`.
- **Playad brand profile** (provided by the user): confirmed the official palette (black / blue / orange / white), the typography pairing (**Raleway + Inter Tight**), the website, categories, and target audiences above.

> **Typography note:** the system standardizes on **Montserrat** (display, self-hosted ExtraBold + CDN for other weights) paired with **Raleway** (body, self-hosted Light + CDN) — the production codebase pairing, and the families the user uploaded. The Playad brand profile listed **Inter Tight** as an alternate display face; switch `--font-display` if that's preferred.

---

## Content Fundamentals

How the brand writes:

- **Voice:** bold, corrective, practical, mission-driven. It names the problem plainly and doesn't soften it — then immediately offers a constructive next step. *"Bermuda's Internship System Is Broken. We're Fixing It."* · *"That's an expensive inconvenience."*
- **Person:** second person ("you", "your interns", "your internship environment"). Each audience feels directly addressed. Headlines are declarative, not hedged.
- **Casing:** sentence case for headlines and body. **Eyebrows / kicker labels are UPPERCASE** with wide letter-spacing (~0.16–0.18em), e.g. `FUTURE READY TALENT FRAMEWORK`, `7-QUESTION DIAGNOSTIC FOR EMPLOYERS`.
- **Structure:** problem statement → audience-specific pathway → pain-point validation → the fix. CTAs are action-oriented and low-friction: *"Take the free assessment"*, *"Take the free diagnostic"*, *"Get the free guide"*, *"Book a 20-minute consult →"*. A trailing `→` is common on primary CTAs.
- **Framework language:** the brand leans on named, proprietary-sounding frameworks — *FRTF (Future Ready Talent Framework)*, *Cognitive Scaffolding Audit*, *Kind vs Wicked environments*, *Goldilocks Tasks*, *Kolb Reflection Cycle*. Use these as proper nouns; they signal rigor.
- **Tone balance:** urgency + support. Diagnostic, never vague. Empathetic to each audience's real frustrations ("most managers were never trained to supervise young people with little or no work experience").
- **Emoji:** none. The brand does not use emoji. Iconography is line icons (Lucide), not emoji or unicode glyphs.
- **Numbers:** scores are shown as `X / 60`, `X / max`, percentages on bars. Concrete and measured — fitting the "data, audits, measurement" positioning.

---

## Visual Foundations

- **Palette:** black & white for authority, a **muted blue (`#5499BB`)** for trust/professionalism, a **warm orange (`#FBA856`)** for action and emphasis. A **burnt deep-orange (`#B54A14`)** signals "wicked"/broken/priority-gap states. Backgrounds are a warm off-white **paper (`#FBFAF7`)** or white surfaces. Text is near-black **ink (`#0E1A23`)**.
- **Type:** **Montserrat** for display/headings — heavy (700–900), tight tracking (−0.02em on big heads). **Raleway** for body (400–600), comfortable line-height (1.5–1.65). Eyebrows are uppercase, wide-tracked.
- **Backgrounds:** flat color. No photography-led hero, no full-bleed imagery, no repeating textures or patterns. The **only gradient** in the system is the signature **blue → blue-700 diagonal** used on "result"/score panels.
- **Cards:** white surface, **1px slate (`#D3DCE1`) hairline border**, generous radius (12–16px), small soft cool-tinted shadow. Selected/weakest states get an **orange tint (`#FFF5EA`) + orange border**, sometimes a 4px left **accent bar** (orange / blue / ink).
- **Corner radii:** inputs 8px, buttons & small cards 12px, cards 16px, feature cards 20px, badges/pills fully round.
- **Buttons:** orange primary carries **ink text** (not white); blue secondary carries white. Display font, bold. Hover = slightly darker fill + a 1px lift. Disabled = reduced opacity. No heavy shadows — flat with a small `shadow-sm`.
- **Selection states:** rating tiles and option rows fill **orange** when selected, with an orange border; hover hints at **blue-50**. Radios are filled circles with an inset white ring.
- **Shadows:** subtle and cool-tinted (`rgba(14,26,35,…)`), from `shadow-xs` to `shadow-lg`. Cards default to `shadow-sm`.
- **Focus rings:** 3px soft ring — blue (`rgba(84,153,187,.4)`) on neutral fields, orange (`rgba(251,168,86,.55)`) on action-tinted fields.
- **Motion:** quick and decisive, **no bounce**. Standard ease `cubic-bezier(0.4,0,0.2,1)`, 150–250ms for color/hover, 500ms for score-bar fills. Calm, professional.
- **Transparency / blur:** used sparingly — the sticky progress bar uses `backdrop-blur` over `rgba(255,255,255,.95)`; result panels nest an inner `rgba(255,255,255,.1)` glass box.
- **Imagery vibe:** the brand is type-led and structural, but its asset library leans on **warm, lamp-lit workspace photography** (real offices, desks, natural light) — warm-toned rather than cool or black-and-white. Use sparingly over the default of clean typographic layouts on paper/white.

---

## Iconography

- **Icon system:** **Lucide** (`lucide-react` in production). Line icons, ~1.5–2px stroke, rounded joins. Use Lucide for all UI icons — arrows, checks, chevrons, audience/segment glyphs. CDN: `https://unpkg.com/lucide-static` or `lucide` React package.
- **No emoji, no unicode-glyph icons.** The one decorative typographic flourish is a trailing **`→`** on CTAs.
- **Logo mark:** a **lightbulb containing a person with arms raised**, ringed by radiating "idea" lines — representing potential unlocked through experience. Available as mark-only and as a horizontal/stacked wordmark, in black and reversed white. See `assets/`.
- Do **not** redraw the logo or invent new brand icons. Copy the provided assets.

### Assets (`assets/`)
- `logo-wordmark-black.png` / `logo-wordmark-white.png` — horizontal lockup (mark + "Internship Insights Co.")
- `logo-stacked-black.png` / `logo-stacked-white.png` — stacked lockup with tagline
- `logo-mark.png` / `logo-mark-white.png` — lightbulb-person mark only
- `favicon.ico`

---

## Index / Manifest

**Foundations**
- `styles.css` — entry point (consumers link this). `@import` list only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `guidelines/*.card.html` — specimen cards (Colors, Type, Spacing, Brand)

**Components** (`components/`) — namespace `window.InternshipInsightsCoDesignSystem_cd6ca8`
- `buttons/Button` - primary (orange) / secondary (blue) / outline / ghost
- `badges/Badge`, `badges/Eyebrow` — pill tags + uppercase kickers
- `surfaces/Card`, `surfaces/ScoreBar`, `surfaces/ResultPanel` — white card, report bar, blue result panel
- `forms/TextField`, `forms/OptionCard`, `forms/ScaleSelector` - input, diagnostic radio row, 1–5 rating tiles

**UI Kits** (`ui_kits/`)
- `freebie-tools/` — interactive recreation of the FRTF Self-Assessment (student) and Kind-or-Wicked Diagnostic (employer), with launcher + reports.

**Other**
- `SKILL.md` — Agent-Skill manifest for downloading and using this system in Claude Code.
