/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */
declare class MyKingdom {
    color: string;
    name: string;
    Alive?: boolean;
    type?: number;
    constructor(color: string, name: string, Alive: boolean, type: number);
    fashionSense(): string;
    dogs(name: string, food: string, age: number): string;
    cats(name: string, noun: string): string;
    wildBeast(country: string): string;
    mix(newkingdom: MyKingdom): any;
}
declare const zoo: MyKingdom;
declare let myZOO: Object;
