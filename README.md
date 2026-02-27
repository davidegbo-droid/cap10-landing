# Capital 10

Capital 10 is a recruiting command center for soccer families pursuing college opportunities in men’s and women’s programs.

## Monorepo Structure
- `client/` React + TypeScript frontend (calm dashboard-first UX)
- `server/` Express + tRPC + Drizzle backend
- `shared/` shared types/schema contracts
- `docs/` architecture, API, and roadmap planning docs

## MVP Scope
1. Multi-player family accounts
2. Player profiles and onboarding
3. School saving with official program links (men/women)
4. Recruiting pipeline stages
5. Communications log + reminders
6. NCAA calendar visibility + plain-language education

Advanced analytics and deeper automation are intentionally post-MVP.

## Quick Start Plan
1. Scaffold package workspaces and TypeScript configs.
2. Start MySQL locally and configure `.env` from `.env.example`.
3. Build Drizzle schema/migrations from `docs/schema.md`.
4. Implement tRPC routers from `docs/api.md`.
5. Build dashboard and onboarding flow from `docs/roadmap.md`.
