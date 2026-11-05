<?php
declare(strict_types=1);
require_once __DIR__ . '/course_access.php';

function admin_audit(PDO $pdo, ?int $actor, int $target, string $action, array $metadata = []): void
{
    $pdo->prepare('INSERT INTO admin_audit_log (actor_user_id, target_user_id, action, metadata) VALUES (?, ?, ?, ?)')
        ->execute([$actor, $target, $action, json_encode($metadata ?: (object) [])]);
}

function temporary_password(): string
{
    return bin2hex(random_bytes(12));
}

function student_id($value): int
{
    if (filter_var($value, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]) === false) {
        json_error('invalid', 'Choose a valid student account.');
    }
    return (int) $value;
}

function student_row(PDO $pdo, int $id, bool $lock = false): array
{
    $stmt = $pdo->prepare('SELECT id, name, email, role, lang, is_admin, is_active, must_change_password, created_at, last_login_at FROM users WHERE id = ? AND is_admin = 0' . ($lock ? ' FOR UPDATE' : ''));
    $stmt->execute([$id]);
    $row = $stmt->fetch();
    if (!$row) {
        if ($pdo->inTransaction()) $pdo->rollBack();
        json_error('not_found', 'Student account not found.', 404);
    }
    return $row;
}

function student_fields(array $body, ?array $existing = null): array
{
    // Keep profession separate from administrator privilege. Neither is_admin
    // nor course access, password hashes, or progress can be mass-assigned.
    foreach (['is_admin', 'session_version', 'must_change_password', 'password', 'password_hash'] as $field) {
        if (array_key_exists($field, $body)) json_error('invalid', 'That account field cannot be changed here.');
    }
    $name = trim((string) ($body['name'] ?? $existing['name'] ?? ''));
    $email = trim((string) ($body['email'] ?? $existing['email'] ?? ''));
    $role = (string) ($body['role'] ?? $existing['role'] ?? 'other');
    $lang = (string) ($body['lang'] ?? $existing['lang'] ?? 'en');
    $active = $body['is_active'] ?? ($existing ? (bool) $existing['is_active'] : true);
    if ($name === '' || mb_strlen($name) > 120) json_error('invalid', 'Enter a name of 1 to 120 characters.');
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) json_error('email_format', 'Enter a valid email address.');
    if (!in_array($role, ['therapist', 'reception', 'manager', 'other'], true)) json_error('invalid', 'Choose a valid profession.');
    if (!in_array($lang, ['en', 'th'], true)) json_error('invalid', 'Choose English or Thai.');
    if (!is_bool($active)) json_error('invalid', 'Account status must be true or false.');
    return ['name' => $name, 'email' => $email, 'role' => $role, 'lang' => $lang, 'is_active' => $active];
}

function utc_date(?string $value): ?string
{
    return $value ? (new DateTimeImmutable($value, new DateTimeZone('UTC')))->format('Y-m-d\TH:i:s\Z') : null;
}

/** Browser-recorded timestamps are descriptive only; access uses server time. */
function client_date($value): ?string
{
    if (!is_numeric($value) || !is_finite((float) $value) || (float) $value < 946684800000 || (float) $value > 4102444800000) return null;
    return gmdate('Y-m-d\TH:i:s\Z', (int) floor((float) $value / 1000));
}

function curriculum(): array
{
    static $data = null;
    if ($data === null) {
        $raw = file_get_contents(__DIR__ . '/../../content/curriculum.json');
        $data = json_decode($raw ?: '', true);
        if (!is_array($data) || !isset($data['modules'], $data['entries'], $data['mappings'])) {
            json_error('server', 'Course information is unavailable. Contact the site administrator.', 500);
        }
    }
    return $data;
}

function array_field(array $data, string $key): array
{
    return isset($data[$key]) && is_array($data[$key]) ? $data[$key] : [];
}

function valid_score($value): bool
{
    return (is_int($value) || is_float($value)) && is_finite((float) $value) && $value >= 0 && $value <= 100;
}

function recent_attempts(array $rows, bool $assessment): array
{
    $valid = [];
    foreach (array_slice($rows, -50) as $row) {
        if (!is_array($row) || !isset($row['score'], $row['total']) || !is_numeric($row['score']) || !is_numeric($row['total'])) continue;
        $score = (float) $row['score']; $total = (float) $row['total'];
        if (!is_finite($score) || !is_finite($total) || $total <= 0 || $score < 0 || $score > $total) continue;
        $item = [
            'at' => client_date($row['at'] ?? null), 'score' => $score, 'total' => $total,
            'percent' => (int) round(100 * $score / $total),
        ];
        $label = $assessment ? 'type' : 'activity';
        $item[$label] = mb_substr(is_string($row[$label] ?? null) ? $row[$label] : 'practice', 0, 80);
        $support = $assessment ? 'supported' : 'assisted';
        $item[$support] = is_numeric($row[$support] ?? null) ? min($total, max(0, (int) $row[$support])) : 0;
        $valid[] = $item;
    }
    return array_reverse($valid);
}

