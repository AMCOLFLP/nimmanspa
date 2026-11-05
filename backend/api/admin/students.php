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
    $fields = student_fields(read_json_body());
    $password = temporary_password();
    $pdo->beginTransaction();
    try {
        $pdo->prepare('INSERT INTO users (name, email, password_hash, role, lang, is_active, must_change_password) VALUES (?, ?, ?, ?, ?, ?, 1)')
            ->execute([$fields['name'], $fields['email'], password_hash($password, PASSWORD_DEFAULT), $fields['role'], $fields['lang'], (int) $fields['is_active']]);
        $id = (int) $pdo->lastInsertId();
        admin_audit($pdo, $actor, $id, 'student_created', ['fields' => array_keys($fields)]);
        $pdo->commit();
    } catch (PDOException $e) {
        if ($pdo->inTransaction()) $pdo->rollBack();
        if ($e->getCode() === '23000') json_error('email_used', 'An account with that email already exists.', 409);
        throw $e;
    }
    $student = students_payload($pdo, [student_row($pdo, $id)], learning_access_now($pdo), true)[0];
    json_response(['student' => $student, 'temporary_password' => $password], 201);
}

require_method('GET');
$query = trim((string) ($_GET['q'] ?? ''));
$course = (string) ($_GET['course'] ?? 'all');
$access = (string) ($_GET['access'] ?? 'all');
$account = (string) ($_GET['account'] ?? 'all');
if (mb_strlen($query) > 190 || ($course !== 'all' && !valid_course($course)) || !in_array($access, ['all', 'active', 'expired', 'not_started'], true) || !in_array($account, ['all', 'active', 'inactive'], true)) {
    json_error('invalid', 'Choose valid student filters.');
}
$page = filter_var($_GET['page'] ?? 1, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 1000000]]);
$perPage = filter_var($_GET['per_page'] ?? 25, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 100]]);
if ($page === false || $perPage === false) json_error('invalid', 'Choose a valid page and page size.');
$now = learning_access_now($pdo);
$where = ['u.is_admin = 0']; $params = [];
if ($query !== '') {
    $where[] = "(u.name LIKE ? ESCAPE '!' OR u.email LIKE ? ESCAPE '!')";
    $like = '%' . str_replace(['!', '%', '_'], ['!!', '!%', '!_'], $query) . '%';
    array_push($params, $like, $like);
}
if ($account !== 'all') { $where[] = 'u.is_active = ?'; $params[] = $account === 'active' ? 1 : 0; }
if ($access !== 'all') {
    $courses = $course === 'all' ? LEARNING_COURSES : [$course];
    $conditions = [];
    foreach ($courses as $id) {
        if ($access === 'not_started') {
            $conditions[] = 'NOT EXISTS (SELECT 1 FROM course_access a WHERE a.user_id = u.id AND a.course_id = ?)';
            $params[] = $id;
        } else {
            $conditions[] = 'EXISTS (SELECT 1 FROM course_access a WHERE a.user_id = u.id AND a.course_id = ? AND ' . ($access === 'active' ? 'a.started_at <= ? AND a.expires_at > ?' : 'a.expires_at <= ?') . ')';
            $params[] = $id; $params[] = $now->format('Y-m-d H:i:s');
            if ($access === 'active') $params[] = $now->format('Y-m-d H:i:s');
        }
    }
    $where[] = '(' . implode(' OR ', $conditions) . ')';
} elseif ($course !== 'all') {
    $where[] = 'EXISTS (SELECT 1 FROM course_access a WHERE a.user_id = u.id AND a.course_id = ?)';
    $params[] = $course;
}
$condition = implode(' AND ', $where);
$stmt = $pdo->prepare('SELECT COUNT(*) FROM users u WHERE ' . $condition);
$stmt->execute($params); $total = (int) $stmt->fetchColumn();
$pages = max(1, (int) ceil($total / $perPage)); $page = min($page, $pages);
$stmt = $pdo->prepare('SELECT u.id,u.name,u.email,u.role,u.lang,u.is_admin,u.is_active,u.must_change_password,u.created_at,u.last_login_at FROM users u WHERE ' . $condition . ' ORDER BY u.created_at DESC, u.id DESC LIMIT ' . (int) $perPage . ' OFFSET ' . (int) (($page - 1) * $perPage));
$stmt->execute($params); $rows = $stmt->fetchAll();
$summary = $pdo->query('SELECT COUNT(*) AS total_students, COALESCE(SUM(is_active = 1), 0) AS active_accounts, COALESCE(SUM(is_active = 0), 0) AS inactive_accounts FROM users WHERE is_admin = 0')->fetch();
$stmt = $pdo->prepare("SELECT COALESCE(SUM(a.started_at <= ? AND a.expires_at > ?), 0) AS active_enrollments, COALESCE(SUM(a.expires_at <= ?), 0) AS expired_enrollments FROM course_access a INNER JOIN users u ON u.id = a.user_id WHERE u.is_admin = 0 AND a.course_id IN ('spa', 'cruise', 'salon')");
$clock = $now->format('Y-m-d H:i:s'); $stmt->execute([$clock, $clock, $clock]);
$summary += $stmt->fetch(); $summary = array_map('intval', $summary);
json_response(['students' => students_payload($pdo, $rows, $now), 'pagination' => ['page' => $page, 'per_page' => $perPage, 'total' => $total, 'total_pages' => $pages], 'summary' => $summary, 'server_now' => $now->format('Y-m-d\TH:i:s\Z')]);
