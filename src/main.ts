let username = 'Ako Atem Sampson';

console.log(username);

let a: number = 10;
let b: number = 2;
let c: number = 14;

console.log(a / b);

console.log(c * b);

// datatypes

let myName: string = 'david'
let meaningOfLife: number
let isIsolation: boolean
let album: any  // this can take any datatype
let address: string | number // this is union type
let postId: string | number // when working with an api
let isActive: number | boolean // this can be number or true, false
let re: RegExp = /\w+/g // regular expression use for converting javascript into typescript

myName ='john'

myName = 'david'

console.log(myName)

myName = 'ako'
meaningOfLife = 23
isIsolation = true
album = 1990
address = '23 wale street'

const display = `${myName}, ${meaningOfLife}, ${isIsolation}, ${album}, ${address}`

console.log(display)

// to calc sum


const sum=(a: number, b:string) => {
    return a + b
}
console.log(sum)