# Greatest Star Studio — Design Brief

> Paste this into **claude.ai/design** when iterating. Attach the two screenshots in `/tmp/`:
> - `/tmp/mjvoice-desktop-v2.png` (1440 × 6477)
> - `/tmp/mjvoice-mobile-v2.png` (390 × 22882 — yes, that's the problem)

---

## Brand snapshot

- **Name on site:** Greatest Star Studio
- **Domain:** mjvoice.com  ("MJ" = Mount Juliet, not Michael Jackson)
- **Owner:** Tiffini Lindsay — vocal coach, Mount Juliet, Tennessee
- **Tagline:** *"Every voice has a story. Let's make yours extraordinary."*
- **Services / pricing visible:**
  - Private singing lessons — from $35 / 30 min
  - Online singing classes — from $35 / 30 min
  - Group classes — from $35
  - Karaoke training
- **Target audiences (per site):** Beginners → Advanced, Professional singers, Kids/Teens/Adults, Public speakers
- **Origin:** Replit-generated `rest-express` template, last commit 2025-02-23

---

## Tech stack (what claude.ai/design output needs to fit into)

- React 18 + Vite + Express + TypeScript
- Tailwind + **shadcn/ui** + Radix primitives
- **Framer Motion** for animations (heavy use of `whileInView` reveals)
- Fonts already loaded: **Playfair Display** (serif), **Montserrat** (sans)
- Routing: `wouter` (single `/` route)
- Theme: `theme.json` — currently `{ variant: "professional", primary: hsl(0,0%,0%), light, radius 0.5 }`

Custom CSS classes available but mostly underused:
`.glam-border`, `.glam-card`, `.shimmer-text`, `.glass-container`, `.gradient-animate`, `.hero-title` (text-8xl), `.section-title`

---

## Current sections (in render order)

1. **Hero** — `min-h-screen`, dark stage-light bg, glassmorphic card with title + quote, two CTAs
2. **WhatYouLearn** — 7 horizontally-stacked dark cards, numbered 01-07
3. **WhoIsItFor** — 4 columns of identical icons (Beginners, Pros, Kids/Teens/Adults, Public Speakers)
4. **VocalMethod** — 6 icon cards in 3x2 grid on dark bg
5. **VocalAdvantage** — 4-stat strip (Years Experience, Industry Recognition, Success Stories, Diverse Client Base) — generic icons, no real numbers
6. **Services** — 4 pricing cards (Private, Online, Group, Karaoke)
7. **Testimonials** — 2 anonymous testimonials (initials only)
8. **Press** — "As Featured In" — 5 abstract icons, no real outlet names
9. **Contact** — Name/Email/Subject/Message form, posts to `/api/contact` (in-memory only)

---

## Audit — what's wrong

### 1. Brand is missing
- **No photo of Tiffini anywhere.** Hero is stock stage-lights.
- **No audio samples.** For a vocal coaching site, this is the single biggest miss — the product is sound.
- **Press logos are abstract icons** (5 generic Lucide icons), not real outlets. Either get real logos or kill the section.
- **Testimonials are anonymous initials** — feels fabricated.
- **No certifications, training history, or credentials** for Tiffini.

### 2. Layout: endless scroll, no rhythm
- Mobile = **22,882px tall**. That's ~26 viewport heights.
- Black ↔ white section alternation is monotonous; no full-bleed photos to break it.
- 7 sequential "What You Learn" cards are visually identical.
- "Who Is It For" + "Vocal Method" + "Vocal Advantage" are three icon-grid sections in a row — could merge into one.

### 3. Typography is underused
- **Playfair Display** is imported but most headings render as `font-bold` Montserrat — Playfair is hidden.
- `.hero-title` class (`text-8xl`) exists but Hero only uses `text-6xl` — title doesn't dominate.
- `.shimmer-text` and `.section-title` (gradient) classes are built but unused.

### 4. Color & mood
- Pure black/white only. No accent.
- Stage lights in hero are purple/blue — that hint of color goes unused.
- `theme.json` primary = pure black (`hsl(0,0%,0%)`).
- Feels sterile / template-y, not warm or premium.

### 5. CTAs & conversion
- "Explore Services" outline button on dark hero is `text-black` — **invisible until hover**.
- No phone CTA. No book-online calendar embed (Calendly etc.).
- No sticky CTA after Hero — mobile users scroll 22k pixels and lose the button.
- Form is in-memory only — submissions vanish on server restart.

### 6. Accessibility
- All section content has `opacity: 0` until viewport-intersect — no `prefers-reduced-motion` fallback. Content is invisible to anyone who disables motion.
- Outline-button contrast issue on dark hero.

### 7. Code bloat / config
- Drizzle ORM + Neon Serverless are dependencies but storage is `MemStorage` only. Either wire the DB or remove deps.
- Replit-specific Vite plugins (`@replit/vite-plugin-cartographer`, `@replit/vite-plugin-runtime-error-modal`) — drop if leaving Replit.
- `<title>`, meta description, OG image — need to verify SEO basics in `index.html`.

---

## Constraints for any redesign

- **No real brand photos exist yet.** Tiffini needs to provide headshots / studio shots / student photos. Until then, redesign should be assets-light or use placeholders that look intentional (stylized text testimonials with first-name-only attribution, etc.).
- **Audio samples don't exist yet.** If "audio-first" direction wins, that's a content task before design.
- **Keep the existing stack** (React/Vite/Tailwind/shadcn/Framer Motion). Output should be drop-in components.

---

## Direction options to pick from

Pick one (or hybrid) before iterating in claude.ai/design:

### A. "Stage" — cinematic dark, editorial
- Lean into the dark theme that's already there
- Add a single accent: warm gold (`#D4AF37`) or stage-light magenta
- Big Playfair Display headlines, all-caps Montserrat labels
- Full-bleed black-and-white photography of Tiffini / students mid-performance
- Pull quotes set like Broadway show posters
- **Best for:** Pros, serious aspiring artists, performers prepping auditions
- **Risk:** Intimidating for hobbyists; needs real photography to land

### B. "Studio" — warm, light, professional, inviting
- Light theme: cream/blush/sand palette, soft shadows
- Editorial portrait photography (Tiffini smiling, students in lessons)
- Closer to a high-end yoga / Pilates / wellness studio site
- Sectioned with rounded image cards, less alternating-block monotony
- **Best for:** Beginners, parents booking kids, hobbyists
- **Risk:** Less distinctive; competes with every other coaching site

### C. "Voice" — audio-first, modern, product-feeling
- Hero is a waveform with a real audio sample of Tiffini singing or coaching
- Each service card has "▶ hear it" — student before/after clip
- Spotify/Apple Music card aesthetic
- Dark UI but with one bright accent (red, electric blue)
- **Best for:** Younger demos (Gen Z), TikTok/IG-native singers
- **Risk:** Tiffini must commit to recording samples; content-heavy

---

## Concrete redesign asks for claude.ai/design

1. **Hero rebuild** — make "Greatest Star Studio" actually dominate. Add a sub-CTA "Listen to a 30-second sample" if direction C, or a Tiffini portrait if direction A/B. Fix the invisible outline button.
2. **Consolidate icon-grid sections** — merge WhoIsItFor + VocalMethod + VocalAdvantage into one tighter "Why train with Tiffini" block.
3. **WhatYouLearn redesign** — break the monotony. Try a 2-column alternating layout with imagery, or a tabbed/accordion experience.
4. **Services pricing card upgrade** — feature one ("Most popular: Private 30-min"), make all four scannable in one screen on desktop.
5. **Testimonials** — switch to pull-quote style with first names + city, not initials. Or kill the section until real testimonials exist.
6. **Press** — kill it (no real outlets) and replace with credentials/certifications block, OR add real outlet logos if Tiffini has been featured anywhere.
7. **Sticky mobile CTA** — "Book a Lesson" persistent button after Hero.
8. **Mobile scroll length** — target <8k px (current: 22k). Use carousels, tabs, or accordions to compress.
9. **Add: book-online integration** — Calendly/Acuity embed in Contact section.

---

## Things to ask Tiffini before redesigning

1. What's the **#1 thing she wants visitors to do** — book a free intro, fill the contact form, call, or buy a package?
2. Does she have **photos** (headshots, studio, students with releases)?
3. Does she have **audio samples** (her singing, student before/after)?
4. **Real testimonials with names + permission** — yes/no?
5. **Real press features** — what outlets, if any?
6. **Calendar/booking system** — Calendly? Acuity? In-person only?
7. **Stripe/payment** — does she want online lesson purchases?
8. **Brand vibe pick:** A (Stage), B (Studio), or C (Voice)?
