// Let's build a Teacher interface
// Create a directory task_1 and copy these configuration 
// files into this folder: package.json, tsconfig.json, webpack.config.js

// firstName(string) and lastName(string). These two attributes should 
// only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperienceyearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) 
// without specifying the name of the attribute

interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    readonly location: string

}

const teacher: Teacher ={
    firstName: 'Peterson',
    lastName: 'Wale',
    fullTimeEmployee: true,
    yearsOfExperience: 21,
    location: 'London'
}

// Modifying firstName and lastName will cause a TypeScript error
// teacher.firstName = "Jane";
// teacher.lastName = "Smith";

// Modifying other attributes is allowed
teacher.fullTimeEmployee = true
teacher.yearsOfExperience = 20

console.log(teacher)

export {Teacher}