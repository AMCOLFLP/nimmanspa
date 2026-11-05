<?php
declare(strict_types=1);
require __DIR__ . '/../../lib/bootstrap.php';
require __DIR__ . '/../../lib/admin.php';

require_method('POST');
start_session();
$actor = require_admin();
require_csrf();
$body = read_json_body();
$id = student_id($body['id'] ?? null);
$pdo = get_pdo();
$password = temporary_password();
$pdo->beginTransaction();
$student = student_row($pdo, $id, true);
$pdo->prepare('UPDATE users SET password_hash = ?, must_change_password = 1, session_version = session_version + 1 WHERE id = ? AND is_admin = 0')
    ->execute([password_hash($password, PASSWORD_DEFAULT), $id]);
$pdo->prepare('DELETE FROM login_attempts WHERE email = ?')->execute([$student['email']]);
admin_audit($pdo, $actor, $id, 'password_reset');
$pdo->commit();
json_response(['temporary_password' => $password, 'must_change_password' => true]);
