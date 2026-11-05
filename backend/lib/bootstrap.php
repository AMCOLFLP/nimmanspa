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
header('Cache-Control: no-store');

// Never send SQL, filesystem paths, or stack traces to an API caller.
ini_set('display_errors', '0');
set_exception_handler(function (Throwable $error): void {
    error_log('NIMMAN API failure: ' . get_class($error));
    json_error('server', 'The request could not be completed. Please try again.', 500);
});

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
        $port = (int) ($db['port'] ?? 3306);
        $dsn = "mysql:host={$db['host']};port={$port};dbname={$db['name']};charset={$db['charset']}";
        try {
            $pdo = new PDO($dsn, $db['user'], $db['pass'], [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
            $pdo->exec("SET time_zone = '+00:00'");
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
    ini_set('session.use_strict_mode', '1');
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
    exit(PHP_SAPI === 'cli' ? 1 : 0);
}

/** Reads and JSON-decodes the request body; false if it isn't a JSON object. */
function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    return is_array($data) ? $data : [];
}

/** Ends the request with 401 unless a logged-in session exists. Returns the user id. */
function require_login(bool $allowPasswordChange = false): int
{
    if (empty($_SESSION['user_id'])) {
        json_error('not_authenticated', 'You need to be signed in.', 401);
    }
    $user = session_user();
    if (!$user || !(bool) $user['is_active'] || !isset($_SESSION['session_version'])
        || (int) $_SESSION['session_version'] !== (int) $user['session_version']) {
        $_SESSION = [];
        json_error('not_authenticated', 'Your session has ended. Please sign in again.', 401);
    }
    if (!$allowPasswordChange && (bool) $user['must_change_password']) {
        json_error('password_change_required', 'Set a new password before continuing.', 403);
    }
    return (int) $user['id'];
}

/** Always read account status from the database, never from browser flags. */
function session_user(): ?array
{
    static $user = null;
    if ($user === null && !empty($_SESSION['user_id'])) {
        $stmt = get_pdo()->prepare('SELECT id, name, email, role, lang, is_admin, is_active, must_change_password, session_version FROM users WHERE id = ?');
        $stmt->execute([(int) $_SESSION['user_id']]);
        $user = $stmt->fetch() ?: null;
    }
    return $user;
}

function public_user(array $user): array
{
    return [
        'id' => (int) $user['id'], 'name' => $user['name'], 'email' => $user['email'],
        'role' => $user['role'], 'lang' => $user['lang'],
        'is_admin' => (bool) $user['is_admin'], 'is_active' => (bool) $user['is_active'],
        'must_change_password' => (bool) $user['must_change_password'],
    ];
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function require_csrf(): void
{
    $provided = (string) ($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
    if ($provided === '' || empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $provided)) {
        json_error('csrf_invalid', 'Your security token has expired. Reload the page and try again.', 403);
    }
}

function establish_session(array $user): void
{
    $_SESSION = [
        'user_id' => (int) $user['id'],
        'session_version' => (int) $user['session_version'],
        'csrf_token' => bin2hex(random_bytes(32)),
    ];
    session_regenerate_id(true);
}

function require_admin(): int
{
    $id = require_login();
    if (!(bool) session_user()['is_admin']) {
        json_error('forbidden', 'Administrator access is required.', 403);
    }
    return $id;
}

function require_method(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        json_error('method_not_allowed', 'Method not allowed.', 405);
    }
}
