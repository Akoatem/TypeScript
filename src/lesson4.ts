
// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type  Guiterist = {
    name: string,
    active: boolean,
    age: number
    album: stringOrNumber
}

type UserId = stringOrNumber

// this cannot work with interface
// interface postId = stringOrNumber

// literal types

let userName: 'Tom'
//userName = 'ako'

let userName2: 'Tom' | 'Benson' | 'atem'
userName2 = 'atem'  // it will only access the name that exit

console.log(userName2)

// this really keep your codes dry or not repeating objects

// functions

const  add = (x: number, y: number): number =>{
    return x + y
}

const logMsg= (message: any): void =>{
    console.log(message) //this has no return
}

logMsg('Hello!')
logMsg(add(3,5))
//logMsg(add('a', 4))

let substract = function(a: number, b:number):number{
    return a - b
}

type mathFunction = (a: number, b: number) => number

// // it works also for interface
// interface mathFunction{
//     (a: number, b: number): number
// }

let multiply: mathFunction = function(c, d){
    return c * d
}

logMsg(multiply(3, 29))