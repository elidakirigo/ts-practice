// var something;
// (function (something) {
//     something.foo = 675;
// })(something || (something = {}))
/**
 * namespaces are ment to protect modules from being global, or mixing with other vriables
 */
var mynamespace;
(function (mynamespace) {
    mynamespace.user = 'typescript';
    function displayData() {
        return 'display me';
    }
    mynamespace.displayData = displayData;
})(mynamespace || (mynamespace = {}));
console.log(mynamespace.displayData()); //or
console.log(mynamespace.displayData); //or
console.log(mynamespace);
