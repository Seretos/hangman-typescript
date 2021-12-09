import {MenuState} from "./GameContext";
import {Difficulty} from "./StartGameState";
import {HangmanCommand, HangmanInvoker, HangmanReceiver} from "../hangman/HangmanInvoker";
import {FC, useState} from "react";

type HangmanRendererProps = {
    invoker: HangmanInvoker
}

export const HangmanRenderer : FC<HangmanRendererProps> = (props) => {
    const [state,setState] = useState(0);
    const [receiver] = useState(new HangmanReceiver(() => {
        setState(state+1);
    }));

    return (
        <div>
            Hangman renderer
            {receiver.render()}
            <button onClick={() => {
                props.invoker.addCommand(new HangmanCommand(receiver, 'test2.png'));
                props.invoker.execute();
            }}>add</button>
        </div>
    );
}

export class GameState extends MenuState {
    private readonly username: string;
    private readonly difficulty: Difficulty;
    private readonly invoker: HangmanInvoker;

    constructor(username: string, difficulty: Difficulty) {
        super();
        this.username = username;
        this.difficulty = difficulty;

        console.log('start game for ' + this.username + ' with difficulty ' + this.difficulty)

        this.invoker = new HangmanInvoker();
        //this.invoker.addCommand(new HangmanCommand(this.receiver, 'test.png'));
        //this.invoker.execute();
    }

    render() {
        return (
            <div>
                Game
                <HangmanRenderer invoker={this.invoker}/>
            </div>
        );
    }
}