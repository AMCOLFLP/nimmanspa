"""Security and account-management checks against isolated PHP/MariaDB servers.

Only disposable databases and configuration beneath this test's temporary directory
are used. No installed service, real backend/config.php, or real learner is touched.
Requires Windows XAMPP; NIMMAN_TEST_PHP and NIMMAN_TEST_MYSQL_BIN override paths.
Passwords and session/CSRF tokens are deliberately excluded from test diagnostics.
"""
from contextlib import contextmanager
from http.cookiejar import CookieJar
import json
import os
from pathlib import Path
import shutil
import subprocess
import uuid
from urllib.error import HTTPError
from urllib.parse import urlencode
from urllib.request import build_opener, HTTPCookieProcessor, Request

from access_integration_test import BACKEND, PHP, MYSQL_BIN, HIDDEN, port, wait_for_port


LEGACY_SCHEMA = """
CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL, email VARCHAR(190) NOT NULL,
    password_hash VARCHAR(255) NOT NULL, role VARCHAR(30) NOT NULL DEFAULT 'other',
    lang VARCHAR(5) NOT NULL DEFAULT 'en', created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE progress (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, user_id INT UNSIGNED NOT NULL,
    course_id VARCHAR(30) NOT NULL, data JSON NOT NULL,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_progress_user_course (user_id,course_id),
    CONSTRAINT fk_progress_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE course_access (
    user_id INT UNSIGNED NOT NULL, course_id VARCHAR(30) NOT NULL,
    started_at DATETIME NOT NULL, expires_at DATETIME NOT NULL,
    PRIMARY KEY (user_id,course_id),
    CONSTRAINT fk_course_access_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE login_attempts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, email VARCHAR(190) NOT NULL,
    attempted_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY idx_login_attempts_email_time (email,attempted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
"""


def require(condition, message):
    if not condition:
        raise AssertionError(message)


def php_string(value):
    return "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"


class Client:
    def __init__(self, http_port):
        self.base = f"http://127.0.0.1:{http_port}/backend/"
        self.browser = build_opener(HTTPCookieProcessor(CookieJar()))
        self.csrf = None

    def request(self, path, body=None, method=None, csrf=True, raw=False):
        data = json.dumps(body).encode() if body is not None else None
        headers = {"Content-Type": "application/json"} if data is not None else {}
        token = self.csrf if csrf is True else csrf
        if token:
            headers["X-CSRF-Token"] = token
        req = Request(self.base + path, data=data, headers=headers, method=method)
        try:
            response = self.browser.open(req, timeout=10)
        except HTTPError as error:
            response = error
        with response:
            text = response.read().decode()
            if raw:
                return response.status, text
            try:
                result = json.loads(text)
            except json.JSONDecodeError:
                raise AssertionError(f"Non-JSON response at {path.split('?')[0]} (HTTP {response.status})") from None
            if isinstance(result.get("csrf_token"), str):
                self.csrf = result["csrf_token"]
            return response.status, result

    def api(self, path, body=None, **options):
        return self.request("api/" + path, body, **options)


