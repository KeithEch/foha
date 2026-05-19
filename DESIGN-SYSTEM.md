# FOHA Design System

**Source files:** `src/design-system/tokens.css` · `Mode 1.tokens.json` · Figma node `42:13`
**Preview:** open `src/design-system/preview.html` in a browser

> Use semantic tokens (`--color-*`, `--space-*`, etc.) in all components.
> Never reference primitive tokens directly — they are internal building blocks only.

---

## Setup

### 1. Import tokens in style.css
```css
@import './design-system/tokens.css';
```

### 2. Import Alegreya from Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500&display=swap');
```
Both are already in `src/style.css`.

---

## Color — Primitive Palette

Primitive colors are the raw palette. Do not use these in component styles — use the semantic tokens below.

### Black & White
| Token | Hex |
|---|---|
| `--primitive-black` | `#000000` |
| `--primitive-white` | `#FFFFFF` |

### Purple
| Token | Hex | Notes |
|---|---|---|
| `--primitive-purple-500` | `#BE5FB1` | Lighter — used for link hover |
| `--primitive-purple-900` | `#BE17A8` | Deeper — used for primary action borders and link default |

### Yellorange
| Token | Hex | Notes |
|---|---|---|
| `--primitive-yellorange-400` | `#FFD608` | Lightest |
| `--primitive-yellorange-500` | `#FFCC00` | Mid |
| `--primitive-yellorange-600` | `#FFBB00` | Used for strong borders and secondary actions |

### Mud (near-black warm tones)
| Token | Hex | Notes |
|---|---|---|
| `--primitive-mud-700` | `#201E1D` | Paragraph text on light |
| `--primitive-mud-800` | `#1A1817` | Main background and heading text on light |

### Neutral (grey scale)
| Token | Hex |
|---|---|
| `--primitive-neutral-100` | `#F2F2F2` |
| `--primitive-neutral-150` | `#E5E5E5` |
| `--primitive-neutral-200` | `#CCCCCC` |
| `--primitive-neutral-300` | `#B2B2B2` |
| `--primitive-neutral-400` | `#999999` |
| `--primitive-neutral-500` | `#808080` |
| `--primitive-neutral-600` | `#666666` |
| `--primitive-neutral-700` | `#4D4D4D` |
| `--primitive-neutral-800` | `#333333` |
| `--primitive-neutral-850` | `#262626` |
| `--primitive-neutral-900` | `#1A1A1A` |

### Brown, Brorange, Beige
| Token | Hex | Notes |
|---|---|---|
| `--primitive-brown-500` | `#3D2514` | Default border on light; accent background |
| `--primitive-brown-800` | `#1F160F` | Divider background |
| `--primitive-brorange-500` | `#685127` | Diamond accent colour; decorative elements |
| `--primitive-beige-100` | `#F2EEE6` | Paragraph text on dark |
| `--primitive-beige-500` | `#E8CFA7` | Heading text on dark; default border on dark |

---

## Color — Semantic Tokens

### Background
| Token | Resolves to | Intended use |
|---|---|---|
| `--color-bg-default` | `mud-800` `#1A1817` | Main page background |
| `--color-bg-subtle` | `black` `#000000` | Recessed surfaces, subtle contrast against default |
| `--color-bg-divider` | `brown-800` `#1F160F` | Section dividers, separators |
| `--color-bg-accent` | `brown-500` `#3D2514` | Accent panels, highlighted areas |
| `--color-bg-action-default` | `black` `#000000` | Button / interactive element background (default state) |
| `--color-bg-action-hover` | `mud-800` `#1A1817` | Button / interactive element background (hover state) |

### Border
| Token | Resolves to | Intended use |
|---|---|---|
| `--color-border-strong` | `yellorange-600` `#FFBB00` | High-emphasis borders — featured callout boxes |
| `--color-border-default-on-light` | `brown-500` `#3D2514` | Standard border on light backgrounds |
| `--color-border-default-on-dark` | `beige-500` `#E8CFA7` | Standard border on dark backgrounds |
| `--color-border-action-primary-default` | `purple-900` `#BE17A8` | Primary button border (default) |
| `--color-border-action-primary-hover` | `purple-900` `#BE17A8` | Primary button border (hover) |
| `--color-border-action-secondary-default` | `yellorange-600` `#FFBB00` | Secondary button border (default) |
| `--color-border-action-secondary-hover` | `yellorange-600` `#FFBB00` | Secondary button border (hover) |

