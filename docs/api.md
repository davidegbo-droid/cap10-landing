# API Definitions (tRPC Router Map)

## Router Topology
- `authRouter`
- `householdRouter`
- `playersRouter`
- `schoolsRouter`
- `pipelineRouter`
- `communicationsRouter`
- `remindersRouter`
- `templatesRouter`
- `calendarRouter`
- `dashboardRouter`
- `matchingRouter`
- `educationRouter`

## Core Procedures

### `authRouter`
- `registerParent(input: { email, password, firstName, lastName, householdName })`
- `login(input: { email, password })`
- `logout()`
- `me()`

### `householdRouter`
- `getCurrentHousehold()`
- `updateHousehold(input: { name })`
- `listMembers()`

### `playersRouter`
- `createPlayer(input: PlayerCreateInput)`
- `updatePlayer(input: PlayerUpdateInput)`
- `getPlayerById(input: { playerId })`
- `listPlayers(input: { cursor?, limit? })`
- `deletePlayer(input: { playerId })`

### `schoolsRouter`
- `searchSchools(input: { q?, divisionLevel?, state?, cursor?, limit? })`
- `getSchoolById(input: { schoolId })`
- `getSchoolProgramLinks(input: { schoolId })`
- `adminUpsertSchool(input: SchoolUpsertInput)`
- `adminUpsertProgramLinks(input: ProgramLinksUpsertInput)`

### `pipelineRouter`
- `saveSchoolTarget(input: { playerId, schoolId, programGender, priorityRank? })`
- `updatePipelineStage(input: { playerSchoolTargetId, pipelineStage })`
- `listPlayerTargets(input: { playerId, stage?, cursor?, limit? })`
- `removeSchoolTarget(input: { playerSchoolTargetId })`

### `communicationsRouter`
- `logCommunication(input: CommunicationCreateInput)`
- `updateCommunication(input: CommunicationUpdateInput)`
- `listCommunications(input: { playerSchoolTargetId, cursor?, limit? })`
- `getFollowUpsDue(input: { householdId?, from?, to? })`

### `remindersRouter`
- `createReminder(input: ReminderCreateInput)`
- `updateReminder(input: ReminderUpdateInput)`
- `completeReminder(input: { reminderId })`
- `listReminders(input: { playerId?, status?, cursor?, limit? })`

### `templatesRouter`
- `listTemplateScenarios()`
- `listTemplates(input: { scenario })`
- `createCustomTemplate(input: TemplateCreateInput)`
- `generateDraftWithAssist(input: { scenario, playerSchoolTargetId, tone?, notes? })`
- `saveDraft(input: DraftSaveInput)`

### `calendarRouter`
- `listCalendarEvents(input: { divisionLevel, programGender, from, to })`
- `getCurrentPeriodAlert(input: { divisionLevel, programGender, date? })`

### `dashboardRouter`
- `getTodayDashboard(input: { playerId? })`
  - returns reminders due, follow-up suggestions, upcoming camps/showcases, NCAA alerts

### `matchingRouter`
- `recommendSchools(input: { playerId, divisionPreference?, radiusMiles?, academicInterests?, major?, cursor?, limit? })`

### `educationRouter`
- `listTopics()`
- `getTopicBySlug(input: { slug })`

## Error Strategy
- Normalize all errors via `AppError` (`code`, `message`, `details`, `requestId`).
- Map validation errors to `BAD_REQUEST`, auth failures to `UNAUTHORIZED`, ownership checks to `FORBIDDEN`.

## Pagination Strategy
- Use cursor pagination for all large list procedures.
- Standard shape:
  - `items: T[]`
  - `nextCursor?: string`
