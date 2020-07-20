/**
 * -------------------------------------------------------------------------------
 * interfaces MUST start with capital since they rule out like javascript classes
 * -------------------------------------------------------------------------------
 */

interface Starks {
    name: string;
    age: number;
    figure: boolean;
    contactDetails?: number; //the question mark entails its not a must for it to be filled.
    initials: any;
}

let myDetails: Starks = {
    name: 'elida wanjiku',
    age: 25,
    figure: true,
    initials: "3459 to infinity and beyond"
}














enum Design { pretty, cute, plain, classy }

let myChoice: Design = Design.classy
let mysize: object = {
    mysize: 10, sizeNo: 23
}
function label(mysize, { sizeNo: number }) {

}
label(mysize, null)
