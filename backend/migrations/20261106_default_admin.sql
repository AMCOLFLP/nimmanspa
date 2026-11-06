-- Run after 20261105_admin_dashboard.sql for an existing installation.
-- Reserve ADMIN in the existing login identifier column. Public registration
-- still requires an email address, so it cannot claim this username.
-- Initial password: admin123 (bcrypt only); replace it at the first sign-in.
-- Reapplying this migration never changes an existing account's credentials,
-- privileges, session version, or active status.
INSERT INTO users (name, email, password_hash, role, lang, is_admin, is_active, must_change_password)
SELECT 'Administrator', 'ADMIN', '$2y$10$XVrk5mntplgR/hNlYmdU9erRxW3LJOk4yBElffgTKsd584vUaOB.q', 'manager', 'en', 1, 1, 1
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'ADMIN');
