import {MenuState} from "./MenuStateMachine";
import {OptionsMenuState} from "./OptionsMenuState";

export class MainMenuState extends MenuState{
    transitionToOptions() {
        this.context.transitionTo(new OptionsMenuState());
    }

    render() {
        return (
            <div>
                Main Menu
                <button onClick={() => {
                    this.transitionToOptions();
                }}>Options</button>
            </div>
        );
    }
}