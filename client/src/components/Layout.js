import React, { useState } from "react";
import { render } from "react-dom";

function Layout(props) {
  return (
    <tr>
      <td id="Layout">
        <h3>Room Layout</h3>
      </td>
      <td>
        <img src={`/layouts/${props.src}`} />
      </td>
    </tr>
  )
}

export default Layout;