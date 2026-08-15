# Sarder Junaid Ahmed — Personal Website

A 3D retro-computer personal website / portfolio, built in TypeScript and Three.js. Features:
- 3D retro computer (Commodore PET-style) you can interact with
- A simple UNIX-like shell implementation
- A virtual file system (see `src/file-system/`) driving the "About", "Projects" and "Contact" content
- A markdown interpreter and renderer
- A custom text layout engine

Content lives as plain markdown files under `src/file-system/home/user/`:
- `title/title.md` — the boot screen
- `about/about.md` — bio
- `projects/*.md` — project & research write-ups
- `contact/contact.md` — contact details

Edit those files (and the matching sections in `index.html`, which is the accessible/no-JS fallback) to update the site content.

## Build Instructions
```bash
# Install dependencies (only the first time)
npm install

# Run the local dev server at localhost:1234 (or similar, check terminal output)
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Deploying
`npm run build` outputs a static site to `dist/`. This can be deployed to any static host:
- **GitHub Pages**: push `dist/` to a `gh-pages` branch (e.g. with the `gh-pages` npm package), or use a GitHub Actions workflow that runs `npm run build` and publishes `dist/`.
- **Netlify / Vercel**: connect the repo, set build command `npm run build` and publish directory `dist`.

## Credits
Site design and the 3D retro-computer engine are adapted from the open-source
[retro-computer-website](https://github.com/edhinrichsen/retro-computer-website)
template by Ed Hinrichsen, used under the MIT License (see `LICENSE.MD`). 3D computer model based on the Commodore PET 8296.
