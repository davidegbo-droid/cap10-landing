# Database Schema Outline (Drizzle + MySQL)

## Core Entities

### `households`
- `id` (pk)
- `name`
- `created_at`, `updated_at`

### `users`
- `id` (pk)
- `household_id` (fk → households)
- `email` (unique)
- `password_hash`
- `first_name`, `last_name`
- `role` (`parent`, `admin`)
- `created_at`, `updated_at`, `last_login_at`

### `players`
- `id` (pk)
- `household_id` (fk)
- `created_by_user_id` (fk)
- `name`
- `graduation_year` (indexed)
- `gender` (`mens`, `womens` track indicator)
- `primary_position`
- `secondary_position`
- `gpa`
- `academic_interests` (json)
- `intended_major`
- `location_city`, `location_state`
- `target_division_level`
- `highlight_video_url`
- `transcript_url`
- `notes` (text)
- `recruiting_goals` (text)
- `created_at`, `updated_at`

### `schools`
- `id` (pk)
- `name` (indexed)
- `division_level` (`ncaa_d1`,`ncaa_d2`,`ncaa_d3`,`naia`,`juco`) (indexed)
- `state` (indexed)
- `website_url`
- `athletics_url`
- `created_at`, `updated_at`

### `school_program_links`
- `id` (pk)
- `school_id` (fk, indexed)
- `program_gender` (`mens`,`womens`) (composite index with `school_id`)
- `program_homepage_url`
- `official_roster_url`
- `staff_directory_url`
- `last_verified_at`
- `created_at`, `updated_at`

> Note: No coach names/emails/rosters are stored internally. Only stable links to official sources.

### `player_school_targets`
- `id` (pk)
- `player_id` (fk, indexed)
- `school_id` (fk, indexed)
- `program_gender` (`mens`,`womens`)
- `pipeline_stage` (`interested`,`contacted`,`responded`,`camp_attended`,`visit_scheduled`,`offer`,`committed`,`not_interested`) (indexed)
- `priority_rank`
- `notes`
- `created_at`, `updated_at`
- unique index on (`player_id`,`school_id`,`program_gender`)

### `communications`
- `id` (pk)
- `player_school_target_id` (fk, indexed)
- `communication_date` (indexed)
- `communication_type` (`email`,`call`,`dm`,`in_person`,`other`)
- `initiated_by` (`parent`,`coach`,`athlete`,`other`)
- `outcome` (`no_response`,`coach_replied`,`call_scheduled`,`not_interested`,`other`)
- `summary`
- `follow_up_date` (indexed)
- `created_at`, `updated_at`

### `reminders`
- `id` (pk)
- `household_id` (fk, indexed)
- `player_id` (nullable fk, indexed)
- `player_school_target_id` (nullable fk)
- `title`
- `description`
- `due_at` (indexed)
- `status` (`open`,`done`,`snoozed`) (indexed)
- `created_at`, `updated_at`

### `message_templates`
- `id` (pk)
- `scenario` (`initial_intro`,`no_response_follow_up`,`after_camp`,`after_showcase`,`after_call`,`after_visit`,`commitment_update`) (indexed)
- `subject_template`
- `body_template`
- `is_system_default`
- `created_by_user_id` (nullable fk)
- `created_at`, `updated_at`

### `template_drafts`
- `id` (pk)
- `user_id` (fk)
- `player_school_target_id` (fk)
- `scenario`
- `subject`
- `body`
- `ai_assisted` (bool)
- `reviewed_by_parent` (bool)
- `created_at`, `updated_at`

### `ncaa_calendar_events`
- `id` (pk)
- `sport` (`soccer`)
- `division_level` (`ncaa_d1`,`ncaa_d2`,`ncaa_d3`,`naia`,`juco`)
- `program_gender` (`mens`,`womens`,`both`)
- `event_type` (`contact_period`,`evaluation_period`,`dead_period`,`quiet_period`,`official_visit_window`,`signing_date`)
- `title`
- `description`
- `start_date` (indexed)
- `end_date` (indexed)
- `source_url`
- `created_at`, `updated_at`

### `education_topics`
- `id` (pk)
- `slug` (unique)
- `title`
- `plain_language_summary`
- `content_markdown`
- `created_at`, `updated_at`

## Indexing Notes
- Heaviest query paths:
  - dashboard reminders: (`household_id`, `status`, `due_at`)
  - school search: (`division_level`, `state`, `name`)
  - communication follow-up sweep: (`follow_up_date`, `outcome`)
  - pipeline views: (`player_id`, `pipeline_stage`)
- Add cursor-friendly indexes for pagination (`id`, `created_at`) on list endpoints.
