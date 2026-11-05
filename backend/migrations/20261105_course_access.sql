-- Apply before deploying the new API and frontend on an existing installation.
-- Additive and safe to rerun. Existing users and saved progress are preserved.
-- No historical account date is used to expire a learner retroactively:
-- existing users receive their 30 days when they explicitly start each course.

CREATE TABLE IF NOT EXISTS course_access (
  user_id    INT UNSIGNED NOT NULL,
  course_id  VARCHAR(30)  NOT NULL,
  started_at DATETIME     NOT NULL,
  expires_at DATETIME     NOT NULL,
  PRIMARY KEY (user_id, course_id),
  CONSTRAINT fk_course_access_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
