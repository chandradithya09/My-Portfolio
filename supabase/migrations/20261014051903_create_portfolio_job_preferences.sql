/*
# Create public portfolio job preferences

1. New Tables
- `portfolio_job_preferences`
- `id` (text, primary key) identifies the single portfolio profile.
- `selected_skills` (text[], not null) stores the skills selected for matching.
- `next_review_at` (timestamptz, not null) stores the next 48-hour review time.
- `updated_at` (timestamptz, not null) stores the last preference update time.

2. Security
- Row level security is enabled.
- The portfolio has no sign-in flow and is intentionally a single public profile, so anon and authenticated visitors can read and update this one preference record.
- Four separate CRUD policies are created for the table.

3. Important Notes
- This table stores matching preferences only; it does not store passwords, application credentials, or private applicant data.
- The website will not submit external job applications without the visitor reviewing and approving each opening.
*/

CREATE TABLE IF NOT EXISTS portfolio_job_preferences (
  id text PRIMARY KEY,
  selected_skills text[] NOT NULL DEFAULT ARRAY['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  next_review_at timestamptz NOT NULL DEFAULT (now() + interval '48 hours'),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE portfolio_job_preferences ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read job preferences" ON portfolio_job_preferences;
CREATE POLICY "Public can read job preferences"
ON portfolio_job_preferences FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "Public can create job preferences" ON portfolio_job_preferences;
CREATE POLICY "Public can create job preferences"
ON portfolio_job_preferences FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update job preferences" ON portfolio_job_preferences;
CREATE POLICY "Public can update job preferences"
ON portfolio_job_preferences FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Public can delete job preferences" ON portfolio_job_preferences;
CREATE POLICY "Public can delete job preferences"
ON portfolio_job_preferences FOR DELETE
TO anon, authenticated
USING (true);

INSERT INTO portfolio_job_preferences (id)
VALUES ('default')
ON CONFLICT (id) DO NOTHING;