const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const path = require('path');

class RoomGenerator {
  constructor(){
    this.loaded = false;
    this.hazardData = require('../data/hazards');
    this.opponentData = require('../data/opponents');
    this.victoryData = require('../data/victories');
    fs.readdirAsync(path.join(__dirname, '../data/layouts'))
      .then((files) => {
        this.layouts = [];
        files.map((file) => {
          this.layouts.push(file);
        })
      })
  }

  createRoom() {
    return new Room(
      this.hazardData[this.getRand(this.hazardData.length)],
      this.opponentData[this.getRand(this.opponentData.length)],
      this.victoryData[this.getRand(this.victoryData.length)],
      this.layouts[this.getRand(this.layouts.length)]
    );
  }

  getRand(length) {
    return Math.floor(Math.random() * length);
  }

}
class Room {
  constructor(haz, opp, vic, layout){
    this.hazard = haz;
    this.opponent = opp;
    this.victory = vic;
    this.layout = layout;
  }
}
module.exports = new RoomGenerator();