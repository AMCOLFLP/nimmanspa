"""Real API checks using disposable local MariaDB/PHP instances (Windows).

No existing configuration or database is used. Override NIMMAN_TEST_PHP and
NIMMAN_TEST_MYSQL_BIN when PHP/MariaDB are not in a standard XAMPP directory.
"""
from datetime import datetime
from http.cookiejar import CookieJar
import json
import os
from pathlib import Path
import re
import shutil
import socket
import subprocess
import time
import uuid
from urllib.error import HTTPError
from urllib.request import build_opener, HTTPCookieProcessor, Request


BACKEND = Path(__file__).resolve().parents[1]
PHP = os.environ.get("NIMMAN_TEST_PHP") or shutil.which("php") or "C:/xampp/php/php.exe"
MYSQL_BIN = Path(os.environ.get("NIMMAN_TEST_MYSQL_BIN", "C:/xampp/mysql/bin"))
HIDDEN = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0


def port():
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        return listener.getsockname()[1]


def wait_for_port(number, process):
    for _ in range(100):
        if process.poll() is not None:
            raise RuntimeError("Temporary server exited; inspect the test output.")
        try:
            with socket.create_connection(("127.0.0.1", number), timeout=0.2):
                return
        except OSError:
            time.sleep(0.1)
    raise RuntimeError("Temporary server did not start.")


