<?php
/**
 * Shared bootstrap for every endpoint in backend/api/. Sets up the session,
 * a PDO connection, and small JSON helpers so each endpoint stays short.
 *
 * This app is deployed same-origin (the static front end and this backend
 * share one host), so no CORS headers are sent — the session cookie is
 * enough. If you ever split the front end onto a different origin, you'll
 * need to add explicit CORS headers scoped to that one origin, switch the
 * cookie to SameSite=None; Secure, and send credentials:'include' from the
 * client's fetch calls.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
// Defence in depth for an API that should only ever be fetched by our own
// front-end script, not framed or navigated to directly.
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

function config(): array
{
    static $config = null;
    if ($config === null) {
        $path = __DIR__ . '/../config.php';
        if (!is_file($path)) {
            json_error('server', 'Backend is not configured yet: copy backend/config.example.php to backend/config.php and fill in your database details.', 500);
        }
        $config = require $path;
    }
    return $config;
}

function get_pdo(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $db = config()['db'];
        $dsn = "mysql:host={$db['host']};dbname={$db['name']};charset={$db['charset']}";
        try {
            $pdo = new PDO($dsn, $db['user'], $db['pass'], [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        } catch (PDOException $e) {
            json_error('server', 'Could not connect to the database.', 500);
        }
    }
    return $pdo;
}

function start_session(): void
{
    $cfg = config();
    session_set_cookie_params([
        'lifetime' => 0,
        'path'     => '/',
        'domain'   => '',
        'secure'   => (bool) $cfg['secure_cookies'],
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_name('nimman_session');
    session_start();
}

function json_response(array $data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data + ['ok' => true]);
    exit;
}

/** @param string $code short machine-readable code the client maps to a localized message */
function json_error(string $code, string $message, int $status = 400): void
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $code, 'message' => $message]);
    exit;
}

/** Reads and JSON-decodes the request body; false if it isn't a JSON object. */
function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    return is_array($data) ? $data : [];
}

/** Ends the request with 401 unless a logged-in session exists. Returns the user id. */
function require_login(): int
{
    if (empty($_SESSION['user_id'])) {
        json_error('not_authenticated', 'You need to be signed in.', 401);
    }
    return (int) $_SESSION['user_id'];
}

function require_method(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        json_error('method_not_allowed', 'Method not allowed.', 405);
    }
}
