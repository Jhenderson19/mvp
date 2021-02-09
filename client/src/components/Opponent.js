import React, { useState } from "react";
import { render } from "react-dom";

function createMarkup(text) {
  return {__html: text};
}

function Opponent(props) {
  return (
    <tr width="25%">
      <td id="Opponent" className="trLabel">
        <h3>Opponents</h3>
      </td>
      <td>
        <div dangerouslySetInnerHTML={createMarkup(props.text)} />
      </td>
    </tr>
  )
}

export default Opponent;