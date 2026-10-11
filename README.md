# Team Sprint Website

A responsive multi-page event and innovation website built with React + Vite.

## Pages
- Home
- Events
- Gallery
- About
- Contact

## Included
- Team Sprint branding and custom responsive styling
- Supplied posters for Portfolio Development, Robotics & IoT, and Design Thinking
- Event cards and event highlight lists
- Poster lightbox modal
- Workshop edition galleries: Design Thinking 1.0/2.0, Portfolio Development Workshop 1.0/2.0/3.0, and Build Sprint: Robotics & IoT
- Click-to-open workshop photo galleries with a full-screen lightbox
- Clickable organizer profile pages for Sanskriti Shrivastava and Krishna Shrivastav with social/contact links
- Gallery category filters
- Responsive mobile navigation
- Contact form that prepares an email using the visitor's default mail app (no backend required)

## Run locally

Install Node.js (LTS), then open this folder in a terminal:

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Customization
- Event data and tags: `src/data.js`
- Pages, galleries, and organizer profiles: `src/App.jsx`
- Workshop photos: `src/assets/gallery/`
- Organizer portraits: `src/assets/team/`
- Design system and responsive styling: `src/styles.css`
- Posters: `src/assets/`

Contact details currently included:
- Email: `swadrive.in@gmail.com`
- Phone: `+91 86014 45260`
- Location: KIPM Technical Campus, GIDA, Gorakhpur

Update contact details if the Team Sprint contact channel changes.

## Notes
- Event cards currently label the three supplied posters as past events; update `status` in `src/data.js` as new events are announced.
- The contact form uses a `mailto:` link, so it does not store submissions. Add a backend or form service if online form submission is needed.
- Institution logos are not recreated; add official logo assets only where you have permission to use them.
