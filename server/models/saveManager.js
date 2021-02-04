var db = require('../db/db.js');
var Promise = require('bluebird');
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
      })
  }
}

module.exports = new SaveManager();