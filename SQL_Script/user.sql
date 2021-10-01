create database valo_chat_clone;
use valo_chat_clone;

CREATE TABLE users (
	id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email NVARCHAR(200) NOT NULL UNIQUE,
    phone_number NVARCHAR(200) NOT NULL UNIQUE,
	password NVARCHAR(200) NOT NULL
)

SELECT * FROM valo_chat_clone.user;