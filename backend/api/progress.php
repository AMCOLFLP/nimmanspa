<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';

start_session();
$userId = require_login();
$pdo = get_pdo();

function valid_course(string $course): bool
{
    // Matches Courses.REGISTRY ids in js/courses.js (spa, cruise). Kept as a
    // format check rather than a hardcoded list so a future course id just
    // works; the real safety guarantee is the prepared statement below.
    return (bool) preg_match('/^[a-z0-9_-]{1,30}$/', $course);
}

$method = $_SERVER['REQUEST_METHOD'] ?? '';

if ($method === 'GET') {
    $course = (string) ($_GET['course'] ?? '');
    if (!valid_course($course)) {
        json_error('invalid', 'Unknown course.');
    }
    $stmt = $pdo->prepare('SELECT data FROM progress WHERE user_id = ? AND course_id = ?');
    $stmt->execute([$userId, $course]);
    $row = $stmt->fetch();
    json_response(['data' => $row ? json_decode($row['data'], true) : null]);
}

if ($method === 'POST') {
    $body   = read_json_body();
    $course = (string) ($body['course'] ?? '');
    $data   = $body['data'] ?? null;

    if (!valid_course($course)) {
        json_error('invalid', 'Unknown course.');
    }
    if (!is_array($data)) {
        json_error('invalid', 'Malformed progress data.');
    }
    $encoded = json_encode($data);
    if ($encoded === false || strlen($encoded) > 500000) {
        json_error('invalid', 'Progress data is too large to save.');
    }

    $stmt = $pdo->prepare(
        'INSERT INTO progress (user_id, course_id, data) VALUES (?, ?, CAST(? AS JSON))
         ON DUPLICATE KEY UPDATE data = VALUES(data)'
    );
    $stmt->execute([$userId, $course, $encoded]);
    json_response([]);
}

json_error('method_not_allowed', 'Method not allowed.', 405);
