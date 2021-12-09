import {FC, useState} from "react";

interface Command {
    execute(): void;
}

export class HangmanReceiver {
    private classes: string[] = [];
    private callback: any;

    constructor(callback: () => any) {
        this.callback = callback;
    }

    public add(content: string) : void {
        this.classes.push(content);
        this.callback();
    }

    public render(): any {
        return (
            <div className={this.classes.join(' ')}>
                Hangman
            </div>
        );
    }
}

export class HangmanCommand implements Command {
    private receiver: HangmanReceiver;
    private image: string;

    constructor(receiver: HangmanReceiver, image: string) {
        this.receiver = receiver;
        this.image = image;
    }

    execute(): void {
        this.receiver.add(this.image);
    }
}

export class HangmanInvoker {
    private commands: Command[] = [];

    public addCommand(command: Command): void {
        this.commands.push(command);
    }

    public execute(): void {
        for (let command of this.commands) {
            command.execute();
        }
    }
}