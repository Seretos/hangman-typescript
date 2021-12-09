import React from 'react';
import './App.css';
import {MenuStateMachine} from "./menu/MenuStateMachine";
import {MainMenuState} from "./menu/MainMenuState";

function App() {
  return (
    <div className="App">
        <MenuStateMachine state={new MainMenuState()}/>
    </div>
  );
}

export default App;
