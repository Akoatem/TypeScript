// Arrays

let stringArray = ['hey', 'tom', 'david'] // string

let guiter = ['strat', 'les paul', 23]  // union type

let mixData = ['ako', 34, true]  // union

let test = []  // any type

stringArray[0] = 'crew'
stringArray.push('why')

guiter[0] = 1889
guiter.push('ben')
//guiter.unshift(true)

mixData[0] = true
mixData.push('ako', 123)

stringArray != guiter
guiter = stringArray
guiter != mixData
mixData = guiter = stringArray
stringArray != mixData

let bands: string[] = []
bands.push('ako atem')

// Tuple

let myTuple: [string, number, boolean] = [' standley', 11, true]

let mix = ['suh', 49, true] // a union

mix = myTuple
myTuple != mix

// objects

let myObject: object
myObject = []

console.log(typeof myObject)

myObject = bands
myObject = {}

const exampleObj = {
    name: 'david',
    isGood: true,
    age: 34
}

exampleObj.name = 'ben'
exampleObj.isGood = false
exampleObj.age = 31

console.log(exampleObj)

//using type

type Guiterrist = {
    name: string,
    active: boolean,
    age: number
    album: (string | number[]) // any
}

let artist: Guiterrist = {
    name: 'Davido',
    active: true,
    age: 31,
    album: 'call Anita'
}

let artist2: Guiterrist = {
    name: 'Kizz Daniel',
    active: true,
    age: 4,
    album: 'Boga'
}

artist = artist2