class Harness:
    def __init__(self, workspace):
        self.workspace = workspace
        self.database_port, self.http_port = port(), port()
        self.processes, self.logs = [], []
        self.database = "nimman_admin_test"
        self.web_root = workspace / "web"
        self.staged_backend = self.web_root / "backend"

    def sql(self, statement, database=True):
        prefix = f"USE {self.database}; " if database else ""
        result = subprocess.run(
            [str(MYSQL_BIN / "mysql.exe"), "--no-defaults", "--host=127.0.0.1",
             f"--port={self.database_port}", "--user=root", "--batch", "--skip-column-names"],
            input=prefix + statement, capture_output=True, text=True, encoding="utf-8",
            creationflags=HIDDEN,
        )
        # Do not expose SQL input or stderr: mutation inputs may contain test secrets.
        require(result.returncode == 0, "Disposable database command failed.")
        return result.stdout.strip()

    def php(self, source):
        result = subprocess.run([PHP], input="<?php " + source, capture_output=True,
                                text=True, encoding="utf-8", creationflags=HIDDEN)
        require(result.returncode == 0, "Disposable PHP helper failed.")
        return result.stdout.strip()

    def hash(self, password):
        return self.php("echo password_hash(" + php_string(password) + ", PASSWORD_DEFAULT);")

    def client(self):
        return Client(self.http_port)

    def launch(self):
        database_dir = self.workspace / "database"
        sessions = self.workspace / "sessions"
        sessions.mkdir()
        self.web_root.mkdir()
        shutil.copytree(BACKEND, self.staged_backend,
                        ignore=shutil.ignore_patterns("config.php", "tests", "__pycache__"))
        # Keep catalog-derived metrics available without serving the actual repository.
        shutil.copytree(BACKEND.parent / "js", self.web_root / "js")
        (self.web_root / "content").mkdir()
        shutil.copy2(BACKEND.parent / "content" / "curriculum.json", self.web_root / "content" / "curriculum.json")
        subprocess.run([str(MYSQL_BIN / "mysql_install_db.exe"), f"--datadir={database_dir}",
                        f"--port={self.database_port}", "--silent"], check=True, capture_output=True,
                       text=True, creationflags=HIDDEN)
        database_log = (self.workspace / "database.log").open("w", encoding="utf-8")
        self.logs.append(database_log)
        database = subprocess.Popen(
            [str(MYSQL_BIN / "mysqld.exe"), "--no-defaults", f"--datadir={database_dir}",
             f"--basedir={MYSQL_BIN.parent}", f"--port={self.database_port}",
             "--bind-address=127.0.0.1", f"--tmpdir={self.workspace}",
             "--innodb-buffer-pool-size=32M", "--console"], stdout=database_log,
            stderr=subprocess.STDOUT, creationflags=HIDDEN,
        )
        self.processes.append(database)
        wait_for_port(self.database_port, database)
        self.sql(f"CREATE DATABASE {self.database} CHARACTER SET utf8mb4;", database=False)
        config = "<?php return [" + (
            f"'db'=>['host'=>'127.0.0.1','port'=>{self.database_port},'name'=>'{self.database}',"
            "'user'=>'root','pass'=>'','charset'=>'utf8mb4'],'secure_cookies'=>false];"
        )
        (self.staged_backend / "config.php").write_text(config, encoding="utf-8")
        php_log = (self.workspace / "php.log").open("w", encoding="utf-8")
        self.logs.append(php_log)
        server = subprocess.Popen([PHP, "-d", f"session.save_path={sessions}", "-S",
                                   f"127.0.0.1:{self.http_port}", "-t", str(self.web_root)],
                                  stdout=php_log, stderr=subprocess.STDOUT, creationflags=HIDDEN)
        self.processes.append(server)
        wait_for_port(self.http_port, server)

    def close(self):
        for process in reversed(self.processes):
            if process.poll() is None:
                process.terminate()
                try:
                    process.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait(timeout=5)
        for handle in self.logs:
            handle.close()


@contextmanager
def isolated_backend():
    require(os.name == "nt", "This harness requires Windows mysql_install_db.exe.")
    for executable in (Path(PHP), MYSQL_BIN / "mysql_install_db.exe", MYSQL_BIN / "mysqld.exe", MYSQL_BIN / "mysql.exe"):
        require(executable.is_file(), f"Missing test executable: {executable}")
    parent = (BACKEND / "tests").resolve()
    workspace = parent / ("nimman_admin_test_" + uuid.uuid4().hex)
    workspace.mkdir()
    harness = Harness(workspace)
    try:
        harness.launch()
        yield harness
    finally:
        harness.close()
        target = workspace.resolve()
        require(target.parent == parent and target.name.startswith("nimman_admin_test_"),
                "Refusing cleanup outside this test's temporary directory.")
        shutil.rmtree(target)


