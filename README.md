# johangarcia.dev — Portfolio

Personal portfolio of **Johan Fernando Garcia Casas**, Integration Engineer — terminal/hacker-OS themed, built with Next.js using AI-assisted development with [Claude Code](https://claude.ai/claude-code).

**Live:** [johangarcia.dev](https://johangarcia.dev)

## Features

- Terminal-style UI: typewriter code editor hero, `git log` career timeline, JSON contact card
- Interactive 3D skills constellation (Three.js / react-three-fiber)
- Contact form with Resend email delivery, protected by Cloudflare Turnstile, honeypot, server-side validation, and rate limiting
- SEO: OpenGraph image generation, sitemap, robots, JSON-LD structured data
- Live sub-projects served via Vercel rewrites: [DFDL Parser](https://johangarcia.dev/projects/dfdl-parser), [COBOL Copybook Mapper](https://johangarcia.dev/projects/cobol-mapper), [Docker Compose Gen](https://johangarcia.dev/projects/docker-compose-gen)

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS 4 · Three.js · Resend · Vercel

## Development

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for the contact form |
| `CONTACT_FROM_EMAIL` | No | Verified sender, e.g. `Portfolio Contact <contact@johangarcia.dev>`. Defaults to Resend's onboarding sender |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | No | Cloudflare Turnstile site key (widget hidden if unset) |
| `TURNSTILE_SECRET_KEY` | No | Cloudflare Turnstile secret (verification skipped if unset) |

## Deploy

Deployed on [Vercel](https://vercel.com). Set the environment variables above in the Vercel project settings.
