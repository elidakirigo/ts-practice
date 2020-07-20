/**
 * -------------------------------------------------------------------------------
 * interfaces MUST start with capital since they rule out like javascript classes
 * -------------------------------------------------------------------------------
 */
var myDetails = {
    name: 'elida wanjiku',
    age: 25,
    figure: true,
    initials: "3459 to infinity and beyond"
};
var Design;
(function (Design) {
    Design[Design["pretty"] = 0] = "pretty";
    Design[Design["cute"] = 1] = "cute";
    Design[Design["plain"] = 2] = "plain";
    Design[Design["classy"] = 3] = "classy";
})(Design || (Design = {}));
var myChoice = Design.classy;
var mysize = {
    mysize: 10, sizeNo: 23
};
function label(mysize, _a) {
    var number = _a.sizeNo;
}
label(mysize, null);
