# RESPONSIVE.md
## FOHA — Responsive Breakpoint Reference

Tested: Session 005 · dev server `http://localhost:5176/`

---

## Breakpoint Scale

| Token | Value | Description |
|-------|-------|-------------|
| (none) | 320px | Minimum supported viewport — small phones |
| `--bp-mobile` | 390px | iPhone 14 Pro canvas; base for Figma mobile frames |
| `--bp-tablet` | 768px | Tablet / landscape phone — first major layout change |
| `--bp-desktop` | 1024px | Desktop — second major layout change |
| (none) | 1280px | Large laptop — no new breakpoint, same as 1024px rules |
| `--bp-wide` | 1440px | Wide desktop — token exists, no targeted CSS yet |

Note: CSS custom properties cannot be used inside `@media` conditions. All media query values are hardcoded in `style.css` with a comment citing the corresponding token.

---

## Section Layout State at Each Breakpoint

### Nav

| Breakpoint | State |
|------------|-------|
| 320px | Logo (32px tall) + "Get Mad" link only. Two desktop links hidden. No explicit height; sizes to content (~48px). |
| 390px | Same as 320px. |
| 768px+ | All three links visible with diamond separators. Nav height fixed to 56px (`--space-56`). Horizontal padding 100px each side. |

### Hero (3.1)

| Breakpoint | State |
|------------|-------|
| 320px | Full-width marquee (280px inner), 541px tall. Logo scales to 94% of container (`min(378px, 94%)`), centered. Marquee clips hero-fg (not displayed on mobile anyway). |
| 390px | Logo ~353px wide, centered. Fits with minimal clipping. |
| 768px+ | Marquee height 642px, rounded corners. Logo repositioned to upper-right (Figma desktop layout): `left: 635px`, `width: 700px`. Hero-fg foreground character visible. |

**Fix applied this session:** hero logo was `width: 378px` fixed — clipped at 320px and 390px (inside `overflow: hidden` marquee, no horizontal scrollbar, but content lost). Changed to `width: min(378px, 94%); aspect-ratio: 378/215; height: auto`.

### About (3.2)

| Breakpoint | State |
|------------|-------|
| 320px | Single column. Padding 16px sides. Left column (stats) stacked above right column (text). Readable. |
| 390px | Same as 320px. |
| 768px+ | Two equal columns, 100px padding sides, 32px gap. |

### Overview (3.3)

| Breakpoint | State |
|------------|-------|
| 320px | Stacked: illustration (544px tall, full width) above dark card. Card inner centred with 16px side padding. |
| 390px | Same as 320px. |
| 768px+ | Two columns, `flex-direction: row`. Card on left (order 1), illustration on right (order 2). Illustration height increases to 687px. Card switches to bordered-box desktop treatment. |

### Gallery (3.4)

| Breakpoint | State |
|------------|-------|
| 320px | Dark container, horizontal-scroll list of images. List items (landscape 300px wide, portrait 292px wide) scroll naturally. Thin scrollbar visible. |
| 390px | Same as 320px. |
| 768px+ | Container minimum height 576px. Heading increases to h3 size. Landscape images widen to 441px. Horizontal scroll unchanged. |

### Prologue (3.5)

| Breakpoint | State |
|------------|-------|
| 320px | Full-width card with dark inner, stacked content above illustration. Heavy vertical padding (160px top/bottom) on section. |
| 390px | Same as 320px. |
| 768px | Same as mobile — prologue desktop breakpoint is 1024px, not 768px. |
| 1024px+ | Card aligned right: `margin-left: auto; width: 868px; max-width: 62%`. Card inner switches to row layout (text left, illustration right). Tent decoration appears. |
| 1280px | `max-width: 62%` = ~793px — card is slightly narrower than 868px fixed. |
| 1440px | `max-width: 62%` = ~893px — card hits 868px fixed width cap. |

### Retail (3.6)

| Breakpoint | State |
|------------|-------|
| 320px | Stacked: cover image (full-width, aspect-ratio preserves shape) above content + buttons. Side padding 16px. |
| 390px | Same as 320px. |
| 768px | Same as mobile — retail desktop breakpoint is 1024px, not 768px. |
| 1024px+ | Two columns: cover 477px fixed left, content takes remaining width up to 747px. Section padding 79px top/bottom, 70px sides. |

### Footer (3.7)

| Breakpoint | State |
|------------|-------|
| All | No layout change across breakpoints. Seal centred, legal text centred with max-width 747px and 16px side padding. Pattern + dark overlay unchanged. |

### Easter Egg (3.8)

| Breakpoint | State |
|------------|-------|
| 320px–767px | Text 1: lower-left. Text 2: lower-right. Map fills lower portion. |
| 768px+ | Text 1 repositioned (left: 108px, bottom: 987px). Text 2 moves left side (left: 716px, bottom: 209px, max-width 672px). |

---

## Known Issues (Non-Critical — Not Fixed This Session)

| Section | Breakpoint | Issue | Severity |
|---------|------------|-------|----------|
| All | 1280px–1440px | No `max-width` container on page. Content stretches full viewport width. | Cosmetic — Phase 5+ revision |
| Hero | 768px–1023px | Desktop logo uses fixed pixel position (`left: 635px`) calibrated to Figma 1440px canvas. May be off-centre at intermediate tablet widths. | Cosmetic — Phase 5 (Hero Revisions) |
| Prologue | 768px–1023px | Desktop card rules don't apply until 1024px. At 768px the card is full-width (mobile layout). Per Figma, 768px shows mobile design — matches intention. | Not an issue |

---

## `prefers-reduced-motion` Coverage

All animated/transitional properties now have fallbacks. See `@media (prefers-reduced-motion: reduce)` block at the bottom of `src/style.css`.

| Property | Element | Override |
|----------|---------|---------|
| `scroll-behavior: smooth` | `html` | `auto` |
| `transition: color` | `.nav__link` | `none` |
| `transition: color, border-color` | `.overview__read-more` | `none` |
| `transition: opacity` | `.retail__link` | `none` |
| `transition: border-color, color` | `.modal__close` | `none` |

---

## Scroll-Lock (Phase 4 Implementation)

`src/js/scroll-lock.js` observes `[data-scroll-lock="true"]` (the `<footer>` element). When it enters the viewport, scrolling is locked for 1500ms then released. One-shot per page load. Skipped entirely when `prefers-reduced-motion: reduce` is active.

## IntersectionObserver (Phase 14 Placeholder)

`src/js/observer.js` observes all `[data-animate]` elements and adds `.is-visible` on intersection. No elements have `data-animate` in Phase 4; no styles exist for `.is-visible`. No visual effect.
