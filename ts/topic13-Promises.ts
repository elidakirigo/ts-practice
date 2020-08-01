/**
 * -----------------------------
 * using promises in typescript
 * -----------------------------
 */
const promise = new Promise(function (resolve, reject) {
    resolve(123)
});
promise.then(function (res) {
    console.log('i get called', res === 123);

});
promise.catch(function (error) { });

// second callback

const promise2 = new Promise(function (resolve, reject) {
    reject(new Error('say something here'));
});
promise2.then(function (res) {
    console.log('i get called', res === 123);

});
promise2.catch(function (error) {
    console.log('i get called', error.message);
});


Promise.resolve(123)
    .then(function (res) {
        console.log(res);
        return 456;
    }).then(function (res) {
        console.log(res)
        return Promise.resolve(123);
    }).then(function (res) {
        console.log(res);
        return 123;
    })

// reject
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
        console.log(res);
        return 456;
    }).then(function (res) {
        console.log(res);
        return 123;
    }).then(function (res) {
        console.log(res);
        return 134;
    }).catch(function (error) {
        console.log(error.message);
    })

function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('hello world!')
        }, 1000);
    })
}

Promise.resolve(123)
    .then(function (res) {
        return iReturnPromiseAfter1Second()
    }).then(function (res) {
        console.log(res);
    })

function* generator(){
    console.log('start');
    yield 0;
    console.log('second');
    yield 1;
    console.log('last');
}

let iterator = generator();
console.log(iterator.next());
function* generators() {
    var bar = yield 'foo';
    console.log(bar); // bar!
}
const iterators = generator();// Start execution till we get first yield value
const foo = iterators.next();
console.log(foo.value); // foo// Resume execution injecting bar
const nextThing = iterator.next('bar')
