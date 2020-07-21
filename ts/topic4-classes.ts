/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */

//  with javascript the classes will be compiled to ES5 not ES6
<<<<<<< HEAD
class MyKingdom {
    constructor(public color: string, public name: string, private Alive?: boolean, public type?: number) {
=======
class AnimalKingdom {


    constructor(public color: string, public name: string, private Alive: boolean,public type : number) {
>>>>>>> 6b9378423e511d43c9ed02854468cacc8591e29f
        this.color = color;
        this.name = name;
        this.Alive = Alive;
        this.type = type;
    }

<<<<<<< HEAD
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
console.log(myZOO);
=======
    dogs(type) {

    }
    cats(type) {

    }

    wildBeast(type) {

    }
}
>>>>>>> 6b9378423e511d43c9ed02854468cacc8591e29f
