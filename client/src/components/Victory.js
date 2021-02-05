import React, { useState } from "react";
import { render } from "react-dom";

function Victory(props) {
  return (
    <tr>
      <td id="Victory" className="trLabel">
        <h3>Victory Condition</h3>
      </td>
      <td>
        {props.text}
      </td>
    </tr>
  )
}

export default Victory;