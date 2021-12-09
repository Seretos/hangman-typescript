import {MenuState} from "./GameContext";
import {OptionsMenuState} from "./OptionsMenuState";
import {StartGameState} from "./StartGameState";

export class MainMenuState extends MenuState {
    transitionToOptions() {
        this.context.transitionTo(new OptionsMenuState());
    }

    transitionToStartGame() {
        this.context.transitionTo(new StartGameState());
    }

    render() {
        return (
            <div>
                Main Menu
                <button onClick={() => {
                    this.transitionToStartGame();
                }}>Start Game</button>
                <button onClick={() => {
                    this.transitionToOptions();
                }}>Options</button>
            </div>
        );
    }
}