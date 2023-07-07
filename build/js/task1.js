"use strict";
// Let's build a Teacher interface
// Create a directory task_1 and copy these configuration 
// files into this folder: package.json, tsconfig.json, webpack.config.js
Object.defineProperty(exports, "__esModule", { value: true });
const teacher = {
    firstName: 'Peterson',
    lastName: 'Wale',
    fullTimeEmployee: true,
    yearsOfExperience: 21,
    location: 'London'
};
// Modifying firstName and lastName will cause a TypeScript error
// teacher.firstName = "Jane";
// teacher.lastName = "Smith";
// Modifying other attributes is allowed
teacher.fullTimeEmployee = true;
teacher.yearsOfExperience = 20;
console.log(teacher);
