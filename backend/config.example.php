<?php
/**
 * Copy this file to config.php (same folder) and fill in your real database
 * credentials. config.php is gitignored — never commit real credentials.
 *
 * On hosts that let you set environment variables instead of editing files,
 * every value here falls back to getenv(), so config.php can also be left
 * with just the defaults below and the real values set on the server.
 */
return [
    'db' => [
        'host'    => getenv('NIMMAN_DB_HOST') ?: '127.0.0.1',
        'name'    => getenv('NIMMAN_DB_NAME') ?: 'nimman_english',
        'user'    => getenv('NIMMAN_DB_USER') ?: 'nimman_english',
        'pass'    => getenv('NIMMAN_DB_PASS') ?: '',
        'charset' => 'utf8mb4',
    ],

    // Set to true only while the site is served over HTTPS. When true, the
    // session cookie is marked Secure and browsers will refuse to send it
    // over plain HTTP.
    'secure_cookies' => false,
];
