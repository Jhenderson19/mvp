import React, { useState } from "react";
import { render } from "react-dom";


class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        THIS MIGHT WORK MAYBE
      </div>
    )
  }
}


render(<App />, document.getElementById("root"));