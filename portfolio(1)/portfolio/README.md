# Portfolio — Dark Editorial Theme

## Folder Structure

```
portfolio/
├── index.html          ← Main entry point
├── README.md           ← This file
├── css/
│   └── style.css       ← All styles (variables, layout, animations)
├── js/
│   └── main.js         ← Cursor, scroll effects, animations, counters
└── assets/
    └── icons/          ← Place your favicon, social icons, etc. here
```

## How to Customize

### 1. Personal Info (index.html)
- Replace "Your Name" / "YN" with your name
- Update job title in the hero eyebrow
- Edit project cards: title, description, tech stack, year
- Update contact links with your real email, LinkedIn, GitHub

### 2. Colors (css/style.css — top :root block)
```css
--bg: #0a0a0a;          /* Main background */
--accent: #c8a96e;      /* Gold accent color */
--fg: #f0ede6;          /* Main text */
--fg-muted: #888880;    /* Secondary text */
```

### 3. Project Images
Replace the gradient `.project-img` backgrounds with real `<img>` tags or `background-image: url(...)`.

### 4. Fonts
Current: Cormorant Garamond (display) + DM Mono (body).
Swap via Google Fonts link in `<head>` of `index.html`.

### 5. Stats (About section)
Update the numbers and labels in `.about-stats` to reflect your real experience.

## Features
- ✦ Custom animated cursor (desktop)
- ✦ Scroll-triggered fade-in animations
- ✦ Counter animations on stats
- ✦ 3D card tilt on hover
- ✦ Parallax hero background text
- ✦ Sticky nav with blur on scroll
- ✦ Animated "available" status dot
- ✦ Fully responsive (mobile-first breakpoints)
- ✦ Grain texture overlay
- ✦ Zero dependencies — pure HTML/CSS/JS

## To Deploy
1. Upload the entire `portfolio/` folder to any static host
2. Works on: GitHub Pages, Netlify, Vercel, Cloudflare Pages
