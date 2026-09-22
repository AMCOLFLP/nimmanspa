<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';

require_method('POST');
start_session();

$body = read_json_body();
$name     = trim((string) ($body['name'] ?? ''));
$email    = trim((string) ($body['email'] ?? ''));
$password = (string) ($body['password'] ?? '');
$role     = (string) ($body['role'] ?? 'therapist');
$lang     = (string) ($body['lang'] ?? 'en');

if ($name === '' || $email === '' || $password === '') {
    json_error('required', 'Please fill in every field.');
}
if (mb_strlen($name) > 120) {
    json_error('invalid', 'That name is too long.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) {
    json_error('email_format', 'Enter a valid email address.');
}
if (mb_strlen($password) < 6) {
    json_error('password_short', 'Password must be at least 6 characters.');
}
if (!in_array($role, ['therapist', 'reception', 'manager', 'other'], true)) {
    $role = 'other';
}
if (!in_array($lang, ['en', 'th'], true)) {
    $lang = 'en';
}

$pdo = get_pdo();
$hash = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare(
        'INSERT INTO users (name, email, password_hash, role, lang) VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$name, $email, $hash, $role, $lang]);
} catch (PDOException $e) {
    // 23000 = integrity constraint violation — here, the unique email index.
    if ($e->getCode() === '23000') {
        json_error('email_used', 'An account with that email already exists.');
    }
    json_error('server', 'Could not create the account.', 500);
}

$_SESSION['user_id'] = (int) $pdo->lastInsertId();
session_regenerate_id(true);

json_response(['user' => [
    'name'  => $name,
    'email' => $email,
    'role'  => $role,
    'lang'  => $lang,
]]);
