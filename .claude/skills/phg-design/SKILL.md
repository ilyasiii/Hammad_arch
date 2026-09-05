---
name: phg-design
description: The Ph.G Studio design system, palette, type scale, motion tokens, image rules and the project layout catalog. Load this before building or changing any page, component or gallery on this site, or when choosing how a project's plates should be presented.
---

# Ph.G Studio, design system

An architecture practice's site. The work is photography, plans and sections;
everything else is scaffolding. **When in doubt, remove.**

## The one rule

Restrained editorial, with one deliberate 3D moment. Typography and photography
carry the page, like OMA, David Chipperfield, Neri&Hu. Motion confirms that
something happened; it does not perform. If an effect competes with the
photography, it is wrong.

**The 3D exception.** A WebGL armature of platonic solids
(`src/components/geometry-scene.tsx`) sits **beside the philosophy copy** on the
home page, the section it actually illustrates. It earns its place because the
practice is named Phenomenological _Geometry_ and keeps a Sacred Geometry
project: the polyhedra are the subject, not decoration. It is procedural, so it
needs no model export. Showing the studio's actual buildings in 3D would need
`.glb` files from SketchUp; until those exist, do not fake it.

It carries no heading or caption of its own. It illustrates the philosophy text
next to it; captioning it made the page read as two competing sections.

Keep 3D to that one place. Four guards keep three.js off the critical path -
`ClientOnly`, `lazy()`, an IntersectionObserver, and a `requestIdleCallback`
after intersection. That last one matters: philosophy sits directly under the
hero, so intersection alone fires on load and three.js competes with the hero
image for bandwidth. Any new 3D must be gated the same way.

## Type scale

Page `h1` is `text-4xl md:text-6xl`. Project detail `h1` is
`text-4xl md:text-5xl`. Card titles are `text-2xl md:text-3xl`.

These came down a full step after `6xl/8xl` (96px desktop) was judged too
large. Do not push them back up.

Rejected deliberately, do not reintroduce without asking: smooth-scroll
hijacking (Lenis), scroll-pinned choreography (ScrollTrigger), custom cursors,
WebGL image distortion, text-scramble effects.

## Tokens

Defined in `src/styles.css`. Never hard-code a hex or a duration in a component.

| Token     | Value                   | Use                                         |
| --------- | ----------------------- | ------------------------------------------- |
| `--cream` | `oklch(0.965 0.012 85)` | page background                             |
| `--ink`   | `oklch(0.18 0.012 60)`  | text, footer ground                         |
| `--clay`  | `oklch(0.58 0.16 38)`   | the single accent, labels, hovers, emphasis |
| `--stone` | `oklch(0.55 0.008 60)`  | muted text                                  |

Clay is the only accent. One accent, used sparingly, reads as confidence; a
second one reads as indecision.

**Type.** `font-display` = Instrument Serif, tight tracking, for headings and
numerals. `font-label` = Inter, 0.7rem, uppercase, 0.18em tracking, for section
markers (`§ Philosophy`, `Nº 001`). Body is Inter at `text-foreground/80` -
never pure ink, which is too hard against cream.

**Motion.** `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)` is the house
easing. Durations: `--dur-fast: 200ms` (hover), `--dur-base: 500ms`
(transitions), `--dur-slow: 800ms` (entrances). Nothing exceeds 1s.

**Space.** Sections are `py-24 md:py-32`. Page gutters are `px-6 md:px-10`.
Content maxes at `max-w-[1400px]`; text columns at `max-w-2xl`, roughly 70
characters, past which line length stops being readable.

## Images

**Always use `<Plate>`** (`src/components/plate.tsx`). Never write a bare `<img>`
for content. Plate handles the AVIF/WebP ladder, intrinsic sizing and the
placeholder tone. A bare `<img>` pointed at `public/` serves the original file -
some of which are 25 MB.

Pass a real `sizes`. A two-column grid inside `max-w-[1400px]` is
`(min-width: 768px) 44vw, 92vw`, not `100vw`. Wrong `sizes` silently ships the
wrong rung of the ladder and undoes the whole pipeline.

**Crop only photography.** Plans, sections, axonometrics and sketches are
documents, cropping them to a uniform grid destroys information. Pass `ratio`
only for photographic work; omit it everywhere else.

**No plate may be taller than the screen.** Uncropped plates carry
`.plate-fit` (max-height `80svh` plus max-width, which scales a replaced
element down proportionally) and their frame hugs the result. Without it a
portrait drawing in a wide column rendered at 1879px against a 900px viewport.

That cap has a knock-on: a portrait plate in a very wide slot shrinks and then
centres, leaving white bands. So no `editorial` slot runs the full measure, and
portrait-heavy sets belong in `diptych` rather than `editorial`.

After adding images to `public/`, run `npm run images`.

## Glass and layering

`.glass` / `.glass-dark` (styles.css) are frosted panels that sit **over**
plates: the category chip on every project card, the header once it leaves the
top of the page. Keep them small, `backdrop-filter` is expensive over large
areas, so chips and bars only, never a full-page overlay. Both degrade to a
more opaque fill via `@supports not (backdrop-filter)`.

