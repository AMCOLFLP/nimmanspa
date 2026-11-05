<?php
declare(strict_types=1);

// Server operator only: never usable as an HTTP endpoint and no default user.
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
if ($argc !== 2 || !filter_var($argv[1], FILTER_VALIDATE_EMAIL)) {
    fwrite(STDERR, "Usage: php backend/tools/promote-admin.php existing-account@example.com\n");
    exit(1);
}
require __DIR__ . '/../lib/bootstrap.php';
require __DIR__ . '/../lib/admin.php';
$pdo = get_pdo();
$pdo->beginTransaction();
$stmt = $pdo->prepare('SELECT id, is_admin, is_active FROM users WHERE email = ? FOR UPDATE');
$stmt->execute([trim($argv[1])]);
$user = $stmt->fetch();
if (!$user || !(bool) $user['is_active']) {
    $pdo->rollBack();
    fwrite(STDERR, "No active account found. Register the intended administrator first.\n");
    exit(1);
}
if ((bool) $user['is_admin']) {
    $pdo->rollBack();
    fwrite(STDOUT, "That account already has administrator access.\n");
    exit(0);
}
$pdo->prepare('UPDATE users SET is_admin = 1, session_version = session_version + 1 WHERE id = ?')->execute([$user['id']]);
admin_audit($pdo, null, (int) $user['id'], 'admin_promoted', ['source' => 'operator_cli']);
$pdo->commit();
fwrite(STDOUT, "Administrator access enabled for account #" . (int) $user['id'] . ". Sign in again to use the dashboard.\n");
