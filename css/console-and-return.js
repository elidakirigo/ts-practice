function example({
    x: par,
    y: param
}) {
    let result = par + param;

    return function () {
        return true;
    }()
}

function arrayPass({
    arrayF: num
}) {
    return num;
}
console.log({
    arrayFunction: arrayPass({
        arrayF: 'd'
    })
});

function ex() {
    let val = 0;
    return {
        increment() {
            val++
        },
        getVal() {
            return val
        }
    }
}

function Mathcounter() {
    let val = 0;
    m = {
        increment() {
            val++
        },
        getVal() {
            return val
        }
    }
    return m;
}
// console.log(Mathcounter());
// let counter = ex();
// counter.increment();
// console.log(counter.getVal()); // 1
// counter.increment();
// console.log(counter.getVal());
// console.log(ex());
// ex().increment()

function num() {
    return (5 + 4);
}

function thus() {
    return this;
}
// console.log(num());
// console.log(ex(4,6));
// console.log(example(3, 4));
// console.log(thus());
// console.log(this);
// console.log({} == {});
// console.log({} == []);
// console.log({} == []);
// console.log([] == {});
// console.log('hello' - 1);
console.log(.2 + .1);
console.log(0.2 + 0.1);
console.log({
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER
});
console.log(Number.MAX_SAFE_INTEGER + 20 === Number.MAX_SAFE_INTEGER + 1); // true!console.log(Number.MIN_SAFE_INTEGER - 20 === Number.MIN_SAFE_INTEGER - 1)
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// true// Unsafe valueconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false// Because it might have been rounded to it due to overflowconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10));
var foo = Object();
foo.bar = 'new cast'
foo.foo = 'new castors'
console.log(foo);
delete foo.bar;
console.log(foo);

const obj = {
    "some property": "some value"
};
const {
    "some property": someProperty
} = obj;

var {
    w,
    x,
    ...remaining
} = {
    w: 1,
    x: 2,
    y: 3,
    z: 4
};
console.log(w, x, remaining);
console.log(remaining.y);

setInterval(() => {
    console.log(new Date());
}, 30000);

/**
 * -------------------
 * SWAPPING VARIABLES
 * -------------------
 */

var x, y;
x = 3, y = 45;
console.log(x, y);
[x, y] = [y, x]
console.log(x, y);

// array destructuring
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);

/**
 * -------------------
 * CHECK OUT 
 * -------------------
 */
console.log.apply;

function usingApply(x, y, z) {
    console.log(x, y, z);
}
let args = [2, 24, 34];
usingApply.apply(null, args);

// or
function onotherUseOfApply(args, params, ...others) {
    console.log(args, params, ...others);
}
let newParams = [34, 65, 74, 34, 21, 22, 65];
onotherUseOfApply(...newParams);

let list = [1, 2]
list = [...list, 3, 4];

list.push(5, 6, 7)
console.log(list);
/**
 * -----------------------
 * using FOR IN, FOR OF, 
 * -----------------------
 */

var someArray = [365, 458, 354];
var myNames = 'i am named elida wanjiku kirigo';

for (item in someArray) {
    console.log(item);
}
for (item of someArray) {
    console.log(item + ' second');
} //used in TS
for (char of myNames) {
    console.log(char);
}