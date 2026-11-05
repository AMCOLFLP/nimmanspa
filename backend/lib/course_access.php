<?php
declare(strict_types=1);

// Keep this catalogue in step with Courses.REGISTRY in js/courses.js.
const LEARNING_COURSES = ['spa', 'cruise', 'salon'];
const LEARNING_ACCESS_DAYS = 30;

function valid_course(string $course): bool
{
    return in_array($course, LEARNING_COURSES, true);
}

/** Use the database clock for both stored windows and access decisions. */
function learning_access_now(PDO $pdo): DateTimeImmutable
{
    return new DateTimeImmutable(
        (string) $pdo->query('SELECT UTC_TIMESTAMP()')->fetchColumn(),
        new DateTimeZone('UTC')
    );
}

/**
 * A month is exactly 30 consecutive 24-hour days. The start is inclusive;
 * the expiry is exclusive. Neither signing in nor saving progress extends it.
 * This pure function is also used by the boundary tests.
 */
function learning_access_status(string $course, ?array $row, DateTimeImmutable $now): array
{
    $result = [
        'course_id' => $course,
        'status' => 'not_started',
        'started_at' => null,
        'expires_at' => null,
        'remaining_days' => 0,
    ];
    if ($row === null) {
        return $result;
    }

    $utc = new DateTimeZone('UTC');
    $startedAt = new DateTimeImmutable($row['started_at'], $utc);
    $expiresAt = new DateTimeImmutable($row['expires_at'], $utc);
    $secondsRemaining = $expiresAt->getTimestamp() - $now->getTimestamp();
    $active = $now >= $startedAt && $now < $expiresAt;

    $result['status'] = $active ? 'active' : ($now >= $expiresAt ? 'expired' : 'not_started');
    $result['started_at'] = $startedAt->format('Y-m-d\TH:i:s\Z');
    $result['expires_at'] = $expiresAt->format('Y-m-d\TH:i:s\Z');
    $result['remaining_days'] = $active
        ? min(LEARNING_ACCESS_DAYS, (int) ceil($secondsRemaining / 86400))
        : 0;
    return $result;
}

function learning_access_row(PDO $pdo, int $userId, string $course): ?array
{
    $stmt = $pdo->prepare('SELECT started_at, expires_at FROM course_access WHERE user_id = ? AND course_id = ?');
    $stmt->execute([$userId, $course]);
    $row = $stmt->fetch();
    return $row ?: null;
}

/**
 * The unique key makes simultaneous/repeated starts safe. The duplicate-key
 * branch deliberately leaves both dates unchanged, including expired dates.
 */
function start_learning_access(PDO $pdo, int $userId, string $course, DateTimeImmutable $now): void
{
    if (!valid_course($course)) {
        throw new InvalidArgumentException('Unknown course.');
    }
    $utcNow = $now->setTimezone(new DateTimeZone('UTC'));
    $expiresAt = $utcNow->add(new DateInterval('P' . LEARNING_ACCESS_DAYS . 'D'));
    $stmt = $pdo->prepare(
        'INSERT INTO course_access (user_id, course_id, started_at, expires_at) VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE user_id = VALUES(user_id)'
    );
    $stmt->execute([
        $userId,
        $course,
        $utcNow->format('Y-m-d H:i:s'),
        $expiresAt->format('Y-m-d H:i:s'),
    ]);
}

function learning_access_payload(PDO $pdo, int $userId, DateTimeImmutable $now): array
{
    $stmt = $pdo->prepare('SELECT course_id, started_at, expires_at FROM course_access WHERE user_id = ?');
    $stmt->execute([$userId]);
    $rows = [];
    foreach ($stmt->fetchAll() as $row) {
        $rows[$row['course_id']] = $row;
    }
    $courses = [];
    foreach (LEARNING_COURSES as $course) {
        $courses[$course] = learning_access_status($course, $rows[$course] ?? null, $now);
    }
    return [
        'server_now' => $now->format('Y-m-d\TH:i:s\Z'),
        'duration_days' => LEARNING_ACCESS_DAYS,
        'trigger' => 'course_start',
        'courses' => $courses,
    ];
}

function require_learning_access(PDO $pdo, int $userId, string $course): void
{
    $row = learning_access_row($pdo, $userId, $course);
    $access = learning_access_status($course, $row, learning_access_now($pdo));
    if ($access['status'] === 'not_started') {
        json_error('access_not_started', 'Start this course to begin your 30-day learning period.', 403);
    }
    if ($access['status'] === 'expired') {
        json_error('access_expired', 'Your 30-day learning period has ended. Your saved progress is retained.', 403);
    }
}
