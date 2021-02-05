var db = require('../db/db.js');
var Promise = require('bluebird');
const e = require('express');
db = Promise.promisifyAll(db);

class SaveManager {
  constructor() {

  }

  get(saveName) {
    db.createQueryAsync(`SELECT * FROM SaveGames WHERE name = ${saveName}`)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log('err =>',err);
      });
  }

  record(saveData) {
    db.createQueryAsync(`INSERT INTO SaveGames (name, roomsRequired, roomsCompleted)
    VALUES (${saveData.name}, ${saveData.roomsRequired}, ${saveData.roomsCompleted}`)
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

module.exports = new SaveManager();