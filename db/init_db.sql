CREATE DATABASE IF NOT EXISTS nodedb;

FLUSH PRIVILEGES;

USE nodedb;

create table IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))