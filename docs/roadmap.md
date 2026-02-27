# Capital 10 Build Roadmap (MVP → Production)

## Product Goal
Capital 10 is a **recruiting command center** for stressed soccer families. The platform keeps workflow calm and focused by prioritizing: player profile completeness, school targeting, communication follow-ups, and NCAA date visibility.

## Engineering Stack
- **Frontend:** React + TypeScript + Vite, React Router, TanStack Query, calm UI system.
- **Backend:** Node.js + Express + tRPC.
- **Database:** MySQL + Drizzle ORM + Drizzle Kit migrations.
- **Auth:** Secure cookie-backed session auth with env-based local/production settings.
- **Infra:** Container-ready services, migration pipeline, centralized logging/error handling.

## Guiding Principles
1. **Simple-first UX:** Today Dashboard is primary; advanced tools remain secondary.
2. **Trustworthy data:** Do not store coach contacts or scraped rosters. Link users to official school pages.
3. **Family model first:** One parent account can manage multiple athletes.
4. **Structured workflows:** Templates and suggested next actions, always editable by parent.
5. **Scalable backend:** Pagination, indexing, query boundaries, typed contracts.

---

## Milestone Plan

### Milestone 0: Foundation (Week 1)
- Initialize monorepo layout (`client/`, `server/`, `shared/`).
- Set up TypeScript project references and lint/format pipeline.
- Add environment validation and `.env.example`.
- Configure MySQL + Drizzle migration framework.
- Set up Express app shell, tRPC router composition, global error middleware.

**Exit Criteria**
- Health endpoint online.
- DB connection + first migration succeeds.
- CI can run typecheck/lint/tests.

### Milestone 1: Authentication + Family Accounts (Week 1–2)
- Parent signup/login/logout and secure session cookie handling.
- Household model and parent-to-household membership.
- Multi-player management under one household.
- Basic account settings page.

**Exit Criteria**
- Parent can create account, login, create/edit multiple player profiles.

### Milestone 2: Player Profiles + Onboarding (Week 2)
- Guided onboarding:
  1) complete player profile
  2) choose men’s or women’s recruiting path
  3) add first 10 schools
  4) log first communication
  5) set initial reminders
- Profile fields: graduation year, positions, GPA, interests, major, links, goals.
- Reminder creation with due dates.

**Exit Criteria**
- New parent can complete onboarding and land on Today Dashboard with starter data.

### Milestone 3: Schools Directory + Official Program Links (Week 2–3)
- Schools catalog with stable institutional records.
- Program links stored separately for men’s and women’s soccer:
  - official homepage
  - roster page link
  - staff directory link
  - last verified date
- School search/filter/pagination.

**Exit Criteria**
- Parent can browse/search schools and open one-click official links.

### Milestone 4: Recruiting Pipeline + Communications Log (Week 3)
- Save schools to each player’s recruiting list.
- Track stage per player/program:
  `interested`, `contacted`, `responded`, `camp_attended`, `visit_scheduled`, `offer`, `committed`, `not_interested`.
- Communication log fields:
  date, type, initiated_by, outcome, program, follow_up_date.

**Exit Criteria**
- Family can track school stage and outreach history for every player.

### Milestone 5: Suggestions + Template Workflows (Week 4)
- Rule-based suggestions:
  - no-response follow-up after configurable days
  - post-camp thank-you suggestion
- Editable messaging templates by scenario:
  - intro, follow-up, after camp, after showcase, after call, after visit, commitment update
- Optional AI-assisted fill-in (profile + school context), human review required.

**Exit Criteria**
- Dashboard surfaces follow-up suggestions and opens editable template drafts.

### Milestone 6: NCAA Calendar + Education Layer (Week 4)
- NCAA recruiting date model by division + sport:
  contact/evaluation/dead/quiet periods, visit windows, signing dates.
- Education cards with plain-language explanations.
- Dashboard alerts based on current date and player track.

**Exit Criteria**
- Users see current-period alerts and upcoming key dates.

### Milestone 7: Matching + Analytics Lite (Week 5)
- Matching filters: division preference, radius, academics, basic roster fit indicators.
- Ranked recommendations with explainable reasons.
- Keep advanced analytics secondary in navigation hierarchy.

**Exit Criteria**
- Parent can generate a filtered recommendation set and save schools.

### Milestone 8: Launch Hardening (Week 5–6)
- Performance tuning (indexes, query plans, pagination checks).
- Security pass: cookies, CORS, rate limits, audit logs.
- Monitoring + alerting + backup/recovery docs.
- QA/UAT with real parent scenarios.

**Exit Criteria**
- MVP production launch checklist complete.

---

## Prioritized MVP Launch Order
1. Auth + household + multi-player profiles
2. Schools directory + official men/women program links
3. Recruiting list pipeline and communication logging
4. Reminder engine + Today Dashboard surfacing due items
5. NCAA calendar visibility + simple education cards
6. Rule-based suggestions and editable templates
7. Matching v1
8. Advanced analytics/template libraries (post-MVP)

## Immediate Next Sprint (Fastest Route to Value)
- Build Milestones 0–4 fully.
- Include slim dashboard with reminders + communication follow-up prompts.
- Defer matching sophistication and advanced analytics.
