"""Default-administrator checks against disposable PHP/MariaDB instances.

Uses the existing Windows integration harness. No installed database, real
configuration, learner, password, or session token is printed or modified.
"""
from admin_integration_test import (
    BACKEND, LEGACY_SCHEMA, assert_no_credentials, denied, isolated_backend,
    login, php_string, require, successful,
)


USERNAME = "ADMIN"
INITIAL_PASSWORD = "admin123"
REPLACEMENT_PASSWORD = "replacement-admin-123!"


def learning_records(h):
    return (
        h.sql("SELECT * FROM progress ORDER BY user_id,course_id"),
        h.sql("SELECT * FROM course_access ORDER BY user_id,course_id"),
    )


def exercise_account(h, schema, seed, learner_count):
    require(h.sql("SELECT COUNT(*) FROM users WHERE email='ADMIN'") == "1",
            "Setup must create exactly one reserved administrator account.")
    require(h.sql("SELECT name,role,lang,is_admin,is_active,must_change_password,session_version "
                  "FROM users WHERE email='ADMIN'") == "Administrator\tmanager\ten\t1\t1\t1\t1",
            "Default administrator has incorrect account or password-change flags.")
    initial_hash = h.sql("SELECT password_hash FROM users WHERE email='ADMIN'")
    require(initial_hash != INITIAL_PASSWORD and initial_hash.startswith("$2"),
            "Default password must be stored as a bcrypt hash.")
    require(h.php("echo password_verify(" + php_string(INITIAL_PASSWORD) + ", "
                  + php_string(initial_hash) + ") ? 'yes' : 'no';") == "yes",
            "Seeded hash does not verify the default password.")
    initial_record = h.sql("SELECT * FROM users WHERE email='ADMIN'")
    h.sql(schema)
    h.sql(seed)
    require(h.sql("SELECT * FROM users WHERE email='ADMIN'") == initial_record,
            "Setup rerun changed the existing default account.")

    # Public sign-up continues to require an email, so this username cannot be
    # used to request administrator privileges through registration.
    denied(h.client().api("register.php", {
        "name": "Registration Attempt", "email": USERNAME,
        "password": REPLACEMENT_PASSWORD, "is_admin": True,
    }), "Reserved username public registration", status=400, code="email_format")

    blocked = h.client()
    for _ in range(8):
        denied(blocked.api("login.php", {"email": USERNAME, "password": "incorrect-password"}),
               "Incorrect default-account password", status=401, code="login_failed")
    denied(blocked.api("login.php", {"email": USERNAME, "password": INITIAL_PASSWORD}),
           "Default-account login throttle", status=429, code="too_many_attempts")
    h.sql("UPDATE login_attempts SET attempted_at=UTC_TIMESTAMP()-INTERVAL 16 MINUTE "
          "WHERE email='ADMIN'")

    admin, other_session = h.client(), h.client()
    user = login(admin, "  " + USERNAME + "  ", INITIAL_PASSWORD)
    admin_id = user["id"]
    require(user["email"] == USERNAME and user["is_admin"] is True
            and user["must_change_password"] is True,
            "Default login did not authenticate as an administrator requiring password change.")
    assert_no_credentials(user)
    require(h.sql("SELECT COUNT(*) FROM login_attempts WHERE email='ADMIN'") == "0",
            "Successful default login did not clear failed attempts.")
    login(other_session, USERNAME, INITIAL_PASSWORD)
    require(successful(admin.api("session.php"), "Default session hydration")
            ["user"]["must_change_password"] is True,
            "Session lost the mandatory password-change requirement.")
    for path, body in (
        ("admin/students.php", None),
        ("admin/students.php", {"name": "Blocked", "email": "blocked@example.test"}),
        ("access.php", None),
        ("progress.php?course=spa", None),
    ):
        denied(admin.api(path, body), "Unchanged default password application access",
               status=403, code="password_change_required")

    changed = successful(admin.api("change-password.php", {
        "current_password": INITIAL_PASSWORD, "new_password": REPLACEMENT_PASSWORD,
    }), "Default administrator password replacement")
    require(changed["user"]["must_change_password"] is False,
            "Password replacement did not clear the required-change flag.")
    require(h.sql("SELECT session_version FROM users WHERE email='ADMIN'") == "2",
            "Password replacement did not advance the session version.")
    require(h.sql("SELECT password_hash FROM users WHERE email='ADMIN'") != initial_hash,
            "Password replacement did not update the stored hash.")
    denied(other_session.api("session.php"), "Other default-password session", status=401)
    overview = successful(admin.api("admin/students.php"), "Administrator dashboard after password change")
    assert_no_credentials(overview)
    require(overview["summary"]["total_students"] == learner_count
            and all(student["id"] != admin_id for student in overview["students"]),
            "Default administrator was included in learner results or totals.")
    denied(h.client().api("login.php", {"email": USERNAME, "password": INITIAL_PASSWORD}),
           "Replaced default password", status=401, code="login_failed")
    require(login(h.client(), USERNAME, REPLACEMENT_PASSWORD)["must_change_password"] is False,
            "Replacement password cannot authenticate normally.")

    changed_record = h.sql("SELECT * FROM users WHERE email='ADMIN'")
    h.sql(seed)
    h.sql(schema)
    require(h.sql("SELECT * FROM users WHERE email='ADMIN'") == changed_record,
            "Setup restored the default password or changed account/session state.")
    h.sql("UPDATE users SET is_active=0,session_version=session_version+1 WHERE email='ADMIN'")
    disabled_record = h.sql("SELECT * FROM users WHERE email='ADMIN'")
    h.sql(schema)
    h.sql(seed)
    require(h.sql("SELECT * FROM users WHERE email='ADMIN'") == disabled_record,
            "Setup reactivated or changed a disabled administrator.")
    denied(admin.api("admin/students.php"), "Disabled administrator's existing session", status=401)
    for password in (INITIAL_PASSWORD, REPLACEMENT_PASSWORD):
        denied(h.client().api("login.php", {"email": USERNAME, "password": password}),
               "Disabled administrator login", status=401, code="login_failed")
    for table in ("progress", "course_access"):
        require(h.sql(f"SELECT COUNT(*) FROM {table} WHERE user_id={admin_id}") == "0",
                "Default administrator setup or login created learner course data.")


