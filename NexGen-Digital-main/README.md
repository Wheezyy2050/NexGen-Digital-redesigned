# Next Gen Digital — Static Marketing Site

This is a production-ready static website for Next Gen Digital, a South African web agency specializing in website development and future mobile app solutions.

## Features

- **Multi-page site**: Home, Services, Portfolio, About, Contact
- **Responsive design**: Works on all devices
- **Clean code**: HTML, CSS, JavaScript only
- **Modern styling**: Minimal, bold, high contrast with blue, white, black colors
- **Interactive elements**: Scroll reveal animations, contact form with mailto

## Pages

- `index.html` — Home page with hero, services preview, process, care plan, footer
- `services.html` — Detailed services with pricing
- `portfolio.html` — Portfolio showcase
- `about.html` — About the company
- `contact.html` — Contact form and details

## Files

- `css/styles.css` — All styling
- `js/script.js` — JavaScript for interactivity
- `assets/abstract.svg` — Simple SVG background

## How to Run

Open `index.html` in a web browser, or serve the directory with a local server.

For example, using Python:
```
python -m http.server 8000
```
Then visit http://localhost:8000

## Business Goals

- Sell website development services
- Build trust and drive leads
- Convert visitors into clients

## Tech Stack

- HTML for structure
- CSS for styling (no frameworks)
- JavaScript for interactivity (no backend)

How to use

1. Open `index.html` in your browser. (Double-click or run a local static server.)
2. Replace the placeholder contact details in `index.html` and `js/script.js` with your Google Workspace email and phone number.

Contact form behavior

- The contact form uses a `mailto:` link built in `js/script.js`. Replace the `to` email address in that file with your Google Workspace address for email delivery.

Next steps I can do for you

- Hook the form to a real backend or serverless function (recommended for production).
- Swap the placeholder portfolio images for real shots or CMS integration.
- Optimize and export production images and icons.
