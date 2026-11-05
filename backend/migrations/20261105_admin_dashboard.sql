-- Administrator access is independent of the learner's profession (role).
-- Back up first; run before deploying the admin API/frontend.
-- MySQL 5.7 / MariaDB compatible and safe to rerun. Existing accounts and
-- course windows/progress are retained. Everyone starts without admin access.
-- Existing browser sessions must sign in again after this migration.

SET @ddl = IF((SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'users' AND column_name = 'is_admin') = 0,
  'ALTER TABLE users ADD COLUMN is_admin TINYINT(1) NOT NULL DEFAULT 0', 'SELECT 1');
PREPARE admin_migration FROM @ddl;
EXECUTE admin_migration;
DEALLOCATE PREPARE admin_migration;

SET @ddl = IF((SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'users' AND column_name = 'is_active') = 0,
  'ALTER TABLE users ADD COLUMN is_active TINYINT(1) NOT NULL DEFAULT 1', 'SELECT 1');
PREPARE admin_migration FROM @ddl;
EXECUTE admin_migration;
DEALLOCATE PREPARE admin_migration;

SET @ddl = IF((SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'users' AND column_name = 'must_change_password') = 0,
  'ALTER TABLE users ADD COLUMN must_change_password TINYINT(1) NOT NULL DEFAULT 0', 'SELECT 1');
PREPARE admin_migration FROM @ddl;
EXECUTE admin_migration;
DEALLOCATE PREPARE admin_migration;

SET @ddl = IF((SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'users' AND column_name = 'session_version') = 0,
  'ALTER TABLE users ADD COLUMN session_version INT UNSIGNED NOT NULL DEFAULT 1', 'SELECT 1');
PREPARE admin_migration FROM @ddl;
EXECUTE admin_migration;
DEALLOCATE PREPARE admin_migration;

SET @ddl = IF((SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'users' AND column_name = 'last_login_at') = 0,
  'ALTER TABLE users ADD COLUMN last_login_at DATETIME NULL', 'SELECT 1');
PREPARE admin_migration FROM @ddl;
EXECUTE admin_migration;
DEALLOCATE PREPARE admin_migration;

CREATE TABLE IF NOT EXISTS admin_audit_log (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  actor_user_id INT UNSIGNED NULL,
  target_user_id INT UNSIGNED NULL,
  action VARCHAR(40) NOT NULL,
  metadata JSON NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_audit_created (created_at),
  CONSTRAINT fk_audit_actor FOREIGN KEY (actor_user_id) REFERENCES users(id) ON DELETE SET NULL,
  CONSTRAINT fk_audit_target FOREIGN KEY (target_user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
