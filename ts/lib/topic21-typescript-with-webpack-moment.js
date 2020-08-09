"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var moment = require('moment');
Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: 'moment js '*/ 'moment')); }).then(function (moment) {
    // lazymodule ha all of the proper types, autocomplete works,
    // type checking works, code references work \o/
    var time = moment().format();
    console.log('typeScrip >=2.4.0 Dynamic Import Expression:');
    console.log(time);
}).catch(function (err) {
    console.log('failed to load moment', err);
});
//# sourceMappingURL=topic21-typescript-with-webpack-moment.js.map