# Easter Egg

## Concept
The easter egg section is discovered purely by scrolling past the footer. No link, button, hint, or JavaScript points to it — only scroll distance reveals it.

## Trigger
The section lives 2000px below the footer in the DOM. On first encounter the user must scroll a long way past the footer before it comes into view.

Phase 4 will add a scroll-lock at the footer (`data-scroll-lock="true"` attribute already in place) that pauses scrolling for 1.5 seconds when the footer is reached, adding a beat before the user can continue scrolling down to find it.

## Visual Design
- Background: pure black (`--color-bg-subtle`)
- Section height: 2400px
- The isometric dungeon map (`map-the-rot.png`) fills the lower portion at 80% opacity
- Two text captions are overlaid on the map at specific positions

## Content (placeholder — to be finalised)
- Text 1 (lower-left map area): short cryptic line
- Text 2 (lower-right map area): second cryptic line

## HTML Marker for Phase 4
```html
<footer id="footer" class="footer" data-scroll-lock="true">
```
The scroll-lock JS in Phase 4 will target `[data-scroll-lock="true"]` to pause scroll for 1.5s when this element enters the viewport.
