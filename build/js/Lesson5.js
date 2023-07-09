"use strict";
// Casting
// convert to more or less specific
let w = 'hello';
let x = w; // less specific
let y = w; // more specific
// Use of angle bracket
let z = 'world'; // you cant use this in react
let t = 'world';
// when to use this
// use for assertion in narrowing
const addOrConcat = (w, x, y) => {
    if (y === 'add')
        return w + x;
    return '' + w + x;
};
let myVal = addOrConcat(2, 3, 'concat'); // use assertion (as)
// becareful because typescript sees no problem but a string is return
let nextVal = addOrConcat(2, 3, 'concat');
// where assertion is useful in document object model DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
nextImg.src;