def successful(result, description):
    status, payload = result
    require(200 <= status < 300 and payload.get("ok") is True,
            f"{description}: HTTP {status}, error={payload.get('error', 'none')}")
    return payload


def denied(result, description, status=None, code=None):
    actual, payload = result
    require(actual == status if status is not None else actual in (401, 403),
            f"{description}: expected denial, received HTTP {actual}")
    if code:
        require(payload.get("error") == code, f"{description}: wrong error code")


def assert_no_credentials(payload):
    encoded = json.dumps(payload).lower()
    require("password_hash" not in encoded and "temporary_password" not in encoded,
            "A read response exposed a password field.")


def login(browser, email, password):
    payload = successful(browser.api("login.php", {"email": email, "password": password}), "Login")
    require(browser.csrf, "Login must supply a CSRF token.")
    return payload["user"]


def main():
    with isolated_backend() as h:
        # This is the exact pre-admin schema, including existing 30-day access.
        h.sql(LEGACY_SCHEMA)
        old_password = "legacy-testing123"
        admin_password = "admin-testing123"
        h.sql("INSERT INTO users (name,email,password_hash,role) VALUES "
              f"('Legacy Learner','legacy@example.test','{h.hash(old_password)}','therapist'),"
              f"('Course Administrator','admin@example.test','{h.hash(admin_password)}','manager');")
        stamp = 1793808000000
        spa_progress = {
            "knownWords": ["Effleurage", "Towel", "not-a-canonical-word"], "quizBest": {"mc": 80, "listen": 100},
            "learningModules": {"s1": stamp, "s2": stamp, "not-a-chapter": stamp},
            "learningItems": {"spa-v-effleurage": stamp, "not-a-canonical-item": stamp},
            "practiceSessions": [{"at": stamp, "activity": "listen", "score": 3, "total": 4}],
            "assessmentAttempts": [{"at": stamp, "type": "mc", "score": 4, "total": 5}],
        }
        salon_progress = {"knownWords": ["Comb"], "quizBest": {}, "learningModules": {"h1": stamp}}
        for course, progress in (("spa", spa_progress), ("salon", salon_progress)):
            encoded = json.dumps(progress).replace("'", "''")
            h.sql(f"INSERT INTO progress(user_id,course_id,data) VALUES (1,'{course}','{encoded}');")
        h.sql("INSERT INTO course_access(user_id,course_id,started_at,expires_at) VALUES "
              "(1,'spa',UTC_TIMESTAMP()-INTERVAL 5 DAY,UTC_TIMESTAMP()+INTERVAL 25 DAY),"
              "(1,'salon',UTC_TIMESTAMP()-INTERVAL 40 DAY,UTC_TIMESTAMP()-INTERVAL 10 DAY);")
        original_progress = h.sql("SELECT user_id,course_id,data FROM progress ORDER BY user_id,course_id")
        original_windows = h.sql("SELECT * FROM course_access ORDER BY user_id,course_id")
        migration = (BACKEND / "migrations/20261105_admin_dashboard.sql").read_text(encoding="utf-8")
        h.sql(migration)
        h.sql(migration)
        require(h.sql("SELECT user_id,course_id,data FROM progress ORDER BY user_id,course_id") == original_progress,
                "Migration changed existing progress.")
        require(h.sql("SELECT * FROM course_access ORDER BY user_id,course_id") == original_windows,
                "Migration changed existing course windows.")
        require(h.sql("SELECT COUNT(*) FROM users WHERE is_admin=1") == "0",
                "Migration granted administrator access automatically.")
        print("PASS: additive migration is repeatable and preserves users, progress, and course dates.")

        # New installations must support the same contract as migrated installations.
        schema = (BACKEND / "schema.sql").read_text(encoding="utf-8")
        h.sql("CREATE DATABASE nimman_admin_fresh; USE nimman_admin_fresh; " + schema, database=False)
        h.sql("USE nimman_admin_fresh; " + schema + migration, database=False)
        require(h.sql("SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA='nimman_admin_fresh' "
                      "AND TABLE_NAME='users' AND COLUMN_NAME='is_admin'") == "1", "Fresh schema is missing admin columns.")

        anonymous = h.client()
        paths = ("admin/students.php", "admin/student.php?id=1")
        for path in paths:
            denied(anonymous.api(path), "Anonymous admin read", status=401)
        for path, body in (("admin/students.php", {"name": "Blocked"}),
                           ("admin/student.php", {"id": 1, "name": "Blocked"}),
                           ("admin/reset-password.php", {"id": 1})):
            denied(anonymous.api(path, body), "Anonymous admin mutation", status=401)
        status, _ = anonymous.request("tools/promote-admin.php?email=legacy%40example.test", raw=True)
        require(status in (403, 404, 405), "Administrator bootstrap was reachable through HTTP.")
        require(h.sql("SELECT COUNT(*) FROM users WHERE is_admin=1") == "0", "Web request promoted an administrator.")

        bootstrap = subprocess.run([PHP, str(h.staged_backend / "tools/promote-admin.php"), "admin@example.test"],
                                   capture_output=True, text=True, creationflags=HIDDEN)
        require(bootstrap.returncode == 0, "CLI administrator promotion failed.")
        require(h.sql("SELECT is_admin FROM users WHERE id=2") == "1", "CLI did not promote the chosen account.")
        admin = h.client()
        user = login(admin, "admin@example.test", admin_password)
        require(user["is_admin"] is True, "Promoted account cannot administer.")
        session = successful(admin.api("session.php"), "Session hydration")
        require(session["user"]["is_admin"] is True and admin.csrf, "Session omitted admin or CSRF state.")

        learner, second_session = h.client(), h.client()
        login(learner, "legacy@example.test", old_password)
        login(second_session, "legacy@example.test", old_password)
        for path in paths:
            denied(learner.api(path), "Student admin read", status=403)
        denied(learner.api("admin/reset-password.php", {"id": 1}), "Student password reset", status=403)
        attacker = h.client()
        registered = successful(attacker.api("register.php", {
            "name": "Injected Learner", "email": "injected@example.test", "password": "register123",
            "role": "admin", "is_admin": True, "is_active": True, "session_version": 999,
            "must_change_password": False,
        }), "Registration")
        require(registered["user"].get("is_admin") is False, "Public registration accepted administrator privilege.")
        denied(attacker.api("admin/students.php"), "Injected account admin access", status=403)
        require(h.sql("SELECT COUNT(*) FROM users WHERE is_admin=1") == "1", "Registration altered admin privileges.")
        print("PASS: anonymous/student boundaries, registration privilege injection, session hydration, and CLI-only promotion.")

        update = {"id": 1, "name": "Legacy Learner", "email": "legacy@example.test", "role": "therapist", "lang": "en", "is_active": True}
        hash_before = h.sql("SELECT password_hash FROM users WHERE id=1")
        for token in (False, "invalid-token", learner.csrf):
            denied(admin.api("admin/student.php", update, csrf=token), "Invalid CSRF update", status=403)
            denied(admin.api("admin/reset-password.php", {"id": 1}, csrf=token), "Invalid CSRF reset", status=403)
            denied(admin.api("admin/students.php", {"name": "Blocked", "email": "blocked@example.test"}, csrf=token),
                   "Invalid CSRF creation", status=403)
        require(h.sql("SELECT password_hash FROM users WHERE id=1") == hash_before, "CSRF failure changed a password.")
        require(h.sql("SELECT COUNT(*) FROM users WHERE email='blocked@example.test'") == "0", "CSRF failure created an account.")
        print("PASS: missing, invalid, and another user's CSRF tokens cannot change accounts or passwords.")

        detail = successful(admin.api("admin/student.php?id=1"), "Student detail")["student"]
        assert_no_credentials(detail)
        courses = {course["course_id"]: course for course in detail["courses"]}
        require(set(courses) == {"spa", "cruise", "salon"}, "Student detail is missing a course.")
        spa, salon, cruise = courses["spa"], courses["salon"], courses["cruise"]
        require(spa["access"]["status"] == "active" and salon["access"]["status"] == "expired"
                and cruise["access"]["status"] == "not_started", "Per-course access is inaccurate.")
        require(spa["chapters_studied"] == 2 and spa["chapters_total"] == 5 and spa["progress_percent"] == 40,
                "Spa progress does not use actual canonical chapter completion.")
        require(spa["words_known"] == 2 and spa["quiz_average"] == 90 and spa["quiz_activities"] == 2,
                "Spa vocabulary or quiz metrics are inaccurate.")
        require(spa["practice_sessions"] == 1 and spa["assessment_attempts"] == 1 and spa["items_reviewed"] == 1,
                "Spa practice metrics are inaccurate.")
        require(salon["chapters_studied"] == 1 and salon["words_known"] == 1 and salon["quiz_average"] is None,
                "Salon progress was mixed with another course or no score was displayed as zero.")
        require(cruise["chapters_studied"] == 0 and cruise["chapters_total"] == 9 and cruise["last_activity_at"] is None,
                "Unstarted course has fabricated progress.")
        require(len(spa["chapters"]) == 5 and sum(bool(chapter["studied"]) for chapter in spa["chapters"]) == 2,
                "Chapter breakdown is inaccurate.")
        for target in (2, 99999):
            status, _ = admin.api(f"admin/student.php?id={target}")
            require(status == 404, "Student detail exposes an administrator or nonexistent account.")
        print("PASS: per-course metrics, canonical chapter totals, empty histories, and expired learner visibility.")

        created = []
        temporary_passwords = []
        require(admin.api("admin/students.php", {
            "name": "Rejected Admin", "email": "privilege@example.test", "is_admin": True,
        })[0] == 400, "Student creation accepted a forbidden privilege field.")
        for number in range(3):
            payload = successful(admin.api("admin/students.php", {
                "name": f"Pagination Learner {number}", "email": f"pagination{number}@example.test",
                "role": "reception", "lang": "th", "is_active": True,
            }), "Admin account creation")
            record = payload["student"]
            created.append(record["id"])
            temporary_passwords.append(payload["temporary_password"])
            require(len(payload["temporary_password"]) >= 16, "Temporary password is too short.")
            require(record.get("is_admin") is not True, "Admin student creation granted administrator privilege.")
            require(h.sql(f"SELECT must_change_password FROM users WHERE id={record['id']}") == "1",
                    "Created student can skip changing a temporary password.")
            require(h.sql(f"SELECT COUNT(*) FROM course_access WHERE user_id={record['id']}") == "0",
                    "Account creation started a learning window.")
        require(len(set(temporary_passwords)) == len(temporary_passwords), "Temporary passwords were reused.")
        first = successful(admin.api("admin/students.php?" + urlencode({"q": "Pagination", "page": 1, "per_page": 2})), "First student page")
        second = successful(admin.api("admin/students.php?" + urlencode({"q": "Pagination", "page": 2, "per_page": 2})), "Second student page")
        assert_no_credentials(first)
        require(first["pagination"]["total"] == 3 and first["pagination"]["total_pages"] == 2,
                "Filtered pagination totals are incorrect.")
        require(len(first["students"]) == 2 and len(second["students"]) == 1, "Pagination has the wrong page sizes.")
        page_ids = [row["id"] for row in first["students"] + second["students"]]
        require(set(page_ids) == set(created) and len(page_ids) == len(set(page_ids)), "Pagination duplicated or lost a student.")
        for query in ({"q": "legacy@example.test"}, {"course": "spa", "access": "active"}, {"course": "salon", "access": "expired"}):
            filtered = successful(admin.api("admin/students.php?" + urlencode(query)), "Filtered student search")
            require([row["id"] for row in filtered["students"]] == [1], "Course/access/email filter returned the wrong students.")
        list_payload = successful(admin.api("admin/students.php"), "Student overview")
        require(list_payload["summary"]["total_students"] == 5, "Overview counted administrator accounts as students.")
        require(list_payload["summary"]["active_enrollments"] == 1 and list_payload["summary"]["expired_enrollments"] == 1,
                "Overview enrollment totals are incorrect.")
        print("PASS: account creation, unique temporary passwords, filtered search, pagination, and overview counts.")

        # Updates must revoke old sessions; toggling account status must not erase learning.
        require(admin.api("admin/student.php", {**update, "is_admin": True})[0] == 400,
                "Student update accepted a forbidden privilege field.")
        updated = {**update, "name": "Updated Learner", "lang": "th"}
        successful(admin.api("admin/student.php", updated), "Update learner account")
        require(h.sql("SELECT is_admin FROM users WHERE id=1") == "0", "Student update escalated privileges.")
        denied(learner.api("access.php"), "Edited account's old session", status=401)
        login(learner, "legacy@example.test", old_password)
        successful(admin.api("admin/student.php", {**updated, "is_active": False}), "Suspend learner")
        denied(learner.api("access.php"), "Suspended existing session")
        denied(h.client().api("login.php", {"email": "legacy@example.test", "password": old_password}), "Suspended login")
        suspended = successful(admin.api("admin/students.php?account=inactive"), "Suspended filter")
        require([row["id"] for row in suspended["students"]] == [1], "Inactive filter failed.")
        successful(admin.api("admin/student.php", updated), "Reactivate learner")
        login(learner, "legacy@example.test", old_password)
        login(second_session, "legacy@example.test", old_password)
        require(h.sql("SELECT * FROM course_access ORDER BY user_id,course_id") == original_windows,
                "Account editing changed learning windows.")
        require(h.sql("SELECT user_id,course_id,data FROM progress ORDER BY user_id,course_id") == original_progress,
                "Account editing changed learning records.")
        print("PASS: profile edits, suspension/reactivation, session revocation, and learning-record preservation.")

        for target in (2, 99999):
            require(admin.api("admin/reset-password.php", {"id": target})[0] == 404,
                    "Student reset targeted an administrator or nonexistent account.")
        reset = successful(admin.api("admin/reset-password.php", {"id": 1}), "Reset learner password")
        temporary = reset["temporary_password"]
        temporary_passwords.append(temporary)
        require(reset["must_change_password"] is True and len(temporary) >= 16, "Reset did not require replacement of a strong temporary password.")
        new_hash = h.sql("SELECT password_hash FROM users WHERE id=1")
        require(new_hash != hash_before and new_hash != temporary, "Reset password was not replaced with a new hash.")
        verification = h.php("echo password_verify(" + php_string(temporary) + ", " + php_string(new_hash) + ") ? 'yes' : 'no';")
        require(verification == "yes", "Reset hash does not verify the generated temporary password.")
        for stale in (learner, second_session):
            denied(stale.api("access.php"), "Password reset revoked existing session", status=401)
        denied(h.client().api("login.php", {"email": "legacy@example.test", "password": old_password}), "Old password after reset", status=401)
        forced, forced_second = h.client(), h.client()
        require(login(forced, "legacy@example.test", temporary)["must_change_password"] is True, "Temporary login can bypass password change.")
        login(forced_second, "legacy@example.test", temporary)
        for path, body in (("access.php", None), ("access.php", {"course": "cruise"}),
                           ("progress.php?course=spa", None), ("progress.php", {"course": "spa", "data": {}}),
                           ("admin/students.php", None)):
            denied(forced.api(path, body), "Forced change cannot access normal application", status=403)
        require(successful(forced.api("session.php"), "Forced-change session")["user"]["must_change_password"] is True,
                "Forced-change account cannot hydrate its session.")
        credentials = {"current_password": temporary, "new_password": "changed-private123!"}
        for token in (False, "invalid-token", admin.csrf):
            denied(forced.api("change-password.php", credentials, csrf=token), "Password change CSRF", status=403)
        require(forced.api("change-password.php", {**credentials, "current_password": "wrong-password"})[0] in (400, 401, 403),
                "Password change accepted a wrong current password.")
        require(forced.api("change-password.php", {**credentials, "new_password": "short"})[0] == 400,
                "Password change accepted a short password.")
        require(forced.api("change-password.php", {**credentials, "new_password": "x" * 73})[0] == 400,
                "Password change silently accepted a truncated bcrypt password.")
        # Expired courses must never prevent the account owner from securing their account.
        h.sql("UPDATE course_access SET expires_at=UTC_TIMESTAMP()-INTERVAL 1 DAY WHERE user_id=1 AND course_id='spa'")
        expired_windows = h.sql("SELECT * FROM course_access ORDER BY user_id,course_id")
        changed = successful(forced.api("change-password.php", credentials), "Change password with all enrollments expired")
        require(changed["user"]["must_change_password"] is False, "Successful change did not clear the requirement.")
        denied(forced_second.api("session.php"), "Password change revoked other session", status=401)
        require(successful(forced.api("access.php"), "Access after password change")["courses"]["spa"]["status"] == "expired",
                "Password change renewed expired access.")
        require(h.sql("SELECT * FROM course_access ORDER BY user_id,course_id") == expired_windows,
                "Password change altered learning-window dates.")
        denied(h.client().api("login.php", {"email": "legacy@example.test", "password": temporary}), "Used temporary password", status=401)
        require(login(h.client(), "legacy@example.test", credentials["new_password"])["must_change_password"] is False,
                "New password cannot authenticate normally.")
        detail_after = successful(admin.api("admin/student.php?id=1"), "Detail after reset")
        assert_no_credentials(detail_after)
        for password in temporary_passwords:
            require(password not in json.dumps(detail_after), "Temporary password can be retrieved after reset.")
        print("PASS: hashed one-time-display reset, forced password change, old-password rejection, all-session revocation, and expired-course independence.")

        # An administrator with a reset requirement must also be restricted server-side.
        h.sql("UPDATE users SET must_change_password=1 WHERE id=2")
        locked_admin = h.client()
        login(locked_admin, "admin@example.test", admin_password)
        denied(locked_admin.api("admin/students.php"), "Forced-change administrator dashboard", status=403)
        successful(locked_admin.api("change-password.php", {"current_password": admin_password, "new_password": "admin-changed123!"}),
                   "Administrator password change")
        successful(locked_admin.api("admin/students.php"), "Administrator access restored")
        print("PASS: administrator password-change requirement is enforced by the API.")

        # Table dumps are checked in memory, never printed; they must not contain any plaintext secret.
        audit_tables = h.sql("SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA='nimman_admin_test' AND TABLE_NAME LIKE '%audit%'").splitlines()
        require(audit_tables, "Admin mutations have no audit table.")
        audit = "\n".join(h.sql(f"SELECT * FROM `{table}`") for table in audit_tables)
        require(audit.strip(), "Admin mutations were not audited.")
        for secret in temporary_passwords + [old_password, admin_password, credentials["new_password"], admin.csrf, forced.csrf, new_hash]:
            require(secret not in audit, "Audit records contain a password, hash, or session token.")
        require(h.sql("SELECT user_id,course_id,data FROM progress ORDER BY user_id,course_id") == original_progress,
                "Account administration changed stored learning progress.")
        print("PASS: audit records contain no credentials; original learning progress is preserved.")
    print("PASS: all isolated admin integration checks passed; disposable servers and files cleaned up.")


if __name__ == "__main__":
    main()
