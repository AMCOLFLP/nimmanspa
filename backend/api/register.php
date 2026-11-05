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
if (strlen($password) > 72) {
    json_error('password_long', 'Password must be no more than 72 UTF-8 bytes.');
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

$user = [
    'id' => (int) $pdo->lastInsertId(),
    'name'  => $name,
    'email' => $email,
    'role'  => $role,
    'lang'  => $lang,
    'is_admin' => false, 'is_active' => true, 'must_change_password' => false,
    'session_version' => 1,
];
establish_session($user);
json_response(['user' => public_user($user), 'csrf_token' => csrf_token()]);
