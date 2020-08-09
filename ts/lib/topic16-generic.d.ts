/**
 *
 * allows the client to decide the type
 */
declare function genericTests<T>(params: T): T;
declare function genericTest<TYPE>(params: TYPE): TYPE;
declare function extendngFunctions<T, U>(first: T, second: U): T & U;
declare var x: {
    a: string;
} & {
    b: number;
};
declare var a: string;
declare var b: number;
declare class Gen<type, value> {
    argument: type;
    constructor(argument: type, param: value);
}
declare let myCar: Gen<string, boolean>;
declare let myPocket: Gen<number, boolean>;
/**
 * constrains in generic
 */
declare class Gen2<type, value extends Array<string>> {
    argument: type;
    constructor(argument: type, param: value);
}
declare let myPockets: Gen2<number, string[]>;