function course_progress(string $course, array $progress, ?array $access, DateTimeImmutable $now, bool $detail): array
{
    $catalogue = curriculum();
    $data = isset($progress['data']) ? json_decode($progress['data'], true) : [];
    if (!is_array($data)) $data = [];
    $studied = array_field($data, 'learningModules');
    $chapters = [];
    foreach ($catalogue['modules'][$course] as $module) {
        $value = $studied[$module['id']] ?? null;
        $done = (is_numeric($value) && (float) $value > 0) || $value === true;
        $chapters[] = ['id' => $module['id'], 'title' => $module['title'], 'title_th' => $module['th'], 'studied' => $done, 'studied_at' => $done ? client_date($value) : null];
    }
    $completed = count(array_filter($chapters, function ($row) { return $row['studied']; }));
    $canonicalItems = []; $canonicalWords = [];
    foreach ($catalogue['mappings'][$course] as $mapping) {
        $entry = $catalogue['entries'][$mapping['id']] ?? null;
        if (!$entry) continue;
        $canonicalItems[$entry['id']] = true;
        if ($entry['kind'] === 'word') $canonicalWords[mb_strtolower($entry['en'])] = true;
    }
    $known = [];
    foreach (array_field($data, 'knownWords') as $word) {
        if (!is_string($word)) continue;
        $key = mb_strtolower($word);
        if (isset($canonicalWords[$key])) $known[$key] = true;
    }
    $reviewed = 0;
    foreach (array_field($data, 'learningItems') as $id => $value) {
        if (isset($canonicalItems[$id]) && ((is_numeric($value) && (float) $value > 0) || $value === true)) $reviewed++;
    }
    $scores = [];
    foreach (array_field($data, 'quizBest') as $activity => $score) {
        if (valid_score($score)) $scores[] = ['activity' => mb_substr((string) $activity, 0, 80), 'score' => round($score, 1)];
    }
    $practice = recent_attempts(array_field($data, 'practiceSessions'), false);
    $assessments = recent_attempts(array_field($data, 'assessmentAttempts'), true);
    $result = [
        'course_id' => $course, 'title' => $catalogue['courses'][$course]['title'], 'title_th' => $catalogue['courses'][$course]['th'],
        'access' => learning_access_status($course, $access, $now),
        'chapters_studied' => $completed, 'chapters_total' => count($chapters),
        'progress_percent' => (int) round(100 * $completed / max(1, count($chapters))),
        'words_known' => count($known), 'items_reviewed' => $reviewed,
        'quiz_average' => $scores ? (int) round(array_sum(array_column($scores, 'score')) / count($scores)) : null,
        'quiz_activities' => count($scores), 'practice_sessions' => count($practice), 'assessment_attempts' => count($assessments),
        'last_activity_at' => utc_date($progress['updated_at'] ?? null),
    ];
    if ($detail) {
        $result += ['chapters' => $chapters, 'quiz_scores' => $scores, 'recent_practice' => array_slice($practice, 0, 10), 'recent_assessments' => array_slice($assessments, 0, 10)];
    }
    return $result;
}

/** Fetch course records in batches, so one page never makes per-student queries. */
function students_payload(PDO $pdo, array $rows, DateTimeImmutable $now, bool $detail = false): array
{
    if (!$rows) return [];
    $ids = array_column($rows, 'id');
    $placeholders = implode(',', array_fill(0, count($ids), '?'));
    $stmt = $pdo->prepare('SELECT user_id, course_id, data, updated_at FROM progress WHERE user_id IN (' . $placeholders . ')');
    $stmt->execute($ids); $progress = [];
    foreach ($stmt->fetchAll() as $row) $progress[$row['user_id']][$row['course_id']] = $row;
    $stmt = $pdo->prepare('SELECT user_id, course_id, started_at, expires_at FROM course_access WHERE user_id IN (' . $placeholders . ')');
    $stmt->execute($ids); $access = [];
    foreach ($stmt->fetchAll() as $row) $access[$row['user_id']][$row['course_id']] = $row;
    $result = [];
    foreach ($rows as $row) {
        $student = public_user($row) + ['created_at' => utc_date($row['created_at']), 'last_login_at' => utc_date($row['last_login_at']), 'last_activity_at' => null, 'courses' => []];
        foreach (LEARNING_COURSES as $course) {
            $coursePayload = course_progress($course, $progress[$row['id']][$course] ?? [], $access[$row['id']][$course] ?? null, $now, $detail);
            $student['courses'][] = $coursePayload;
            if ($coursePayload['last_activity_at'] && (!$student['last_activity_at'] || strcmp($coursePayload['last_activity_at'], $student['last_activity_at']) > 0)) $student['last_activity_at'] = $coursePayload['last_activity_at'];
        }
        $result[] = $student;
    }
    return $result;
}
