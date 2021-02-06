DROP DATABASE chaosDungeon;
CREATE DATABASE chaosDungeon;

USE chaosDungeon;

CREATE TABLE SaveGames (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TINYTEXT UNIQUE,
  roomsRequired INT,
  roomsCompleted INT
);