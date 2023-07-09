"use strict";
// classes
class Coder {
    constructor(// adddata or visibility modifier
    name, // when name is assign it cant be changed
    music, age, // it can only be access in the class
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // create a method for age since it can only be access within the class
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const result = new Coder('Ako', 'Rock', 34);
console.log(result.getAge());
console.log(result);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I like  ${this.lang}`;
    }
}
const result2 = new WebDev("Dell", "Ako", "Makossa", 45);
console.log(result2.getLang());
console.log(WebDev);
//////////////////////////////////////////////////////////////////////////////////////

// Interface to a Class