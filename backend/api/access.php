<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';
require __DIR__ . '/../lib/course_access.php';

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if (!in_array($method, ['GET', 'POST'], true)) {
    json_error('method_not_allowed', 'Method not allowed.', 405);
}

start_session();
$userId = require_login();
$pdo = get_pdo();
$now = learning_access_now($pdo);

if ($method === 'POST') {
    $body = read_json_body();
    $course = (string) ($body['course'] ?? '');
    if (!valid_course($course)) {
        json_error('invalid', 'Unknown course.');
    }
    start_learning_access($pdo, $userId, $course, $now);
}

json_response(learning_access_payload($pdo, $userId, $now));
