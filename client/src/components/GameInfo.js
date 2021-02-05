import React, { useState } from "react";
import { render } from "react-dom";

function GameInfo(props) {
  return (
    <div>
      Rooms Required: {props.roomReq}<br />
      Rooms Completed: {props.roomComp}<br />
      <button onClick={props.start}>Generate Room Requirement</button>
    </div>
  )
}

export default GameInfo;