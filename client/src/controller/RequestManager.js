import $ from 'jquery';

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
      data: {
        saveName: saveName
      },
    }).done((data, status) => {
      console.log('success performing save lookup');
      cb(data);
    }).fail((data, status) => {
      console.log('error performing save lookup');
      console.error(data);
    });
  }
  sendSave(data, cb) {
    $.ajax({
      url: 'api/save/record',
      type: 'POST',
      dataType: 'text',
      data: {
        saveName: data.saveName,
        roomsRequired: data.roomsRequired,
        roomsCompleted: data.roomsCompleted
      }
    }).done((data, status) => {
      console.log('success performing save send');
      cb(data);
    }).fail((data, status) => {
      console.log('error performing save send');
      console.error(data);
    });
  }
}

export default new RequestManager();