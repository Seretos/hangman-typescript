import {MenuState} from "./GameContext";
import {GameState} from "./GameState";
import {FC, useState} from "react";

export enum Difficulty {
    Easy=0,
    Normal=1,
    Hard=2
}

export class StartGameState extends MenuState{
    render() {
        return (
            <div>
                <StartGameForm username={'username'}
                               difficulty={Difficulty.Normal}
                               transition={(username, difficulty) => {
                                   this.context.transitionTo(new GameState(username, difficulty));
                               }}/>
            </div>
        );
    }
}

type StartGameProps = {
    username: string;
    difficulty: Difficulty;
    transition: (username: string, difficulty: Difficulty) => void
}

const StartGameForm: FC<StartGameProps> = (props) => {
    const [username, setUsername] = useState(props.username);
    const [difficulty, setDifficulty] = useState(props.difficulty);

    function handleUsernameChange(event: any) {
        setUsername(event.target.value);
    }

    function handleDifficultyChange(event: any) {
        setDifficulty(event.target.value);
    }

    function submitForm() {
        props.transition(username, difficulty);
    }

    return (
        <form onSubmit={submitForm}>
            <input type={'text'} value={username} onChange={handleUsernameChange}/>
            <select defaultValue={difficulty} onChange={handleDifficultyChange}>
                <option value={Difficulty.Easy}>easy</option>
                <option value={Difficulty.Normal}>normal</option>
                <option value={Difficulty.Hard}>hard</option>
            </select>
            <button onClick={() => {
                submitForm();
            }}>Start Game</button>
        </form>
    );
}