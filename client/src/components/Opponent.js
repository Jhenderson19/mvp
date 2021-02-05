import React, { useState } from "react";
import { render } from "react-dom";

function Opponent(props) {
  return (
    <tr>
      <td id="Opponent">
        <h3>Opponents</h3>
      </td>
      <td>
        {props.text}
      </td>
    </tr>
  )
}

export default Opponent;