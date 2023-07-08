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
