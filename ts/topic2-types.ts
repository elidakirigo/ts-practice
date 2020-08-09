/**
 * ----------------------------------------------------------
 * string types examples note :ES6 can be used in typescript
 * ----------------------------------------------------------
 */
let myName: string | string[] | boolean = "elida";

let myNames: { first: string; second: string }

myNames = {
    first: 'elida',
    second: 'wanjiku'
}
/**
 * ----------------------
 * number types examples
 * ----------------------
 */
let myAge: number = 25;

/**
 * ----------------------------------------------------------
 * function types example i.e on parameters and return types
 * ----------------------------------------------------------
 */
function myID(myName: string | number): boolean {
    let result: string = 'i am ' + myName;
    return typeof (result) == "string" ? true : false;
}
console.log(myID(myName));

/**
 * -----------------------
 * array string in types
 * -----------------------
 */
let GroupNames: Array<string> = ['crisi', 'james', 'felicity'];
/*or */
let OurNames: string[] = ['crisi', 'james', 'felicity'];
/**
 * ----------------------------
 * TUPPLES in typescript
 * ----------------------------
 */

let ages: [string, boolean, number, string] = ['56', false, 8, 'carrier'];
// or
let agesAgain: (string | boolean | number | string)[] = ['56', false, 8, 'carrier'];

//  array of objects
let itemOfNames: Array<object | boolean> = [{
    1: 'crisi',
    2: 'james',
    3: 'felicity'
}];
// array of array
let collectionOfNames: Array<Array<string>> = [
    ['crisi', 'james', 'felicity'], ['kris', 'yelt']
];

/**
 * ---------------------------------
 *ojects
 * ---------------------------------
 */
let noOfBalls: object = {
    football: 2,
    netBall: 7,
    tennisBall: 45
}

// or 
let noOfBall: { football: number, netBall: number, tennisBall: number } = {
    football: 2,
    netBall: 7,
    tennisBall: 45
}
/**
 * ------------------------
 * any type
 * ------------------------
 */

let amount: any = 'anything can be typed on this data type';
let typesOfSugar: any[] = ['sour', 111, true];
/**
 * --------------
 * THE END
 * --------------
 */