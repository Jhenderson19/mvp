import React from "react";

function SaveFrame(props) {
  return (
    <div>
      <button onClick={
        ()=> {
          var dataToSend = {};
          dataToSend.saveName = window.prompt('What to call save?', 'save');
          dataToSend.roomsRequired = props.roomReq;
          dataToSend.roomsCompleted = props.roomComp;

          console.log('preparing to send data to server');
          console.log(dataToSend);

          props.requestManager.sendSave(dataToSend, () => {
            console.log('save data sent!')
          })
        }
      }>Save Game</button>&nbsp;
      <button onClick={
        () => {
          console.log('pressed load button');
          props.loadGame();
        }
      }>Load Game</button>
    </div>
  )
}

export default SaveFrame;