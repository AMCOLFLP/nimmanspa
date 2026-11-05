<?php
declare(strict_types=1);
require __DIR__ . '/../lib/course_access.php';

function check(bool $condition, string $message): void
{
    if (!$condition) {
        fwrite(STDERR, "FAIL: {$message}\n");
        exit(1);
    }
}

function at(string $timestamp): DateTimeImmutable
{
    return new DateTimeImmutable($timestamp, new DateTimeZone('UTC'));
}

$window = ['started_at' => '2026-11-05 03:00:00', 'expires_at' => '2026-12-05 03:00:00'];
$pending = learning_access_status('spa', null, at('2026-11-05 03:00:00'));
check($pending['status'] === 'not_started', 'A new or legacy learner has no automatic window.');
check($pending['started_at'] === null && $pending['expires_at'] === null, 'Unstarted access has no dates.');

$start = learning_access_status('spa', $window, at('2026-11-05 03:00:00'));
check($start['status'] === 'active' && $start['remaining_days'] === 30, 'The exact start is included.');
check($start['started_at'] === '2026-11-05T03:00:00Z', 'Dates are unambiguous UTC ISO strings.');
check($start['expires_at'] === '2026-12-05T03:00:00Z', 'The deadline is exposed to the client.');

$lastSecond = learning_access_status('spa', $window, at('2026-12-05 02:59:59'));
check($lastSecond['status'] === 'active' && $lastSecond['remaining_days'] === 1, 'The final second remains active.');
$deadline = learning_access_status('spa', $window, at('2026-12-05 03:00:00'));
check($deadline['status'] === 'expired' && $deadline['remaining_days'] === 0, 'The exact expiry is excluded.');
check(learning_access_status('spa', $window, at('2027-01-01'))['status'] === 'expired', 'Expired dates never reopen on their own.');
check(learning_access_status('spa', $window, at('2026-11-05 02:59:59'))['status'] === 'not_started', 'Future access is not granted early.');
check(learning_access_status('spa', $window, at('2026-11-06 03:00:00'))['remaining_days'] === 29, 'Whole elapsed days reduce the remaining period.');

// Calendar months vary in length. The policy remains thirty 24-hour days,
// including over leap day, year boundaries, and daylight-saving transitions.
foreach (['2026-01-31 12:00:00', '2028-02-01 12:00:00', '2026-12-20 12:00:00', '2026-03-07 12:00:00'] as $date) {
    $begin = at($date);
    $end = $begin->add(new DateInterval('P' . LEARNING_ACCESS_DAYS . 'D'));
    check($end->getTimestamp() - $begin->getTimestamp() === 2592000, 'The window is 30 full days at ' . $date);
}
check(valid_course('spa') && valid_course('cruise') && valid_course('salon'), 'Every offered course is supported.');
check(!valid_course('unknown') && !valid_course('../spa') && !valid_course('SPA'), 'Unknown course ids cannot create access windows.');

date_default_timezone_set('Asia/Bangkok');
check(learning_access_status('spa', $window, at('2026-12-05 03:00:00')) === $deadline, 'Server default timezone cannot extend a UTC window.');
echo "PASS: access states, UTC formatting, exact expiry, 30-day boundaries, and course allowlist.\n";
