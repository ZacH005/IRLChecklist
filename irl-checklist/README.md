# IRL Checklist

React/Vite app for an Innovation Readiness Level self-assessment.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Production builds use `/IRLChecklist/` as the base path by default so the app works on this repository's GitHub Pages project URL. Override it for another Pages path or a custom domain with:

```sh
BASE_PATH=/ npm run build
```

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. On every push to `main`, GitHub Actions installs dependencies from `irl-checklist/`, builds the app, uploads `irl-checklist/dist`, and deploys it to GitHub Pages.

In the GitHub repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.
