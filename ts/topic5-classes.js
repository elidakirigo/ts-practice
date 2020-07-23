/**
 * ------------------------------
 * ts classes topic 4
 * ------------------------------
 */
//  with javascript the classes will be compiled to ES5 not ES6
var MyKingdom = /** @class */ (function () {
    function MyKingdom(color, name, Alive, type) {
        this.color = color;
        this.name = name;
        this.Alive = Alive;
        this.type = type;
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
var myZOO = {
    personal_life: new MyKingdom('magenta', 'wanjiku').fashionSense(),
    favourite_animals: {
        1: new MyKingdom('magenta', 'wanjiku').cats('satey', 'tedious'),
        2: new MyKingdom('magenta', 'wanjiku').dogs('jimmy', 'meat', 32),
        3: new MyKingdom('magenta', 'wanjiku').wildBeast('morroco')
    }
};
