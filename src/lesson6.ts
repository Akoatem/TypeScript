// classes

class Coder {
    // name: string;
    // music: string
    // age: number
    // lang:string
    secondLand!: string // add an assertion(as), this cant be initilised in the constructor
    
    constructor( // adddata or visibility modifier
        public readonly name: string, // when name is assign it cant be changed
        public music: string, 
        private age: number,  // it can only be access in the class
        protected lang: string = 'Typescript' ) // only access with the class and sub classes
        {

        this.name = name
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    // create a method for age since it can only be access within the class
    public getAge(){
        return `Hello, I am ${this.age}`
    }


}

const result = new Coder('Ako', 'Rock', 34)

console.log(result.getAge())
console.log(result)

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang(){
        return `I like  ${this.lang}`
    }

}

const result2 = new WebDev("Dell", "Ako", "Makossa", 45)

console.log(result2.getLang())
console.log(WebDev)