CREATE DATABASE borgars_db;
USE borgars_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    burger_name varchar (100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    time_created DATETIME NOT NULL,
    PRIMARY KEY (id)
);