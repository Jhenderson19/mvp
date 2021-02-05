import React, { useState } from "react";
import { render } from "react-dom";
import Hazard from "./Hazard.js";
import Layout from "./Layout.js";
import Opponent from "./Opponent.js";
import Victory from "./Victory.js";
import GameInfo from "./GameInfo.js";
import RoomHandler from "./RoomHandler.js";

//HELPER FUNCTION
function rollDice(x) {
  return Math.floor(Math.random() * x) + 1;
}

//CLASS
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: "uninitialized",
      roomsRequired: undefined,
      roomsCompleted: undefined,
      layout: 'default/default.png'
    };

  }

  startGame() {
    var newState = {
      gameState: 'runnning',
      roomsRequired: rollDice(4) + rollDice(4) + 2,
      roomsCompleted: 0,
      currentRoom: {
        opponents: '',
        hazard: ""
      }
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h1>Chaos Dungeon</h1>
        <GameInfo roomReq={this.state.roomsRequired} roomComp={this.state.roomsCompleted} start={this.startGame.bind(this)}/> <br />
        <RoomHandler /> <br />
        <table>
          <tbody>
            <Opponent text={this.state.opponents}/>
            <Hazard text={this.state.hazard}/>
            <Layout src={this.state.layout}/>
            <Victory text={this.state.victory}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;