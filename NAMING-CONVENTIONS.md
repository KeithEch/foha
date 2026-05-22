Figma-to-Code Naming Convention

The Figma design uses visual/descriptive node labels, but your HTML markup must use 
**semantic, accessible web standards** for class names, IDs, and elements.

#### Translation Rules

When building from Figma, translate visual names to semantic markup:

| Figma Node Label | Semantic HTML Element | BEM Class Name | Notes |
|------------------|----------------------|-----------------|-------|
| "Hero Image" | `<img>` or `<picture>` | `.hero__image` | Use `<picture>` for responsive images |
| "Heading Large" | `<h1>` or `<h2>` | `.hero__title` | Choose correct heading level for hierarchy |
| "Body Text" | `<p>` | `.about__description` | Use semantic `<p>`, not `<div>` + CSS |
| "Button" | `<button>` or `<a>` | `.cta__button` | Use `<button>` for actions, `<a>` for links |
| "Icon / Diamond Bullet" | `<svg>` or `<span>` | `.stats__bullet` | Use `<svg>` for semantic icon content |
| "Card Container" | `<article>` or `<div>` | `.overview__card` | Use `<article>` if it's independent content |
| "Grid" | `<ul>`, `<ol>`, or `<div>` | `.gallery__grid` | Use `<ul>` for image lists |
| "Link" | `<a>` | `.retail__link` | Never use `<span>` or `<div>` for links |

#### Naming Convention: BEM Scope

Use **BEM (Block–Element–Modifier)** naming, scoped to the section:

```css
/* Hero Section */
.hero { }
.hero__title { }
.hero__subtitle { }
.hero__image { }
.hero__image--portrait { } /* if variant needed */

/* About Section */
.about { }
.about__heading { }
.about__stats-list { }
.about__stat-item { }
.about__stat-bullet { }

/* Etc. for each section */
```

#### Markup Checklist per Section

**Before writing HTML for any section:**

1. List the Figma visual components (e.g., "Hero Image", "Subheading", "CTA Button")
2. Map each to semantic HTML (e.g., `<img>`, `<h2>`, `<button>`)
3. Write BEM class names scoped to the section (e.g., `.hero__subtitle`)
4. Verify: no generic names like `.text`, `.box`, `.container` at the top level
5. Verify: no `<div>` used where a semantic element (`<h1>–<h6>`, `<button>`, `<a>`, `<article>`, etc.) applies
6. Ask the user if a Figma component's semantic role is unclear

#### When in Doubt

If a Figma component's role is ambiguous:
- **Ask the user:** "In Figma, is this [component] a link, a button, or decorative text?"
- **Choose the most semantic option:** `<button>` > `<a>` > `<span>` > `<div>`
- **Use `aria-hidden="true"` for decorative elements** that don't add meaning
- **Document the choice** in a code comment if the semantic meaning isn't obvious

---

#### Accessibility Integration

All markup must be accessible by default:

- Use semantic HTML first (no `<div role="button">`)
- Add `alt` text to all `<img>` (or `alt=""` + `aria-hidden="true"` if decorative)
- Heading hierarchy: `<h1>` → `<h2>` → `<h3>`, no skipping levels
- Links: descriptive text (not "click here")
- Buttons: descriptive text (not "submit")
- Forms: `<label>` associated to `<input>` via `for` attribute

If accessibility isn't possible with semantic HTML alone, ask the user before adding ARIA.

### Page Background (Complete First)

The Figma design shows a warm parchment image as a fixed background behind all sections.

- [ ] Confirm parchment image location/asset with user (source, filename, path)
- [ ] Apply as a fixed `background-image` on `<body>` or `<main>` with appropriate `background-attachment`, `background-size`, and `background-position`
- [ ] Verify the background displays correctly at all breakpoints (320px to 2560px)
- [ ] Ensure individual section backgrounds (if any) appear over the parchment without conflict
- [ ] Document background CSS in `src/style.css` with a clear comment pointing to Figma reference

**This must be complete before section layouts are built** — sections need to be aware of the background treatment.
