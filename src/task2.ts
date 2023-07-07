// Write an interface named Directors that extends Teacher. 
// It requires an attribute named numberOfReports(number)

import { Teacher } from "./task1.js"
interface Directors extends Teacher{
    numberOfReports: number
    
}

const director: Directors = {
    firstName: 'Doro',
    lastName: 'Billy',
    fullTimeEmployee: false,
    location: 'Canada',
    yearsOfExperience: 4,
    numberOfReports: 21
}

console.log(director)