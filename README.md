# ENCOUNTER 3D — Saif Hossain

A cinematic personal portfolio for AI automation, web development, and freelance video production. Built with native JavaScript, CSS, Canvas, and WebGL; no framework, dependency installation, or build step is required.

## Run locally

With Node.js 20 or later:

```sh
npm start
```

Open http://127.0.0.1:5173. The site must be served over HTTP because it uses ES modules. You can also use another static HTTP server.

## Included

- Personalized animated hero and portrait
- Live tools universe with a moving light ribbon and particles
- Six-step interactive working process
- Thirteen project entries with keyboard-accessible detail dialogs
- Supplied website links and project inquiry actions
- Experience, services, and technical toolkit
- Personalized closing scenes and confirmed email contact
- Responsive layouts and reduced-motion behavior

## Edit the portfolio

- `index.html`: page content and sections
- `src/saif-data.js`: profile, project descriptions, links, and tool textures
- `src/personal.js`: navigation and project dialogs
- `src/styles/personal.css`: personalized layouts and styling
- `src/scene*/`: scene layout, timing, and interaction
- `src/gl/`: WebGL renderer and shaders
- `public/saif/`: personal portraits, illustrations, and project artwork
- `public/fonts/` and `public/tex/`: self-hosted fonts and textures

The supplied portrait is a still image with an animated entrance and pointer response. The clock presents a working method rather than a dated employment history. Incompletely documented automation entries are labeled explorations; unconfirmed qualifications, project counts, pricing, and social profiles are omitted.

Contact: [pixelcraftbysaif@gmail.com](mailto:pixelcraftbysaif@gmail.com).

## Validation

The finished site was checked on desktop and mobile for JavaScript errors, missing assets, navigation, project dialogs, email links, and horizontal overflow. See [the verification report](docs/verification-report.json).

Raw reference footage, original photo/video shoot files, temporary screenshots, local logs, and development-only capture scripts are excluded from this repository.

## Credits

The cinematic renderer, scene choreography, and retained reference assets are adapted from [gireeshkumarreddy/cinematic-portofilo](https://github.com/gireeshkumarreddy/cinematic-portofilo), source commit `e61ebf780d63c8941469e070fe08bd7d261495f4`. Personal content, portraits, and project artwork belong to Saif's portfolio. This adaptation does not claim original authorship of the upstream renderer or reference artwork. No additional license grant is implied for upstream materials.

## Project thumbnails

The gallery uses the updated artwork supplied for this portfolio. Original thumbnails live in public/saif/thumbnails; project dialogs show those full images. The angled gallery faces are generated with node tools/build-project-cards.mjs. All twelve supplied images are used across thirteen entries, including both AI Video Systems and Lead Qualification & Appointment Booking.
