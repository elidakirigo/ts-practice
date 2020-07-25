/**
 * ----------------------------------------------------------
 * string types examples note :ES6 can be used in typescript
 * ----------------------------------------------------------
 */
var myName = "elida";
/**
 * ----------------------
 * number types examples
 * ----------------------
 */
var myAge = 25;
/**
 * ----------------------------------------------------------
 * function types example i.e on parameters and return types
 * ----------------------------------------------------------
 */
function myID(myName) {
    var result = 'i am ' + myName;
    return typeof (result) == "string" ? true : false;
}
console.log(myID(myName));
/**
 * -----------------------
 * array string in types
 * -----------------------
 */
var GroupNames = ['crisi', 'james', 'felicity'];
/*or */
var OurNames = ['crisi', 'james', 'felicity'];
/**
 * ----------------------------
 * TUPPLES in typescript
 * ----------------------------
 */
var ages = ['56', false, 8, 'carrier'];
// or
var agesAgain = ['56', false, 8, 'carrier'];
//  array of objects
var itemOfNames = [{
        1: 'crisi',
        2: 'james',
        3: 'felicity'
    }];
// array of array
var collectionOfNames = [
    ['crisi', 'james', 'felicity'], ['kris', 'yelt']
];
/**
 * ---------------------------------
 *ojects
 * ---------------------------------
 */
var noOfBalls = {
    football: 2,
    netBall: 7,
    tennisBall: 45
};
// or 
var noOfBall = {
    football: 2,
    netBall: 7,
    tennisBall: 45
};
/**
 * ------------------------
 * any type
 * ------------------------
 */
var amount = 'anything can be typed on this data type';
var typesOfSugar = ['sour', 111, true];
/**
 * --------------
 * THE END
 * --------------
 */ 
