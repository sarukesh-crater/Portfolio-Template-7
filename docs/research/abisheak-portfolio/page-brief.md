# Abisheak portfolio page brief

## Source and local route

| Source | Local route | Owned files |
| --- | --- | --- |
| `https://abisheakportfolio.vercel.app/` | `/` | `src/app/page.tsx`, `src/components/sites/abisheak-portfolio/portfolio.tsx`, `src/components/sites/abisheak-portfolio/portfolio.module.css`, `public/sites/abisheak-portfolio/` |

The template homepage was untouched before this clone, so the requested page takes the root route.

## Visual system

- Full-page near-black background with deep red glows, small red particles, soft glass panels, fine pale borders, and rounded corners.
- General Sans carries body text. Geist is used for heavy display text. Both families are stored locally under `public/sites/abisheak-portfolio/fonts/`.
- The fixed desktop header uses a glass bar with the wordmark, section links, and a red “Let’s Talk” pill. The compact header keeps the wordmark.
- The hero uses the source's red portrait background. Desktop copy overlays the left side. At narrow widths the portrait sits in a rounded image panel above the copy.
- Section order: hero, client results, featured projects, about, services and pricing, technical skills and software, contact, footer.
- Desktop source measurements at 1440×960 were approximately: hero 960px, stats 566px, projects 4032px, about 1062px, services 887px, skills 1456px, contact 1109px. The source document was about 10,196px tall.
- The source uses a Three.js canvas for animated particle, hero, pointer, and project-card scenes. The local version recreates the red and glass visual language in CSS; its project cards use a responsive thumbnail grid and hover/focus treatment instead of the original WebGL scene.

## Content and interactions

- Hero: “ABISHEAK”, “VIDEO EDITOR / MOTION DESIGNER”, description, work and contact anchors.
- Results: 150+ satisfied clients, 100% premium edits, 100K+ client-edit views.
- Projects: eight named samples with descriptions and categories. Selecting a card opens its YouTube or Drive preview in a dialog; Escape and the close button dismiss it. The master Drive folder remains a separate link.
- About: original profile photo, biography, and eight tool/proficiency tags.
- Services: five original service names and rupee prices. Each row links to contact.
- Skills: eight expertise cards and seven software tiles.
- Contact: the original WhatsApp link and a required name/email/message form. The source form only shows a temporary “Message Sent!” state and does not submit the entered data to a service; the local form preserves that behavior.
- Footer links return to the page top or jump to the listed sections.

## Asset map

| Source asset | Local file | Use |
| --- | --- | --- |
| `/assets/hero-red-bg.jpg` | `public/sites/abisheak-portfolio/images/hero-red-bg.jpg` | Hero portrait and red background |
| `/media/Abi dp.jpg.jpeg` | `public/sites/abisheak-portfolio/images/abi-profile.jpg` | About portrait |
| `/assets/spydy-DLbFrGCQ.png` | `public/sites/abisheak-portfolio/images/spider.png` | Contact-section spider mark |
| `/assets/thumbnails/<project>-1.jpg` | `public/sites/abisheak-portfolio/images/<project>-1.jpg` | Featured project cards |
| Fontshare General Sans weights 300, 400, 500, 600 | `public/sites/abisheak-portfolio/fonts/general-sans-*.woff2` | Body and UI typography |
| Google Fonts Geist 700 | `public/sites/abisheak-portfolio/fonts/geist-700.woff2` | Display typography |

The additional `-2` and `-3` thumbnail frames for all eight projects are also saved locally for future use.

## Known source gaps

- The page inventory exposed eight MP4 paths under `/media/`; each source request returned HTTP 404 when I attempted to bundle it. The clone therefore uses the source's available thumbnail images and its public YouTube/Drive preview URLs in the project dialogs.
- The original hero and project scenes are animated Three.js canvases. The local clone uses layered imagery and CSS card motion, so it does not reproduce the original 3D geometry, cursor-driven parallax, or exact scroll choreography.
