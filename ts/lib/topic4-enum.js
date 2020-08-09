"use strict";
/**
 * also use
 * tsc topic4-enum --preserveConstEnums
 */
var Design;
(function (Design) {
    Design[Design["pretty"] = 0] = "pretty";
    Design[Design["cute"] = 1] = "cute";
    Design[Design["plain"] = 2] = "plain";
    Design[Design["classy"] = 3] = "classy";
})(Design || (Design = {}));
var myChoice = Design.classy;
var mysize = {
    mysize: 10, sizeNo: 23
};
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 4] = "red";
    Colors[Colors["blue"] = 5] = "blue";
    Colors[Colors["green"] = 6] = "green";
    Colors[Colors["rebeccaPurple"] = 7] = "rebeccaPurple";
})(Colors || (Colors = {}));
var mycolor = Colors.red;
mycolor == 4;
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
})(AnimalFlags || (AnimalFlags = {}));
function printAnimalAbilities(animal) {
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
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal);
//# sourceMappingURL=topic4-enum.js.map