var mynamespaces;
(function (mynamespaces) {
    mynamespaces.username = 'typescript';
    function displayData() {
        return 'display me';
    }
    mynamespaces.displayData = displayData;
})(mynamespaces || (mynamespaces = {}));
///<reference path="topic18-module-import-reference.ts"/>
var newNameSpace = mynamespaces;
console.log(mynamespaces.displayData());
console.log(newNameSpace.displayData);
// tsc topic17-usingReferences --outFile topic17-usingReferences.js
