/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */

//  with javascript the classes will be compiled to ES5 not ES6
class MyKingdom {


    constructor(public color: string, public name: string, private Alive?: boolean, public type?: number) {
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
}
let myZOO: Object = {
    personal_life: new MyKingdom('magenta', 'wanjiku').fashionSense(),
    favourite_animals: {
        1: new MyKingdom('magenta', 'wanjiku').cats('satey', 'tedious'),
        2: new MyKingdom('magenta', 'wanjiku').dogs('jimmy', 'meat', 32),
        3: new MyKingdom('magenta', 'wanjiku').wildBeast('morroco')
    }
}
