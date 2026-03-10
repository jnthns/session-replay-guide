# Session Replay Implementation Guide

An interactive web app that walks Amplitude customers through setting up Session Replay and Heatmaps for their platform and analytics stack. It covers SDK selection, code snippets, privacy/masking configuration, data deletion, validation checklists, and debugging tips — all tailored to the user's specific combination of platform (Web, iOS, Android, React Native) and analytics source (Amplitude SDK, Segment, GTM, third-party, etc.).

Live at **[jnthns.github.io/session-replay-guide](https://jnthns.github.io/session-replay-guide/)**

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router (client-side routing, deployed to GitHub Pages)
- Amplitude Browser SDK (analytics + Session Replay)

## Local development

```bash
npm install
npm run dev
```

Create a `.env` file with your Amplitude API key if you want analytics locally:

```
VITE_AMPLITUDE_API_KEY=your-key
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages. The Amplitude API key is passed as the `VITE_AMPLITUDE_API_KEY` repository secret.