### Text
| Token | Resolves to | Intended use |
|---|---|---|
| `--color-text-paragraph-on-light` | `mud-700` `#201E1D` | Body copy on light backgrounds |
| `--color-text-paragraph-on-dark` | `beige-100` `#F2EEE6` | Body copy on dark backgrounds |
| `--color-text-heading-on-light` | `mud-800` `#1A1817` | Headings on light backgrounds |
| `--color-text-heading-on-dark` | `beige-500` `#E8CFA7` | Headings on dark backgrounds |
| `--color-text-link-default` | `purple-900` `#BE17A8` | Hyperlink default state |
| `--color-text-link-hover` | `purple-500` `#BE5FB1` | Hyperlink hover state |
| `--color-text-menu-default` | `mud-800` `#1A1817` | Navigation link default state |
| `--color-text-menu-hover` | `black` `#000000` | Navigation link hover state |

---

## Typography

**Font family:** [Alegreya](https://fonts.google.com/specimen/Alegreya) (serif) — import weight 400 and 500.

| Token | Value |
|---|---|
| `--font-family-base` | `'Alegreya', serif` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |

### Named text styles

| Style | Size token | Weight token | Line-height token | Colour token (dark bg) |
|---|---|---|---|---|
| **p1** — body paragraph | `--font-size-p1` `18px` | `--font-weight-regular` | `--line-height-p1` `24px` | `--color-text-paragraph-on-dark` |
| **menu** — nav link default | `--font-size-menu` `24px` | `--font-weight-medium` | `--line-height-menu` `24px` | `--color-text-menu-default` |
| **menu-hover** — nav link hover | `--font-size-menu` `24px` | `--font-weight-medium` | `--line-height-menu` `24px` | `--color-text-menu-hover` |
| **h2** — section heading | `--font-size-h2` `32px` | `--font-weight-regular` | `--line-height-h2` `36px` | `--color-text-heading-on-dark` |

> `menu` and `menu-hover` share identical font properties; only the colour token differs.

---

## Spacing

Values from the `Spacing` token group. Named after their pixel value.

| Token | Value | Notes |
|---|---|---|
| `--space-4` | `4px` | Tight gaps — icon-to-label, list item bullets |
| `--space-8` | `8px` | Small internal padding |
| `--space-12` | `12px` | Button gap between elements |
| `--space-16` | `16px` | Button padding, standard gap |
| `--space-20` | `20px` | |
| `--space-24` | `24px` | Section internal padding |
| `--space-32` | `32px` | Component vertical rhythm |
| `--space-40` | `40px` | Section horizontal padding (mobile) |
| `--space-56` | `56px` | Nav bar height |
| `--space-72` | `72px` | |
| `--space-100` | `100px` | Section horizontal padding (desktop) |
| `--space-160` | `160px` | Large internal padding — hero |

---

## Border Width

| Token | Value | Use |
|---|---|---|
| `--border-none` | `0px` | No border |
| `--border-xs` | `1px` | Hairline — subtle dividers |
| `--border-sm` | `2px` | Standard border |
| `--border-md` | `4px` | Emphasis border |

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-none` | `0px` | Sharp corners |
| `--radius-xs` | `2px` | Very subtle rounding |
| `--radius-sm` | `4px` | Small elements — pills, tags |
| `--radius-md` | `6px` | |
| `--radius-lg` | `8px` | Cards, inner content boxes |
| `--radius-xl` | `12px` | Hero panel, overview card |
| `--radius-xxl` | `16px` | Image containers |

---

## Shadow

Three elevation levels. Use higher elevation for elements that float above the page (modals, tooltips).

| Token | Level | Value |
|---|---|---|
| `--shadow-1` | Low elevation | `0 1px 4px 0 rgba(0,0,0,0.37)` |
| `--shadow-2` | Medium elevation | `0 2px 2px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.3)` |
| `--shadow-3` | High elevation | `0 11px 7px 0 rgba(0,0,0,0.19), 0 13px 25px 0 rgba(0,0,0,0.3)` |

---

## Duration

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | `150ms` | Hover states, small UI feedback |
| `--duration-medium` | `300ms` | Standard transitions — colour, opacity, border |
| `--duration-slow` | `600ms` | Entrance animations, modal open/close |

> Easing curves will be defined in Phase 4. For now use the browser default (`ease`).

---

## Breakpoints

CSS custom properties cannot be used directly inside `@media` conditions. These tokens are the canonical reference — hardcode the px values in your media query rules.

| Token | Value | Use |
|---|---|---|
| `--bp-mobile` | `375px` | Smallest design target |
| `--bp-tablet` | `768px` | Tablet and large phone landscape |
| `--bp-desktop` | `1024px` | Desktop minimum |
| `--bp-wide` | `1440px` | Figma design canvas width — wide desktop |

**Usage pattern:**
```css
@media (min-width: 768px) { /* --bp-tablet */
  ...
}
```
