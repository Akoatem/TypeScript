
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

// optional parameter
// this works if you make one of the parameter optional
const addAll = (a: number, b: number, c?: number): number =>{
    if(typeof c != 'undefined'){
        return a + b + c
    }else{
        return a + b
    }
}

// default param value
const sumAll = (a: number, b: number, c: number = 2): number =>{
    return a + b + c
    
}

logMsg(addAll(3,5,7))
logMsg(addAll(3,5))
logMsg(sumAll(3,5))

// Rest parameter

const total = (a: number, ...nums: number[]): number =>{
    return a + nums.reduce((prev, curr)=>prev + curr)
}

logMsg(total(3,5,6,7))

// Never Type

const createError = (errMsg: string):never =>{
    throw new Error(errMsg)
}

// used case which turn to void
const infinite = () =>{
    let i: number = 1
    while(true){
        i++
        if(i > 100) break
    }
}

// instead we can create a custom function

const isNumber = (value: any): boolean =>{
    return(typeof value === 'number')
    ?true : false
}

const stringOrNumber = (value: number | string):
 string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('this should never happened')
}