-- =============================================================================
-- NIMMAN English — accounts & progress schema (MySQL / MariaDB)
--
-- Import once when setting up a new environment, e.g.:
--   mysql -u youruser -p yourdatabase < backend/schema.sql
-- =============================================================================

CREATE TABLE IF NOT EXISTS users (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(120)      NOT NULL,
  email         VARCHAR(190)      NOT NULL,
  password_hash VARCHAR(255)      NOT NULL,
  role          VARCHAR(30)       NOT NULL DEFAULT 'other',
  lang          VARCHAR(5)        NOT NULL DEFAULT 'en',
  created_at    DATETIME          NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- One row per (user, course): the whole client-side progress object
-- (known words, quiz bests, streaks, daily state, review schedule, practice
-- history/settings) is stored as one JSON document, mirroring exactly what
-- the browser used to keep in localStorage. This keeps the sync contract
-- simple: the client fetches/replaces the whole blob for the active course.
CREATE TABLE IF NOT EXISTS progress (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id    INT UNSIGNED  NOT NULL,
  course_id  VARCHAR(30)   NOT NULL,
  data       JSON          NOT NULL,
  updated_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_progress_user_course (user_id, course_id),
  CONSTRAINT fk_progress_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: throttles repeated failed logins per email. Rows are cleared on
-- a successful login. Not required for the app to run, but recommended.
CREATE TABLE IF NOT EXISTS login_attempts (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email       VARCHAR(190) NOT NULL,
  attempted_at DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_login_attempts_email_time (email, attempted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
