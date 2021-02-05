import React from "react";

function RoomHandler(props) {
  return (
    <div>
      <button onClick={props.getRoom}>Generate Room</button>&nbsp;
      <button onClick={props.completeRoom}>Room Completed!</button>&nbsp;
      <button onClick={props.cancelRoom}>Cancel Room</button>
    </div>
  )
}

export default RoomHandler;