import {MenuState} from "./MenuStateMachine";
import {MainMenuState} from "./MainMenuState";

export class OptionsMenuState extends MenuState {
    transitionToMain() {
        this.context.transitionTo(new MainMenuState());
    }

    render() {
        return (
            <div>
                Options Menu
                <button onClick={() => {
                    this.transitionToMain();
                }}>Back</button>
            </div>
        );
    }
}