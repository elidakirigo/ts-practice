"use strict";
/**
 *
 * allows the client to decide the type
 */
function genericTests(params) {
    return params;
}
function genericTest(params) {
    return params;
}
function extendngFunctions(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x = extendngFunctions({ a: "hello" }, { b: 42 }); // x now has both `a` and `b
var a = x.a;
var b = x.b;
var Gen = /** @class */ (function () {
    function Gen(argument, param) {
        this.argument = argument;
    }
    return Gen;
}());
var myCar = new Gen('cate', true);
var myPocket = new Gen(45, true);
/**
 * constrains in generic
 */
var Gen2 = /** @class */ (function () {
    function Gen2(argument, param) {
        this.argument = argument;
    }
    return Gen2;
}());
var myPockets = new Gen2(45, ['something long']);
//# sourceMappingURL=topic16-generic.js.map