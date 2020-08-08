var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var utensils = /** @class */ (function () {
    function utensils(spoon) {
        this.spoon = spoon;
        this.spoon = spoon;
        console.log(this.spoon);
    }
    return utensils;
}());
var table = /** @class */ (function (_super) {
    __extends(table, _super);

    function table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return table;
}(utensils));
var teaparty = new table('ken hery');