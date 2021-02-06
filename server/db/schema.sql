DROP DATABASE chaosDungeon;
CREATE DATABASE chaosDungeon;

USE chaosDungeon;

CREATE TABLE SaveGames (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(80) UNIQUE NOT NULL,
  roomsRequired INT,
  roomsCompleted INT
);