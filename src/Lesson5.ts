// Casting

type One = string
type Two = string | number
type Three = 'hello'


// convert to more or less specific
let w: One = 'hello'
let x = w as Two // less specific
let y = w as Three // more specific

// Use of angle bracket

let z = <One>'world' // you cant use this in react
let t = <string | number>'world'
// when to use this
// use for assertion in narrowing

const addOrConcat = (w: number, x: number, y: 'add' | 'concat'): number | string =>{
    if(y === 'add') return w + x
    return '' + w + x
}

let myVal: string = addOrConcat(2,3,'concat') as string // use assertion (as)

// becareful because typescript sees no problem but a string is return
let nextVal: number= addOrConcat(2,3,'concat') as number

// where assertion is useful in document object model DOM

const img = document.querySelector('img')!

const myImg = document.getElementById('#img') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#img') 

img.src
myImg.src
nextImg.src
