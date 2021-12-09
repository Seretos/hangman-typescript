import React from 'react';
import './App.css';
import {Game} from "./main/GameContext";
import {MainMenuState} from "./main/MainMenuState";

function App() {
  return (
    <div className="App">
        <Game initialState={new MainMenuState()}/>
    </div>
  );
}

export default App;
