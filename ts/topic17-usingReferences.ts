///<reference path="topic18-module-import-reference.ts"/>

import newNameSpace = mynamespaces;

console.log(mynamespaces.displayData());
console.log(newNameSpace.displayData);

// tsc topic17-usingReferences --outFile topic17-usingReferences.js