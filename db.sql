CREATE TABLE users (user_id INTEGER PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL);

INSERT INTO users(user_id, first_name, last_name, email, password) VALUES(0, 'sys', 'admin', 'sys.admin@whatever.com', 'test1');
INSERT INTO users(user_id, first_name, last_name, email, password) VALUES(1, 'Gaston', 'Vejar', 'gaston.vejar@whatever.com', 'test2');
INSERT INTO users(user_id, first_name, last_name, email, password) VALUES(2, 'Maitreyee', 'Dingare', 'maitreyee.dingare@whatever.com', 'test3');
INSERT INTO users(user_id, first_name, last_name, email, password) VALUES(3, 'Sunny', 'Banawalikar', 'sunny.banawalikar@whatever.com', 'test4');
INSERT INTO users(user_id, first_name, last_name, email, password) VALUES(4, 'Sumuka', 'Gummaraju', 'sumuka.Gummaraju@whatever.com', 'test5');
