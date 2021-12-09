import {FC, useState} from "react";

export abstract class MenuState {
    protected context: GameContext;

    public setContext(context: GameContext) {
        this.context = context;
    }

    public abstract render(): any;
}

class GameContext {
    private readonly callback: any;

    constructor(callback: (state: MenuState) => any) {
        this.callback = callback;
    }

    transitionTo(state: MenuState) {
        this.callback(state);
    }
}

type GameProps = {
    initialState: MenuState;
}

export const Game : FC<GameProps> = (props) => {
    const [state, setState] = useState(props.initialState);
    state.setContext(new GameContext((newState: MenuState) => {
        setState(newState);
    }));

    return (
        <div>
            State Machine
            {state.render()}
        </div>
    );
}