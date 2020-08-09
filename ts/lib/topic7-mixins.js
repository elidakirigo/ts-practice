"use strict";
var Flies = /** @class */ (function () {
    function Flies() {
    }
    Flies.prototype.fly = function () {
        alert('Is it a bird? Is it a plane?');
    };
    return Flies;
}());
var Climbs = /** @class */ (function () {
    function Climbs() {
    }
    Climbs.prototype.climb = function () {
        alert('My spider-sense is tingling.');
    };
    return Climbs;
}());
var Bulletproof = /** @class */ (function () {
    function Bulletproof() {
    }
    Bulletproof.prototype.deflect = function () {
        alert('My wings are a shield of steel.');
    };
    return Bulletproof;
}());
var BeetleGuy = /** @class */ (function () {
    function BeetleGuy() {
    }
    return BeetleGuy;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
//# sourceMappingURL=topic7-mixins.js.map