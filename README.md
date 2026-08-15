<div align="center">

# 🖥️ Sarder Junaid Ahmed — Portfolio

### A fully interactive 3D retro computer, rebuilt as a personal site.

Boot it up, type `help`, and explore my research, projects, and background
through a hand-built UNIX-like shell rendered live in WebGL.

[![Live Site](https://img.shields.io/badge/live-junaid--ahmed--rupok.github.io-f99021?style=for-the-badge)](https://junaid-ahmed-rupok.github.io/1797_Junaid_Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE.MD)
[![Built with Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

</div>

<br />

<div align="center">
  <img src="./public/icon/og-img1.png" alt="Site preview — retro terminal boot screen" width="720" />
</div>

<br />

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Editing the Content](#-editing-the-content)
- [Deployment](#-deployment)
- [Credits](#-credits)
- [License](#-license)
- [Contact](#-contact)

---

## 🧭 Overview

This is my personal portfolio site — instead of a conventional scrolling
page, it's a **3D Commodore-style computer** you boot up and drive with a
lightweight shell. Behind the scenes it's a from-scratch WebGL text-rendering
engine paired with a virtual file system, so every section of the site
(**About**, **Projects**, **Contact**) is just a markdown file the shell can
`cd` into and `show`.

An accessible, JavaScript-free fallback (`index.html`'s `<main>` content) is
also included, so the same information is available to screen readers,
search engines, and anyone without WebGL support.

## ✨ Features

| | |
|---|---|
| 🖥️ **3D interactive computer** | A Commodore PET–style model you can look around, built with Three.js |
| 🐚 **Custom shell** | A minimal UNIX-like shell (`ls`, `cd`, `show`, `pwd`, `mkdir`, `touch`, `help`, …) |
| 📁 **Virtual file system** | Site content lives as real markdown files, mapped onto a simulated filesystem at build time |
| 📝 **Markdown renderer** | A bespoke interpreter/renderer that lays out headings, lists, links, and images directly in WebGL |
| ♿ **Accessible fallback** | A static HTML version of the content for non-JS clients, crawlers, and assistive tech |
| 📱 **Responsive** | Works across desktop and mobile viewports |

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Rendering:** [Three.js](https://threejs.org/) (WebGL)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Content:** Markdown, parsed and rendered by a custom text-layout engine
- **Hosting:** GitHub Pages

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/Junaid-Ahmed-Rupok/1797_Junaid_Portfolio.git
cd 1797_Junaid_Portfolio

# 2. Install dependencies
npm install

# 3. Run the local dev server
npm run dev
# → open http://localhost:1234

# 4. Build for production
npm run build
# → static output written to dist/
```

## 🗂️ Project Structure

```
1797_Junaid_Portfolio/
├── public/                      # Static assets served as-is
│   ├── icon/                    # Favicons & social preview image
│   ├── images/                  # Site images (e.g. profile photo)
│   ├── models/                  # 3D computer model (.glb)
│   └── textures/                # Baked textures & environment map
├── src/
│   ├── file-system/home/user/   # ← Site content (see below)
│   │   ├── title/title.md
│   │   ├── about/about.md
│   │   ├── projects/*.md
│   │   └── contact/contact.md
│   ├── terminal/                # Shell implementation & commands
│   ├── webgl/                   # 3D scene, text engine, asset loader
│   ├── main.ts                  # App entry point
│   └── main.css / nav.css       # Styling
├── index.html                   # HTML shell + accessible fallback content
├── vite.config.ts
└── package.json
```

## ✏️ Editing the Content

All page content is authored as plain markdown — no need to touch the 3D or
shell code to make an update.

| File | Controls |
|---|---|
| `src/file-system/home/user/title/title.md` | The boot screen greeting |
| `src/file-system/home/user/about/about.md` | The "About" bio |
| `src/file-system/home/user/projects/*.md` | One file per project or research highlight |
| `src/file-system/home/user/contact/contact.md` | Contact details |

> **Note:** `index.html` contains a parallel, plain-HTML version of the same
> content for the no-JS/accessible fallback — update both places to keep
> them in sync.

## 🌐 Deployment

This is a static Vite build, so it needs to be **compiled** before it's
published — GitHub Pages' default "deploy from branch" mode serves files
as-is and will not compile the TypeScript source.

The recommended setup is a **GitHub Actions** workflow that builds the site
and deploys `dist/` automatically on every push to `main`:

1. Go to **Settings → Pages → Build and deployment → Source** and select
   **GitHub Actions**.
2. Add a workflow (e.g. `.github/workflows/deploy.yml`) that runs
   `npm ci && npm run build` and publishes the `dist/` folder using
   `actions/deploy-pages`.
3. Push to `main` — the site rebuilds and redeploys automatically.

Because this repo is served from a **project subpath**
(`/1797_Junaid_Portfolio/` rather than the domain root), `vite.config.ts`
sets a matching `base`, and all runtime asset paths (fonts, textures, the 3D
model) resolve through `import.meta.env.BASE_URL` so they work correctly
under that subpath.

## 🙏 Credits

The 3D retro-computer engine and site architecture are adapted from the
open-source [retro-computer-website](https://github.com/edhinrichsen/retro-computer-website)
by **Ed Hinrichsen**, used under the MIT License (see [`LICENSE.MD`](./LICENSE.MD)).
The 3D computer model is based on the Commodore PET 8296.

## 📄 License

Released under the [MIT License](./LICENSE.MD).

## 📬 Contact

**Sarder Junaid Ahmed**
ML Researcher · Data Scientist · PhD Applicant

- ✉️ [junaidahmedrupok@gmail.com](mailto:junaidahmedrupok@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/sarder-junaid-ahmed-059b68240/)
- 💻 [GitHub](https://github.com/Junaid-Ahmed-Rupok)

<div align="center">
<sub>Built with TypeScript, Three.js, and an unreasonable amount of appreciation for 1980s computers.</sub>
</div>
