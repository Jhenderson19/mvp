import React, { useState } from "react";
import { render } from "react-dom";

function Hazard(props) {
  return (
    <tr>
      <td id="Hazard">
        <h3>Hazard Zone</h3>
      </td>
      <td>
        {props.text}
      </td>
    </tr>
  )
}

export default Hazard;