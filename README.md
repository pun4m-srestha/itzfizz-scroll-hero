# Welcome Itzfizz: Scroll-Driven Hero Section

A responsive hero section where the main visual is driven by page scroll, built with plain HTML, CSS and JavaScript plus GSAP.

Live Demo: https://pun4m-srestha.github.io/itzfizz-scroll-hero/

## Features

- **Full-screen hero** with a letter-spaced "Welcome Itzfizz" headline and three impact stats (98%, 85%, 75%).
- **Page-load animation:** the subtitle, headline words, stats, orb and scroll hint animate in with a staggered fade and slide.
- **Scroll-based animation (core feature):**
  - The orb moves, rotates and scales based on scroll position, not on time.
  - The hero is pinned while you scroll. Scene one fades out as scene two ("Built to move with you") fades in.
  - `scrub` smoothing gives fluid motion that reverses when you scroll back up.
- **Performance-minded:** animations use only `transform` and `opacity`, so there are no layout reflows on scroll.
- **Responsive:** the layout adapts to mobile widths (stacked headline and stats).

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, `clamp()` for fluid type)
- JavaScript (ES6)
- [GSAP](https://gsap.com/) 3.12 with the ScrollTrigger plugin (loaded via CDN)

## Project Structure

```
├── index.html   # markup
├── style.css    # styles and design tokens
└── script.js    # GSAP load + scroll animations
```

## Run Locally

1. Clone the repo:
```
   git clone https://github.com/pun4m-srestha/itzfizz-scroll-hero.git
```
2. Open `index.html` in a browser, or use the VS Code Live Server extension.

No build step or dependencies to install.

## Author

Punam Srestha · [GitHub](https://github.com/pun4m-srestha)

