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
