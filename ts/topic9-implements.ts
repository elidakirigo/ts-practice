// import { Starks } from "./topic3-interfaces";

export class AutoStart
//  implements Starks 
 {
    // name: string;
    // age: number;
    figure: boolean;
    contactDetails?: number; //the question mark entails its not a must for it to be filled.
    // initials(description: string): void;

    constructor(){
        this.figure = false;
    }
    initials(figure : boolean) :void{
        console.log(figure);
    }
}

// reverse.initials('9');