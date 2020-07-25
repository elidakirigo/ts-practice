/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */
//  with javascript the classes will be compiled to ES5 not ES6
var MyKingdom = /** @class */ (function () {
    function MyKingdom() {
        this.color = color;
        this.name = name;
        this.Alive = Alive;
        this.type = type;
    }
    MyKingdom.prototype.fashionSense = function () {
        return "i am " + this.name + " with a fashion sense of " + this.color + " type design ,welcome to my blog!";
    };
    MyKingdom.prototype.dogs = function (name, food, age) {
        return "my favourite dog was called " + name + " and loved feeding him " + food + " since he was of age " + age;
    };
    MyKingdom.prototype.cats = function (name, noun) {
        return "my first cat called " + name + ", was very " + noun;
    };
    MyKingdom.prototype.wildBeast = function (country) {
        return "the first ever wild beast i saw was in " + country;
    };
    return MyKingdom;
}());
var zoo = new MyKingdom();
var myZOO = {
    personal_life: zoo.fashionSense(),
    favourite_animals: {
        1: zoo.cats('satey', 'tedious'),
        2: zoo.dogs('jimmy', 'meat', 32),
        3: zoo.wildBeast('morroco')
    }
};
