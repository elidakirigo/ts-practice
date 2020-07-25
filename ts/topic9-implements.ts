import { Starks } from "./topic3-interfaces";

class AutoStart implements Starks {
    name: string;
    age: number;
    figure: boolean;
    contactDetails?: number; //the question mark entails its not a must for it to be filled.
    initials(description: string): void;

    constructor(){
        this.name = mycode;
        this.age = myAge;
        this.figure = false;
    }
    initials(figure : boolean) :void{
        console.log(figure);
    }
}

let reverse = new AutoStart();
reverse.initials('9');