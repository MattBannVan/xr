# XR — Extended Reality Freestyle

A WebVR/WebXR experience built with [A-Frame](https://aframe.io/), deployable to [GitHub Pages](https://pages.github.com/).

## Live Demo

Once deployed, visit your GitHub Pages URL:
`https://<username>.github.io/xr/`

## Project Structure

```
xr/
├── index.html                  # Main entry point — A-Frame scene
├── src/
│   ├── js/
│   │   └── main.js             # Custom A-Frame components & scene logic
│   ├── css/
│   │   └── styles.css          # 2D overlay styles
│   └── assets/
│       ├── textures/           # Image textures (.jpg, .png, .webp)
│       ├── models/             # 3D models (.glb, .gltf, .obj)
│       └── audio/              # Sound files (.mp3, .ogg, .wav)
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages on push to main
├── package.json
├── .gitignore
├── CREDITS.md
└── README.md
```

## Getting Started

### Prerequisites

- A modern browser with WebXR support (Chrome, Edge, Firefox)
- Node.js ≥ 18 (optional, for local dev server)

### Run Locally

```bash
npm install
npm start
# Open http://localhost:3000
```

Or simply open `index.html` directly in your browser — A-Frame loads from CDN.

## Deploying to GitHub Pages

1. Push to the `main` branch.
2. The `deploy.yml` workflow automatically publishes the site to GitHub Pages.
3. Enable GitHub Pages in **Settings → Pages → Source: GitHub Actions**.

## Adding Content

| Asset type | Drop files in | Reference in HTML |
|------------|---------------|-------------------|
| Textures | `src/assets/textures/` | `src/assets/textures/my-image.jpg` |
| 3D models | `src/assets/models/` | `src/assets/models/my-model.glb` |
| Audio | `src/assets/audio/` | `src/assets/audio/my-sound.mp3` |

## Credits

See [CREDITS.md](CREDITS.md) for a full list of libraries and resources used.

## License

MIT
