# Safari Abdul-Akiyim — full-stack web developer portfolio

A React 19, Tailwind CSS 4, and Vite portfolio with responsive layouts, locally hosted fonts, multi-image project galleries, a printable résumé, social profiles, and a frontend-only contact form. Work stays on `master`.

## Development

Use Node.js 22.12+ and npm (validated with Node.js 24).

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
npm run build
npm run lint
npm run preview
```

Deploy the generated `dist/` directory to a static host. No runtime credentials or backend are required.

## Personal details and socials

Edit **`src/data/portfolio.js`**. The profile contains the real name Safari Abdul-Akiyim, the role Full-stack web developer, an editable `nickname` (currently MekahTheDev), and editable `email`, `phone`, `location`, `github`, `socials`, and résumé `summary` fields.

- Set `phone` with a country code to show a telephone link. WhatsApp uses `socials.whatsapp` when set, otherwise it derives a `wa.me` link from the phone number.
- Set your LinkedIn, X, Facebook, and WhatsApp URLs in `profile.socials`. Empty URLs show a non-clickable coming-soon state; no fake profile links are used.
- Empty email and phone fields display an available-on-request message in the contact panel and are omitted from the résumé.
- Your confirmed skills are HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, Node.js, Express.js, MongoDB, Git, and GitHub. The skills array drives both the website and résumé.
- Update the page title/description in `index.html` when you change the identity or positioning.

## Projects and multiple images

Add any number of entries to the `projects` array in `src/data/portfolio.js`. Filter categories and counts update automatically. Each project supports descriptions, technology tags, challenge, approach, highlights (`features`), contribution (`scope`), outcome, source/live URLs, and an image gallery.

Put your images in `public/projects/<project-name>/`, then reference them from the site root:

```js
images: [
  {
    src: "/projects/my-project/home.jpg",
    alt: "Homepage showing the product search and featured items",
    caption: "Desktop homepage",
  },
  {
    src: "/projects/my-project/mobile.jpg",
    alt: "Mobile product details with the add-to-cart action",
    caption: "Product details on mobile",
  },
],
```

The first image becomes the project cover. Dialogs support thumbnails, previous/next controls, and left/right arrow keys. Broken images show a fallback. If `images` is empty, the project’s optional `Visual` component is used. If neither exists, a text preview is shown. Give every project a unique `id`.

Orbit and Forma remain clearly labeled **concept studies** with original SVG example illustrations. Replace these with your real work; set `isConcept: false` for completed projects. Optional `liveUrl` and `sourceUrl` show links only when set to an HTTP(S) URL. `outcome` is optional; add real results rather than invented metrics.

## Printable résumé

“View résumé” opens an accessible preview. “Print / Save PDF” opens the browser print dialog, where visitors can print or save a PDF. Printing the page directly also prints only the résumé, with an A4 layout and a dedicated footer. Name, contacts, summary, skills, and projects share the portfolio data. No jobs, degrees, or credentials have been invented.

The résumé is implemented in `src/components/Resume.jsx`; print rules are in `src/components/resume-print.css`. The `.site-shell` is hidden for print, while `<ResumeDocument />` lives outside that wrapper. The default content was verified as a single A4 page; longer project lists can naturally span additional pages.

## Contact form — frontend only

`src/components/ContactForm.jsx` provides named fields: `name`, `email`, optional `subject`, and `message`. It validates required fields, email format, length limits, and whitespace-only input. The form declares `method="post"`, but its submit handler calls `preventDefault()`: **no POST, API request, message delivery, or storage happens**.

The “Prepare message” action preserves entered text and shows an honest “not sent” status. For your own backend, replace the marked section in `handleSubmit` with your POST request and add pending/success/error states based on the real response. An optional `onPrepare(payload)` callback exposes the trimmed `{ name, email, subject, message }` object for frontend use; it is not a delivery callback. Do not show a sent confirmation until your backend confirms delivery.

## Design and accessibility

`src/index.css` contains Tailwind theme tokens, local fonts, and reduced-motion-aware animations. Components use Tailwind utilities. Native dialogs support Escape, focus containment, and focus restoration. Fonts include SIL Open Font Licenses in `public/fonts/`.
