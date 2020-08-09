/**
 * also use
 * tsc topic4-enum --preserveConstEnums
 * npm i core-js --save-dev
 */
declare enum Design {
    pretty = 0,
    cute = 1,
    plain = 2,
    classy = 3
}
declare let myChoice: Design;
declare let mysize: object;
declare enum Colors {
    red = 4,
    blue = 5,
    green = 6,
    rebeccaPurple = 7
}
declare let mycolor: Colors;
declare enum AnimalFlags {
    None = 0,
    HasClaws = 1,
    CanFly = 2
}
declare function printAnimalAbilities(animal: {
    flags: AnimalFlags;
}): void;
declare var animal: {
    flags: AnimalFlags;
};
