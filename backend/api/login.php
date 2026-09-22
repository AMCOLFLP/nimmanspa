<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';

require_method('POST');
start_session();

$body     = read_json_body();
$email    = trim((string) ($body['email'] ?? ''));
$password = (string) ($body['password'] ?? '');

if ($email === '' || $password === '') {
    json_error('required', 'Please fill in every field.');
}

$pdo = get_pdo();

// Throttle repeated failed attempts per email, independent of which
// password was tried, so a script can't hammer one account indefinitely.
$window = $pdo->prepare('SELECT COUNT(*) FROM login_attempts WHERE email = ? AND attempted_at > (NOW() - INTERVAL 15 MINUTE)');
$window->execute([$email]);
if ((int) $window->fetchColumn() >= 8) {
    json_error('too_many_attempts', 'Too many attempts. Please wait a few minutes and try again.', 429);
}

$stmt = $pdo->prepare('SELECT id, name, email, password_hash, role, lang FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    $pdo->prepare('INSERT INTO login_attempts (email) VALUES (?)')->execute([$email]);
    // Deliberately the same message whether the email or the password was
    // wrong, so the response never reveals which accounts exist.
    json_error('login_failed', 'Incorrect email or password.', 401);
}

$pdo->prepare('DELETE FROM login_attempts WHERE email = ?')->execute([$email]);

$_SESSION['user_id'] = (int) $user['id'];
session_regenerate_id(true);

json_response(['user' => [
    'name'  => $user['name'],
    'email' => $user['email'],
    'role'  => $user['role'],
    'lang'  => $user['lang'],
]]);
