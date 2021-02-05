import React, { useState } from "react";
import { render } from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Chaos Dungeon</h1>
        <table>
          <Opponents text={this.state.opponents}/>
          <Hazard text={this.state.hazard}/>
          <Layout src={this.state.layout}/>
        </table>
      </div>
    )
  }
}

export default App;