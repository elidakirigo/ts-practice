/**
 * 
 * allows the client to decide the type
 */

function genericTests<T>(params: T) {
    return params;
}
function genericTest<TYPE>(params: TYPE) {
    return params;
}

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
