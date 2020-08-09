/**
 * also use 
 * tsc topic4-enum --preserveConstEnums
 * npm i core=js --save-dev
 */
enum Design { pretty, cute, plain, classy }

let myChoice: Design = Design.classy
let mysize: object = {
    mysize: 10, sizeNo: 23
}

enum Colors {
    red = 4,
    blue,
    green,
    rebeccaPurple
}

let mycolor = Colors.red;
mycolor == 4;

enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,

}
function printAnimalAbilities(animal: { flags: AnimalFlags }) {
    var animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
        console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
        console.log('animal can fly');
    }
    if (animalFlags == AnimalFlags.None) {
        console.log('nothing');
    }
}
var animal = {
    flags: AnimalFlags.None
};
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws; printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws; printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly; printAnimalAbilities(animal);