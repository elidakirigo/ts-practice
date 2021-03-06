/**
 * -------------------------------------------------------------------------------
 * interfaces MUST start with capital since they rule out like javascript classes
 * -------------------------------------------------------------------------------
 */
import { AutoStart } from "./topic9-implements";
export interface Starks {
    name: string;
    age: number;
    figure: boolean;
    contactDetails?: number; //the question mark entails its not a must for it to be filled.
    initials(description: string): void;
    undefined(): void;
}

let myDetails: Starks = {
    name: 'elida wanjiku',
    age: 25,
    figure: true,
    initials(described) {
        alert(described);
    },
    undefined(){
       return reverse;
    }
}

let reverse = new AutoStart();
