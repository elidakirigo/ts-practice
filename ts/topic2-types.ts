/**
 * ----------------------------------------------------------
 * string types examples note :ES6 can be used in typescript
 * ----------------------------------------------------------
 */
let myName: string = "elida";

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
function myID(myName: string): string {
    let result: string = 'i am ' + myName;
    return result;
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

//  array of objects
let itemOfNames: Array<object> = [{
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
let noOfBalls : Object = {
    football : 2,
    netBall :7,
    tennisBall : 45
}

// or 
let noOfBall : {} = {
    football : 2,
    netBall :7,
    tennisBall : 45
}
/**
 * --------------
 * THE END
 * --------------
 */