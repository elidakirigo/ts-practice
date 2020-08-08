// var something;
// (function (something) {
//     something.foo = 675;
// })(something || (something = {}))
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
