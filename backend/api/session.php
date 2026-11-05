<?php
declare(strict_types=1);
require __DIR__ . '/../lib/bootstrap.php';

require_method('GET');
start_session();
require_login(true);
json_response(['user' => public_user(session_user()), 'csrf_token' => csrf_token()]);
