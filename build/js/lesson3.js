"use strict";
// Arrays
let stringArray = ['hey', 'tom', 'david']; // string
let guiter = ['strat', 'les paul', 23]; // union type
let mixData = ['ako', 34, true]; // union
let test = []; // any type
stringArray[0] = 'crew';
stringArray.push('why');
guiter[0] = 1889;
guiter.push('ben');
//guiter.unshift(true)
mixData[0] = true;
mixData.push('ako', 123);
stringArray != guiter;
guiter = stringArray;
guiter != mixData;
mixData = guiter = stringArray;
stringArray != mixData;
let bands = [];
bands.push('ako atem');
// Tuple
let myTuple = [' standley', 11, true];
let mix = ['suh', 49, true]; // a union
mix = myTuple;
myTuple != mix;
// objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    name: 'david',
    isGood: true,
    age: 34
};
exampleObj.name = 'ben';
exampleObj.isGood = false;
exampleObj.age = 31;
console.log(exampleObj);
let artist1 = {
    name: 'Davido',
    active: true,
    age: 31,
    album: 'call Anita'
};
let artist2 = {
    name: 'Kizz Daniel',
    active: true,
    age: 34,
    album: 'Boga'
};
//artist1 = artist2
// function
const ukGuiterist = (guiterist) => {
    if (guiterist.name) {
        return `Hello ${guiterist.name.toUpperCase()}!`;
    }
    return 'Hello!'; // if name does not exit it return hello
};
console.log(ukGuiterist(artist2));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["B"] = 5] = "B";
})(Grade || (Grade = {}));
console.log(Grade.U);
