# Reef Rooftop Restaurant – Website

A modern, responsive single-page site for Reef Rooftop Restaurant, Ranchi. Built with HTML, CSS, and JS.

## Quick Start

1. Preview locally
   - Option A: Open `src/index.html` directly in your browser
   - Option B (recommended): from `src/`, run `npx serve -l 5173` and open `http://localhost:5173`

2. Replace content
   - Hero photo: `src/assets/images/hero-real.jpg`
   - Gallery/menu images: put files in `src/assets/images/`
   - Menu PDF: `src/assets/menu/Reef-Full-Menu.pdf`
   - Contact details: edit the Contact section in `src/index.html`

## Structure

- `src/index.html` – All sections: Hero, About, Menu, Gallery, Reviews, Info, Contact, Footer
- `src/css/styles.css` – Theme, layout, animations, responsive rules
- `src/js/main.js` – Smooth scroll, mobile nav, tabs filter, parallax, form handling
- `src/assets/images/` – Images (SVG placeholders + real hero)
- `src/assets/menu/` – Downloadable menu PDF

## Customize Theme

Edit CSS variables in `src/css/styles.css`:

```
:root {
  --bg: #0b1220;
  --text: #e9eef7;
  --accent: #d4a650;
}
```

Fonts: Headings/logo use Cinzel; body uses Poppins. Update Google Fonts link in `index.html` if desired.

## Deploy

Deploy the `src/` folder to any static host (GitHub Pages, Netlify, Vercel, S3, Firebase Hosting).

## License

Provided as-is for Reef Rooftop Restaurant. Replace media and details with your own.