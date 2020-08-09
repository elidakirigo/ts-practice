function unique(arg1: number, arg2: number, ...otherVariables: any) {
    console.log(otherVariables);

}

unique(3, 5, 34, 26, 48, 64, 88, 77, 67, 54)
var index = 0;
var array = ['12', '22', '23'];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index)
let myarray = ['kerry', 'lobs'];
let mb = ['jim', ...myarray];
console.log(mb);