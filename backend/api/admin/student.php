<?php
declare(strict_types=1);
require __DIR__ . '/../../lib/bootstrap.php';
require __DIR__ . '/../../lib/admin.php';

start_session();
$actor = require_admin();
$pdo = get_pdo();
$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method === 'POST') {
    require_csrf();
    $body = read_json_body();
    $id = student_id($body['id'] ?? null);
    $pdo->beginTransaction();
    $existing = student_row($pdo, $id, true);
    $fields = student_fields($body, $existing);
    $changed = [];
    foreach ($fields as $key => $value) if ((string) $value !== (string) $existing[$key]) $changed[] = $key;
    try {
        if ($changed) {
            $pdo->prepare('UPDATE users SET name = ?, email = ?, role = ?, lang = ?, is_active = ?, session_version = session_version + 1 WHERE id = ? AND is_admin = 0')
                ->execute([$fields['name'], $fields['email'], $fields['role'], $fields['lang'], (int) $fields['is_active'], $id]);
            admin_audit($pdo, $actor, $id, 'student_updated', ['fields' => $changed]);
        }
        $pdo->commit();
    } catch (PDOException $e) {
        if ($pdo->inTransaction()) $pdo->rollBack();
        if ($e->getCode() === '23000') json_error('email_used', 'An account with that email already exists.', 409);
        throw $e;
    }
} else {
    require_method('GET');
    $id = student_id($_GET['id'] ?? null);
}
json_response(['student' => students_payload($pdo, [student_row($pdo, $id)], learning_access_now($pdo), true)[0]]);
