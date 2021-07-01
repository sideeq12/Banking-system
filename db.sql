-- LIST OF SQL COMMANDS

-- TO CREATE A TABLE OF USERS
--  CREATE TABLE users (id BIGSERIAL NOT NULL PRIMARY KEY,
--      email VARCHAR(50),
--      password TEXT NOT NULL,
--      full_name VARCHAR(50) NOT NULL,
--      balance INT NOT NULL,
--      tag_name VARCHAR(15) NOT NULL
-- );

-- INSERTING ROW IN TO TABLE 
-- INSERT INTO users(
--     email, password, full_name, balance, tag_name)
--     VALUES(
--     'abdwaheed2018@gmail.com', crypt('passpass', gen_salt('bf')), 'WAHEED SODIQ', 200000, '@sideeq12');