## Index layout, a hard-won lesson

The projects index is **a strict two-column grid**: same crop, same title size,
shared baseline per row. Every project the same weight.

A full-measure lead plate was tried and removed, it read as "this is the
flagship", a claim the index has no business making, since the order is just
category order.

A system of four alternating compositions (banner / one-against-two / offset
pair / the mirror) was built here and **rejected after looking at it**. On a
page of real work it read as broken, not composed: nothing shared a baseline,
the mirrored slots left large L-shaped voids, and jumping title sizes looked
like inconsistency rather than hierarchy. The People page, a plain uniform
grid, looked markedly better than any of it.

The rule that came out of that: **vary presentation between pages, not within
one.** Rhythm across a project's own gallery layout and hero treatment is
plenty; the index itself should be quiet and let the plates differ. Do not
reintroduce per-slot composition variety without looking at a full-page capture
first.

**Every project page opens identically**: the cover fills the viewport, the
title and place sit over it in cream, and the back link rides a `.glass-dark`
chip. Three per-project variants (`stacked`, `split`, `full`) existed and were
removed, including a split treatment that overlapped a second plate on the
cover. One consistent opening was preferred; the plates themselves already
differ enough from project to project.

Two things that treatment depends on, do not weaken them: the washes are sized
for white-ground plans, not for dark photographs (`from-ink/90` bottom,
`from-ink/75` top), and the back link needs its chip. Without both, covers like
Sacred Geometry, a white plan, leave cream text unreadable.

## Layout catalog

A project's layout is a property of its _material_, not a default. Every project
in `src/lib/projects-data.ts` declares one; `src/components/gallery.tsx`
implements them.

| Layout          | Material it suits                    | Form                                                  |
| --------------- | ------------------------------------ | ----------------------------------------------------- |
| `grid`          | photographed interiors, uniform sets | even 4:3 two-column grid, cropped                     |
| `editorial`     | a small number of strong plates      | alternating wide/narrow, offset, generous whitespace  |
| `contact-sheet` | large sketch sets (Ravi's 33)        | dense three/four-column, uncropped, lightbox on click |
| `diptych`       | drawing paired with its render       | two-up rows at natural height                         |
| `compare`       | existing vs proposed                 | two columns under sticky Before/After labels          |
| `cinematic`     | one hero project                     | full-bleed alternating with inset plates              |

Sub-groups within a project use `sections`; before/after uses `compare`. Both
compose with any layout.

## The Selected work strips

The home page closes with two `<Marquee>` rows travelling in opposite
directions at different speeds, holding every project. They halt under the
pointer, that pause is the point of the component, not decoration.

Four things it depends on:

- The track carries the items **twice** and slides `calc(-50% - half the gap)`.
  That offset is exactly one copy plus its trailing gap, which is what makes the
  loop seamless, change the gap and the offset must change with it.
- Pausing is CSS `animation-play-state`, on `:hover` **and** `:focus-within`.
  Without the focus rule, tabbing into a moving strip walks the link away from
  the user.
- The duplicate copy is `aria-hidden` with `tabindex="-1"`; otherwise every
  project is announced and tabbed through twice.
- Under `prefers-reduced-motion` the animation is dropped and the strip becomes
  an ordinary horizontal scroller, so nothing becomes unreachable.

Card labels are stacked and left-aligned. Spread across the card width, one
card's right-aligned label sat beside the next card's title and the two read as
one line.

## Motion vocabulary

Five moves exist. Adding a sixth needs a reason.

1. **Reveal**, `<Reveal>`: opacity 0→1 with a 16px rise, `--dur-slow`, once,
   triggered ~15% into the viewport. Grids stagger children by 60ms, capped at
   6 so the last item never lags.
2. **Masked heading**, `<RevealText>`: the line rises out of its own baseline
   behind a mask. For headings only; blocks get `<Reveal>`. Reads as
   typesetting rather than as a web animation.
3. **View transition**, cover morphs into hero on project open, via
   `viewTransition` on `<Link>` plus a shared `view-transition-name`.
4. **Tilt**, `<Tilt>`: cards tip toward the pointer, capped at 5°. Mouse only;
   touch gets nothing, since there is no hover to reward.
5. **Hover**, 200ms. Images scale to 1.03; text moves to clay. Nothing else.

All of it sits behind `prefers-reduced-motion`, which is handled globally in
`styles.css`, do not re-implement per component.

Anything that hides content until JS runs must be scoped to the `.js` class
that `__root.tsx` sets before first paint, so a dead bundle degrades to visible
content rather than a blank page. `<html>` carries `suppressHydrationWarning`
for exactly that script.

## Checklist before calling a page done

- [ ] Every content image is a `<Plate>` with a considered `sizes`
- [ ] Plans and drawings are uncropped
- [ ] One `<h1>` per page; headings descend without skipping
- [ ] Interactive elements are real `<button>`/`<a>`, keyboard reachable
- [ ] Checked at 375px, 768px and 1440px
- [ ] `npx tsc --noEmit` clean and `npm run build` passes
