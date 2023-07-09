"use strict";
// Type Aliases
// this cannot work with interface
// interface postId = stringOrNumber
// literal types
let userName;
//userName = 'ako'
let userName2;
userName2 = 'atem'; // it will only access the name that exit
console.log(userName2);
// this really keep your codes dry or not repeating objects
// functions
const add = (x, y) => {
    return x + y;
};
const logMsg = (message) => {
    console.log(message); //this has no return
};
logMsg('Hello!');
logMsg(add(3, 5));
//logMsg(add('a', 4))
let substract = function (a, b) {
    return a - b;
};
// // it works also for interface
// interface mathFunction{
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 29));
// optional parameter
// this works if you make one of the parameter optional
const addAll = (a, b, c) => {
    if (typeof c != 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(3, 5, 7));
logMsg(addAll(3, 5));
logMsg(sumAll(3, 5));
// Rest parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(3, 5, 6, 7));
// Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// used case which turn to void
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// instead we can create a custom type guard function
const isNumber = (value) => {
    return (typeof value === 'number')
        ? true : false;
};
// use of never type
const stringOrNumber = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happened');
};
