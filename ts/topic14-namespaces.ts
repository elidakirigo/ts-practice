// var something;
// (function (something) {
//     something.foo = 675;
// })(something || (something = {}))
/**
 * namespaces are ment to protect modules from being global, or mixing with other vriables
 */
namespace mynamespace {
    
    export  let user = 'typescript';

    export function displayData() {
        return 'display me';
    }
}

console.log(mynamespace.displayData()); //or
console.log(mynamespace.displayData);//or
console.log(mynamespace);
