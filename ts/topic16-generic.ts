/**
 * 
 * allows the client to decide the type
 */

function genericTests<T>(params: T): T {
    return params;
}
function genericTest<TYPE>(params: TYPE): TYPE {
    return params;
}

function extendngFunctions<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x = extendngFunctions({ a: "hello" }, { b: 42 });// x now has both `a` and `b
var a = x.a;
var b = x.b;

class Gen<type, value> {
    constructor(public argument: type, param: value) { }
}

let myCar = new Gen<string, boolean>('cate', true)

let myPocket = new Gen<number, boolean>(45, true)

/**
 * constrains in generic
 */
class Gen2<type, value extends Array<string>>{
    constructor(public argument: type, param: value) { }
}
let myPockets = new Gen2<number, string[]>(45, ['something long'])
