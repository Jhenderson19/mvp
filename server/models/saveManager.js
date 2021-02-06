var db = require('../db/db');
var Promise = require('bluebird');
db.queryAsync = Promise.promisify(db.query).bind(db);


class SaveManager {
  constructor() {

  }

  get(saveName) {
    return db.queryAsync(`SELECT * FROM SaveGames WHERE name = '${saveName}'`)
      .then((results) => {
        return results
      })
  }

  record(saveData) {
    return db.queryAsync(`INSERT INTO SaveGames (name, roomsRequired, roomsCompleted) VALUES ('${saveData.saveName}', ${saveData.roomsRequired}, ${saveData.roomsCompleted})`);
  }
}

module.exports = new SaveManager();