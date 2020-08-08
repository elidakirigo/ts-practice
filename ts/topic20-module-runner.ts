import Data = require('./topic19-module-ext');

// creating aliases
import data = Data.username;
// import aliases
import { displayData as functionData, username as newNameImport } from './topic19-module-ext';

// or

import * as newData from './topic19-module-ext';
import { displayData } from './topic19-module-ext';

console.log(Data.displayData());
console.log(newData);
console.log(displayData);
console.log(functionData);
console.log(newNameImport);