def main():
    if os.name != "nt":
        raise SystemExit("This integration harness uses MariaDB's Windows mysql_install_db.exe.")
    for executable in (Path(PHP), MYSQL_BIN / "mysql_install_db.exe", MYSQL_BIN / "mysqld.exe", MYSQL_BIN / "mysql.exe"):
        if not executable.is_file():
            raise SystemExit(f"Missing executable: {executable}")

    # Keep artifacts in the workspace so a restricted Codex runner can write.
    temp_parent = (BACKEND / "tests").resolve()
    workspace = temp_parent / ("nimman_access_test_" + uuid.uuid4().hex)
    workspace.mkdir()
    # Every file and server belongs to this newly created, uniquely named root.
    database_dir = workspace / "database"
    web_root = workspace / "web"
    sessions = workspace / "sessions"
    sessions.mkdir()
    web_root.mkdir()
    staged_backend = web_root / "backend"
    shutil.copytree(BACKEND, staged_backend, ignore=shutil.ignore_patterns("config.php", "tests", "__pycache__"))
    database_port, http_port = port(), port()
    processes = []
    logs = []

    def sql(statement):
        result = subprocess.run(
            [str(MYSQL_BIN / "mysql.exe"), "--no-defaults", "--host=127.0.0.1", f"--port={database_port}",
             "--user=root", "--batch", "--skip-column-names", "--execute", statement],
            capture_output=True, text=True, check=True, creationflags=HIDDEN,
        )
        return result.stdout.strip()

    def configure():
        config = "<?php return " + "[" + (
            f"'db'=>['host'=>'127.0.0.1','port'=>{database_port},'name'=>'nimman_access_test',"
            "'user'=>'root','pass'=>'','charset'=>'utf8mb4'],"
            "'secure_cookies'=>false"
        ) + "];"
        (staged_backend / "config.php").write_text(config, encoding="utf-8")

    def client():
        return build_opener(HTTPCookieProcessor(CookieJar()))

    def request(browser, path, body=None, method=None):
        data = json.dumps(body).encode() if body is not None else None
        req = Request(f"http://127.0.0.1:{http_port}/backend/api/{path}", data=data,
                      headers={"Content-Type": "application/json"} if data else {}, method=method)
        try:
            response = browser.open(req, timeout=5)
        except HTTPError as error:
            response = error
        with response:
            payload = response.read().decode()
            try:
                return response.status, json.loads(payload)
            except json.JSONDecodeError:
                raise AssertionError(f"Non-JSON response ({response.status}): {payload[:600]}")

    try:
        subprocess.run([str(MYSQL_BIN / "mysql_install_db.exe"), f"--datadir={database_dir}",
                        f"--port={database_port}", "--silent"], check=True, capture_output=True,
                       text=True, creationflags=HIDDEN)
        database_log = (workspace / "database.log").open("w", encoding="utf-8")
        logs.append(database_log)
        database = subprocess.Popen(
            [str(MYSQL_BIN / "mysqld.exe"), "--no-defaults", f"--datadir={database_dir}",
             f"--basedir={MYSQL_BIN.parent}", f"--port={database_port}", "--bind-address=127.0.0.1",
             f"--tmpdir={workspace}", "--innodb-buffer-pool-size=32M", "--console"],
            stdout=database_log, stderr=subprocess.STDOUT, creationflags=HIDDEN,
        )
        processes.append(database)
        wait_for_port(database_port, database)

        schema = (BACKEND / "schema.sql").read_text(encoding="utf-8")
        old_schema = re.sub(r"CREATE TABLE IF NOT EXISTS course_access \(.*?;", "", schema, flags=re.S)
        sql("CREATE DATABASE nimman_access_test; USE nimman_access_test; " + old_schema)
        password_hash = subprocess.check_output([PHP, "-r", "echo password_hash('testing123', PASSWORD_DEFAULT);"],
                                                 text=True, creationflags=HIDDEN)
        sql("USE nimman_access_test; INSERT INTO users (name,email,password_hash) VALUES "
            f"('Legacy Learner','legacy@example.test','{password_hash}'); "
            "INSERT INTO progress (user_id,course_id,data) VALUES (LAST_INSERT_ID(),'spa','{\"known\":[\"welcome\"]}');")
        learner_id = int(sql("SELECT id FROM nimman_access_test.users WHERE email='legacy@example.test'"))
        migration = (BACKEND / "migrations/20261105_course_access.sql").read_text(encoding="utf-8")
        sql("USE nimman_access_test; " + migration)
        sql("USE nimman_access_test; " + migration)
        assert sql("SELECT COUNT(*) FROM nimman_access_test.progress") == "1"
        assert sql("SELECT COUNT(*) FROM nimman_access_test.course_access") == "0"
        configure()

        php_log = (workspace / "php.log").open("w", encoding="utf-8")
        logs.append(php_log)
        server = subprocess.Popen([PHP, "-d", f"session.save_path={sessions}", "-S", f"127.0.0.1:{http_port}",
                                   "-t", str(web_root)], stdout=php_log, stderr=subprocess.STDOUT, creationflags=HIDDEN)
        processes.append(server)
        wait_for_port(http_port, server)

        anonymous = client()
        assert request(anonymous, "access.php")[0] == 401
        assert request(anonymous, "access.php", {"course": "spa"})[0] == 401
        assert request(anonymous, "progress.php?course=spa")[0] == 401

        learner = client()
        assert request(learner, "login.php", {"email": "legacy@example.test", "password": "testing123"})[0] == 200
        status, payload = request(learner, "access.php")
        assert status == 200 and set(payload["courses"]) == {"spa", "cruise", "salon"}
        assert all(course["status"] == "not_started" for course in payload["courses"].values())
        assert request(learner, "progress.php?course=spa")[1]["error"] == "access_not_started"
        assert request(learner, "progress.php", {"course": "spa", "data": {}})[0] == 403
        assert request(learner, "access.php", {"course": "unknown"})[0] == 400
        assert request(learner, "access.php", method="PUT")[0] == 405

        status, started = request(learner, "access.php", {"course": "spa", "started_at": "2000-01-01", "expires_at": "2099-01-01"})
        window = started["courses"]["spa"]
        assert status == 200 and window["status"] == "active"
        begin = datetime.fromisoformat(window["started_at"])
        end = datetime.fromisoformat(window["expires_at"])
        assert (end - begin).total_seconds() == 30 * 86400
        assert window["started_at"] == started["server_now"]
        repeated = request(learner, "access.php", {"course": "spa"})[1]["courses"]["spa"]
        assert repeated["started_at"] == window["started_at"] and repeated["expires_at"] == window["expires_at"]
        assert request(learner, "progress.php?course=spa")[1]["data"] == {"known": ["welcome"]}
        assert request(learner, "progress.php", {"course": "spa", "data": {"known": ["welcome", "towel"]}})[0] == 200
        # Daily lesson drafts/checks use the existing per-course progress document.
        daily_data = {"known": ["welcome", "towel"], "learningDays": {
            "day-1": {"learned": True, "response": "I welcome guests and confirm their requests.",
                      "criteria": [True, True, True], "answers": [0, 1], "completedAt": 1793923200000},
            "day-2": {"response": "My unfinished introduction"},
        }}
        assert request(learner, "progress.php", {"course": "spa", "data": daily_data})[0] == 200
        restored = client()
        assert request(restored, "login.php", {"email": "legacy@example.test", "password": "testing123"})[0] == 200
        assert request(restored, "progress.php?course=spa")[1]["data"] == daily_data
        assert request(restored, "logout.php", {})[0] == 200
        assert request(learner, "progress.php?course=cruise")[0] == 403

        sql("UPDATE nimman_access_test.course_access SET started_at=UTC_TIMESTAMP()-INTERVAL 30 DAY, "
            f"expires_at=UTC_TIMESTAMP() WHERE user_id={learner_id} AND course_id='spa'")
        expired_dates = sql(f"SELECT CONCAT(started_at,'/',expires_at) FROM nimman_access_test.course_access WHERE user_id={learner_id} AND course_id='spa'")
        assert request(learner, "access.php")[1]["courses"]["spa"]["status"] == "expired"
        assert request(learner, "progress.php?course=spa")[1]["error"] == "access_expired"
        assert request(learner, "progress.php", {"course": "spa", "data": {"known": []}})[1]["error"] == "access_expired"
        assert request(learner, "access.php", {"course": "spa"})[1]["courses"]["spa"]["status"] == "expired"
        assert sql(f"SELECT CONCAT(started_at,'/',expires_at) FROM nimman_access_test.course_access WHERE user_id={learner_id} AND course_id='spa'") == expired_dates
        assert json.loads(sql(f"SELECT data FROM nimman_access_test.progress WHERE user_id={learner_id} AND course_id='spa'"))["known"] == ["welcome", "towel"]
        assert request(learner, "access.php", {"course": "salon"})[1]["courses"]["salon"]["status"] == "active"

        newcomer = client()
        registration = {"name": "New Learner", "email": "new@example.test", "password": "testing123"}
        assert request(newcomer, "register.php", registration)[0] == 200
        assert all(course["status"] == "not_started" for course in request(newcomer, "access.php")[1]["courses"].values())
        assert request(newcomer, "access.php", {"course": "spa"})[0] == 200
        assert request(newcomer, "progress.php?course=spa")[1]["data"] is None
        assert request(newcomer, "logout.php", {})[0] == 200
        assert request(newcomer, "access.php")[0] == 401

        assert payload["trigger"] == "course_start"
        print("PASS: migration preservation/repeatability, sessions, explicit starts, immutable dates, 30-day expiry, progress protection, course/user isolation, and registration without starting a window.")
    except Exception:
        for handle in logs:
            handle.flush()
        for name in ("php.log", "database.log"):
            path = workspace / name
            if path.exists():
                print(path.read_text(encoding="utf-8", errors="replace")[-6000:])
        raise
    finally:
        for process in reversed(processes):
            if process.poll() is None:
                process.terminate()
                try:
                    process.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait(timeout=5)
        for handle in logs:
            handle.close()
        # Resolve and check the precise temporary target before recursive removal.
        target = workspace.resolve()
        if target.parent != temp_parent or not target.name.startswith("nimman_access_test_"):
            raise RuntimeError("Refusing cleanup outside the test's temporary directory.")
        shutil.rmtree(target)


if __name__ == "__main__":
    main()
