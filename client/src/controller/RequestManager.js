import $ from 'jquery'
import Promise from 'bluebird'

class RequestManager {
  constructor() {

  }
  getRoom(cb) {
    $.ajax({
      url: "/api/room",
      dataType: 'json',
      success: cb,
      error: (err) => {
        console.error(err);
      }
    })
  }
  getSaveByName(saveName, cb) {
    $.ajax({
      url: 'api/save/lookup',
      type: 'POST',
      dataType: 'json',
      data: {saveName},
      success: cb,
      error: (err) => {
        console.error(err);
      }
    })
  }
  sendSave(data, cb) {
    $.ajax({
      url: 'api/save/record',
      type: 'POST',
      dataType: 'json',
      data: {
        saveName: data.saveName,
        roomsRequired: data.roomsRequired,
        roomsCompleted: data.roomsCompleted
      },
      success: cb,
      error: (err) => {
        console.error(err);
      }
    })
  }
}

export default new RequestManager();