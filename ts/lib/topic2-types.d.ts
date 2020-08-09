/**
 * ----------------------------------------------------------
 * string types examples note :ES6 can be used in typescript
 * ----------------------------------------------------------
 */
declare let myName: string | string[] | boolean;
declare let myNames: {
    first: string;
    second: string;
};
/**
 * ----------------------
 * number types examples
 * ----------------------
 */
declare let myAge: number;
/**
 * ----------------------------------------------------------
 * function types example i.e on parameters and return types
 * ----------------------------------------------------------
 */
declare function myID(myName: string | number): boolean;
/**
 * -----------------------
 * array string in types
 * -----------------------
 */
declare let GroupNames: Array<string>;
declare let OurNames: string[];
/**
 * ----------------------------
 * TUPPLES in typescript
 * ----------------------------
 */
declare let ages: [string, boolean, number, string];
declare let agesAgain: (string | boolean | number | string)[];
declare let itemOfNames: Array<object | boolean>;
declare let collectionOfNames: Array<Array<string>>;
/**
 * ---------------------------------
 *ojects
 * ---------------------------------
 */
declare let noOfBalls: object;
declare let noOfBall: {
    football: number;
    netBall: number;
    tennisBall: number;
};
/**
 * ------------------------
 * any type
 * ------------------------
 */
declare let amount: any;
declare let typesOfSugar: any[];
/**
 * --------------
 * THE END
 * --------------
 */ 
