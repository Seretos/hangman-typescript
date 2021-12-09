import {FC, useState} from "react";

export abstract class MenuState {
    protected context: MenuStateMachineContext;

    public setContext(context: MenuStateMachineContext) {
        this.context = context;
    }

    public abstract render(): any;
}

type MenuMachineProps = {
    state: MenuState;
}

class MenuStateMachineContext {
    private callback: any;

    constructor(callback: (state: MenuState) => any) {
        this.callback = callback;
    }

    transitionTo(state: MenuState) {
        this.callback(state);
    }
}

export const MenuStateMachine : FC<MenuMachineProps> = (props) => {
    const [state, setState] = useState(props.state);
    state.setContext(new MenuStateMachineContext((newState: MenuState) => {
        setState(newState);
    }));

    return (
        <div>
            State Machine
            {state.render()}
        </div>
    );
}

/*export class MenuStateMachine {
    private state: MenuState;

    constructor(state: MenuState) {
        this.transitionTo(state);
    }

    public transitionTo(state: MenuState): void {
        console.log('start transition');
        state.setContext(this);
        this.state = state;
    }

    render() {
        return (
            <div>
                State Machine
                {this.state.render()}
            </div>
        )
    }
}*/