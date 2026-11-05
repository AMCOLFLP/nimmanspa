<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';

require_method('POST');
start_session();
$userId = require_login(true);
require_csrf();
$body = read_json_body();
$current = (string) ($body['current_password'] ?? '');
$password = (string) ($body['new_password'] ?? '');
if (mb_strlen($password) < 10 || strlen($password) > 72) {
    json_error('password_invalid', 'Use at least 10 characters and no more than 72 UTF-8 bytes.');
}
$pdo = get_pdo();
$window = $pdo->prepare('SELECT COUNT(*) FROM login_attempts WHERE email = ? AND attempted_at > (UTC_TIMESTAMP() - INTERVAL 15 MINUTE)');
$window->execute([session_user()['email']]);
if ((int) $window->fetchColumn() >= 8) {
    json_error('too_many_attempts', 'Too many attempts. Please wait a few minutes and try again.', 429);
}
$pdo->beginTransaction();
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ? FOR UPDATE');
$stmt->execute([$userId]);
$user = $stmt->fetch();
if (!$user || !(bool) $user['is_active'] || (int) $user['session_version'] !== (int) $_SESSION['session_version']) {
    $pdo->rollBack();
    $_SESSION = [];
    json_error('not_authenticated', 'Your session has ended. Please sign in again.', 401);
}
if (!password_verify($current, $user['password_hash'])) {
    $pdo->rollBack();
    $pdo->prepare('INSERT INTO login_attempts (email) VALUES (?)')->execute([$user['email']]);
    json_error('current_password_incorrect', 'The current password is incorrect.', 400);
}
if (password_verify($password, $user['password_hash'])) {
    $pdo->rollBack();
    json_error('password_unchanged', 'Choose a new password different from your current password.');
}
$pdo->prepare('UPDATE users SET password_hash = ?, must_change_password = 0, session_version = session_version + 1 WHERE id = ?')
    ->execute([password_hash($password, PASSWORD_DEFAULT), $userId]);
$pdo->prepare('DELETE FROM login_attempts WHERE email = ?')->execute([$user['email']]);
$pdo->commit();
$user['must_change_password'] = false;
$user['session_version'] = (int) $user['session_version'] + 1;
establish_session($user);
json_response(['user' => public_user($user), 'csrf_token' => csrf_token()]);
