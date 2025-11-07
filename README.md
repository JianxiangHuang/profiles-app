# Part 1

This is a simple React app created using Vite and React-Bootstrap.  
It displays a blue Bootstrap alert saying “Hello React” on the page.

Commit Link: https://github.com/JianxiangHuang/profiles-app/commit/1b8ec43d46c087f809248a9aab7bc4e0da375c98

# Part 2

https://jianxianghuang.github.io/profiles-app/

![Deploy](https://github.com/JianxiangHuang/profiles-app/actions/workflows/deploy.yml/badge.svg)

# Part 3
Commit Link: https://github.com/JianxiangHuang/profiles-app/commit/5453fb782b7a97052cc472e64a2464d6c3107673






# Profiles App (Lab 1)

## Dev Container

> Talk about the image you are using here.!
For eg, if i were to use the Node.js dev container, I would write:
- Node.js dev container (image: `mcr.microsoft.com/devcontainers/javascript-node:20`)
- `corepack enable` to use npm/yarn/pnpm reliably

## Getting Started
\ ```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
\ ```

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

**Live URL:** https://<username>.github.io/profiles-app/

## Notes
- Uses React + React-Bootstrap.
- We use components, props, and `.map()`.