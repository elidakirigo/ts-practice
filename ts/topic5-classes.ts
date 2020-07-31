/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */

//  with javascript the classes will be compiled to ES5 not ES6
class MyKingdom {
    color: string;
    name: string;
    Alive?: boolean;
    type?: number

    constructor(color: string, name: string, Alive: boolean, type: number) {
        this.color = color;
        this.name = name;
        this.Alive = Alive;
        this.type = type;
    }
    public fashionSense() {
        return `i am ${this.name} with a fashion sense of ${this.color} type design ,welcome to my blog!`
    }
    public dogs(name: string, food: string, age: number) {
        return `my favourite dog was called ${name} and loved feeding him ${food} since he was of age ${age}`;
    }
    public cats(name: string, noun: string) {
        return `my first cat called ${name}, was very ${noun}`
    }

    public wildBeast(country: string) {
        return `the first ever wild beast i saw was in ${country}`
    }
    public mix(newkingdom : MyKingdom){
        return new newkingdom('cde', 'penny', true, 7);
    }
}
const zoo = new MyKingdom('pink', 'penny', true, 6);
let myZOO: Object = {
    personal_life: zoo.fashionSense(),
    favourite_animals: {
        1: zoo.cats('satey', 'tedious'),
        2: zoo.dogs('jimmy', 'meat', 32),
        3: zoo.wildBeast('morroco')
    }
}

