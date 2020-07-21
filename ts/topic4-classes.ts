/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */

//  with javascript the classes will be compiled to ES5 not ES6
class AnimalKingdom {


    constructor(public color: string, public name: string, private Alive: boolean,public type : number) {
        this.color = color;
        this.name = name;
        this.Alive = Alive;
        this.type = type;
    }

    dogs(type) {

    }
    cats(type) {

    }

    wildBeast(type) {

    }
}