import React, { useState } from "react";
import { render } from "react-dom";
import Hazard from "./Hazard.js";
import Layout from "./Layout.js";
import Opponent from "./Opponent.js";
import Victory from "./Victory.js";
import GameInfo from "./GameInfo.js";
import RoomHandler from "./RoomHandler.js";
import SaveFrame from "./SaveFrame.js";

//HELPER FUNCTION
function rollDice(x) {
  return Math.floor(Math.random() * x) + 1;
}

//CLASS
class App extends React.Component {
  //INITIALIZE
  constructor(props) {
    super(props);

    this.requestManager = props.RequestManager;
    this.emptyRoom = {
      opponents: '',
      hazard: '',
      layout: 'default',
      victory: ''
    }

    this.gameEndStr = '';

    this.roomLoaded = false;

    this.state = {
      gameState: "uninitialized",
      roomsRequired: undefined,
      roomsCompleted: undefined,
      currentRoom: this.emptyRoom,
    };

  }

  //LOGIC
  startGame() {
    var newState = {
      gameState: 'runnning',
      roomsRequired: rollDice(4) + rollDice(4) + 2,
      roomsCompleted: 0
    }
    this.setState(newState);
  }

  getRoom() {
    if(this.state.gameState !== "completed") {

      this.requestManager.getRoom((data)=> {
        console.log(data);

        this.roomLoaded = true;

        this.setState({
          currentRoom: {
            opponents: data.opponents,
            hazard: data.hazard,
            layout: data.layout,
            victory: data.victory
          }
        });
      })

    }
  }

  cancelRoom() {
    this.setState({ currentRoom: this.emptyRoom })
    this.roomLoaded = false;
  }

  completeRoom() {
    if(this.roomLoaded) {
      this.cancelRoom();

      if(this.state.roomsCompleted + 1 === this.state.roomsRequired) {
        this.endGame();
      }

      this.setState({
        roomsCompleted: this.state.roomsCompleted + 1
      })
    }
  }

  endGame() {
    this.setState({
      gameState: "completed"
    })
    this.gameEndStr = ' - Dungeon Clear! ';
  }

  loadGame() {
    var gameToLoad = window.prompt('Load Game', 'save');

    this.requestManager.getSaveByName(gameToLoad, (data) => {

      var newState = {};
      newState.gameState = 'running';
      newState.roomsCompleted = data.roomsCompleted;
      newState.roomsRequired = data.roomsRequired;

      this.setState(newState);
    })

  }

  //VIEW
  render() {
    return (
      <div>

        <h1>Chaos Dungeon {this.gameEndStr}</h1>

        <GameInfo
          roomReq={this.state.roomsRequired}
          roomComp={this.state.roomsCompleted}
          start={this.startGame.bind(this)}
        /> <br />

        <RoomHandler
          getRoom={this.getRoom.bind(this)}
          completeRoom={this.completeRoom.bind(this)}
          cancelRoom={this.cancelRoom.bind(this)}
        /> <br />

        <table>
          <tbody>
            <Opponent text={this.state.currentRoom.opponents}/>
            <Hazard text={this.state.currentRoom.hazard}/>
            <Layout src={this.state.currentRoom.layout}/>
            <Victory text={this.state.currentRoom.victory}/>
          </tbody>
        </table> <br />

        <SaveFrame
          roomReq={this.state.roomsRequired}
          roomComp={this.state.roomsCompleted}
          requestManager={this.requestManager}
          loadGame={this.loadGame.bind(this)}
        />

      </div>
    )
  }
}

export default App;