DROP DATABASE chaosDungeon;
CREATE DATABASE chaosDungeon;

USE chaosDungeon;

CREATE TABLE SaveGames (
  id INT PRIMARY KEY,
  name TINYTEXT,
  roomsRequired INT,
  roomsCompleted INT
);