def main():
    schema = (BACKEND / "schema.sql").read_text(encoding="utf-8")
    admin_migration = (BACKEND / "migrations/20261105_admin_dashboard.sql").read_text(encoding="utf-8")
    seed = (BACKEND / "migrations/20261106_default_admin.sql").read_text(encoding="utf-8")
    for installation in ("fresh", "migrated"):
        with isolated_backend() as h:
            if installation == "fresh":
                h.sql(schema)
            else:
                h.sql(LEGACY_SCHEMA)
                learner_hash = h.hash("existing-learner-123!")
                h.sql("INSERT INTO users(name,email,password_hash,role) VALUES "
                      f"('Existing Learner','existing@example.test','{learner_hash}','manager');")
                h.sql("INSERT INTO progress(user_id,course_id,data) VALUES (1,'spa','{\"knownWords\":[\"Towel\"]}');")
                h.sql("INSERT INTO course_access(user_id,course_id,started_at,expires_at) VALUES "
                      "(1,'spa',UTC_TIMESTAMP()-INTERVAL 5 DAY,UTC_TIMESTAMP()+INTERVAL 25 DAY);")
                h.sql(admin_migration)
                require(h.sql("SELECT COUNT(*) FROM users WHERE is_admin=1") == "0",
                        "The existing admin migration must not promote learner professions.")
            original_learning = learning_records(h)
            original_learners = h.sql("SELECT * FROM users WHERE email<>'ADMIN' ORDER BY id")
            h.sql(seed)
            h.sql(seed)
            exercise_account(h, schema, seed, 0 if installation == "fresh" else 1)
            require(learning_records(h) == original_learning, "Setup or administrator login changed learner progress/access.")
            require(h.sql("SELECT * FROM users WHERE email<>'ADMIN' ORDER BY id") == original_learners,
                    "Setup or administrator login changed existing learner accounts.")

            if installation == "migrated":
                # A conflicting identifier may exist in a manually managed DB.
                # Seeding must not promote, reactivate, or overwrite that row.
                h.sql("CREATE DATABASE nimman_default_collision; USE nimman_default_collision; "
                      + LEGACY_SCHEMA + admin_migration, database=False)
                h.sql("USE nimman_default_collision; INSERT INTO users "
                      "(name,email,password_hash,is_admin,is_active,must_change_password,session_version) VALUES "
                      f"('Existing Reserved Account','admin','{learner_hash}',0,0,0,7);", database=False)
                collision = h.sql("USE nimman_default_collision; SELECT * FROM users;", database=False)
                h.sql("USE nimman_default_collision; " + seed + seed + schema, database=False)
                require(h.sql("USE nimman_default_collision; SELECT * FROM users;", database=False) == collision,
                        "Setup overwrote or promoted an existing reserved-identifier account.")
        print(f"PASS: {installation} setup, authentication/throttling, mandatory password change, and safe reruns.")
    print("PASS: existing accounts and learning records preserved; disposable test resources cleaned up.")


if __name__ == "__main__":
    main()
