INSERT INTO tb_user (name, email, password) VALUES ('Douglas', 'doug@email.com', '$2a$12$8oCXyJ.x8Ily4p3WkbNa5e4BJQJwlCOgpdvtDhA9Nnamc/dmxmXba');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@email.com', '$2a$12$8oCXyJ.x8Ily4p3WkbNa5e4BJQJwlCOgpdvtDhA9Nnamc/dmxmXba');
INSERT INTO tb_user (name, email, password) VALUES ('John', 'john@email.com', '$2a$12$8oCXyJ.x8Ily4p3WkbNa5e4BJQJwlCOgpdvtDhA9Nnamc/dmxmXba');
INSERT INTO tb_user (name, email, password) VALUES ('Chuck', 'chuck@email.com', '$2a$12$8oCXyJ.x8Ily4p3WkbNa5e4BJQJwlCOgpdvtDhA9Nnamc/dmxmXba');
INSERT INTO tb_user (name, email, password) VALUES ('Barry', 'barry@email.com', '$2a$12$8oCXyJ.x8Ily4p3WkbNa5e4BJQJwlCOgpdvtDhA9Nnamc/dmxmXba');

INSERT INTO tb_role (role_name) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (role_name) VALUES ('ROLE_ADMINISTRATOR');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 2);

